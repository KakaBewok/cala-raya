import db from "@/configs/db-config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data: themes, error } = await db
      .from("themes")
      .select("*")
      .eq("is_active", true)
      .order("name", { ascending: true });

    if (error) throw error;

    return NextResponse.json({ themes });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
