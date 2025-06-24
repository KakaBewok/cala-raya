"use client";

import { useInvitation } from "@/hooks/use-invitation";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Bismillah from "./Bismillah";
import Brides from "./Brides";
import Cover from "./Cover";
import EventInfo from "./EventInfo";
import Grooms from "./Grooms";
import MusicButton from "./MusicButton";
import VideoFrame from "./VideoFrame";
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
  const { invitationData: data } = useInvitation();

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
      <Bismillah />
      <Brides />
      <Grooms />
      <EventInfo />
      <Gallery />
      {Array.isArray(data?.videos) &&
        data.videos.length > 0 &&
        data.videos[0].url && <VideoFrame />}
      <RSVP />
      <GiftInfo />
      <ClosingSection />
      <Footer />
      <MusicButton isOpenInvitation={isOpenInvitation} />
    </main>
  );
}
