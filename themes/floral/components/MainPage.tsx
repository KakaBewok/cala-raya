import { motion } from "framer-motion";
import Image from "next/image";
import Cover from "./Cover";
import Greetings from "./Greetings";
import Brides from "./Brides";

export default function MainPage() {
  const galleryImages = Array.from(
    { length: 9 },
    (_, i) => `https://slametandfatma.wedding/galeri/${i + 1}.jpg`
  );

  return (
    <main className="max-w-md mx-auto">
      <Cover />
      <Greetings />
      <Brides />

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
  );
}
