"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { findImage } from "@/utils/find-image";
import { useInvitation } from "@/hooks/use-invitation";
import { remineFares } from "@/fonts/fonts";

export default function BrideSection() {
  const { invitationData: data } = useInvitation();
  const animationRef = useRef(null);
  const lineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["start 22%", "start start"],
  });

  const { scrollYProgress: lineScrollY } = useScroll({
    target: lineRef,
    offset: ["start 70%", "start 67%"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["inset(12% 28% 23% 9%)", "inset(6% 14% 11% 5%)", "inset(0% 0% 0% 0%)"]
  );
  const rawLineHeight = useTransform(
    lineScrollY,
    [0, 0.5, 1],
    ["0px", "80px", "160px"]
  );

  const lineHeight = useSpring(rawLineHeight, {
    damping: 20,
    stiffness: 100,
  });

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
        <p
          className={`${remineFares.className} text-3xl font-normal text-gray-700 tracking-wide`}
          data-aos="zoom-in"
        >
          {data?.host_two_nickname.toLowerCase()}
        </p>
        <motion.div
          ref={lineRef}
          style={{ height: lineHeight }}
          className="w-px bg-gray-600 mt-10 ml-auto"
        />
      </motion.div>
    </section>
  );
}
