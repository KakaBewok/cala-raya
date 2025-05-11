import db from "@/configs/db-config";
import { encode } from "@/utils/hash";
import Data, { Guest } from "@/types/invitation-data";
import { NextRequest, NextResponse } from "next/server";
import logger from "@/lib/logger";
import { formatDate } from "@/utils/format-date";
import { formatTime } from "@/utils/format-time";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { invitation_id } = body;

    if (!invitation_id) {
      return NextResponse.json(
        { error: "invitation_id is required" },
        { status: 400 }
      );
    }

    const { data: invitationData, error: invitationError } = await db
      .from("invitations")
      .select(
        `
        *,
        themes (*),
        music (*),
        videos (*),
        images (*),
        gift_infos (*),
        rundowns (*),
        guests (*),
        stories (*),
        rsvps (*)
      `
      )
      .eq("id", invitation_id)
      .single();

    if (invitationError || !invitationData) {
      return NextResponse.json(
        { error: "Invitation not found" },
        { status: 404 }
      );
    }

    const data: Data = invitationData;
    const results = data?.guests?.map((guest) => {
      return createTemplateMessage(data, guest);
    });

    logger.info(data.event_title, "Messages generated");
    return NextResponse.json({
      message: "Templates generated successfully",
      data: results,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    logger.error({ error_message: error.message });
    console.error("Generate templates error: ", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}

const createTemplateMessage = (data: Data, guest: Guest) => {
  const token = encode([data.id, guest.id!]);
  const link = `${data.web_url}/${data.slug}?id=${token}`;

  const startTime = formatTime(data.rundowns?.[0]?.start_time || null);
  const endTimeRaw = data.rundowns?.[0]?.end_time;
  const timeZone = data.rundowns?.[0]?.time_zone ?? "WIB";
  const location = data.rundowns?.[0]?.location ?? "-";
  const timeText = endTimeRaw
    ? `${startTime} ${timeZone} s/d ${formatTime(endTimeRaw)} ${timeZone}`
    : `${startTime} ${timeZone} s/d selesai`;

  const template = `
Yth. Bapak/Ibu/Saudara/i
${guest.name}
di Tempat

Dengan segala kerendahan hati, kami mengundang Bapak/Ibu/Saudara/i dan teman-teman untuk menghadiri acara

${data.event_title}

Pada:
🗓️ Tanggal : ${formatDate(data.event_date)}
🕛 Pukul   : ${timeText}
📍 Lokasi  : ${location}

Undangan lengkap bisa diakses di link berikut:
${link}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir di acara kami
Mohon maaf perihal undangan hanya dibagikan melalui pesan ini

Terima kasih banyak atas perhatiannya 💕
                          `;

  return {
    to: guest.name,
    template: template.trim(),
  };
};
