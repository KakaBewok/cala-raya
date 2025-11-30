"use client";

import { motion } from "framer-motion";
import {
  Figma,
  Globe,
  Mail,
  Settings2,
  Shirt,
  Wallet,
  Zap,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-[600px] bg-white  dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full mb-6">
              <Heart className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">Dipercaya 1000+ Klien</span>
            </div> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 dark:text-slate-50">
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

            <p className="text-md md:text-xl text-slate-600 mb-8 leading-relaxed dark:text-slate-400">
              Bikin momen spesial makin berkesan dengan undangan digital modern,
              atau upgrade bisnismu dengan website yang keren dan profesional.
            </p>

            <div className="flex flex-row gap-4">
              <button className="px-6 py-3 cursor-pointer dark:bg-green-500 dark:text-white md:px-8 md:py-4 bg-slate-900 text-white rounded-sm font-semibold hover:bg-slate-700 transition-colors duration-500 shadow-md shadow-slate-900/20">
                Sign Up
              </button>
              <button className="px-6 py-3 cursor-pointer dark:bg-transparent dark:border-2 dark:border-green-400 dark:text-green-400 md:px-8 md:py-4 border-2 border-slate-900 text-slate-900 rounded-md font-semibold hover:bg-slate-50 transition-colors">
                Order Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { icon: Zap, text: "Proses Cepat" },
                { icon: Figma, text: "Desain Modern" },
                { icon: Settings2, text: "Customizable" },
                { icon: Wallet, text: "Murah" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 md:gap-3">
                  <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                  </div>
                  <span className="text-sm md:text-lg text-slate-700 dark:text-slate-400 font-medium">
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
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative "
          >
            {/* Card Stack Mockup */}
            <div className="relative h-[550px] ">
              {/* Invitation Card - Left */}
              <motion.div
                animate={{ y: [0, -17, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-0 w-72 h-[420px] bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-lg shadow-lg transform -rotate-6 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Mail className="w-10 h-10" />
                  </div>
                  <div className="text-center space-y-2 mb-6">
                    <div className="text-sm font-light tracking-widest opacity-90">
                      THE WEDDING OF
                    </div>
                    <div className="text-3xl font-bold">Kamu & Aku</div>
                    <div className="text-sm opacity-90">26 Juni 2026</div>
                  </div>
                  <div className="w-full h-px bg-white/30 my-4"></div>
                  <div className="text-xs text-center opacity-80 leading-relaxed">
                    Jl. Buntu No. 999
                    <br />
                    Jakarta Selatan
                  </div>
                  <div className="mt-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Buka Undangan
                  </div>
                </div>
              </motion.div>

              {/* Website Card - Right */}
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                className="opacity-95 absolute top-20 right-0 w-72 h-[420px] bg-white rounded-lg shadow-lg transform rotate-6 overflow-hidden border border-slate-200"
              >
                {/* Browser Header */}
                <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 bg-red-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded px-3 py-1 text-[10px] text-slate-400">
                    www.toko-kamu.com
                  </div>
                </div>

                {/* Website Content */}
                <div className="p-6 space-y-4">
                  {/* Hero Section */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-emerald-600" />
                      <div className="text-lg font-bold text-slate-900">
                        Toko Kamu
                      </div>
                    </div>
                    <div className="h-2 bg-slate-200 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 rounded w-1/2"></div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="h-32 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center">
                    <Shirt className="w-14 h-14 text-white opacity-50" />
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
                      Order Now
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
