import db from "@/configs/db-config";
import { NextResponse } from "next/server";
import logger from "@/lib/logger";

export async function POST(req: Request) {
  const body = await req.json();

  if (!Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid data format" }, { status: 400 });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const guests = body.map((guest: any) => ({
    name: guest.name,
    invitation_id: guest.invitationId,
  }));

  const { data, error } = await db.from("guests").insert(guests);

  if (error) {
    logger.error({ error_message: error.message });
    console.error("Insert error:", error);
    return NextResponse.json(
      { error: "Failed saveing guests" },
      { status: 500 }
    );
  }

  logger.info(data, "Manual guests inserted");

  return NextResponse.json({ success: true, data });
}
