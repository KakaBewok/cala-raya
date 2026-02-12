import { authOptions } from "@/configs/auth";
import db from "@/configs/db-config";
import logger from "@/lib/logger";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const isAdmin = session.user.role === "ADMIN";
    const query = db
      .from("invitations")
      .select(
        `
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
      `
      )
      .order("updated_at", { ascending: false });

    if (!isAdmin) {
      query.eq("user_id", session.user.id);
    }
    const { data, error } = await query;

    if (!data || error) {
      return NextResponse.json(
        { error: "Failed to fetch user" },
        { status: 500 }
      );
    }

    logger.info({ name: session?.user.name }, "Get invitations");
    return NextResponse.json({ invitations: data }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    logger.error({ error_message: err.message });
    return NextResponse.json({ error: "An error occured" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    const isAdmin = session.user.role === "ADMIN";

    // 1. Find theme ID - Only ADMIN can specify, otherwise use default (or existing if we implement package-based)
    const themeName = isAdmin ? (data.themes?.name || "default") : "default";

    const { data: themeData } = await db
      .from("themes")
      .select("id")
      .eq("name", themeName)
      .single();

    // 2. Insert Invitation
    const { data: invitation, error: invError } = await db
      .from("invitations")
      .insert({
        user_id: session.user.id,
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
        theme_id: themeData?.id || 1,
        slug: `${data.host_one_nickname}-${data.host_two_nickname}-${Date.now()}`
          .toLowerCase()
          .replace(/[^a-z0-9-]/g, "-"),
      })
      .select()
      .single();

    if (invError) throw invError;

    const invitationId = invitation.id;

    // 3. Insert music
    if (data.music) {
      await db.from("music").insert({
        invitation_id: invitationId,
        ...data.music,
      });
    }

    // 4. Insert images
    if (data.images?.length > 0) {
      await db.from("images").insert(
        data.images.map((img: any) => ({
          ...img,
          invitation_id: invitationId,
        }))
      );
    }

    // 5. Insert rundowns
    if (data.rundowns?.length > 0) {
      await db.from("rundowns").insert(
        data.rundowns.map((r: any) => ({
          ...r,
          invitation_id: invitationId,
        }))
      );
    }

    // 6. Insert gift infos
    if (data.gift_infos?.length > 0) {
      await db.from("gift_infos").insert(
        data.gift_infos.map((g: any) => ({
          ...g,
          invitation_id: invitationId,
        }))
      );
    }

    // 7. Insert stories
    if (data.stories?.length > 0) {
      await db.from("stories").insert(
        data.stories.map((s: any) => ({
          ...s,
          invitation_id: invitationId,
        }))
      );
    }

    return NextResponse.json({ success: true, invitation }, { status: 201 });
  } catch (err: any) {
    logger.error({ error_message: err.message }, "Error creating invitation");
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
