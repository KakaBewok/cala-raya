"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Bismillah from "./Bismillah";
import Brides from "./Brides";
import Cover from "./Cover";
import EventInfo from "./EventInfo";
import Grooms from "./Grooms";
import MusicButton from "./MusicButton";
import RSVP from "./Rsvp";
import GiftInfo from "./GiftInfo";
import ClosingSection from "./ClosingSection";
import Footer from "./Footer";
import Greetings from "./Greetings";
import Gallery from "./Gallery";

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
    <main className="max-w-md mx-auto z-10 flex flex-col items-center justify-center overflow-hidden">
      <Cover />
      <Greetings />
      <Bismillah />
      <Brides />
      <Grooms />
      <EventInfo />
      <Gallery />
      <RSVP />
      <GiftInfo />
      <ClosingSection />
      <Footer />
      <MusicButton isOpenInvitation={isOpenInvitation} />
    </main>
  );
}
