import db from "@/configs/db-config";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  if (!id) {
    return NextResponse.json({ message: "Invalid ID" }, { status: 400 });
  }

  const { error } = await db.from("guests").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }

  return NextResponse.json(
    { message: "Guest deleted successfully" },
    { status: 200 }
  );
}
