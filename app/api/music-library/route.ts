import db from "@/configs/db-config";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data: music, error } = await db
      .from("music")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.warn("Could not fetch from music, using fallback: ", error.message);
      const fallbackMusic = [
        { id: 1, title: "A Thousand Years", artist: "Christina Perri", url: "https://res.cloudinary.com/dz7qsz9qy/video/upload/v1707534567/wedding/a-thousand-years.mp3" },
        { id: 2, title: "Can't Help Falling in Love", artist: "Elvis Presley", url: "https://res.cloudinary.com/dz7qsz9qy/video/upload/v1707534567/wedding/cant-help-falling-in-love.mp3" },
        { id: 3, title: "Perfect", artist: "Ed Sheeran", url: "https://res.cloudinary.com/dz7qsz9qy/video/upload/v1707534567/wedding/perfect.mp3" },
        { id: 4, title: "Beautiful in White", artist: "Shane Filan", url: "https://res.cloudinary.com/dz7qsz9qy/video/upload/v1707534567/wedding/beautiful-in-white.mp3" },
        { id: 5, title: "Marry Me", artist: "Train", url: "https://res.cloudinary.com/dz7qsz9qy/video/upload/v1707534567/wedding/marry-me.mp3" },
      ];
      return NextResponse.json({ music: fallbackMusic });
    }

    return NextResponse.json({ music });
  } catch (err) {
    return NextResponse.json({ music: [] }, { status: 500 });
  }
}
