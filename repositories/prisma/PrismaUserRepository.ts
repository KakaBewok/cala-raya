import prisma from "@/lib/prisma";
import { IUserRepository, UserListItem } from "../interfaces/IUserRepository";

/**
 * Prisma implementation of IUserRepository
 * Provides read-only access to user data for admin features
 */
export class PrismaUserRepository implements IUserRepository {
  /**
   * Find all users with safe fields only (no password)
   */
  async findAll(): Promise<UserListItem[]> {
    try {
      const users = await prisma.users.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          role: true,
        },
        orderBy: { name: "asc" },
      });

      return users;
    } catch (error: any) {
      throw new Error(`Failed to fetch users: ${error.message}`);
    }
  }

  /**
   * Check if a user exists by ID
   */
  async existsById(id: number): Promise<boolean> {
    try {
      const user = await prisma.users.findUnique({
        where: { id },
        select: { id: true },
      });
      return user !== null;
    } catch (error: any) {
      throw new Error(`Failed to check user existence: ${error.message}`);
    }
  }
}
