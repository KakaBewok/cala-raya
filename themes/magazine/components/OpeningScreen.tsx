"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInvitation } from "@/hooks/use-invitation";
import { findImage } from "@/utils/find-image";
import Image from "next/image";
import { optivaground } from "@/fonts/fonts";
import { Button } from "@/components/ui/button";

export default function OpeningScreen({ onOpen }: { onOpen: () => void }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { invitationData: data, guest } = useInvitation();

  const initial1 = data?.host_one_nickname?.charAt(0)?.toUpperCase() ?? "";
  const initial2 = data?.host_two_nickname?.charAt(0)?.toUpperCase() ?? "";

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      onOpen(); // memberi tahu induk bahwa sudah terbuka
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 z-40 bg-white flex flex-col items-center justify-center shadow-xl rounded-xl"
        >
          <Image
            src={findImage(data, "hero")}
            alt="Hero background"
            fill
            priority
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55 z-10 pointer-events-none" />

          <div className="relative h-screen z-20 flex flex-col justify-between items-center text-center text-white">
            <h1 className="text-7xl font-serif mt-28">
              • {initial1}
              {initial2} •
            </h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={`tracking-wider ${optivaground.className} mb-20 flex flex-col items-start justify-center`}
            >
              <p className={`text-sm mb-2`}>Kepada Yth.</p>
              <p className={`text-3xl mb-3`}>{guest?.name}</p>
              <Button
                size="lg"
                onClick={handleClick}
                className="bg-orange-300 hover:bg-orange-400 cursor-pointer"
              >
                Buka Undangan
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
