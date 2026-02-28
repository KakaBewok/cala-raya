import { authOptions } from "@/configs/auth";
import logger from "@/lib/logger";
import prisma from "@/lib/prisma";
import { invitationService } from "@/services/InvitationService";
import { userService } from "@/services/UserService";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const invitationId = Number(id);

  if (isNaN(invitationId)) {
    return NextResponse.json({ error: "Invalid invitation ID" }, { status: 400 });
  }

  try {
    const isAdmin = session.user.role === "ADMIN";
    const userId = Number(session.user.id);

    const invitation = await invitationService.getInvitationById(invitationId);

    if (!invitation) {
      return NextResponse.json({ error: "Invitation not found" }, { status: 404 });
    }

    // Check ownership: non-admins can only see their own
    if (!isAdmin && invitation.user_id !== userId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    return NextResponse.json({ invitation }, { status: 200 });
  } catch (err: unknown) {
    logger.error({ error_message: err instanceof Error ? err.message : "Internal Server Error" }, "Error fetching invitation");
    return NextResponse.json({ error: err instanceof Error ? err.message : "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const invitationId = Number(id);

  if (isNaN(invitationId)) {
    return NextResponse.json({ error: "Invalid invitation ID" }, { status: 400 });
  }

  try {
    const data = await req.json();
    const isAdmin = session.user.role === "ADMIN";

    // Build update payload
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatePayload: any = {
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
      music: data.music,
      images: data.images,
      rundowns: data.rundowns,
      gift_infos: data.gift_infos,
      stories: data.stories,
      web_url: `${process.env.NEXT_PUBLIC_APP_URL_PROD}`,
    };

    // Only ADMIN can change ownership
    if (isAdmin && data.user_id) {
      const resolvedUserId = await userService.resolveInvitationOwner(
        session.user.role || "USER",
        Number(session.user.id),
        Number(data.user_id)
      );
      updatePayload.user_id = resolvedUserId;
    }

    // Only ADMIN can update theme
    if (isAdmin && data.themes?.name) {
      const themeRecord = await prisma.themes.findFirst({
        where: { name: data.themes.name },
        select: { id: true },
      });
      if (themeRecord) {
        updatePayload.theme_id = themeRecord.id;
      }
    }

    await invitationService.updateInvitation(invitationId, updatePayload);

    logger.info({ invitationId }, "Updated invitation");
    return NextResponse.json({ success: true });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    logger.error({ error_message: err.message }, "Error updating invitation");
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const invitationId = Number(id);

  if (isNaN(invitationId)) {
    return NextResponse.json({ error: "Invalid invitation ID" }, { status: 400 });
  }

  try {
    const isAdmin = session.user.role === "ADMIN";
    const userId = Number(session.user.id);

    await invitationService.deleteInvitation(invitationId, { userId, isAdmin });

    logger.info({ invitationId, userId }, "Deleted invitation");
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    logger.error({ error_message: err instanceof Error ? err.message : "Internal Server Error" }, "Error deleting invitation");
    
    if (err instanceof Error && err.message === "Invitation not found") {
      return NextResponse.json({ error: err.message }, { status: 404 });
    }
    
    if (err instanceof Error && err.message === "Unauthorized to delete this invitation") {
      return NextResponse.json({ error: err.message }, { status: 403 });
    }

    return NextResponse.json({ error: err instanceof Error ? err.message : "Internal Server Error" }, { status: 500 });
  }
}
