"use client";

import Cover from "./Cover";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Bismillah from "./Bismillah";
import BridesSection from "./BridesSection";
import MusicButton from "./MusicButton";

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
      {/* <Greetings /> */}
      <MusicButton isOpenInvitation={isOpenInvitation} />
    </main>
  );
}
