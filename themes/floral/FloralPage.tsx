"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const galleryImages = Array.from(
  { length: 9 },
  (_, i) => `https://slametandfatma.wedding/galeri/${i + 1}.jpg`
);

export default function InvitationPage() {
  const [isOpened, setIsOpened] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setTimeout(() => {
      mainRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="font-serif bg-[#fdf8f8]">
      {/* Hero Section */}
      <AnimatePresence>
        {!isOpened && (
          <motion.div
            className="fixed inset-0 z-50 bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: `url('https://slametandfatma.wedding/galeri/1.jpg')`,
            }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-xl text-center shadow-xl">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2">
                Slamet & Fatma
              </h1>
              <p className="text-gray-600 mb-4">
                Kepada Yth. Bapak/Ibu/Saudara/i
              </p>
              <button
                onClick={handleOpenInvitation}
                className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition shadow"
              >
                Buka Undangan
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main ref={mainRef} className="pt-24">
        {/* Cover Nama Pasangan */}
        <section className="text-center py-16 px-4 bg-[#fff0f5]">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Slamet & Fatma
          </h2>
          <p className="text-gray-600">
            Kami mengundang Anda untuk merayakan hari bahagia kami
          </p>
        </section>

        {/* Profile Section */}
        <section className="text-center py-16 px-4 bg-white">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">
            Pasangan Mempelai
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-20">
            <div>
              <Image
                src="https://slametandfatma.wedding/galeri/slamett.jpeg"
                alt="Slamet"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold mt-4">Slamet</h3>
            </div>
            <div>
              <Image
                src="https://slametandfatma.wedding/galeri/fatmaa.jpeg"
                alt="Fatma"
                width={200}
                height={200}
                className="rounded-full object-cover shadow-md"
              />
              <h3 className="text-xl font-semibold mt-4">Fatma</h3>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-[#fdf0f5] py-16 px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Galeri
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-xl shadow-md"
              >
                <Image
                  src={src}
                  alt={`Galeri ${idx + 1}`}
                  width={500}
                  height={350}
                  className="w-full h-64 object-cover"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Coming Soon: Event, RSVP, Wishes, Gift */}
      </main>
    </div>
  );
}
