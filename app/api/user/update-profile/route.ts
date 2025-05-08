import db from "@/configs/db-config";
import { getServerSession } from "next-auth";
import { authOptions } from "@/configs/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { name, email } = await req.json();

  const { error } = await db
    .from("users")
    .update({ name, email })
    .eq("id", session.user.id);

  if (error) {
    return NextResponse.json(
      { error: "Gagal update profile" },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
