import { IInvitationRepository } from "@/repositories/interfaces/IInvitationRepository";
import { IRSVPRepository } from "@/repositories/interfaces/IRSVPRepository";
import { IGuestRepository } from "@/repositories/interfaces/IGuestRepository";
import { SupabaseInvitationRepository } from "@/repositories/supabase/SupabaseInvitationRepository";
import { SupabaseRSVPRepository } from "@/repositories/supabase/SupabaseRSVPRepository";
import { SupabaseGuestRepository } from "@/repositories/supabase/SupabaseGuestRepository";

/**
 * Repository Factory
 * Centralized factory for creating repository instances
 * This allows easy switching between different database implementations
 */
class RepositoryFactory {
  private static invitationRepository: IInvitationRepository | null = null;
  private static rsvpRepository: IRSVPRepository | null = null;
  private static guestRepository: IGuestRepository | null = null;

  /**
   * Get Invitation Repository instance (Singleton pattern)
   */
  static getInvitationRepository(): IInvitationRepository {
    if (!this.invitationRepository) {
      // Currently using Supabase implementation
      // To switch to another database, just change this line:
      this.invitationRepository = new SupabaseInvitationRepository();
      
      // Future example:
      // this.invitationRepository = new PrismaInvitationRepository();
      // this.invitationRepository = new FirebaseInvitationRepository();
    }
    return this.invitationRepository;
  }

  /**
   * Get RSVP Repository instance (Singleton pattern)
   */
  static getRSVPRepository(): IRSVPRepository {
    if (!this.rsvpRepository) {
      // Currently using Supabase implementation
      this.rsvpRepository = new SupabaseRSVPRepository();
      
      // Future example:
      // this.rsvpRepository = new PrismaRSVPRepository();
    }
    return this.rsvpRepository;
  }

  /**
   * Get Guest Repository instance (Singleton pattern)
   */
  static getGuestRepository(): IGuestRepository {
    if (!this.guestRepository) {
      // Currently using Supabase implementation
      this.guestRepository = new SupabaseGuestRepository();
      
      // Future example:
      // this.guestRepository = new PrismaGuestRepository();
    }
    return this.guestRepository;
  }

  /**
   * Reset all repository instances (useful for testing)
   */
  static reset(): void {
    this.invitationRepository = null;
    this.rsvpRepository = null;
    this.guestRepository = null;
  }
}

export default RepositoryFactory;
