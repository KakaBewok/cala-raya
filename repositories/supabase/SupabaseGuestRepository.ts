import {
  IGuestRepository,
  CreateGuestDTO,
  UpdateGuestDTO,
} from "../interfaces/IGuestRepository";
import { Guest } from "@/types/invitation-data";
import { createSupabaseClient } from "@/lib/supabase/client";

/**
 * Supabase implementation of IGuestRepository
 * Handles all guest-related database operations
 */
export class SupabaseGuestRepository implements IGuestRepository {
  private supabase = createSupabaseClient();

  /**
   * Find all guests for a specific invitation
   */
  async findByInvitationId(invitationId: number): Promise<Guest[]> {
    const { data, error } = await this.supabase
      .from("guests")
      .select("*")
      .eq("invitation_id", invitationId)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch guests: ${error.message}`);
    }

    return data as Guest[];
  }

  /**
   * Find a single guest by ID
   */
  async findById(id: number): Promise<Guest | null> {
    const { data, error } = await this.supabase
      .from("guests")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null; // Not found
      }
      throw new Error(`Failed to fetch guest: ${error.message}`);
    }

    return data as Guest;
  }

  /**
   * Create a new guest
   */
  async create(data: CreateGuestDTO): Promise<Guest> {
    const { data: guest, error } = await this.supabase
      .from("guests")
      .insert({
        invitation_id: data.invitation_id,
        name: data.name,
        phone_number: data.phone_number,
        address: data.address,
        notes: data.notes,
      })
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create guest: ${error.message}`);
    }

    return guest as Guest;
  }

  /**
   * Create multiple guests at once
   */
  async createMany(data: CreateGuestDTO[]): Promise<Guest[]> {
    const guestsToInsert = data.map((guest) => ({
      invitation_id: guest.invitation_id,
      name: guest.name,
      phone_number: guest.phone_number,
      address: guest.address,
      notes: guest.notes,
    }));

    const { data: guests, error } = await this.supabase
      .from("guests")
      .insert(guestsToInsert)
      .select();

    if (error) {
      throw new Error(`Failed to create guests: ${error.message}`);
    }

    return guests as Guest[];
  }

  /**
   * Update an existing guest
   */
  async update(id: number, data: UpdateGuestDTO): Promise<Guest> {
    const { data: guest, error } = await this.supabase
      .from("guests")
      .update({
        name: data.name,
        phone_number: data.phone_number,
        address: data.address,
        notes: data.notes,
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update guest: ${error.message}`);
    }

    return guest as Guest;
  }

  /**
   * Delete a guest
   */
  async delete(id: number): Promise<boolean> {
    const { error } = await this.supabase
      .from("guests")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(`Failed to delete guest: ${error.message}`);
    }

    return true;
  }

  /**
   * Delete multiple guests
   */
  async deleteMany(ids: number[]): Promise<boolean> {
    const { error } = await this.supabase
      .from("guests")
      .delete()
      .in("id", ids);

    if (error) {
      throw new Error(`Failed to delete guests: ${error.message}`);
    }

    return true;
  }

  /**
   * Search guests by name
   */
  async searchByName(invitationId: number, searchTerm: string): Promise<Guest[]> {
    const { data, error } = await this.supabase
      .from("guests")
      .select("*")
      .eq("invitation_id", invitationId)
      .ilike("name", `%${searchTerm}%`)
      .order("name", { ascending: true });

    if (error) {
      throw new Error(`Failed to search guests: ${error.message}`);
    }

    return data as Guest[];
  }
}
