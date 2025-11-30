"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="border border-red-500 w-full py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight"
        >
          Undangan Digital & Website Profesional
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-lg text-slate-600"
        >
          Buat undangan digital modern dan website bisnis yang elegan.
        </motion.p>

        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-4 mt-8"
        >
          {/* CTA buttons */}
        </motion.div>
      </div>
    </section>
  );
}
