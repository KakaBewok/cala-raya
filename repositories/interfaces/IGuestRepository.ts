import { Guest } from "@/types/invitation-data";

/**
 * Repository interface for Guest entity
 * Handles all guest-related database operations
 */
export interface IGuestRepository {
  /**
   * Find all guests for a specific invitation
   * @param invitationId - The invitation ID
   * @returns Promise with array of guests
   */
  findByInvitationId(invitationId: number): Promise<Guest[]>;

  /**
   * Find a single guest by ID
   * @param id - The guest ID
   * @returns Promise with guest data or null
   */
  findById(id: number): Promise<Guest | null>;

  /**
   * Create a new guest
   * @param data - The guest data to create
   * @returns Promise with created guest
   */
  create(data: CreateGuestDTO): Promise<Guest>;

  /**
   * Create multiple guests at once
   * @param data - Array of guest data to create
   * @returns Promise with array of created guests
   */
  createMany(data: CreateGuestDTO[]): Promise<Guest[]>;

  /**
   * Update an existing guest
   * @param id - The guest ID
   * @param data - The updated guest data
   * @returns Promise with updated guest
   */
  update(id: number, data: UpdateGuestDTO): Promise<Guest>;

  /**
   * Delete a guest
   * @param id - The guest ID
   * @returns Promise with boolean indicating success
   */
  delete(id: number): Promise<boolean>;

  /**
   * Delete multiple guests
   * @param ids - Array of guest IDs to delete
   * @returns Promise with boolean indicating success
   */
  deleteMany(ids: number[]): Promise<boolean>;

  /**
   * Search guests by name
   * @param invitationId - The invitation ID
   * @param searchTerm - The search term
   * @returns Promise with matching guests
   */
  searchByName(invitationId: number, searchTerm: string): Promise<Guest[]>;
}

/**
 * DTO for creating guest
 */
export interface CreateGuestDTO {
  invitation_id: number;
  name: string;
  phone_number?: string;
  address?: string;
  notes?: string;
}

/**
 * DTO for updating guest
 */
export interface UpdateGuestDTO extends Partial<Omit<CreateGuestDTO, "invitation_id">> {}
