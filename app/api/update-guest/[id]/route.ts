import db from "@/configs/db-config";
import { NextRequest, NextResponse } from "next/server";
import logger from "@/lib/logger";

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await req.json();

  if (!id || !body?.name) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const { error } = await db
    .from("guests")
    .update({
      name: body.name,
      phone_number: body.phone_number,
      address: body.address,
      notes: body.notes,
    })
    .eq("id", id);

  if (error) {
    logger.error({ error_message: error.message, guest: body.name });
    return NextResponse.json(
      { message: "Failed to update", error },
      { status: 500 }
    );
  }
  logger.info({ guest: body.name }, "guest updated");
  return NextResponse.json({ message: "Category updated successfully" });
}
