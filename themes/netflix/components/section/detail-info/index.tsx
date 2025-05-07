"use client";

import { useInvitation } from "@/context/InvitationDataContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
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
import Countdown from "../countdown";
import AutoScrollToggle from "@/components/AutoScrollToggle";

export default function DetailInfo() {
  const { invitationData: data } = useInvitation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init({ duration: 1400, once: true, offset: 300 });

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, []);

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
        <Countdown />
        <Location />
        <Gift />
        <WishSection />
      </div>
      <Footer />
      <AutoScrollToggle />
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
