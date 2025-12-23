"use client";

import { faqs } from "@/data/data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="py-18 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-7 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">
            FAQ
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400">
            Pertanyaan yang sering ditanyakan
          </p>
        </div>

        <div className="space-y-2 md:space-y-3">
          {faqs.map((faq, i: number) => (
            <div
              key={i}
              className={`bg-white dark:bg-slate-800 rounded-md overflow-hidden border-2 transition-all ${
                openIndex === i
                  ? "border-emerald-400"
                  : "border-slate-200 dark:border-slate-700"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="cursor-pointer w-full px-4 md:px-6 py-3 md:py-5 flex items-center justify-between text-left"
              >
                <span className="text-sm md:text-lg font-semibold text-slate-900 dark:text-white pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 md:px-6 pb-5">
                  <div className="pt-2 md:pt-4 border-t border-slate-100 dark:border-slate-700">
                    <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
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
