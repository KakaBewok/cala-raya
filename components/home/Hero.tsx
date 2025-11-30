"use client";

import { motion } from "framer-motion";
import { Globe, Heart, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-[600px] bg-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Dipercaya 1000+ Klien</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Undangan Digital
              <br />
              <span className="relative">
                & Website
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path
                    d="M1 9C60 3 180 1 299 9"
                    stroke="#10b981"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              Profesional
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Wujudkan momen spesial Anda dengan undangan digital yang elegan,
              atau tingkatkan bisnis dengan website profesional yang stunning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                Buat Undangan
              </button>
              <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg font-semibold hover:bg-slate-50 transition-colors">
                Buat Website
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: Zap, text: "Proses Cepat" },
                { icon: Globe, text: "Desain Modern" },
                { icon: Heart, text: "Customizable" },
                { icon: Sparkles, text: "Harga Terjangkau" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-slate-700 font-medium">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Card Stack Mockup */}
            <div className="relative h-[550px]">
              {/* Invitation Card - Left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-0 w-72 h-[420px] bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-2xl shadow-2xl transform -rotate-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Heart className="w-10 h-10 fill-current" />
                  </div>
                  <div className="text-center space-y-2 mb-6">
                    <div className="text-sm font-light tracking-widest opacity-90">
                      THE WEDDING OF
                    </div>
                    <div className="text-3xl font-serif font-bold">
                      Andi & Siti
                    </div>
                    <div className="text-sm opacity-90">24 Desember 2024</div>
                  </div>
                  <div className="w-full h-px bg-white/30 my-4"></div>
                  <div className="text-xs text-center opacity-80 leading-relaxed">
                    Jl. Kebon Jeruk No. 123
                    <br />
                    Jakarta Barat
                  </div>
                  <div className="mt-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Lihat Undangan
                  </div>
                </div>
              </motion.div>

              {/* Website Card - Right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-16 right-0 w-72 h-[420px] bg-white rounded-2xl shadow-2xl transform rotate-6 overflow-hidden border border-slate-200"
              >
                {/* Browser Header */}
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-[10px] text-slate-400">
                    www.bisnis-anda.com
                  </div>
                </div>

                {/* Website Content */}
                <div className="p-6 space-y-4">
                  {/* Hero Section */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-emerald-600" />
                      <div className="text-lg font-bold text-slate-900">
                        Bisnis Anda
                      </div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-12 h-12 text-white opacity-50" />
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                      <div className="h-2 bg-slate-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="h-2 bg-slate-200 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="h-2 bg-slate-200 rounded flex-1"></div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-2">
                    <div className="bg-slate-900 text-white text-center py-2 rounded-lg text-xs font-semibold">
                      Hubungi Kami
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    // <section className="border border-red-500 w-full py-24 bg-gradient-to-b from-white to-slate-50">
    //   <div className="max-w-5xl mx-auto px-4 text-center">
    //     <motion.h1
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1.6 }}
    //       className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight"
    //     >
    //       Undangan Digital & Website Profesional
    //     </motion.h1>

    //     <motion.p
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ delay: 1 }}
    //       className="mt-4 text-lg text-slate-600"
    //     >
    //       Buat undangan digital modern dan website bisnis yang elegan.
    //     </motion.p>

    //     <motion.div
    //       initial={{ scale: 0.98, opacity: 0 }}
    //       animate={{ scale: 1, opacity: 1 }}
    //       transition={{ delay: 1 }}
    //       className="flex justify-center gap-4 mt-8"
    //     >
    //       {/* CTA buttons */}
    //     </motion.div>
    //   </div>
    // </section>
  );
}
