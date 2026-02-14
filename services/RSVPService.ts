import {
  IRSVPRepository,
  CreateRSVPDTO,
  UpdateRSVPDTO,
  RSVPStatistics,
} from "@/repositories/interfaces/IRSVPRepository";
import { RSVP } from "@/types/invitation-data";
import RepositoryFactory from "@/repositories/RepositoryFactory";

/**
 * RSVP Service
 * Business logic layer for RSVP operations
 */
export class RSVPService {
  private rsvpRepository: IRSVPRepository;

  constructor(rsvpRepository?: IRSVPRepository) {
    this.rsvpRepository = rsvpRepository || RepositoryFactory.getRSVPRepository();
  }

  /**
   * Get all RSVPs for an invitation
   */
  async getInvitationRSVPs(invitationId: number): Promise<RSVP[]> {
    try {
      return await this.rsvpRepository.findByInvitationId(invitationId);
    } catch (error: any) {
      console.error("Error fetching RSVPs:", error);
      throw new Error("Failed to fetch RSVPs");
    }
  }

  /**
   * Get a single RSVP by ID
   */
  async getRSVPById(id: number): Promise<RSVP | null> {
    try {
      return await this.rsvpRepository.findById(id);
    } catch (error: any) {
      console.error("Error fetching RSVP:", error);
      throw new Error("Failed to fetch RSVP");
    }
  }

  /**
   * Create a new RSVP
   */
  async createRSVP(data: CreateRSVPDTO): Promise<RSVP> {
    try {
      // Validation
      this.validateRSVPData(data);

      return await this.rsvpRepository.create(data);
    } catch (error: any) {
      console.error("Error creating RSVP:", error);
      throw new Error("Failed to create RSVP");
    }
  }

  /**
   * Update an existing RSVP
   */
  async updateRSVP(id: number, data: UpdateRSVPDTO): Promise<RSVP> {
    try {
      // Check if RSVP exists
      const existing = await this.rsvpRepository.findById(id);
      if (!existing) {
        throw new Error("RSVP not found");
      }

      return await this.rsvpRepository.update(id, data);
    } catch (error: any) {
      console.error("Error updating RSVP:", error);
      throw new Error("Failed to update RSVP");
    }
  }

  /**
   * Delete an RSVP
   */
  async deleteRSVP(id: number): Promise<boolean> {
    try {
      const existing = await this.rsvpRepository.findById(id);
      if (!existing) {
        throw new Error("RSVP not found");
      }

      return await this.rsvpRepository.delete(id);
    } catch (error: any) {
      console.error("Error deleting RSVP:", error);
      throw new Error("Failed to delete RSVP");
    }
  }

  /**
   * Get RSVP statistics for an invitation
   */
  async getStatistics(invitationId: number): Promise<RSVPStatistics> {
    try {
      return await this.rsvpRepository.getStatistics(invitationId);
    } catch (error: any) {
      console.error("Error calculating RSVP statistics:", error);
      throw new Error("Failed to calculate statistics");
    }
  }

  /**
   * Get RSVPs filtered by attendance status
   */
  async getByAttendanceStatus(
    invitationId: number,
    attendanceStatus: boolean
  ): Promise<RSVP[]> {
    try {
      return await this.rsvpRepository.findByAttendanceStatus(
        invitationId,
        attendanceStatus
      );
    } catch (error: any) {
      console.error("Error fetching RSVPs by status:", error);
      throw new Error("Failed to fetch RSVPs");
    }
  }

  /**
   * Get attending RSVPs
   */
  async getAttendingRSVPs(invitationId: number): Promise<RSVP[]> {
    return this.getByAttendanceStatus(invitationId, true);
  }

  /**
   * Get not attending RSVPs
   */
  async getNotAttendingRSVPs(invitationId: number): Promise<RSVP[]> {
    return this.getByAttendanceStatus(invitationId, false);
  }

  /**
   * Private validation method
   */
  private validateRSVPData(data: CreateRSVPDTO): void {
    if (!data.guest_name || data.guest_name.trim() === "") {
      throw new Error("Guest name is required");
    }

    if (data.total_guest < 1) {
      throw new Error("Total guest must be at least 1");
    }

    if (typeof data.attendance_status !== "boolean") {
      throw new Error("Attendance status must be specified");
    }
  }

  /**
   * Get recent RSVPs across all invitations (for dashboard)
   */
  async getRecentRSVPs(invitationIds: number[], limit: number = 5): Promise<RSVP[]> {
    try {
      const allRsvps: RSVP[] = [];

      // Fetch RSVPs for all invitations
      for (const invitationId of invitationIds) {
        const rsvps = await this.rsvpRepository.findByInvitationId(invitationId);
        allRsvps.push(...rsvps);
      }

      // Sort by created_at and limit
      return allRsvps
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, limit);
    } catch (error: any) {
      console.error("Error fetching recent RSVPs:", error);
      throw new Error("Failed to fetch recent RSVPs");
    }
  }
}

// Export singleton instance
export const rsvpService = new RSVPService();
