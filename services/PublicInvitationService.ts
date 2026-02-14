import { IPublicInvitationRepository, InvitationMetadata } from "@/repositories/interfaces/IPublicInvitationRepository";
import InvitationData from "@/types/invitation-data";
import { SupabasePublicInvitationRepository } from "@/repositories/supabase/SupabasePublicInvitationRepository";

/**
 * Public Invitation Service
 * Handles business logic for guest-facing invitation pages
 */
export class PublicInvitationService {
  private repository: IPublicInvitationRepository;

  constructor(repository?: IPublicInvitationRepository) {
    this.repository = repository || new SupabasePublicInvitationRepository();
  }

  /**
   * Get invitation for public viewing
   * @param slug - The invitation slug
   * @param invitationId - The invitation ID
   * @returns Promise with invitation data or null
   */
  async getPublicInvitation(
    slug: string,
    invitationId: number
  ): Promise<InvitationData | null> {
    try {
      // Validate inputs
      if (!slug || !invitationId) {
        throw new Error("Slug and invitation ID are required");
      }

      const invitation = await this.repository.findBySlugAndId(slug, invitationId);

      // Check if invitation is active
      if (invitation && !invitation.is_active) {
        throw new Error("This invitation is not active");
      }

      return invitation;
    } catch (error: any) {
      console.error("Error fetching public invitation:", error);
      throw error;
    }
  }

  /**
   * Get invitation by slug only
   * @param slug - The invitation slug
   * @returns Promise with invitation data or null
   */
  async getInvitationBySlug(slug: string): Promise<InvitationData | null> {
    try {
      if (!slug) {
        throw new Error("Slug is required");
      }

      const invitation = await this.repository.findBySlug(slug);

      // Check if invitation is active
      if (invitation && !invitation.is_active) {
        throw new Error("This invitation is not active");
      }

      return invitation;
    } catch (error: any) {
      console.error("Error fetching invitation by slug:", error);
      throw error;
    }
  }

  /**
   * Get invitation metadata for SEO/OG tags
   * @param slug - The invitation slug
   * @returns Promise with metadata or null
   */
  async getInvitationMetadata(slug: string): Promise<InvitationMetadata | null> {
    try {
      if (!slug) {
        throw new Error("Slug is required");
      }

      return await this.repository.findMetadataBySlug(slug);
    } catch (error: any) {
      console.error("Error fetching invitation metadata:", error);
      return null;
    }
  }

  /**
   * Find guest in invitation
   * @param invitation - The invitation data
   * @param guestId - The guest ID
   * @returns Guest data or null
   */
  findGuestInInvitation(invitation: InvitationData, guestId: string | number) {
    if (!invitation.guests) return null;

    return invitation.guests.find(
      (guest) => guest.id.toString() === guestId.toString()
    ) || null;
  }
}

// Export singleton instance
export const publicInvitationService = new PublicInvitationService();

