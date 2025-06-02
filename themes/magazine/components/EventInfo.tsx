"use client";

import { useInvitation } from "@/hooks/use-invitation";
import { findImage } from "@/utils/find-image";
import Image from "next/image";
import { remineFares } from "@/fonts/fonts";

const EventInfo = () => {
  const { invitationData: data } = useInvitation();

  return (
    <section className="relative w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <Image
        src={findImage(data, "event-info")}
        alt="Event info"
        fill
        className="object-cover object-center z-0"
        priority
      />
      <div
        className="absolute z-20 inset-x-10 inset-y-7 bg-orange-50 flex flex-col justify-start items-center text-white"
        data-aos="fade-up"
      >
        <div className="border border-red-500 p-6 w-full text-center flex flex-col justify-center items-center">
          <div
            className={`border border-blue-500 ${remineFares.className}text-2xl font-medium text-neutral-700 w-14`}
          >
            AKAD NIKAH
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
