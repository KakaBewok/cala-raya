"use client";

import { useInvitation } from "@/context/InvitationDataContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import SongButton from "../../ui/song-button";
import BreakingNews from "../breaking-news";
import Bridegroom from "../bride-groom";
import Footer from "../footer";
import Gift from "../gift";
import Location from "../location";
import LoveStory from "../love-story";
import OurGallery from "../our-gallery";
import TitleInfo from "../title-info";
import WishSection from "../wish";
import { ChevronsDown, Pause } from "lucide-react";
// import Countdown from "../countdown";

export default function DetailInfo() {
  const { invitationData: data } = useInvitation();

  const scrollAnimationId = useRef<number | null>(null);
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false); // status scroll
  const [showInstruction, setShowInstruction] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowInstruction(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1400, once: true, offset: 300 });

    setTimeout(() => {
      AOS.refresh();
    }, 100);

    const autoScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.scrollY;

      if (scrollHeight <= scrollPosition) {
        // sudah sampai bawah, stop
        setIsAutoScroll(false);
        return;
      }

      window.scrollBy(0, 20);
      scrollAnimationId.current = requestAnimationFrame(autoScroll);
    };

    if (isAutoScroll) {
      autoScroll();
    }

    return () => {
      // cleanup saat unmount
      if (scrollAnimationId.current) {
        cancelAnimationFrame(scrollAnimationId.current);
      }
    };
  }, [isAutoScroll]); // kalau isAutoScroll berubah, trigger ulang

  const toggleAutoScroll = () => {
    if (isAutoScroll) {
      // kalau sedang auto scroll → stop
      if (scrollAnimationId.current) {
        cancelAnimationFrame(scrollAnimationId.current);
      }
      setIsAutoScroll(false);
    } else {
      setIsAutoScroll(true);
    }
  };

  return (
    <div className="space-y-5 pt-4 pb-10 relative">
      <video
        className="w-full rounded-xs"
        autoPlay
        muted
        playsInline
        preload="auto"
      >
        <source src={data?.videos?.[0].url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="space-y-3 px-4">
        <TitleInfo />
        <BreakingNews />
        <Bridegroom />
        <LoveStory />
        <OurGallery />
        {/* <Countdown /> */}
        <Location />
        <Gift />
        <WishSection />
      </div>
      <Footer />
      <button
        onClick={toggleAutoScroll}
        className={`fixed top-4 right-4 z-50 bg-red-600 text-white p-1 cursor-pointer rounded-full shadow opacity-55 hover:opacity-100 transition ${
          !isAutoScroll ? "animate-bounce" : ""
        }`}
      >
        {isAutoScroll ? <Pause size={13} /> : <ChevronsDown size={13} />}
      </button>
      {showInstruction && (
        <div className="fixed top-15 right-4 z-50 text-white bg-red-500 rounded-sm p-2 text-xs opacity-80">
          <p>Klik tombol di atas untuk aktifkan Auto Scroll</p>
        </div>
      )}
      <SongButton />
    </div>
  );
}

// export default function DetailInfo() {
//   const { invitationData: data } = useInvitation();

//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" }); // or 'auto'

//     AOS.init({ duration: 1400, once: true, offset: 300 });
//     setTimeout(() => {
//       AOS.refresh();
//     }, 100);

//     const autoScroll = () => {
//       const scrollHeight = document.documentElement.scrollHeight;
//       const scrollPosition = window.innerHeight + window.scrollY;

//       if (scrollHeight === scrollPosition) {
//         return;
//       }
//       window.scrollBy(0, 20);
//       requestAnimationFrame(autoScroll);
//     };
//     autoScroll();
//   }, []);

//   return (
//     <div className="space-y-5 pt-4 pb-10">
//       <video
//         className="w-full rounded-xs"
//         autoPlay
//         muted
//         playsInline
//         preload="auto"
//       >
//         <source src={data?.videos?.[0].url} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//       <div className="space-y-3 px-4">
//         <TitleInfo />
//         <BreakingNews />
//         <Bridegroom />
//         <LoveStory />
//         <OurGallery />
//         {/* <Countdown />  */}
//         <Location />
//         <Gift />
//         <WishSection />
//       </div>
//       <Footer />
//       <SongButton />
//     </div>
//   );
// }
