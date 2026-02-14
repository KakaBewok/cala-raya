import { IInvitationRepository, CreateInvitationDTO, UpdateInvitationDTO } from "../interfaces/IInvitationRepository";
import InvitationData from "@/types/invitation-data";
import { createSupabaseClient } from "@/lib/supabase/client";

/**
 * Supabase implementation of IInvitationRepository
 * This class encapsulates all Supabase-specific logic for invitations
 */
export class SupabaseInvitationRepository implements IInvitationRepository {
  private supabase = createSupabaseClient();

  /**
   * Find all invitations for a specific user with all related data
   */
  async findByUserId(userId: number): Promise<InvitationData[]> {
    const { data, error } = await this.supabase
      .from("invitations")
      .select(`
        *,
        themes (*),
        music (*),
        images (*),
        rundowns (*),
        gift_infos (*),
        stories (*),
        guests (*),
        rsvps (*)
      `)
      .eq("user_id", userId)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch invitations: ${error.message}`);
    }

    return data as InvitationData[];
  }

  /**
   * Find a single invitation by ID with all related data
   */
  async findById(id: number): Promise<InvitationData | null> {
    const { data, error } = await this.supabase
      .from("invitations")
      .select(`
        *,
        themes (*),
        music (*),
        images (*),
        rundowns (*),
        gift_infos (*),
        stories (*),
        guests (*),
        rsvps (*)
      `)
      .eq("id", id)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        return null; // Not found
      }
      throw new Error(`Failed to fetch invitation: ${error.message}`);
    }

    return data as InvitationData;
  }

  /**
   * Create a new invitation with all related data
   */
  async create(data: CreateInvitationDTO): Promise<InvitationData> {
    // Start transaction-like operation
    try {
      // 1. Create main invitation
      const { data: invitation, error: invError } = await this.supabase
        .from("invitations")
        .insert({
          user_id: data.user_id,
          theme_id: data.theme_id,
          host_one_name: data.host_one_name,
          host_one_nickname: data.host_one_nickname,
          host_one_additional_info: data.host_one_additional_info,
          host_one_social_media: data.host_one_social_media,
          host_two_name: data.host_two_name,
          host_two_nickname: data.host_two_nickname,
          host_two_additional_info: data.host_two_additional_info,
          host_two_social_media: data.host_two_social_media,
          event_title: data.event_title,
          event_date: data.event_date,
          event_type: data.event_type,
          location: data.location,
          location_url: data.location_url,
          location_detail: data.location_detail,
          message: data.message,
          hashtag: data.hashtag,
        })
        .select()
        .single();

      if (invError) {
        throw new Error(`Failed to create invitation: ${invError.message}`);
      }

      const invitationId = invitation.id;

      // 2. Create music if provided
      if (data.music) {
        await this.supabase.from("music").insert({
          invitation_id: invitationId,
          ...data.music,
        });
      }

      // 3. Create images if provided
      if (data.images && data.images.length > 0) {
        const imagesWithInvId = data.images.map((img) => ({
          ...img,
          invitation_id: invitationId,
        }));
        await this.supabase.from("images").insert(imagesWithInvId);
      }

      // 4. Create rundowns if provided
      if (data.rundowns && data.rundowns.length > 0) {
        const rundownsWithInvId = data.rundowns.map((rundown) => ({
          ...rundown,
          invitation_id: invitationId,
        }));
        await this.supabase.from("rundowns").insert(rundownsWithInvId);
      }

      // 5. Create gift infos if provided
      if (data.gift_infos && data.gift_infos.length > 0) {
        const giftInfosWithInvId = data.gift_infos.map((gift) => ({
          ...gift,
          invitation_id: invitationId,
        }));
        await this.supabase.from("gift_infos").insert(giftInfosWithInvId);
      }

      // 6. Create stories if provided
      if (data.stories && data.stories.length > 0) {
        const storiesWithInvId = data.stories.map((story) => ({
          ...story,
          invitation_id: invitationId,
        }));
        await this.supabase.from("stories").insert(storiesWithInvId);
      }

      // Fetch the complete invitation with all relations
      return await this.findById(invitationId) as InvitationData;
    } catch (error: any) {
      throw new Error(`Failed to create invitation: ${error.message}`);
    }
  }

  /**
   * Update an existing invitation
   */
  async update(id: number, data: UpdateInvitationDTO): Promise<InvitationData> {
    try {
      // 1. Update main invitation
      const { error: updateError } = await this.supabase
        .from("invitations")
        .update({
          host_one_name: data.host_one_name,
          host_one_nickname: data.host_one_nickname,
          host_one_additional_info: data.host_one_additional_info,
          host_one_social_media: data.host_one_social_media,
          host_two_name: data.host_two_name,
          host_two_nickname: data.host_two_nickname,
          host_two_additional_info: data.host_two_additional_info,
          host_two_social_media: data.host_two_social_media,
          event_title: data.event_title,
          event_date: data.event_date,
          event_type: data.event_type,
          location: data.location,
          location_url: data.location_url,
          location_detail: data.location_detail,
          message: data.message,
          hashtag: data.hashtag,
        })
        .eq("id", id);

      if (updateError) {
        throw new Error(`Failed to update invitation: ${updateError.message}`);
      }

      // 2. Update or create music
      if (data.music) {
        await this.supabase
          .from("music")
          .upsert({
            invitation_id: id,
            ...data.music,
          });
      }

      // 3. Replace images if provided
      if (data.images !== undefined) {
        await this.supabase.from("images").delete().eq("invitation_id", id);
        if (data.images.length > 0) {
          const imagesWithInvId = data.images.map((img) => ({
            ...img,
            invitation_id: id,
          }));
          await this.supabase.from("images").insert(imagesWithInvId);
        }
      }

      // 4. Replace rundowns if provided
      if (data.rundowns !== undefined) {
        await this.supabase.from("rundowns").delete().eq("invitation_id", id);
        if (data.rundowns.length > 0) {
          const rundownsWithInvId = data.rundowns.map((rundown) => ({
            ...rundown,
            invitation_id: id,
          }));
          await this.supabase.from("rundowns").insert(rundownsWithInvId);
        }
      }

      // 5. Replace gift infos if provided
      if (data.gift_infos !== undefined) {
        await this.supabase.from("gift_infos").delete().eq("invitation_id", id);
        if (data.gift_infos.length > 0) {
          const giftInfosWithInvId = data.gift_infos.map((gift) => ({
            ...gift,
            invitation_id: id,
          }));
          await this.supabase.from("gift_infos").insert(giftInfosWithInvId);
        }
      }

      // 6. Replace stories if provided
      if (data.stories !== undefined) {
        await this.supabase.from("stories").delete().eq("invitation_id", id);
        if (data.stories.length > 0) {
          const storiesWithInvId = data.stories.map((story) => ({
            ...story,
            invitation_id: id,
          }));
          await this.supabase.from("stories").insert(storiesWithInvId);
        }
      }

      // Fetch the complete updated invitation
      return await this.findById(id) as InvitationData;
    } catch (error: any) {
      throw new Error(`Failed to update invitation: ${error.message}`);
    }
  }

  /**
   * Delete an invitation and all related data
   */
  async delete(id: number): Promise<boolean> {
    const { error } = await this.supabase
      .from("invitations")
      .delete()
      .eq("id", id);

    if (error) {
      throw new Error(`Failed to delete invitation: ${error.message}`);
    }

    return true;
  }

  /**
   * Find all active invitations for a user
   */
  async findActiveByUserId(userId: number): Promise<InvitationData[]> {
    const { data, error } = await this.supabase
      .from("invitations")
      .select(`
        *,
        themes (*),
        music (*),
        images (*),
        rundowns (*),
        gift_infos (*),
        stories (*),
        guests (*),
        rsvps (*)
      `)
      .eq("user_id", userId)
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(`Failed to fetch active invitations: ${error.message}`);
    }

    return data as InvitationData[];
  }

  /**
   * Update invitation status
   */
  async updateStatus(id: number, isActive: boolean): Promise<boolean> {
    const { error } = await this.supabase
      .from("invitations")
      .update({ is_active: isActive })
      .eq("id", id);

    if (error) {
      throw new Error(`Failed to update invitation status: ${error.message}`);
    }

    return true;
  }
}
