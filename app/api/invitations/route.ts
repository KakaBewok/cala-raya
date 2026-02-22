import { authOptions } from "@/configs/auth";
import logger from "@/lib/logger";
import prisma from "@/lib/prisma";
import { invitationService } from "@/services/InvitationService";
import { userService } from "@/services/UserService";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") ? parseInt(searchParams.get("page")!) : null;
  const pageSize = searchParams.get("pageSize") ? parseInt(searchParams.get("pageSize")!) : 10;

  try {
    const isAdmin = session.user.role === "ADMIN";

    if (page !== null) {
      const result = isAdmin
        ? await invitationService.getAllInvitationsPaginated(page, pageSize)
        : await invitationService.getUserInvitationsPaginated(Number(session.user.id), page, pageSize);
      
      return NextResponse.json(result, { status: 200 });
    }

    // Admin sees all invitations; regular users see only their own
    const invitations = isAdmin
      ? await invitationService.getAllInvitations()
      : await invitationService.getUserInvitations(Number(session.user.id));

    logger.info({ name: session.user.name }, "Get invitations");
    return NextResponse.json({ invitations }, { status: 200 });
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

    // ── ROLE-BASED USER ASSIGNMENT ──────────────────────────
    // Server-side enforcement: non-admin can NEVER assign to another user
    const resolvedUserId = await userService.resolveInvitationOwner(
      session.user.role || "USER",
      Number(session.user.id),
      data.user_id ? Number(data.user_id) : undefined
    );

    // Resolve theme: only admins can pick a theme, otherwise default is used
    const themeName = isAdmin ? (data.themes?.name || "default") : "default";
    const themeRecord = await prisma.themes.findFirst({
      where: { name: themeName },
      select: { id: true },
    });
    const themeId = themeRecord?.id ?? 1;

    // Build slug from nicknames
    const slug = `${data.host_one_nickname}-${data.host_two_nickname}`
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "-");

    const invitation = await invitationService.createInvitation({
      user_id: resolvedUserId,
      theme_id: themeId,
      theme_name: themeName,
      slug,
      host_one_name: data.host_one_name,
      host_one_nickname: data.host_one_nickname,
      host_one_additional_info: data.host_one_additional_info,
      host_one_social_media: data.host_one_social_media,
      host_two_name: data.host_two_name,
      host_two_nickname: data.host_two_nickname,
      host_two_additional_info: data.host_two_additional_info,
      host_two_social_media: data.host_two_social_media,
      hashtag: data.hashtag,
      // 7 event fields are intentionally omitted here —
      // InvitationService.applyEventDefaults() always overrides them.
      event_title: `The Wedding of ${data.host_one_nickname} & ${data.host_two_nickname} ❤️`,
      event_date: new Date().toISOString(),
      event_type: "wedding",
      location: "",
      location_url: "",
      location_detail: "",
      message: "",
      music: data.music,
      images: data.images,
      rundowns: data.rundowns,
      gift_infos: data.gift_infos,
      stories: data.stories,
      web_url: `${process.env.NEXT_PUBLIC_APP_URL_PROD!}`,
    });

    return NextResponse.json({ success: true, invitation }, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    logger.error({ error_message: err.message }, "Error creating invitation");
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
