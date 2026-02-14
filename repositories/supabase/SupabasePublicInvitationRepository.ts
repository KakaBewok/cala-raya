import { IPublicInvitationRepository, InvitationMetadata } from "../interfaces/IPublicInvitationRepository";
import InvitationData from "@/types/invitation-data";
import { createSupabaseServerClient } from "@/lib/supabase/server";

/**
 * Supabase implementation for public invitation access
 * Uses server-side Supabase client for security
 */
export class SupabasePublicInvitationRepository implements IPublicInvitationRepository {
  /**
   * Find invitation by slug and ID with all related data
   * This is used for the public invitation page
   */
  async findBySlugAndId(slug: string, invitationId: number): Promise<InvitationData | null> {
    const supabase = createSupabaseServerClient();

    const { data, error } = await supabase
      .from("invitations")
      .select(`
        *,
        themes (*),
        music (*),
        videos (*),
        images (*),
        gift_infos (*),
        rundowns (*),
        guests (*),
        stories (*),
        rsvps (*)
      `)
      .eq("slug", slug)
      .eq("id", invitationId)
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
   * Find invitation by slug only
   */
  async findBySlug(slug: string): Promise<InvitationData | null> {
    const supabase = createSupabaseServerClient();

    const { data, error } = await supabase
      .from("invitations")
      .select(`
        *,
        themes (*),
        music (*),
        videos (*),
        images (*),
        gift_infos (*),
        rundowns (*),
        guests (*),
        stories (*),
        rsvps (*)
      `)
      .eq("slug", slug)
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
   * Find invitation metadata for SEO/OG tags
   * Optimized query that only fetches necessary fields
   */
  async findMetadataBySlug(slug: string): Promise<InvitationMetadata | null> {
    const supabase = createSupabaseServerClient();

    const { data, error } = await supabase
      .from("invitations")
      .select("host_one_nickname, host_two_nickname, event_title, slug, event_date, images (*)")
      .eq("slug", slug)
      .limit(1);

    if (error) {
      console.error("Error fetching invitation metadata:", error.message);
      return null;
    }

    if (!data || data.length === 0) {
      return null;
    }

    return data[0] as InvitationMetadata;
  }
}
