"use client";

import Cover from "./Cover";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Greetings from "./Greetings";
import Brides from "./Brides";
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
      <Greetings />
      <Brides />
      <MusicButton isOpenInvitation={isOpenInvitation} />
    </main>
  );
}
