"use client";

import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import RSVPForm from "./components/RSVPForm";
import Schedule from "./components/Schedule";
export default function Monochrom() {
  return (
    <div className="font-serif bg-white text-black">
      <Hero />
      <Schedule />
      <Gallery />
      <RSVPForm />
      <Footer />
    </div>
  );
}
