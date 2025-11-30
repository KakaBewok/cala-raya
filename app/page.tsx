import Hero from "@/components/home/Hero";
import DigitalInvitation from "@/components/home/DigitalInvitation";
import WebsiteServices from "@/components/home/WebsiteServices";
import Portfolio from "@/components/home/Portfolio";
import WhyUs from "@/components/home/WhyUs";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import WhatsAppFloating from "@/components/home/WhatsAppFloating";

export default function Home() {
  return (
    <main className=" bg-white text-gray-900 dark:text-gray-100">
      {/* Notif */}
      {/* <div className="bg-yellow-400 w-full fixed top-0 left-0 py-2 z-[60]">
        <h1 className="text-slate-900 font-semibold text-xs text-center">
          Under Maintenance!
        </h1>
      </div>
      <div className="h-6"></div> */}
      <Navbar />
      <Hero />
      <DigitalInvitation />
      <WebsiteServices />
      <Portfolio />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer />
      <WhatsAppFloating phone="6281234567890" message="Halo, mau tanya dong" />
    </main>
  );
}
