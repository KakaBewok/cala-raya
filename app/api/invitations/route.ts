import db from "@/configs/db-config";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
import { NextResponse } from "next/server";
import logger from "@/lib/logger";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data, error } = await db
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
      .eq("user_id", session.user.id);

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
