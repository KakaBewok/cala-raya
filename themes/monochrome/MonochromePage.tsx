"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
// import Hero from "./components/Hero";
import RSVPForm from "./components/RSVPForm";
import Schedule from "./components/Schedule";

export default function Monochrom() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  return (
    <div className="font-serif bg-white text-black">
      {/* <Hero /> */}
      <Schedule />
      <Gallery />
      <RSVPForm />
      <Footer />
    </div>
  );
}
