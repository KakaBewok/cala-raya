import db from "@/configs/db-config";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  const { data: existingUser } = await db
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existingUser) {
    return NextResponse.json(
      { error: "Email sudah terdaftar" },
      { status: 400 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const { error } = await db.from("users").insert([
    {
      email,
      password: hashedPassword,
      name,
    },
  ]);

  if (error) {
    return NextResponse.json({ error: "Gagal registrasi" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
