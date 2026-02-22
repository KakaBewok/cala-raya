import prisma from "@/lib/prisma";
import { RSVP } from "@/types/invitation-data";
import {
  IRSVPRepository,
  CreateRSVPDTO,
  UpdateRSVPDTO,
  RSVPStatistics,
} from "../interfaces/IRSVPRepository";

/**
 * Prisma implementation of IRSVPRepository
 * Handles all RSVP-related database operations
 */
export class PrismaRSVPRepository implements IRSVPRepository {
  /**
   * Find all RSVPs for a specific invitation
   */
  async findByInvitationId(invitationId: number): Promise<RSVP[]> {
    try {
      const rsvps = await prisma.rsvps.findMany({
        where: { invitation_id: invitationId },
        orderBy: { created_at: "desc" },
      });

      return rsvps as unknown as RSVP[];
    } catch (error: any) {
      throw new Error(`Failed to fetch RSVPs: ${error.message}`);
    }
  }

  /**
   * Find a single RSVP by ID
   */
  async findById(id: number): Promise<RSVP | null> {
    try {
      const rsvp = await prisma.rsvps.findUnique({
        where: { id },
      });

      return rsvp as unknown as RSVP | null;
    } catch (error: any) {
      throw new Error(`Failed to fetch RSVP: ${error.message}`);
    }
  }

  /**
   * Create a new RSVP
   */
  async create(data: CreateRSVPDTO): Promise<RSVP> {
    try {
      const rsvp = await prisma.rsvps.create({
        data: {
          invitation_id: data.invitation_id,
          guest_name: data.guest_name,
          message: data.message,
          attendance_status: data.attendance_status,
          total_guest: data.total_guest,
        },
      });

      return rsvp as unknown as RSVP;
    } catch (error: any) {
      throw new Error(`Failed to create RSVP: ${error.message}`);
    }
  }

  /**
   * Update an existing RSVP
   */
  async update(id: number, data: UpdateRSVPDTO): Promise<RSVP> {
    try {
      const rsvp = await prisma.rsvps.update({
        where: { id },
        data: {
          guest_name: data.guest_name,
          message: data.message,
          attendance_status: data.attendance_status,
          total_guest: data.total_guest,
        },
      });

      return rsvp as unknown as RSVP;
    } catch (error: any) {
      throw new Error(`Failed to update RSVP: ${error.message}`);
    }
  }

  /**
   * Delete an RSVP
   */
  async delete(id: number): Promise<boolean> {
    try {
      await prisma.rsvps.delete({
        where: { id },
      });

      return true;
    } catch (error: any) {
      throw new Error(`Failed to delete RSVP: ${error.message}`);
    }
  }

  /**
   * Get RSVP statistics for an invitation
   * Uses Prisma aggregation for efficient server-side computation
   */
  async getStatistics(invitationId: number): Promise<RSVPStatistics> {
    try {
      const [total, attending, notAttending, totalGuests] = await Promise.all([
        // Total count
        prisma.rsvps.count({
          where: { invitation_id: invitationId },
        }),
        // Attending count
        prisma.rsvps.count({
          where: {
            invitation_id: invitationId,
            attendance_status: true,
          },
        }),
        // Not attending count
        prisma.rsvps.count({
          where: {
            invitation_id: invitationId,
            attendance_status: false,
          },
        }),
        // Total guests (sum of total_guest where attending)
        prisma.rsvps.aggregate({
          where: {
            invitation_id: invitationId,
            attendance_status: true,
          },
          _sum: {
            total_guest: true,
          },
        }),
      ]);

      return {
        total,
        attending,
        notAttending,
        totalGuests: totalGuests._sum.total_guest ?? 0,
      };
    } catch (error: any) {
      throw new Error(`Failed to get RSVP statistics: ${error.message}`);
    }
  }

  /**
   * Find RSVPs by attendance status
   */
  async findByAttendanceStatus(
    invitationId: number,
    attendanceStatus: boolean
  ): Promise<RSVP[]> {
    try {
      const rsvps = await prisma.rsvps.findMany({
        where: {
          invitation_id: invitationId,
          attendance_status: attendanceStatus,
        },
        orderBy: { created_at: "desc" },
      });

      return rsvps as unknown as RSVP[];
    } catch (error: any) {
      throw new Error(`Failed to fetch RSVPs by status: ${error.message}`);
    }
  }

  /**
   * Find RSVPs for a specific invitation with pagination
   */
  async findByInvitationIdPaginated(
    invitationId: number,
    page: number,
    pageSize: number
  ): Promise<{ data: RSVP[]; total: number }> {
    try {
      const skip = (page - 1) * pageSize;

      const [rsvps, total] = await Promise.all([
        prisma.rsvps.findMany({
          where: { invitation_id: invitationId },
          orderBy: { created_at: "desc" },
          skip,
          take: pageSize,
        }),
        prisma.rsvps.count({
          where: { invitation_id: invitationId },
        }),
      ]);

      return {
        data: rsvps as unknown as RSVP[],
        total,
      };
    } catch (error: any) {
      throw new Error(`Failed to fetch paginated RSVPs: ${error.message}`);
    }
  }
}
