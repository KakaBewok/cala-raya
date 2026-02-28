import InvitationData, { Rundown, Image } from "@/types/invitation-data";

/**
 * Metadata-specific invitation data
 */
export interface InvitationMetadata {
  host_one_nickname: string;
  host_two_nickname: string;
  event_title: string;
  slug: string;
  event_date: string;
  rundowns: Array<{
    id: number;
    title: string;
    date: string;
    location: string;
  }>;
  images: Array<{
    id: number;
    url: string;
    type: string;
  }>;
}

/**
 * Repository interface for public invitation access
 * Used for guest-facing invitation pages
 */
export interface IPublicInvitationRepository {
  /**
   * Find invitation by slug and ID (for public access)
   * @param slug - The invitation slug
   * @param invitationId - The invitation ID
   * @returns Promise with invitation data or null
   */
  findBySlugAndId(slug: string, invitationId: number): Promise<InvitationData | null>;

  /**
   * Find invitation by slug only (for public access)
   * @param slug - The invitation slug
   * @returns Promise with invitation data or null
   */
  findBySlug(slug: string): Promise<InvitationData | null>;

  /**
   * Find invitation metadata for SEO/OG tags
   * @param slug - The invitation slug
   * @returns Promise with metadata or null
   */
  findMetadataBySlug(slug: string): Promise<InvitationMetadata | null>;
}

