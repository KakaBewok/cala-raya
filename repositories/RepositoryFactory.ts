import { IInvitationRepository } from "@/repositories/interfaces/IInvitationRepository";
import { IRSVPRepository } from "@/repositories/interfaces/IRSVPRepository";
import { IGuestRepository } from "@/repositories/interfaces/IGuestRepository";
import { IPublicInvitationRepository } from "@/repositories/interfaces/IPublicInvitationRepository";
import { IUserRepository } from "@/repositories/interfaces/IUserRepository";
import { PrismaInvitationRepository } from "@/repositories/prisma/PrismaInvitationRepository";
import { PrismaRSVPRepository } from "@/repositories/prisma/PrismaRSVPRepository";
import { PrismaGuestRepository } from "@/repositories/prisma/PrismaGuestRepository";
import { PrismaPublicInvitationRepository } from "@/repositories/prisma/PrismaPublicInvitationRepository";
import { PrismaUserRepository } from "@/repositories/prisma/PrismaUserRepository";

/**
 * Repository Factory
 * Centralized factory for creating repository instances
 * 
 * Now using Prisma implementations for type-safe, efficient database access.
 * To switch back to Supabase or another provider, simply change the
 * implementation classes below.
 */
class RepositoryFactory {
  private static invitationRepository: IInvitationRepository | null = null;
  private static rsvpRepository: IRSVPRepository | null = null;
  private static guestRepository: IGuestRepository | null = null;
  private static publicInvitationRepository: IPublicInvitationRepository | null = null;
  private static userRepository: IUserRepository | null = null;

  /**
   * Get Invitation Repository instance (Singleton pattern)
   */
  static getInvitationRepository(): IInvitationRepository {
    if (!this.invitationRepository) {
      this.invitationRepository = new PrismaInvitationRepository();
    }
    return this.invitationRepository;
  }

  /**
   * Get RSVP Repository instance (Singleton pattern)
   */
  static getRSVPRepository(): IRSVPRepository {
    if (!this.rsvpRepository) {
      this.rsvpRepository = new PrismaRSVPRepository();
    }
    return this.rsvpRepository;
  }

  /**
   * Get Guest Repository instance (Singleton pattern)
   */
  static getGuestRepository(): IGuestRepository {
    if (!this.guestRepository) {
      this.guestRepository = new PrismaGuestRepository();
    }
    return this.guestRepository;
  }

  /**
   * Get Public Invitation Repository instance (Singleton pattern)
   */
  static getPublicInvitationRepository(): IPublicInvitationRepository {
    if (!this.publicInvitationRepository) {
      this.publicInvitationRepository = new PrismaPublicInvitationRepository();
    }
    return this.publicInvitationRepository;
  }

  /**
   * Get User Repository instance (Singleton pattern)
   */
  static getUserRepository(): IUserRepository {
    if (!this.userRepository) {
      this.userRepository = new PrismaUserRepository();
    }
    return this.userRepository;
  }

  /**
   * Reset all repository instances (useful for testing)
   */
  static reset(): void {
    this.invitationRepository = null;
    this.rsvpRepository = null;
    this.guestRepository = null;
    this.publicInvitationRepository = null;
    this.userRepository = null;
  }
}

export default RepositoryFactory;
