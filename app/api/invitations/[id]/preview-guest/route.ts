import { authOptions } from "@/configs/auth";
import { invitationService } from "@/services/InvitationService";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

/**
 * GET /api/invitations/[id]/preview-guest
 * Returns the default "Calaraya" guest for preview URL generation.
 * Creates the guest if it doesn't exist yet (idempotent).
 */
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
    const guest = await invitationService.getPreviewGuest(invitationId);
    return NextResponse.json({ guest }, { status: 200 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("Error fetching preview guest:", err);
    return NextResponse.json(
      { error: "Failed to fetch preview guest" },
      { status: 500 }
    );
  }
}
