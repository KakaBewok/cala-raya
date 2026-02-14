import { IInvitationRepository, CreateInvitationDTO, UpdateInvitationDTO } from "@/repositories/interfaces/IInvitationRepository";
import InvitationData from "@/types/invitation-data";
import RepositoryFactory from "@/repositories/RepositoryFactory";

/**
 * Invitation Service
 * Business logic layer for invitation operations
 * This service depends on IInvitationRepository interface, not the implementation
 */
export class InvitationService {
  private invitationRepository: IInvitationRepository;

  constructor(invitationRepository?: IInvitationRepository) {
    // Use dependency injection or factory
    this.invitationRepository = invitationRepository || RepositoryFactory.getInvitationRepository();
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
      // Add business logic validation here if needed
      this.validateInvitationData(data);

      return await this.invitationRepository.create(data);
    } catch (error: any) {
      console.error("Error creating invitation:", error);
      throw new Error("Failed to create invitation");
    }
  }

  /**
   * Update an existing invitation
   */
  async updateInvitation(id: number, data: UpdateInvitationDTO): Promise<InvitationData> {
    try {
      // Check if invitation exists
      const existing = await this.invitationRepository.findById(id);
      if (!existing) {
        throw new Error("Invitation not found");
      }

      return await this.invitationRepository.update(id, data);
    } catch (error: any) {
      console.error("Error updating invitation:", error);
      throw new Error("Failed to update invitation");
    }
  }

  /**
   * Delete an invitation
   */
  async deleteInvitation(id: number): Promise<boolean> {
    try {
      // Check if invitation exists
      const existing = await this.invitationRepository.findById(id);
      if (!existing) {
        throw new Error("Invitation not found");
      }

      return await this.invitationRepository.delete(id);
    } catch (error: any) {
      console.error("Error deleting invitation:", error);
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
   * Private method for business logic validation
   */
  private validateInvitationData(data: CreateInvitationDTO): void {
    if (!data.host_one_name || !data.host_two_name) {
      throw new Error("Host names are required");
    }

    if (!data.event_date) {
      throw new Error("Event date is required");
    }

    // Add more validation as needed
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
