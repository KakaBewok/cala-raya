"use client";

import Cover from "./Cover";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Greetings from "./Greetings";
import Brides from "./Brides";
import MusicButton from "./MusicButton";
import Grooms from "./Grooms";
import EventInfo from "./EventInfo";
import Gallery from "./Gallery";
import Rsvp from "./Rsvp";
import GiftInfo from "./GiftInfo";
import ClosingSection from "./ClosingSection";
import Footer from "./Footer";

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
      <Grooms />
      <EventInfo />
      <Gallery />
      <Rsvp />
      <GiftInfo />
      <ClosingSection />
      <Footer />
      <MusicButton isOpenInvitation={isOpenInvitation} />
    </main>
  );
}
