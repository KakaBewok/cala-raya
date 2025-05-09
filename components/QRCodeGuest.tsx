"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useInvitation } from "@/hooks/use-invitation";
import { ArrowUp, QrCode } from "lucide-react";
import { useQRCode } from "next-qrcode";
import { useEffect, useState } from "react";

export default function QRCodeGuest({ bgColor }: { bgColor?: string }) {
  const { Canvas } = useQRCode();
  const { guest } = useInvitation();
  const [showInstruction, setShowInstruction] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowInstruction(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const AppUrl = process.env.NEXT_PUBLIC_APP_URL_PROD!;
  const url = `${AppUrl}/dashboard/check-in?id=${guest?.id}`;

  return (
    <div className="flex justify-center">
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <button
              className={`fixed top-2 left-2 z-50 ${
                bgColor ?? "bg-red-600"
              } text-white p-1 cursor-pointer rounded-full shadow opacity-55 hover:opacity-100 transition`}
            >
              <QrCode size={15} />
            </button>
            {showInstruction && (
              <div
                className={`flex gap-2 items-center justify-center fixed top-9 left-2 z-50 text-white ${
                  bgColor ?? "bg-red-500"
                } rounded-sm p-2 text-xs opacity-75`}
                data-aos="fade-right"
              >
                <ArrowUp size={13} />
                <p>QR untuk Check-in</p>
              </div>
            )}
          </div>
        </DialogTrigger>
        <DialogContent className="bg-neutral-950 border border-neutral-700">
          <DialogHeader>
            <DialogTitle className="text-xs text-neutral-300 font-medium">
              Tunjukan QR ini ke petugas untuk Check-in
            </DialogTitle>
          </DialogHeader>
          <div className="mx-auto">
            <Canvas
              text={url}
              options={{
                errorCorrectionLevel: "M",
                margin: 3,
                scale: 4,
                width: 180,
                color: {
                  dark: "#000",
                  light: "#fff",
                },
              }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
