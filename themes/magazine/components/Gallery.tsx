"use client";

import { poppins } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { findImage } from "@/utils/find-image";
import Image from "next/image";
import SwipeHandIcon from "./SwipeHandIcon";

const Gallery = () => {
  const { invitationData: data } = useInvitation();
  const coverImage = findImage(data, "closing");

  const eventDate = new Date(data?.event_date ?? "");
  const day = String(eventDate.getDate()).padStart(2, "0");
  const month = String(eventDate.getMonth() + 1).padStart(2, "0");
  const year = String(eventDate.getFullYear()).slice(-2);

  return (
    <div className="h-screen w-full bg-[#f8f5ef] flex flex-col items-center justify-center relative border border-red-500">
      {/* Date Vertical Right */}
      <div
        className={`${poppins.className} absolute top-1/4 right-11 text-neutral-600 text-3xl leading-[2.5rem] font-medium z-10`}
      >
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>

      <div className="absolute top-[50%] right-4 -translate-y-1/2 z-10 h-14 w-14">
        <SwipeHandIcon />
      </div>

      {/* Image */}
      <div className="relative w-56 h-56 z-0">
        <Image
          src={coverImage}
          alt="Couple"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Close Button */}
      {/* <div className="">
        <button className="px-6 py-2 rounded-full text-xl text-white font-medium bg-gray-400">
          X
        </button>
      </div> */}
    </div>
  );
};

export default Gallery;
