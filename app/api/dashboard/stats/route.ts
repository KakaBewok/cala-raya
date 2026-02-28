import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
import { invitationService } from "@/services/InvitationService";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = Number(session.user.id);
    const isAdmin = session.user.role?.toUpperCase() === "ADMIN";

    // If admin, they can see all stats. If regular user, only their own.
    const stats = await invitationService.getGlobalStatistics(isAdmin ? undefined : userId);

    return NextResponse.json(stats);
  } catch (error: unknown) {
    console.error("Error fetching dashboard statistics:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
