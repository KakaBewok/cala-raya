"use client";

import { useInvitation } from "@/context/InvitationDataContext";
import { useQRCode } from "next-qrcode";

export default function QRCodeGuest() {
  const { Canvas } = useQRCode();
  const { guest } = useInvitation();

  const AppUrl = process.env.NEXT_PUBLIC_APP_URL_PROD!;
  const url = `${AppUrl}/dashboard/check-in?id=${guest?.id}`;
  console.log(url);

  return (
    <div className="flex flex-col items-center space-y-2">
      <Canvas
        text={url}
        options={{
          errorCorrectionLevel: "M",
          margin: 3,
          scale: 4,
          width: 200,
          color: {
            dark: "#000",
            light: "#fff",
          },
        }}
      />
      <p className="text-xs text-center text-gray-500">Scan untuk check-in</p>
    </div>
  );
}
