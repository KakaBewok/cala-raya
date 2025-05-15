import { authOptions } from "@/configs/auth";
import db from "@/configs/db-config";
import logger from "@/lib/logger";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { invitationId, template } = await req.json();

  if (!invitationId || !template) {
    return NextResponse.json(
      { error: "Missing invitationId or template" },
      { status: 500 }
    );
  }

  const { error } = await db
    .from("invitations")
    .update({ message_template: template })
    .eq("user_id", session.user.id)
    .eq("id", invitationId);

  if (error) {
    logger.error({ error_message: error.message });
    console.error("Update template error:", error);
    return NextResponse.json(
      { error: "Failed to update template" },
      { status: 500 }
    );
  }

  logger.info("Template updated successfully");
  return NextResponse.json(
    { message: "Template updated successfully" },
    { status: 200 }
  );
}
