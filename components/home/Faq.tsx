"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const faqs = [
    {
      q: "Berapa lama pembuatan undangan digital?",
      a: "Proses pembuatan undangan digital memakan waktu 1-2 hari kerja setelah semua data diterima lengkap.",
    },
    {
      q: "Apakah bisa revisi?",
      a: "Tentu bisa! Revisi disesuaikan dengan paket yang Anda pilih. Paket Basic 2x revisi, Premium 5x revisi, Ultimate unlimited.",
    },
    {
      q: "Website pakai teknologi apa?",
      a: "Kami menggunakan teknologi modern seperti Next.js, React, dan Tailwind CSS untuk website yang cepat dan responsive.",
    },
    {
      q: "Bagaimana cara pembayaran?",
      a: "Pembayaran via transfer bank, e-wallet, atau QRIS. Sistem DP 50% di awal, pelunasan 50% setelah project selesai.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            FAQ
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Pertanyaan yang sering ditanyakan
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border-2 transition-all ${
                openIndex === i
                  ? "border-emerald-500"
                  : "border-slate-200 dark:border-slate-700"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
