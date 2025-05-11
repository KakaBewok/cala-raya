import db from "@/configs/db-config";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import logger from "@/lib/logger";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  const { data: existingUser } = await db
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existingUser) {
    return NextResponse.json(
      { error: "Email is already registered" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { data, error } = await db.from("users").insert([
    {
      email,
      password: hashedPassword,
      name,
      role: "BASIC",
    },
  ]);

  if (error) {
    logger.error({ error_message: error.message });
    return NextResponse.json({ error: "Registration Failed" }, { status: 500 });
  }

  logger.info(data, "User created");

  return NextResponse.json({ success: true });
}
