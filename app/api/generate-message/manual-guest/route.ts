import { authOptions } from "@/configs/auth";
import db from "@/configs/db-config";
import logger from "@/lib/logger";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface RequestBody {
  guests: string[];
  invitationId: number;
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body: RequestBody = await req.json();

  if (!Array.isArray(body.guests) || !body.invitationId) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const guests = body.guests.map((name) => ({
    name,
    invitation_id: body.invitationId,
  }));

  const { data, error } = await db.from("guests").insert(guests);

  if (error) {
    logger.error({ error_message: error.message });
    console.error("Insert guest data error: ", error);
    return NextResponse.json(
      { error: "Failed saving guests" },
      { status: 500 }
    );
  }

  logger.info(data, "Manual guests inserted");

  return NextResponse.json({ success: true, data });
}
