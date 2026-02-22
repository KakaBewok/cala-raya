import { IInvitationRepository, CreateInvitationDTO, UpdateInvitationDTO } from "@/repositories/interfaces/IInvitationRepository";
import { IGuestRepository } from "@/repositories/interfaces/IGuestRepository";
import { IRSVPRepository } from "@/repositories/interfaces/IRSVPRepository";
import InvitationData from "@/types/invitation-data";
import { Guest } from "@/types/invitation-data";
import RepositoryFactory from "@/repositories/RepositoryFactory";
import {
  getImageTypesForTheme,
  getMaxImagesForType,
  getThemeFeatures,
  ImageType,
  SECTION_LIMITS,
} from "@/app/(admin)/dashboard/my-invitations/schema/FormSchema";
import { cloudinaryService } from "./CloudinaryService";

/**
 * Invitation Service
 * Business logic layer for invitation operations
 * This service depends on IInvitationRepository interface, not the implementation
 */
export class InvitationService {
  private invitationRepository: IInvitationRepository;
  private guestRepository: IGuestRepository;
  private rsvpRepository: IRSVPRepository;

  /** Default guest name used for invitation preview */
  static readonly DEFAULT_GUEST_NAME = "Calaraya";

  constructor(
    invitationRepository?: IInvitationRepository,
    guestRepository?: IGuestRepository,
    rsvpRepository?: IRSVPRepository
  ) {
    this.invitationRepository = invitationRepository || RepositoryFactory.getInvitationRepository();
    this.guestRepository = guestRepository || RepositoryFactory.getGuestRepository();
    this.rsvpRepository = rsvpRepository || RepositoryFactory.getRSVPRepository();
  }

  /**
   * Get ALL invitations — admin only
   */
  async getAllInvitations(): Promise<InvitationData[]> {
    try {
      return await this.invitationRepository.findAll();
    } catch (error: any) {
      console.error("Error fetching all invitations:", error);
      throw new Error("Failed to fetch invitations");
    }
  }

  /**
   * Get all invitations for a user
   */
  async getUserInvitations(userId: number): Promise<InvitationData[]> {
    try {
      return await this.invitationRepository.findByUserId(userId);
    } catch (error: any) {
      console.error("Error fetching user invitations:", error);
      throw new Error("Failed to fetch invitations");
    }
  }

  /**
   * Get paginated invitations — admin only
   */
  async getAllInvitationsPaginated(
    page: number,
    pageSize: number
  ): Promise<{ data: InvitationData[]; total: number }> {
    try {
      return await this.invitationRepository.findAllPaginated(page, pageSize);
    } catch (error: any) {
      console.error("Error fetching all paginated invitations:", error);
      throw new Error("Failed to fetch invitations");
    }
  }

  /**
   * Get paginated invitations for a user
   */
  async getUserInvitationsPaginated(
    userId: number,
    page: number,
    pageSize: number
  ): Promise<{ data: InvitationData[]; total: number }> {
    try {
      return await this.invitationRepository.findByUserIdPaginated(
        userId,
        page,
        pageSize
      );
    } catch (error: any) {
      console.error("Error fetching paginated user invitations:", error);
      throw new Error("Failed to fetch invitations");
    }
  }

  /**
   * Get a single invitation by ID
   */
  async getInvitationById(id: number): Promise<InvitationData | null> {
    try {
      return await this.invitationRepository.findById(id);
    } catch (error: any) {
      console.error("Error fetching invitation:", error);
      throw new Error("Failed to fetch invitation");
    }
  }

  /**
   * Create a new invitation
   */
  async createInvitation(data: CreateInvitationDTO): Promise<InvitationData> {
    try {
      // 1. Override 7 event fields with server defaults
      this.applyEventDefaults(data);

      // 2. Sanitize rundown fields
      this.sanitizeRundowns(data);

      // 2.5 Server-side file size validation (Failsafe)
      await this.validateFileSizes(data);

      // 3. Validate business rules (theme, images, section limits)
      this.validateInvitationData(data);

      // 4. Pass sanitized data to repository
      const invitation = await this.invitationRepository.create(data);

      // 5. Auto-create default "Calaraya" guest for preview
      await this.ensureDefaultGuest(invitation.id);

      return invitation;
    } catch (error: any) {
      console.error("Error creating invitation:", error);
      throw new Error(error.message || "Failed to create invitation");
    }
  }

  /**
   * Update an existing invitation
   */
  async updateInvitation(
    id: number,
    data: UpdateInvitationDTO
  ): Promise<InvitationData> {
    try {
      // 1. Check if invitation exists
      const existing = await this.invitationRepository.findById(id);
      if (!existing) {
        throw new Error("Invitation not found");
      }

      // 2. Sanitize rundown fields
      this.sanitizeRundowns(data);

      // 2.5 Server-side file size validation (Failsafe)
      await this.validateFileSizes(data);

      // 3. Perform update
      const updated = await this.invitationRepository.update(id, data);

      // 4. Cleanup Cloudinary assets that were replaced
      this.cleanupReplacedAssets(existing, data);

      return updated;
    } catch (error: any) {
      console.error("Error updating invitation:", error);
      if (error.message === "Invitation not found") throw error;
      throw new Error(error.message || "Failed to update invitation");
    }
  }

  /**
   * Delete an invitation
   */
  async deleteInvitation(
    id: number, 
    auth?: { userId: number; isAdmin: boolean }
  ): Promise<boolean> {
    try {
      // 1. Check if invitation exists
      const existing = await this.invitationRepository.findById(id);
      if (!existing) {
        throw new Error("Invitation not found");
      }

      // 2. Authorization check (if auth context provided)
      if (auth && !auth.isAdmin && existing.user_id !== auth.userId) {
        throw new Error("Unauthorized to delete this invitation");
      }

      // 3. Perform database delete
      const success = await this.invitationRepository.delete(id);

      // 4. If DB delete successful, cleanup ALL Cloudinary assets
      if (success) {
        this.cleanupAllAssets(existing);
      }

      return success;
    } catch (error: any) {
      console.error("Error deleting invitation:", error);
      if (error.message === "Invitation not found" || error.message === "Unauthorized to delete this invitation") {
        throw error;
      }
      throw new Error("Failed to delete invitation");
    }
  }

  /**
   * Cleanup Cloudinary assets that are replaced during an update
   */
  private async cleanupReplacedAssets(existing: InvitationData, updated: UpdateInvitationDTO) {
    const publicIdsToDelete: { id: string; type: string }[] = [];

    // Check images
    if (updated.images !== undefined) {
      const existingImgIds = existing.images?.map(img => img.public_id).filter(Boolean) || [];
      const updatedImgIds = updated.images?.map(img => img.public_id).filter(Boolean) || [];
      
      const toDelete = existingImgIds.filter(id => !updatedImgIds.includes(id as string));
      toDelete.forEach(id => publicIdsToDelete.push({ id: id as string, type: "image" }));
    }

    // Check music
    if (updated.music !== undefined) {
      if (existing.music?.public_id && existing.music.public_id !== updated.music.public_id) {
        publicIdsToDelete.push({ id: existing.music.public_id, type: existing.music.resource_type || "video" });
      }
    }

    // Check rundown images
    if (updated.rundowns !== undefined) {
      const existingRundownIds = existing.rundowns?.map(r => r.public_id).filter(Boolean) || [];
      const updatedRundownIds = updated.rundowns?.map(r => r.public_id).filter(Boolean) || [];

      const toDelete = existingRundownIds.filter(id => !updatedRundownIds.includes(id as string));
      toDelete.forEach(id => publicIdsToDelete.push({ id: id as string, type: "image" }));
    }

    // Check story images
    if (updated.stories !== undefined) {
      const existingStoryIds = existing.stories?.map(s => s.public_id).filter(Boolean) || [];
      const updatedStoryIds = updated.stories?.map(s => s.public_id).filter(Boolean) || [];

      const toDelete = existingStoryIds.filter(id => !updatedStoryIds.includes(id as string));
      toDelete.forEach(id => publicIdsToDelete.push({ id: id as string, type: "image" }));
    }

    // Perform deletions
    for (const asset of publicIdsToDelete) {
      cloudinaryService.deleteFile(asset.id, asset.type);
    }
  }

  /**
   * Cleanup ALL Cloudinary assets associated with an invitation
   */
  private async cleanupAllAssets(invitation: InvitationData) {
    const assets: { id: string; type: string }[] = [];

    // Images
    invitation.images?.forEach(img => {
      if (img.public_id) assets.push({ id: img.public_id, type: img.resource_type || "image" });
    });

    // Music
    if (invitation.music?.public_id) {
      assets.push({ id: invitation.music.public_id, type: invitation.music.resource_type || "video" });
    }

    // Rundowns
    invitation.rundowns?.forEach(r => {
      if (r.public_id) assets.push({ id: r.public_id, type: r.resource_type || "image" });
    });

    // Stories
    invitation.stories?.forEach(s => {
      if (s.public_id) assets.push({ id: s.public_id, type: s.resource_type || "image" });
    });

    // Batch delete if possible, but for simplicity and safety across types, we delete individually
    for (const asset of assets) {
      cloudinaryService.deleteFile(asset.id, asset.type);
    }
  }

  /**
   * Get active invitations for a user
   */
  async getActiveInvitations(userId: number): Promise<InvitationData[]> {
    try {
      return await this.invitationRepository.findActiveByUserId(userId);
    } catch (error: any) {
      console.error("Error fetching active invitations:", error);
      throw new Error("Failed to fetch active invitations");
    }
  }

  /**
   * Activate or deactivate an invitation
   */
  async toggleInvitationStatus(id: number, isActive: boolean): Promise<boolean> {
    try {
      return await this.invitationRepository.updateStatus(id, isActive);
    } catch (error: any) {
      console.error("Error updating invitation status:", error);
      throw new Error("Failed to update invitation status");
    }
  }

  /**
   * Get paginated guests for an invitation
   */
  async getPaginatedGuests(invitationId: number, page: number, pageSize: number) {
    return await this.guestRepository.findByInvitationIdPaginated(invitationId, page, pageSize);
  }

  /**
   * Get paginated RSVPs for an invitation
   */
  async getPaginatedRSVPs(invitationId: number, page: number, pageSize: number) {
    return await this.rsvpRepository.findByInvitationIdPaginated(invitationId, page, pageSize);
  }

  /**
   * Get global statistics for dashboard
   */
  async getGlobalStatistics(userId?: number) {
    return await this.invitationRepository.getGlobalStatistics(userId);
  }

  /**
   * Override 7 event fields with backend defaults.
   */
  private applyEventDefaults(data: CreateInvitationDTO): void {
    data.event_title = `The Wedding of ${data.host_one_nickname} & ${data.host_two_nickname} ❤️`;
    data.event_date = new Date().toISOString(); 
    data.event_type = "wedding";
    data.location = "";
    data.location_url = "";
    data.location_detail = "";
    data.message = "";
  }

  /**
   * Enforce empty strings for removed rundown fields.
   */
  private sanitizeRundowns(data: CreateInvitationDTO | UpdateInvitationDTO): void {
    if (data.rundowns && Array.isArray(data.rundowns)) {
      data.rundowns = data.rundowns.map((r) => ({
        ...r,
        description: "",
        image_url: "",
        public_id: "",
        resource_type: "",
      }));
    }
  }

  /**
   * Private method for business logic validation.
   */
  private validateInvitationData(data: CreateInvitationDTO): void {
    if (!data.host_one_name || !data.host_two_name) {
      throw new Error("Host names are required");
    }

    // Section limit enforcement
    if (data.rundowns && data.rundowns.length > SECTION_LIMITS.rundowns) {
      throw new Error(`Maximum ${SECTION_LIMITS.rundowns} rundown entries allowed, but ${data.rundowns.length} were provided.`);
    }

    if (data.gift_infos && data.gift_infos.length > SECTION_LIMITS.gift_infos) {
      throw new Error(`Maximum ${SECTION_LIMITS.gift_infos} gift info entries allowed, but ${data.gift_infos.length} were provided.`);
    }

    if (data.stories && data.stories.length > SECTION_LIMITS.stories) {
      throw new Error(`Maximum ${SECTION_LIMITS.stories} story entries allowed, but ${data.stories.length} were provided.`);
    }

    // Theme-aware image validation
    const themeName = data.theme_name || "default";
    const allowedTypes = getImageTypesForTheme(themeName);

    if (data.images && data.images.length > 0) {
      const countByType: Record<string, number> = {};
      for (const img of data.images) {
        const imgType = (img as any).type as string;
        if (!imgType) continue;

        if (!allowedTypes.includes(imgType as ImageType)) {
          throw new Error(`Image type "${imgType}" is not allowed for theme "${themeName}"`);
        }

        countByType[imgType] = (countByType[imgType] || 0) + 1;
      }

      for (const [type, count] of Object.entries(countByType)) {
        const max = getMaxImagesForType(type);
        if (max !== null && count > max) {
          throw new Error(`Image type "${type}" allows at most ${max} image(s), but ${count} were provided.`);
        }
      }
    }

    // Theme-aware story validation
    const features = getThemeFeatures(themeName);
    if (!features.stories && data.stories && data.stories.length > 0) {
      data.stories = [];
    }
  }

  /**
   * Server-side failsafe to ensure no oversized files are saved
   */
  private async validateFileSizes(data: CreateInvitationDTO | UpdateInvitationDTO): Promise<void> {
    const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB
    const MAX_MUSIC_SIZE = 10 * 1024 * 1024; // 10MB

    // Check main gallery images
    if (data.images && Array.isArray(data.images)) {
      for (const img of data.images) {
        if (img.public_id) {
          const isValid = await cloudinaryService.verifyFileSize(img.public_id, "image", MAX_IMAGE_SIZE);
          if (!isValid) throw new Error(`Image ${img.public_id} exceeds 2MB limit.`);
        }
      }
    }

    // Check music
    if (data.music && data.music.public_id && data.music.url) {
      const isValid = await cloudinaryService.verifyFileSize(
        data.music.public_id, 
        data.music.resource_type || "video", 
        MAX_MUSIC_SIZE
      );
      if (!isValid) throw new Error("Music file exceeds 10MB limit.");
    }

    // Check story images
    if (data.stories && Array.isArray(data.stories)) {
      for (const story of data.stories) {
        if (story.public_id) {
          const isValid = await cloudinaryService.verifyFileSize(story.public_id, "image", MAX_IMAGE_SIZE);
          if (!isValid) throw new Error(`Story image exceeds 2MB limit.`);
        }
      }
    }
  }

  /**
   * Get invitation statistics for a user
   */
  async getUserStatistics(userId: number): Promise<InvitationStatistics> {
    try {
      const invitations = await this.invitationRepository.findByUserId(userId);

      const totalInvitations = invitations.length;
      const totalGuests = invitations.reduce(
        (sum, inv) => sum + (inv.guests?.length || 0),
        0
      );
      const allRsvps = invitations.flatMap((inv) => inv.rsvps || []);
      const totalRsvps = allRsvps.length;
      const attending = allRsvps.filter((r) => r.attendance_status === true).length;
      const notAttending = allRsvps.filter((r) => r.attendance_status === false).length;

      return {
        totalInvitations,
        totalGuests,
        totalRsvps,
        attending,
        notAttending,
        responseRate: totalGuests > 0 ? (totalRsvps / totalGuests) * 100 : 0,
      };
    } catch (error: any) {
      console.error("Error calculating statistics:", error);
      throw new Error("Failed to calculate statistics");
    }
  }

  /**
   * Ensure a default "Calaraya" guest exists
   */
  async ensureDefaultGuest(invitationId: number): Promise<Guest> {
    try {
      const existing = await this.guestRepository.findByNameAndInvitationId(
        invitationId,
        InvitationService.DEFAULT_GUEST_NAME
      );

      if (existing) {
        return existing;
      }

      return await this.guestRepository.create({
        invitation_id: invitationId,
        name: InvitationService.DEFAULT_GUEST_NAME,
      });
    } catch (error: any) {
      console.error("Error ensuring default guest:", error);
      throw new Error("Failed to ensure default guest");
    }
  }

  /**
   * Get the default preview guest
   */
  async getPreviewGuest(invitationId: number): Promise<Guest> {
    return this.ensureDefaultGuest(invitationId);
  }
}

/**
 * Invitation Statistics interface
 */
export interface InvitationStatistics {
  totalInvitations: number;
  totalGuests: number;
  totalRsvps: number;
  attending: number;
  notAttending: number;
  responseRate: number;
}

export const invitationService = new InvitationService();
