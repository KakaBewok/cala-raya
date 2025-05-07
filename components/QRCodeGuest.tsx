"use client";

// import db from "@/configs/db-config";
import { useInvitation } from "@/context/InvitationDataContext";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect } from "react";

export default function QRCodeGuest() {
  const { guest, invitationData } = useInvitation();
  console.log(guest);
  console.log(invitationData?.id);

  const guestId = invitationData?.guests?.find(
    (guestItem) => guestItem.name == guest
  )?.id;
  console.log("guest id: ", guestId);

  useEffect(() => {
    const fetchGuestData = async () => {
      //   const { data, error } = await db
      //     .from("rsvps")
      //     .select("guest_name, message, icon_color")
      //     .eq("invitation_id", invitationData?.id);
      //   if (error) console.error("Error fetching data: ", error);
      //   else setData(data);
    };

    fetchGuestData();
  }, []);

  const AppUrl = process.env.NEXT_PUBLIC_APP_URL_PROD!;
  const url = `${AppUrl}/dashboard/check-in?id=${guestId}`;

  console.log(url);

  return (
    <div className="flex flex-col items-center space-y-2">
      <QRCodeCanvas value={url} size={160} level="H" />
      <p className="text-xs text-center text-gray-500">Scan untuk check-in</p>
    </div>
  );
}
