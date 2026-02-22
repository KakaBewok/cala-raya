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

      // 2. Enforce empty strings for removed rundown fields (description, event_image)
      this.sanitizeRundowns(data);

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
      // Check if invitation exists
      const existing = await this.invitationRepository.findById(id);
      if (!existing) {
        throw new Error("Invitation not found");
      }

      // Enforce empty strings for removed rundown fields
      this.sanitizeRundowns(data);

      return await this.invitationRepository.update(id, data);
    } catch (error: any) {
      console.error("Error updating invitation:", error);
      throw new Error("Failed to update invitation");
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

      // 3. Perform delete
      return await this.invitationRepository.delete(id);
    } catch (error: any) {
      console.error("Error deleting invitation:", error);
      if (error.message === "Invitation not found" || error.message === "Unauthorized to delete this invitation") {
        throw error;
      }
      throw new Error("Failed to delete invitation");
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
    // Note: We don't perform ownership check here, API layer should do it
    return await this.guestRepository.findByInvitationIdPaginated(invitationId, page, pageSize);
  }

  /**
   * Get paginated RSVPs for an invitation
   */
  async getPaginatedRSVPs(invitationId: number, page: number, pageSize: number) {
    // Note: We don't perform ownership check here, API layer should do it
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
   * No matter what the client sends, these are always replaced.
   */
  private applyEventDefaults(data: CreateInvitationDTO): void {
    data.event_title = `The Wedding of ${data.host_one_nickname} & ${data.host_two_nickname} ❤️`;
    data.event_date = new Date().toISOString(); // Prisma DateTime requires valid ISO-8601
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
      }));
    }
  }

  /**
   * Private method for business logic validation.
   * Validates host data, section limits, image types/counts per theme, and story rules.
   */
  private validateInvitationData(data: CreateInvitationDTO): void {
    if (!data.host_one_name || !data.host_two_name) {
      throw new Error("Host names are required");
    }

    // ── Section limit enforcement ──
    if (data.rundowns && data.rundowns.length > SECTION_LIMITS.rundowns) {
      throw new Error(`Maximum ${SECTION_LIMITS.rundowns} rundown entries allowed, but ${data.rundowns.length} were provided.`);
    }

    if (data.gift_infos && data.gift_infos.length > SECTION_LIMITS.gift_infos) {
      throw new Error(`Maximum ${SECTION_LIMITS.gift_infos} gift info entries allowed, but ${data.gift_infos.length} were provided.`);
    }

    if (data.stories && data.stories.length > SECTION_LIMITS.stories) {
      throw new Error(`Maximum ${SECTION_LIMITS.stories} story entries allowed, but ${data.stories.length} were provided.`);
    }

    // ── Theme-aware image validation ──
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

    // ── Theme-aware story validation ──
    const features = getThemeFeatures(themeName);
    if (!features.stories && data.stories && data.stories.length > 0) {
      // Strip stories silently — theme doesn't support them
      data.stories = [];
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

  // ══════════════════════════════════════════════════════════
  //  DEFAULT GUEST ("Calaraya") — for preview functionality
  // ══════════════════════════════════════════════════════════

  /**
   * Ensure a default "Calaraya" guest exists for the invitation.
   * Idempotent: safe to call multiple times.
   */
  async ensureDefaultGuest(invitationId: number): Promise<Guest> {
    try {
      // Check if Calaraya already exists
      const existing = await this.guestRepository.findByNameAndInvitationId(
        invitationId,
        InvitationService.DEFAULT_GUEST_NAME
      );

      if (existing) {
        return existing;
      }

      // Create the default guest
      return await this.guestRepository.create({
        invitation_id: invitationId,
        name: InvitationService.DEFAULT_GUEST_NAME,
      });
    } catch (error: any) {
      console.error("Error ensuring default guest:", error);
      // Don't throw — this is a convenience feature, not critical
      // Return a minimal guest object so the calling code doesn't break
      throw new Error("Failed to ensure default guest");
    }
  }

  /**
   * Get the default preview guest ("Calaraya") for an invitation.
   * Creates it if it doesn't exist yet.
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

// Export singleton instance for convenience
export const invitationService = new InvitationService();
