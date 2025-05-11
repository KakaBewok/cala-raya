import db from "@/configs/db-config";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
import { NextResponse } from "next/server";
import logger from "@/lib/logger";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, email } = await req.json();

  const { data, error } = await db
    .from("users")
    .update({ name, email })
    .eq("id", session.user.id);

  if (error) {
    logger.error({ error_message: error.message });
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }

  logger.info(data, "Profile updated");

  return NextResponse.json(
    { message: "Profile updated successfully" },
    { status: 200 }
  );
}
