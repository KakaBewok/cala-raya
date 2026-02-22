/**
 * Repository interface for User entity
 * Defines the contract for user-related database read operations
 */

export interface UserListItem {
  id: number;
  name: string | null;
  email: string | null;
  role: string | null;
}

export interface IUserRepository {
  /**
   * Find all users (for admin user-picker)
   * Returns only safe fields: id, name, email, role
   */
  findAll(): Promise<UserListItem[]>;

  /**
   * Check if a user exists by ID
   */
  existsById(id: number): Promise<boolean>;
}
