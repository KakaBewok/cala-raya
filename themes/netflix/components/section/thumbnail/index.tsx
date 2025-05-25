"use client";

import { useInvitation } from "@/hooks/use-invitation";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";
import React, { useEffect } from "react";
import DetailInfo from "../detail-info";
import { findImage } from "@/utils/find-image";

const TagItem = ({ title }: { title: string }) => {
  return (
    <li className="rounded-sm bg-[#4D4D4D] px-2 py-1 text-xs text-white">
      {title}
    </li>
  );
};

export default function Thumbnail() {
  const { invitationData: data } = useInvitation();

  const [isOpenDetail, setIsOpenDetail] = React.useState<boolean>(false);

  useEffect(() => {
    const scrollThreshold = 10; // minimum scroll distance in pixels

    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsOpenDetail(true);
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch && touch.clientY < -scrollThreshold) {
        setIsOpenDetail(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  if (isOpenDetail) {
    return <DetailInfo />;
  }
  return (
    <div className="overflow-hidden mb-10 flex h-screen flex-col justify-end relative">
      <div className="relative h-[90vh] w-full">
        <Image
          src={findImage(data, "thumbnail")}
          alt="Hero background"
          fill
          priority
          className="object-contain object-center mx-auto z-0 w-full"
        />

        {/* <div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-t from-transparent via-black to-black z-10" /> */}

        {/* <div className="absolute bottom-0 left-0 w-full h-35 bg-gradient-to-b from-transparent via-black/60 to-black z-10" /> */}
      </div>

      <audio
        autoPlay
        src="/assets/music/netflix/opening-netflix.mp3"
        className="hidden"
      />
      <div className="w-full absolute bg-gradient-to-b from-transparent via-black to-black pt-2 pb-8 z-10">
        <div className="mb-3 space-y-2 px-5">
          <Image
            src={`/assets/images/netflix/NIKAHFIX.webp`}
            alt="NIKAHFIX"
            width={56}
            height={15}
          />
          <div>
            <h1 className="text-3xl leading-none font-bold">
              {data?.host_one_nickname} & {data?.host_two_nickname}: <br />
              Sebelum Hari H
            </h1>
          </div>
          <div>
            <div className="flex items-center gap-3">
              <span className="rounded-md bg-[#E50913] px-2 py-1 text-xs text-white">
                Coming Soon
              </span>
              <p className="text-sm">
                {formatDate(data?.event_date || null, true, "en-US")}
              </p>
            </div>
          </div>
          <div>
            <ul className="flex items-center gap-2">
              <TagItem title="#romantic" />
              <TagItem title="#getmarried" />
              <TagItem title="#family" />
              <TagItem title="#documenter" />
            </ul>
          </div>
        </div>
        <div className="w-full text-center">
          <button
            onClick={() => setIsOpenDetail(true)}
            className="w-full text-xl font-semibold uppercase"
          >
            See The Detail
          </button>
          <div className="rotate-180">
            <svg
              className="mx-auto mb-2 h-6 w-6 animate-bounce"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 8"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
