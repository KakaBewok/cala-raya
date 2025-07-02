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
