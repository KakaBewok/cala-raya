import { authOptions } from "@/configs/auth";
import logger from "@/lib/logger";
import { invitationService } from "@/services/InvitationService";
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

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;

  try {
    const isAdmin = session.user.role === "ADMIN";
    const userId = Number(session.user.id);

    // Verify invitation ownership
    const invitation = await invitationService.getInvitationById(invitationId);
    if (!invitation) {
      return NextResponse.json({ error: "Invitation not found" }, { status: 404 });
    }

    if (!isAdmin && invitation.user_id !== userId) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { data: guests, total } = await invitationService.getPaginatedGuests(
      invitationId,
      page,
      pageSize
    );

    return NextResponse.json({
      data: guests,
      totalCount: total,
      currentPage: page,
      totalPages: Math.ceil(total / pageSize),
      pageSize,
    });
  } catch (err: unknown) {
    logger.error({ error_message: err instanceof Error ? err.message : "Internal Server Error" }, "Error fetching paginated guests");
    return NextResponse.json({ error: err instanceof Error ? err.message : "Internal Server Error" }, { status: 500 });
  }
}
