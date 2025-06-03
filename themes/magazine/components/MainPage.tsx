"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Bismillah from "./Bismillah";
import BridesSection from "./BridesSection";
import Cover from "./Cover";
import EventInfo from "./EventInfo";
import GroomsSection from "./GroomsSection";
import MusicButton from "./MusicButton";
import VideoFrame from "./VideoFrame";

export default function MainPage({
  isOpenInvitation,
}: {
  isOpenInvitation: boolean;
}) {
  useEffect(() => {
    AOS.init({ duration: 1400, once: false, offset: 130 });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <main className="max-w-md mx-auto z-10 flex flex-col items-center justify-center">
      <Cover />
      <Bismillah />
      <BridesSection />
      <GroomsSection />
      <EventInfo />
      <VideoFrame />
      <MusicButton isOpenInvitation={isOpenInvitation} />
    </main>
  );
}
