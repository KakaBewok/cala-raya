'use client";';

// import data from "../data/config.json";
import { useSearchParams } from "next/navigation";
//
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});
//

export default function Hero() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to");
  console.log(to);

  const handleOpenInvitation = () => {
    const el = document.getElementById("schedule");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative overflow-x-hidden">
      <section className="relative h-screen w-full max-w-sm mx-auto">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* <source src={data.url_video} type="video/mp4" /> */}
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black/95 z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-around items-center text-center text-white ">
          <h1 className="text-5xl font-bold font-serif">AB</h1>
          <div className="border border-red-500 flex flex-col items-center justify-center">
            <p className={`text-sm mb-2 ${geist.className}`}>Hello</p>
            <p className="text-xl mb-6">{to ?? "Family and Friends"}</p>
            <button
              onClick={handleOpenInvitation}
              className="mt-4 px-6 py-2 border border-white hover:bg-white hover:text-black transition duration-300"
            >
              OPEN INVITAION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
