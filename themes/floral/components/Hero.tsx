"use client";

import { Button } from "@/components/ui/button";
import { optivaground } from "@/fonts/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Hero = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(true);
      setIsAnimating(false);
    }, 1000);
  };

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          className="max-w-md mx-auto fixed inset-0 z-50 flex items-center justify-center origin-top overflow-hidden"
          initial={{ y: 0 }}
          animate={isAnimating ? { y: "-100%" } : { y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image
            src="https://slametandfatma.wedding/galeri/4.jpg"
            alt="Hero background"
            fill
            priority
            className="object-cover object-center z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55 z-10 pointer-events-none" />

          <div className="relative h-screen z-20 flex flex-col justify-between items-center text-center text-white">
            <h1 className="mt-28 text-7xl font-bold">SF</h1>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className={`tracking-wider ${optivaground.className} mb-20 flex flex-col items-start justify-center`}
            >
              <p className={`text-sm mb-2`}>Kepada Yth.</p>
              <p className={`text-3xl mb-3`}>Family and Friends</p>
              <Button
                size="lg"
                onClick={handleOpenInvitation}
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
};

export default Hero;
