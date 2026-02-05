import FAQ from "@/components/home/Faq";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/home/Navbar";
import Portfolio from "@/components/home/Portfolio";
import Reviews from "@/components/home/Reviews";
import Invitation from "@/components/home/Invitation";
import WhyUs from "@/components/home/WhyUs";
import Website from "@/components/home/Website";
import FloatingWhatsapp from "@/components/home/FloatingWhatsapp";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      <Hero />
      <WhyUs />
      <Invitation />
      <Website />
      <Portfolio />
      <Reviews />
      <FAQ />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}
