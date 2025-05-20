"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import MainPage from "./components/MainPage";
import MusicButton from "./components/MusicButton";

export default function InvitationPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    AOS.init({ duration: 1400, once: true, offset: 300 });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

  return (
    <>
      <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
      <MainPage />
      <MusicButton isOpen={isOpen} />
    </>
  );
}
