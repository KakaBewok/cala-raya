import db from "@/configs/db-config";
import { NextRequest, NextResponse } from "next/server";
import logger from "@/lib/logger";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  if (!id) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  const { error } = await db.from("guests").delete().eq("id", id);

  if (error) {
    logger.error({ error_message: error.message, guest_id: id });
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  logger.info({ guest_id: id }, "guest deleted");
  return NextResponse.json(
    { message: "Guest deleted successfully" },
    { status: 200 }
  );
}
