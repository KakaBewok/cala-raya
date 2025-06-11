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
      <div className="absolute bottom-0 z-20 w-full bg-gradient-to-t from-white/80 via-white/60 to-transparent text-right px-6 py-8 backdrop-blur-sm">
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
      <Image
        src="/assets/images/floral/16.webp"
        alt="Bunga kiri"
        width={100}
        height={100}
        className="swing-left-fast absolute -bottom-10 -left-5 z-30 transform rotate-12"
      />
      <Image
        src="/assets/images/floral/28.webp"
        alt="Bunga kiri"
        width={100}
        height={100}
        className="swing-right-fast absolute bottom-5 -left-5 z-20 transform rotate-[32deg]"
      />
      <Image
        src="/assets/images/floral/12.webp"
        alt="Bunga kiri"
        width={80}
        height={80}
        className="swing-left-slow absolute -bottom-16 left-14 z-20 transform rotate-[32deg]"
      />
    </section>
  );
};

export default Brides;
