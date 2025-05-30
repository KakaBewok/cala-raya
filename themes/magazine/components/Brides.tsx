"use client";

import { optivaground } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { findImage } from "@/utils/find-image";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Brides = () => {
  const { invitationData: data } = useInvitation();

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "center center"],
  });

  const width = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["75vw", "100vw", "100vw"]
  );

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden"
    >
      <motion.div
        className="absolute h-full z-0 left-1/2 -translate-x-1/2"
        style={{ width }}
      >
        <Image
          src={findImage(data, "brides")}
          alt="Brides photo"
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

export default Brides;
