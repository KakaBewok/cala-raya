import { authOptions } from "@/configs/auth";
import db from "@/configs/db-config";
import logger from "@/lib/logger";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const invitationId = params.id;

  try {
    const data = await req.json();
    const isAdmin = session.user.role === "ADMIN";

    // 1. Prepare Update Object
    const updateData: any = {
      host_one_name: data.host_one_name,
      host_one_nickname: data.host_one_nickname,
      host_one_additional_info: data.host_one_additional_info,
      host_one_social_media: data.host_one_social_media,
      host_two_name: data.host_two_name,
      host_two_nickname: data.host_two_nickname,
      host_two_additional_info: data.host_two_additional_info,
      host_two_social_media: data.host_two_social_media,
      hashtag: data.hashtag,
      event_title: data.event_title,
      event_date: data.event_date,
      event_type: data.event_type,
      location: data.location,
      location_url: data.location_url,
      location_detail: data.location_detail,
      message: data.message,
    };

    // Only ADMIN can update theme
    if (isAdmin && data.themes?.name) {
      const { data: themeData } = await db
        .from("themes")
        .select("id")
        .eq("name", data.themes.name)
        .single();
      
      if (themeData) {
        updateData.theme_id = themeData.id;
      }
    }

    const { error: invError } = await db
      .from("invitations")
      .update(updateData)
      .eq("id", invitationId)
      .eq("user_id", session.user.id);

    if (invError) throw invError;

    // 2. Music (Upsert)
    if (data.music) {
      await db
        .from("music")
        .upsert({
          invitation_id: invitationId,
          ...data.music,
        })
        .eq("invitation_id", invitationId);
    }

    // Related arrays: Delete and re-insert for consistency
    
    // 3. Images
    await db.from("images").delete().eq("invitation_id", invitationId);
    if (data.images?.length > 0) {
      await db.from("images").insert(
        data.images.map((img: any) => ({
          url: img.url,
          type: img.type,
          order_number: img.order_number,
          invitation_id: invitationId,
        }))
      );
    }

    // 4. Rundowns
    await db.from("rundowns").delete().eq("invitation_id", invitationId);
    if (data.rundowns?.length > 0) {
      await db.from("rundowns").insert(
        data.rundowns.map((r: any) => ({
          title: r.title,
          location: r.location,
          location_url: r.location_url,
          location_detail: r.location_detail,
          date: r.date,
          start_time: r.start_time,
          end_time: r.end_time,
          time_zone: r.time_zone,
          description: r.description,
          image_url: r.image_url,
          order_number: r.order_number,
          invitation_id: invitationId,
        }))
      );
    }

    // 5. Gift Infos
    await db.from("gift_infos").delete().eq("invitation_id", invitationId);
    if (data.gift_infos?.length > 0) {
      await db.from("gift_infos").insert(
        data.gift_infos.map((g: any) => ({
          provider_name: g.provider_name,
          account_number: g.account_number,
          account_holder: g.account_holder,
          gift_delivery_address: g.gift_delivery_address,
          invitation_id: invitationId,
        }))
      );
    }

    // 6. Stories
    await db.from("stories").delete().eq("invitation_id", invitationId);
    if (data.stories?.length > 0) {
      await db.from("stories").insert(
        data.stories.map((s: any) => ({
          title: s.title,
          content: s.content,
          image_url: s.image_url,
          story_date: s.story_date,
          order_number: s.order_number,
          invitation_id: invitationId,
        }))
      );
    }

    logger.info({ invitationId }, "Updated invitation");
    return NextResponse.json({ success: true });
  } catch (err: any) {
    logger.error({ error_message: err.message }, "Error updating invitation");
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
