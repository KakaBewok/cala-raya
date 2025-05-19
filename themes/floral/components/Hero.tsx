"use client";

import { Button } from "@/components/ui/button";
import { optivaground } from "@/fonts/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpened(true);
      setIsAnimating(false);
    }, 1000);
  };

  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpened]);

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          className="fixed inset-0 z-50 bg-cover bg-center flex items-center justify-center origin-top"
          style={{
            backgroundImage: `url('https://slametandfatma.wedding/galeri/4.jpg')`,
          }}
          initial={{ y: 0 }}
          animate={isAnimating ? { y: "-100%" } : { y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <section className="relative h-screen w-full max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/55 z-10 pointer-events-none" />

            <div className="relative z-20 h-full flex flex-col justify-between items-center text-center text-white">
              <h1 className="mt-32 text-7xl font-bold">SF</h1>
              <div
                className={`tracking-wider ${optivaground.className} mb-20 flex flex-col items-start justify-center`}
              >
                <p className={`text-sm mb-2`}>Kepada Yth.</p>
                <p className={`text-3xl mb-3`}>Family and Friends</p>
                <Button
                  size="lg"
                  onClick={handleOpenInvitation}
                  className="bg-orange-300 cursor-pointer"
                >
                  Buka Undangan
                </Button>
              </div>
            </div>
          </section>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Hero;
