"use client";

import Hero from "@/components/home/Hero";
import Portfolio from "@/components/home/Portfolio";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import WhatsAppFloating from "@/components/home/WhatsAppFloating";
import FeatureSection from "@/components/home/FeatureSection";
import ThemesSection from "@/components/home/ThemeSection";

export default function Home() {
  return (
    <main className=" bg-white text-gray-900 dark:text-gray-100">
      <Navbar />
      <Hero />
      <FeatureSection />
      <ThemesSection />
      <Portfolio />
      {/* <WhyUs />
      <Pricing /> */}
      <Testimonials />
      <Faq />
      <Footer />
      <WhatsAppFloating phone="6281234567890" message="Halo, mau tanya dong" />
    </main>
  );
}
