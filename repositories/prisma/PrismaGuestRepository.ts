import prisma from "@/lib/prisma";
import { Guest } from "@/types/invitation-data";
import {
  IGuestRepository,
  CreateGuestDTO,
  UpdateGuestDTO,
} from "../interfaces/IGuestRepository";

/**
 * Prisma implementation of IGuestRepository
 * Handles all guest-related database operations
 */
export class PrismaGuestRepository implements IGuestRepository {
  /**
   * Find all guests for a specific invitation
   */
  async findByInvitationId(invitationId: number): Promise<Guest[]> {
    try {
      const guests = await prisma.guests.findMany({
        where: { invitation_id: invitationId },
        orderBy: { created_at: "desc" },
      });

      return guests as unknown as Guest[];
    } catch (error: any) {
      throw new Error(`Failed to fetch guests: ${error.message}`);
    }
  }

  /**
   * Find a single guest by ID
   */
  async findById(id: number): Promise<Guest | null> {
    try {
      const guest = await prisma.guests.findUnique({
        where: { id },
      });

      return guest as unknown as Guest | null;
    } catch (error: any) {
      throw new Error(`Failed to fetch guest: ${error.message}`);
    }
  }

  /**
   * Create a new guest
   */
  async create(data: CreateGuestDTO): Promise<Guest> {
    try {
      const guest = await prisma.guests.create({
        data: {
          invitation_id: data.invitation_id,
          name: data.name,
          phone_number: data.phone_number,
          address: data.address,
          notes: data.notes,
        },
      });

      return guest as unknown as Guest;
    } catch (error: any) {
      throw new Error(`Failed to create guest: ${error.message}`);
    }
  }

  /**
   * Create multiple guests at once
   */
  async createMany(data: CreateGuestDTO[]): Promise<Guest[]> {
    try {
      // Prisma createMany doesn't return created records on PostgreSQL
      // So we use a transaction with individual creates
      const guests = await prisma.$transaction(
        data.map((guest) =>
          prisma.guests.create({
            data: {
              invitation_id: guest.invitation_id,
              name: guest.name,
              phone_number: guest.phone_number,
              address: guest.address,
              notes: guest.notes,
            },
          })
        )
      );

      return guests as unknown as Guest[];
    } catch (error: any) {
      throw new Error(`Failed to create guests: ${error.message}`);
    }
  }

  /**
   * Update an existing guest
   */
  async update(id: number, data: UpdateGuestDTO): Promise<Guest> {
    try {
      const guest = await prisma.guests.update({
        where: { id },
        data: {
          name: data.name,
          phone_number: data.phone_number,
          address: data.address,
          notes: data.notes,
        },
      });

      return guest as unknown as Guest;
    } catch (error: any) {
      throw new Error(`Failed to update guest: ${error.message}`);
    }
  }

  /**
   * Delete a guest
   */
  async delete(id: number): Promise<boolean> {
    try {
      await prisma.guests.delete({
        where: { id },
      });

      return true;
    } catch (error: any) {
      throw new Error(`Failed to delete guest: ${error.message}`);
    }
  }

  /**
   * Delete multiple guests
   */
  async deleteMany(ids: number[]): Promise<boolean> {
    try {
      await prisma.guests.deleteMany({
        where: {
          id: { in: ids },
        },
      });

      return true;
    } catch (error: any) {
      throw new Error(`Failed to delete guests: ${error.message}`);
    }
  }

  /**
   * Search guests by name (case-insensitive)
   */
  async searchByName(
    invitationId: number,
    searchTerm: string
  ): Promise<Guest[]> {
    try {
      const guests = await prisma.guests.findMany({
        where: {
          invitation_id: invitationId,
          name: {
            contains: searchTerm,
            mode: "insensitive",
          },
        },
        orderBy: { name: "asc" },
      });

      return guests as unknown as Guest[];
    } catch (error: any) {
      throw new Error(`Failed to search guests: ${error.message}`);
    }
  }

  /**
   * Find a guest by exact name within an invitation
   */
  async findByNameAndInvitationId(
    invitationId: number,
    name: string
  ): Promise<Guest | null> {
    try {
      const guest = await prisma.guests.findFirst({
        where: {
          invitation_id: invitationId,
          name: name,
        },
      });

      return guest as unknown as Guest | null;
    } catch (error: any) {
      throw new Error(`Failed to find guest by name: ${error.message}`);
    }
  }

  /**
   * Find guests for a specific invitation with pagination
   */
  async findByInvitationIdPaginated(
    invitationId: number,
    page: number,
    pageSize: number
  ): Promise<{ data: Guest[]; total: number }> {
    try {
      const skip = (page - 1) * pageSize;

      const [guests, total] = await Promise.all([
        prisma.guests.findMany({
          where: { invitation_id: invitationId },
          orderBy: { created_at: "desc" },
          skip,
          take: pageSize,
        }),
        prisma.guests.count({
          where: { invitation_id: invitationId },
        }),
      ]);

      return {
        data: guests as unknown as Guest[],
        total,
      };
    } catch (error: any) {
      throw new Error(`Failed to fetch paginated guests: ${error.message}`);
    }
  }
}
