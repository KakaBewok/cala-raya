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
import RSVP from "./Rsvp";
import GiftInfo from "./GiftInfo";
import ClosingSection from "./ClosingSection";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Greetings from "./Greetings";

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
    <>
      <main
        className={`max-w-md mx-auto z-10 flex flex-col items-center justify-center`}
      >
        <Cover />
        <Greetings />
        <Bismillah />
        <BridesSection />
        <GroomsSection />
        <EventInfo />
        <Gallery />
        <RSVP />
        <GiftInfo />
        <ClosingSection />
        <Footer />
        <MusicButton isOpenInvitation={isOpenInvitation} />
      </main>
    </>
  );
}
