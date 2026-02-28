import {
  IGuestRepository,
  CreateGuestDTO,
  UpdateGuestDTO,
} from "@/repositories/interfaces/IGuestRepository";
import { Guest } from "@/types/invitation-data";
import RepositoryFactory from "@/repositories/RepositoryFactory";

/**
 * Guest Service
 * Business logic layer for guest operations
 */
export class GuestService {
  private guestRepository: IGuestRepository;

  constructor(guestRepository?: IGuestRepository) {
    this.guestRepository = guestRepository || RepositoryFactory.getGuestRepository();
  }

  /**
   * Get all guests for an invitation
   */
  async getInvitationGuests(invitationId: number): Promise<Guest[]> {
    try {
      return await this.guestRepository.findByInvitationId(invitationId);
    } catch (error: any) {
      console.error("Error fetching guests:", error);
      throw new Error("Failed to fetch guests");
    }
  }

  /**
   * Get a single guest by ID
   */
  async getGuestById(id: number): Promise<Guest | null> {
    try {
      return await this.guestRepository.findById(id);
    } catch (error: any) {
      console.error("Error fetching guest:", error);
      throw new Error("Failed to fetch guest");
    }
  }

  /**
   * Create a new guest
   */
  async createGuest(data: CreateGuestDTO): Promise<Guest> {
    try {
      // Validation
      this.validateGuestData(data);

      return await this.guestRepository.create(data);
    } catch (error: any) {
      console.error("Error creating guest:", error);
      throw new Error("Failed to create guest");
    }
  }

  /**
   * Create multiple guests at once (bulk import)
   */
  async createManyGuests(data: CreateGuestDTO[]): Promise<Guest[]> {
    try {
      // Validate all guests
      data.forEach((guest) => this.validateGuestData(guest));

      return await this.guestRepository.createMany(data);
    } catch (error: any) {
      console.error("Error creating guests:", error);
      throw new Error("Failed to create guests");
    }
  }

  /**
   * Update an existing guest
   */
  async updateGuest(id: number, data: UpdateGuestDTO): Promise<Guest> {
    try {
      // Check if guest exists
      const existing = await this.guestRepository.findById(id);
      if (!existing) {
        throw new Error("Guest not found");
      }

      // Validate update data
      if (data.name !== undefined) {
        if (!data.name || data.name.trim() === "") {
          throw new Error("Guest name cannot be empty");
        }
      }

      return await this.guestRepository.update(id, data);
    } catch (error: any) {
      console.error("Error updating guest:", error);
      throw new Error("Failed to update guest");
    }
  }

  /**
   * Delete a guest
   */
  async deleteGuest(id: number): Promise<boolean> {
    try {
      const existing = await this.guestRepository.findById(id);
      if (!existing) {
        throw new Error("Guest not found");
      }

      return await this.guestRepository.delete(id);
    } catch (error: any) {
      console.error("Error deleting guest:", error);
      throw new Error("Failed to delete guest");
    }
  }

  /**
   * Delete multiple guests (bulk delete)
   */
  async deleteManyGuests(ids: number[]): Promise<boolean> {
    try {
      if (ids.length === 0) {
        throw new Error("No guest IDs provided");
      }

      return await this.guestRepository.deleteMany(ids);
    } catch (error: any) {
      console.error("Error deleting guests:", error);
      throw new Error("Failed to delete guests");
    }
  }

  /**
   * Search guests by name
   */
  async searchGuests(invitationId: number, searchTerm: string): Promise<Guest[]> {
    try {
      if (!searchTerm || searchTerm.trim() === "") {
        return await this.guestRepository.findByInvitationId(invitationId);
      }

      return await this.guestRepository.searchByName(invitationId, searchTerm);
    } catch (error: any) {
      console.error("Error searching guests:", error);
      throw new Error("Failed to search guests");
    }
  }

  /**
   * Get guest count for an invitation
   */
  async getGuestCount(invitationId: number): Promise<number> {
    try {
      const guests = await this.guestRepository.findByInvitationId(invitationId);
      return guests.length;
    } catch (error: any) {
      console.error("Error counting guests:", error);
      throw new Error("Failed to count guests");
    }
  }

  /**
   * Import guests from Excel/CSV data
   */
  async importGuests(
    invitationId: number,
    guestsData: Omit<CreateGuestDTO, "invitation_id">[]
  ): Promise<ImportResult> {
    try {
      const guestsToCreate: CreateGuestDTO[] = guestsData.map((guest) => ({
        ...guest,
        invitation_id: invitationId,
      }));

      // Validate all guests before importing
      const validGuests: CreateGuestDTO[] = [];
      const errors: ImportError[] = [];

      guestsToCreate.forEach((guest, index) => {
        try {
          this.validateGuestData(guest);
          validGuests.push(guest);
        } catch (error: any) {
          errors.push({
            row: index + 1,
            name: guest.name,
            error: error.message,
          });
        }
      });

      // Import valid guests
      let imported: Guest[] = [];
      if (validGuests.length > 0) {
        imported = await this.guestRepository.createMany(validGuests);
      }

      return {
        success: imported.length,
        failed: errors.length,
        errors,
        guests: imported,
      };
    } catch (error: any) {
      console.error("Error importing guests:", error);
      throw new Error("Failed to import guests");
    }
  }

  /**
   * Private validation method
   */
  private validateGuestData(data: CreateGuestDTO): void {
    if (!data.name || data.name.trim() === "") {
      throw new Error("Guest name is required");
    }

    if (data.phone_number && !this.isValidPhoneNumber(data.phone_number)) {
      throw new Error("Invalid phone number format");
    }
  }

  /**
   * Validate phone number format (basic validation)
   */
  private isValidPhoneNumber(phone: string): boolean {
    // Basic validation: allow numbers, spaces, +, -, ()
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10;
  }
}

/**
 * Import result interface
 */
export interface ImportResult {
  success: number;
  failed: number;
  errors: ImportError[];
  guests: Guest[];
}

/**
 * Import error interface
 */
export interface ImportError {
  row: number;
  name: string;
  error: string;
}

// Export singleton instance
export const guestService = new GuestService();
