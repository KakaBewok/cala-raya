"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { findImage } from "@/utils/find-image";
import { useInvitation } from "@/hooks/use-invitation";

export default function BrideSection() {
  const { invitationData: data } = useInvitation();
  const animationRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["start 22%", "start 21%"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(12% 28% 23% 9%)", "inset(0% 0% 0% 0%)"]
  );

  //   const clipPath = useSpring(rawClipPath, {
  //     stiffness: 70, // Kekakuan pegas. Semakin kecil, semakin lembut.
  //     damping: 20,
  //   });

  return (
    <section
      ref={animationRef}
      className="border border-red-500 relative w-full min-h-screen bg-[#fdfaf6] flex items-center justify-center overflow-hidden"
    >
      <motion.div
        style={{ clipPath }}
        className="absolute inset-0 border border-blue-500 z-20"
      >
        <Image
          src={findImage(data, "brides")}
          alt="Brides"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      <motion.div className="absolute top-9 right-10 z-10 text-right">
        <p className="text-3xl font-normal text-gray-700 tracking-wide">
          {data?.host_two_nickname}
        </p>
        <div className="w-px h-40 bg-gray-600 mt-10 ml-auto" />{" "}
      </motion.div>
    </section>
  );
}
