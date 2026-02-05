"use client";

import { faqs } from "@/data/data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="py-18 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-7 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-2 md:mb-4 uppercase">
            FAQ
          </h2>
          <p className="text-sm md:text-lg text-slate-900 dark:text-white font-bold">
            Pertanyaan yang sering ditanyakan
          </p>
        </div>

        <div className="space-y-2 md:space-y-3">
          {faqs.map((faq, i: number) => (
            <div
              key={i}
              className={`bg-white dark:bg-slate-800 overflow-hidden border-4 w-full md:w-3/4 mx-auto ${
                openIndex === i
                  ? "border-yellow-400"
                  : "border-slate-900 dark:border-white"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="cursor-pointer w-full px-4 md:px-5 py-3 md:py-4 flex items-center justify-between text-left"
              >
                <span className="text-sm md:text-md font-black text-slate-900 dark:text-white pr-4 uppercase">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-6 h-6 flex-shrink-0 text-slate-900 dark:text-white ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 md:px-5 pb-5">
                  <div className="pt-2 md:pt-4 border-t-3 border-slate-900 dark:border-white">
                    <p className="text-xs md:text-sm text-slate-900 dark:text-white leading-relaxed font-bold">
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
