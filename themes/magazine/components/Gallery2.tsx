"use client";

import { poppins } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import Image from "next/image";
import SwipeHandIcon from "./SwipeHandIcon";
import { findImage } from "@/utils/find-image";

const Gallery = () => {
  const { invitationData: data } = useInvitation();
  const images = data?.images ?? [];
  const coverImage = findImage(data, "closing");

  const eventDate = new Date(data?.event_date ?? "");
  const day = String(eventDate.getDate()).padStart(2, "0");
  const month = String(eventDate.getMonth() + 1).padStart(2, "0");
  const year = String(eventDate.getFullYear()).slice(-2);

  return (
    <div className="h-screen w-full bg-[#f8f5ef] flex flex-col items-center justify-center relative overflow-hidden !overflow-x-scroll">
      {/* Date Vertical Right */}
      <div
        className={`${poppins.className} absolute top-1/4 right-[11%] text-neutral-600 text-3xl leading-[2.5rem] font-medium z-10`}
      >
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
      </div>

      {/* Swipe Icon */}
      <div className="absolute top-[50%] right-4 -translate-y-1/2 z-10 h-14 w-14">
        <SwipeHandIcon />
      </div>

      {/* <div className="relative w-56 h-56 z-0">
        <Image
          src={coverImage}
          alt="Couple"
          fill
          className="object-cover object-center"
        />
      </div> */}

      {/* Scrollable Gallery */}
      {/* <div className="w-full px-4 py-6 overflow-x-scroll scrollbar-hide">
        <div className="flex gap-4 w-fit">
          <div className="w-56 h-56 z-0">
            <Image
              src={coverImage}
              alt="Couple"
              fill
              className="object-cover object-center"
            />
          </div>
          {images.map((img, index) => (
            <div
              key={index}
              className="shrink-0 rounded-xl relative"
              style={{
                width: `${150 + (index % 3) * 40}px`, // Random width: 150, 190, 230px
                height: `${180 + (index % 4) * 30}px`, // Random height: 180, 210, 240, 270px
              }}
            >
              <Image
                src={img.url}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div> */}

      <div className="w-full px-4 py-6 overflow-x-auto">
        <div className="flex flex-row gap-4 w-fit">
          {/* Foto pertama */}
          <div
            className=" relative rounded-xl"
            style={{ width: "224px", height: "224px" }}
          >
            <Image
              src={coverImage}
              alt="Couple"
              fill
              className="object-cover object-center rounded-xl"
            />
          </div>

          {/* Foto gallery */}
          {images.map((img, index) => (
            <div
              key={index}
              className="shrink-0 relative rounded-xl"
              style={{
                width: `${150 + (index % 3) * 40}px`,
                height: `${180 + (index % 4) * 30}px`,
              }}
            >
              <Image
                src={img.url}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
