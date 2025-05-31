"use client";

import { optivaground } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { findImage } from "@/utils/find-image";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const Cover = () => {
  const { invitationData: data } = useInvitation();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start -2%"],
  });

  // Transformasi ukuran
  const rawWidth = useTransform(scrollYProgress, [0, 1], ["85vw", "100vw"]);
  const rawHeight = useTransform(scrollYProgress, [0, 1], ["92vh", "100vh"]);
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["grayscale(100%)", "grayscale(0%)"]
  );

  // Smooth transisi
  const width = useSpring(rawWidth, { stiffness: 100, damping: 25 });
  const height = useSpring(rawHeight, { stiffness: 100, damping: 25 });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden"
    >
      <motion.div className="" style={{ width, height, filter }}>
        <Image
          src={findImage(data, "cover")}
          alt="Cover photo"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      <div className="absolute inset-10 border border-[#c6a886] z-10 pointer-events-none" />
      <div className="absolute inset-11 border border-[#c6a886] z-10 pointer-events-none" />

      {/* Content box */}
      <div
        className="absolute bottom-0 z-20 w-full bg-gradient-to-t from-white/80 via-white/60 to-transparent text-right px-6 py-8 backdrop-blur-sm"
        data-aos="zoom-in"
        data-aos-offset={120}
      >
        <h2
          className={`${optivaground.className} tracking-widest text-2xl text-[#fff] drop-shadow-md text-shadow-sm`}
        >
          {data?.host_two_name}
        </h2>
        <p className="mt-2 text-sm sm:text-base text-white drop-shadow-md font-light">
          {data?.host_two_additional_info}
        </p>
      </div>

      {/* flower */}
      <Image
        src="/assets/images/floral/bunga2.webp"
        alt="Bunga kiri"
        width={120}
        height={120}
        className="absolute bottom-0 left-0 z-30"
      />
    </section>
  );
};

export default Cover;
