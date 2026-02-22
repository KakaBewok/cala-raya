import { IUserRepository, UserListItem } from "@/repositories/interfaces/IUserRepository";
import RepositoryFactory from "@/repositories/RepositoryFactory";

/**
 * User Service
 * Business logic layer for user-related operations
 *
 * Enforces role-based access: only ADMIN can list all users.
 */
export class UserService {
  private userRepository: IUserRepository;

  constructor(userRepository?: IUserRepository) {
    this.userRepository = userRepository || RepositoryFactory.getUserRepository();
  }

  /**
   * Get all users for admin dropdown
   * @param callerRole - Role of the requesting user (enforced server-side)
   * @throws Error if caller is not ADMIN
   */
  async getAllUsers(callerRole: string): Promise<UserListItem[]> {
    if (callerRole !== "ADMIN") {
      throw new Error("Forbidden: only admins can list users");
    }

    try {
      return await this.userRepository.findAll();
    } catch (error: any) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  }

  /**
   * Resolve the correct userId for invitation creation
   *
   * Security rules:
   *  - Non-admin: always returns sessionUserId (ignores any client-supplied value)
   *  - Admin: validates that the requested userId exists, then returns it
   *
   * @param callerRole - Role from server session
   * @param sessionUserId - Authenticated user's own ID
   * @param requestedUserId - userId sent from the client (may be undefined)
   * @returns The validated userId to assign
   */
  async resolveInvitationOwner(
    callerRole: string,
    sessionUserId: number,
    requestedUserId?: number
  ): Promise<number> {
    // Non-admin: always use session user, ignore any client value
    if (callerRole !== "ADMIN") {
      return sessionUserId;
    }

    // Admin but no explicit userId provided → assign to self
    if (!requestedUserId) {
      return sessionUserId;
    }

    // Admin with explicit userId → validate it exists
    const exists = await this.userRepository.existsById(requestedUserId);
    if (!exists) {
      throw new Error(`User with ID ${requestedUserId} does not exist`);
    }

    return requestedUserId;
  }
}

// Export singleton instance
export const userService = new UserService();
