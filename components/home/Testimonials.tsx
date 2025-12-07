import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonials = [
    {
      id: 1,
      name: "Andi & Siti",
      role: "Undangan Pernikahan",
      image:
        "https://ui-avatars.com/api/?name=Andi+Siti&background=ec4899&color=fff&size=128",
      rating: 5,
      text: "Layanannya sangat memuaskan! Undangannya elegan dan cepat dibuat. Tim sangat responsif dan membantu dalam proses customization.",
      screenshotImage:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=600&q=80",
    },
    {
      id: 2,
      name: "Budi Santoso",
      role: "Website Company Profile",
      image:
        "https://ui-avatars.com/api/?name=Budi+Santoso&background=3b82f6&color=fff&size=128",
      rating: 5,
      text: "Website perusahaan kami jadi terlihat sangat profesional. Prosesnya cepat dan hasilnya melebihi ekspektasi. Highly recommended!",
      screenshotImage:
        "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&q=80",
    },
    {
      id: 3,
      name: "Rina Wijaya",
      role: "Undangan Ulang Tahun",
      image:
        "https://ui-avatars.com/api/?name=Rina+Wijaya&background=10b981&color=fff&size=128",
      rating: 5,
      text: "Undangan digital untuk acara ulang tahun anak saya sangat lucu dan menarik. Tamu-tamu sangat terkesan dengan desainnya!",
      screenshotImage:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&q=80",
    },
    {
      id: 4,
      name: "Dedi Kurniawan",
      role: "E-Commerce Website",
      image:
        "https://ui-avatars.com/api/?name=Dedi+Kurniawan&background=8b5cf6&color=fff&size=128",
      rating: 5,
      text: "Toko online kami sekarang terlihat modern dan mudah digunakan. Penjualan meningkat drastis setelah website launch!",
      screenshotImage:
        "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&q=80",
    },
    {
      id: 5,
      name: "Maya & Reza",
      role: "Undangan Pernikahan",
      image:
        "https://ui-avatars.com/api/?name=Maya+Reza&background=f59e0b&color=fff&size=128",
      rating: 5,
      text: "Undangan digital kami mendapat banyak pujian dari tamu. Desainnya unik dan fitur RSVP sangat membantu!",
      screenshotImage:
        "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
    },
    {
      id: 6,
      name: "Hendra Wijaya",
      role: "Landing Page",
      image:
        "https://ui-avatars.com/api/?name=Hendra+Wijaya&background=06b6d4&color=fff&size=128",
      rating: 5,
      text: "Landing page untuk startup saya sangat keren dan conversion rate meningkat signifikan. Worth every penny!",
      screenshotImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
  ];

  // Duplicate testimonials for infinite loop effect
  // const duplicatedTestimonials = [...testimonials, ...testimonials];

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 rounded-full mb-4">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Testimoni Klien</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              Apa Kata Mereka?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Kepuasan klien adalah prioritas kami
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-300" />
          </button>

          {/* Carousel Slide */}
          <div className="relative overflow-hidden">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000) {
                  nextSlide();
                } else if (swipe > 10000) {
                  prevSlide();
                }
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Left Side - Screenshot */}
                  <div className="relative bg-slate-100 dark:bg-slate-900/50 p-4 md:p-6 flex items-center justify-center">
                    {/* Phone/Chat Frame */}
                    <div className="relative w-full max-w-[240px]">
                      {/* Phone Mockup */}
                      <div className="bg-slate-900 dark:bg-slate-950 rounded-3xl p-2.5 shadow-2xl">
                        {/* Phone Header */}
                        <div className="bg-slate-800 rounded-t-2xl px-3 py-1.5 flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                          </div>
                          <div className="flex-1 text-center">
                            <div className="text-[10px] text-slate-400 font-medium">
                              WhatsApp
                            </div>
                          </div>
                        </div>

                        {/* Screenshot Image */}
                        <div className="relative h-[260px] overflow-hidden rounded-b-2xl">
                          <Image
                            src={testimonials[currentIndex].screenshotImage}
                            alt={`Chat ${testimonials[currentIndex].name}`}
                            className="w-full h-full object-cover"
                            width={240}
                            height={260}
                          />
                          {/* Overlay gradient for better readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                        </div>
                      </div>

                      {/* Verified Badge */}
                      <div className="absolute -bottom-2 -right-2 w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Testimonial Content */}
                  <div className="p-6 md:p-7 flex flex-col justify-between">
                    {/* Quote Icon */}
                    <div className="absolute top-4 right-4 opacity-10 dark:opacity-5">
                      <Quote className="w-10 h-10 text-slate-900 dark:text-white" />
                    </div>

                    <div>
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonials[currentIndex].rating)].map(
                          (_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-amber-400 fill-current"
                            />
                          )
                        )}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] mb-5 relative z-10">
                        &quot;{testimonials[currentIndex].text}&quot;
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-3 pt-5 border-t border-slate-200 dark:border-slate-700">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-11 h-11 rounded-full ring-2 ring-slate-100 dark:ring-slate-700"
                        width={44}
                        height={44}
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-[15px]">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400"></div>
              </div>
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-slate-900 dark:bg-white"
                    : "w-2 h-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-700"
        >
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                500+
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Project Selesai
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                98%
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Kepuasan Klien
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                4.9/5
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">
                Rating Rata-rata
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
