import { optivaground } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { findImage } from "@/utils/find-image";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Brides = () => {
  const { invitationData: data } = useInvitation();
  const animationRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: animationRef,
    offset: ["start center", "center center"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["inset(2% 11% 15.16%)", "inset(1% 6% 12.13%)", "inset(0% 0% 0%)"]
  );

  return (
    <section
      ref={animationRef}
      className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-0 z-0" style={{ clipPath }}>
        <Image
          src={findImage(data, "brides")}
          alt="Brides photo"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>

      {/* double line */}
      <div className="absolute inset-10 border border-[#c6a886] z-10 pointer-events-none" />
      <div className="absolute inset-11 border border-[#c6a886] z-10 pointer-events-none" />

      {/* Content box */}
      <div
        className="absolute bottom-0 z-20 w-full bg-gradient-to-t from-white/80 via-white/60 to-transparent text-right px-6 py-8 backdrop-blur-sm"
        data-aos="fade-up"
        data-aos-offset={120}
      >
        <h2
          className={`${optivaground.className} tracking-widest text-2xl text-[#fff] drop-shadow-sm`}
        >
          {data?.host_two_name}
        </h2>
        <p className="mt-2 text-xs font-medium text-white">
          {data?.host_two_additional_info}
        </p>
      </div>

      {/* flower */}
      {/* <Image
        src="/assets/images/floral/bunga2.webp"
        alt="Bunga kiri"
        width={120}
        height={120}
        className="absolute bottom-0 left-0 z-30"
      /> */}
    </section>
  );
};

export default Brides;
