import InvitationData, { 
  Music, 
  Image, 
  Rundown, 
  GiftInfo, 
  Story 
} from "@/types/invitation-data";

/**
 * Repository interface for Invitation entity
 * This interface defines the contract for all invitation-related database operations
 * Any database implementation (Supabase, Prisma, etc.) must implement this interface
 */
export interface IInvitationRepository {
  /**
   * Find all invitations for a specific user
   * @param userId - The ID of the user
   * @returns Promise with array of invitations
   */
  findByUserId(userId: number): Promise<InvitationData[]>;

  /**
   * Find a single invitation by ID
   * @param id - The invitation ID
   * @returns Promise with invitation data or null if not found
   */
  findById(id: number): Promise<InvitationData | null>;

  /**
   * Create a new invitation with all related data
   * @param data - The invitation data to create
   * @returns Promise with created invitation
   */
  create(data: CreateInvitationDTO): Promise<InvitationData>;

  /**
   * Update an existing invitation
   * @param id - The invitation ID
   * @param data - The updated invitation data
   * @returns Promise with updated invitation
   */
  update(id: number, data: UpdateInvitationDTO): Promise<InvitationData>;

  /**
   * Delete an invitation and all related data
   * @param id - The invitation ID
   * @returns Promise with boolean indicating success
   */
  delete(id: number): Promise<boolean>;

  /**
   * Find all active invitations for a user
   * @param userId - The ID of the user
   * @returns Promise with array of active invitations
   */
  findActiveByUserId(userId: number): Promise<InvitationData[]>;

  /**
   * Update invitation status (activate/deactivate)
   * @param id - The invitation ID
   * @param isActive - The new active status
   * @returns Promise with boolean indicating success
   */
  updateStatus(id: number, isActive: boolean): Promise<boolean>;
}

/**
 * Data Transfer Object for creating invitations
 */
export interface CreateInvitationDTO {
  // Host information
  host_one_name: string;
  host_one_nickname: string;
  host_one_additional_info?: string;
  host_one_social_media?: string;
  host_two_name: string;
  host_two_nickname: string;
  host_two_additional_info?: string;
  host_two_social_media?: string;

  // Event details
  event_title: string;
  event_date: string;
  event_type: string;
  location: string;
  location_url?: string;
  location_detail?: string;
  message?: string;
  hashtag?: string;

  // User and theme
  user_id: number;
  theme_id: number;

  // Related data
  music?: Omit<Music, "id">;
  images?: Omit<Image, "id" | "invitation_id">[];
  rundowns?: Omit<Rundown, "id" | "invitation_id">[];
  gift_infos?: Omit<GiftInfo, "id" | "invitation_id">[];
  stories?: Omit<Story, "id" | "invitation_id">[];
}

/**
 * Data Transfer Object for updating invitations
 */
export interface UpdateInvitationDTO extends Partial<CreateInvitationDTO> {
  // All fields are optional for updates
}
