import db from "@/configs/db-config";
import { NextRequest, NextResponse } from "next/server";
import logger from "@/lib/logger";

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const { ids } = body;

  if (!Array.isArray(ids) || ids.length === 0) {
    return NextResponse.json({ message: "No IDs provided" }, { status: 400 });
  }

  const { error } = await db.from("guests").delete().in("id", ids);

  if (error) {
    logger.error({ error_message: error.message, guest_ids: ids });
    return NextResponse.json(
      { message: "Failed to delete guests", error },
      { status: 500 }
    );
  }

  logger.info({ guest_ids: ids }, "guests deleted");
  return NextResponse.json({ message: "Guests deleted successfully" });
}
