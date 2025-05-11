import db from "@/configs/db-config";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
import bcrypt from "bcryptjs";
import logger from "@/lib/logger";

export async function PATCH(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { current_password, password } = await req.json();

  const { data: user, error: getError } = await db
    .from("users")
    .select("password")
    .eq("id", session.user.id)
    .single();

  if (getError || !user) {
    return Response.json(
      { field: "current_password", message: "User not found" },
      { status: 404 }
    );
  }

  const match = await bcrypt.compare(current_password, user.password);
  if (!match) {
    return Response.json(
      { field: "current_password", message: "Current password is incorrect" },
      { status: 400 }
    );
  }

  const newHashed = await bcrypt.hash(password, 10);

  const { data, error } = await db
    .from("users")
    .update({ password: newHashed })
    .eq("id", session.user.id);

  logger.info(data, "Password user updated");

  if (error) {
    logger.error({ error_message: error.message });
    return Response.json(
      { field: "password", message: "Failed to update password" },
      { status: 500 }
    );
  }

  return new Response("OK");
}
