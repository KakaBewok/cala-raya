import { RSVP } from "@/types/invitation-data";

/**
 * Repository interface for RSVP entity
 * Handles all RSVP-related database operations
 */
export interface IRSVPRepository {
  /**
   * Find all RSVPs for a specific invitation
   * @param invitationId - The invitation ID
   * @returns Promise with array of RSVPs
   */
  findByInvitationId(invitationId: number): Promise<RSVP[]>;

  /**
   * Find a single RSVP by ID
   * @param id - The RSVP ID
   * @returns Promise with RSVP data or null
   */
  findById(id: number): Promise<RSVP | null>;

  /**
   * Create a new RSVP
   * @param data - The RSVP data to create
   * @returns Promise with created RSVP
   */
  create(data: CreateRSVPDTO): Promise<RSVP>;

  /**
   * Update an existing RSVP
   * @param id - The RSVP ID
   * @param data - The updated RSVP data
   * @returns Promise with updated RSVP
   */
  update(id: number, data: UpdateRSVPDTO): Promise<RSVP>;

  /**
   * Delete an RSVP
   * @param id - The RSVP ID
   * @returns Promise with boolean indicating success
   */
  delete(id: number): Promise<boolean>;

  /**
   * Get RSVP statistics for an invitation
   * @param invitationId - The invitation ID
   * @returns Promise with RSVP statistics
   */
  getStatistics(invitationId: number): Promise<RSVPStatistics>;

  /**
   * Find RSVPs by attendance status
   * @param invitationId - The invitation ID
   * @param attendanceStatus - The attendance status
   * @returns Promise with filtered RSVPs
   */
  findByAttendanceStatus(
    invitationId: number,
    attendanceStatus: boolean
  ): Promise<RSVP[]>;
}

/**
 * DTO for creating RSVP
 */
export interface CreateRSVPDTO {
  invitation_id: number;
  guest_name: string;
  message?: string;
  attendance_status: boolean;
  total_guest: number;
}

/**
 * DTO for updating RSVP
 */
export interface UpdateRSVPDTO extends Partial<CreateRSVPDTO> {}

/**
 * RSVP Statistics
 */
export interface RSVPStatistics {
  total: number;
  attending: number;
  notAttending: number;
  totalGuests: number;
}
