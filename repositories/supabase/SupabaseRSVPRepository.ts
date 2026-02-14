import {
  IRSVPRepository,
  CreateRSVPDTO,
  UpdateRSVPDTO,
  RSVPStatistics,
} from "../interfaces/IRSVPRepository";
import { RSVP } from "@/types/invitation-data";
import { createSupabaseClient } from "@/lib/supabase/client";

/**
 * Supabase implementation of IRSVPRepository
 * Handles all RSVP-related database operations
 */
export class SupabaseRSVPRepository implements IRSVPRepository {
  private supabase = createSupabaseClient();

  /**
   * Find all RSVPs for a specific invitation
   */
  async findByInvitationId(invitationId: number): Promise<RSVP[]> {
    const { data, error } = await this.supabase
      .from("rsvps")
      .select("*")
      .eq("invitation_id", invitationId)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch RSVPs: ${error.message}`);
    }

    return data as RSVP[];
  }

  /**
   * Find a single RSVP by ID
   */
  async findById(id: number): Promise<RSVP | null> {
    const { data, error } = await this.supabase
      .from("rsvps")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null; // Not found
      }
      throw new Error(`Failed to fetch RSVP: ${error.message}`);
    }

    return data as RSVP;
  }

  /**
   * Create a new RSVP
   */
  async create(data: CreateRSVPDTO): Promise<RSVP> {
    const { data: rsvp, error } = await this.supabase
      .from("rsvps")
      .insert({
        invitation_id: data.invitation_id,
        guest_name: data.guest_name,
        message: data.message,
        attendance_status: data.attendance_status,
        total_guest: data.total_guest,
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create RSVP: ${error.message}`);
    }

    return rsvp as RSVP;
  }

  /**
   * Update an existing RSVP
   */
  async update(id: number, data: UpdateRSVPDTO): Promise<RSVP> {
    const { data: rsvp, error } = await this.supabase
      .from("rsvps")
      .update({
        guest_name: data.guest_name,
        message: data.message,
        attendance_status: data.attendance_status,
        total_guest: data.total_guest,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update RSVP: ${error.message}`);
    }

    return rsvp as RSVP;
  }

  /**
   * Delete an RSVP
   */
  async delete(id: number): Promise<boolean> {
    const { error } = await this.supabase
      .from("rsvps")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(`Failed to delete RSVP: ${error.message}`);
    }

    return true;
  }

  /**
   * Get RSVP statistics for an invitation
   */
  async getStatistics(invitationId: number): Promise<RSVPStatistics> {
    const rsvps = await this.findByInvitationId(invitationId);

    const total = rsvps.length;
    const attending = rsvps.filter((r) => r.attendance_status === true).length;
    const notAttending = rsvps.filter((r) => r.attendance_status === false).length;
    const totalGuests = rsvps.reduce((sum, r) => sum + (r.total_guest || 0), 0);

    return {
      total,
      attending,
      notAttending,
      totalGuests,
    };
  }

  /**
   * Find RSVPs by attendance status
   */
  async findByAttendanceStatus(
    invitationId: number,
    attendanceStatus: boolean
  ): Promise<RSVP[]> {
    const { data, error } = await this.supabase
      .from("rsvps")
      .select("*")
      .eq("invitation_id", invitationId)
      .eq("attendance_status", attendanceStatus)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch RSVPs by status: ${error.message}`);
    }

    return data as RSVP[];
  }
}
