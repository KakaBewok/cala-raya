"use client";

import { useInvitation } from "@/context/InvitationDataContext";
import { useQRCode } from "next-qrcode";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function QRCodeGuest() {
  const { Canvas } = useQRCode();
  const { guest } = useInvitation();

  const AppUrl = process.env.NEXT_PUBLIC_APP_URL_PROD!;
  const url = `${AppUrl}/dashboard/check-in?id=${guest?.id}`;
  console.log(url);

  return (
    <div className="flex flex-col items-center space-y-2" data-aos="zoom-in">
      <Accordion
        type="single"
        collapsible
        className="border border-neutral-700 max-w-sm mx-auto px-4 rounded-sm"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="w-full">
            <p className="text-sm text-neutral-400">Scan untuk check-in</p>
          </AccordionTrigger>
          <AccordionContent>
            <Canvas
              text={url}
              options={{
                errorCorrectionLevel: "M",
                margin: 3,
                scale: 4,
                width: 155,
                color: {
                  dark: "#000",
                  light: "#fff",
                },
              }}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
