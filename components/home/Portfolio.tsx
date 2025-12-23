"use client";

import React, { useState, useMemo } from "react";
import { ExternalLink, Eye, Globe, Mail } from "lucide-react";
import { portfolios } from "@/data/data";
import Image from "next/image";

function Portfolio() {
  const tabs = [
    { id: "Undangan Digital", label: "Undangan Digital", icon: Mail },
    { id: "Website", label: "Website", icon: Globe },
  ];
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filteredPortfolios = useMemo(() => {
    return portfolios.filter((item) => item.product === activeTab);
  }, [activeTab]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, filteredPortfolios.length));
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Portfolio Kami
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400">
            Beberapa project yang telah kami selesaikan untuk klien-klien
            spesial
          </p>
        </div>

        {/* tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex border border-slate-200 dark:border-slate-700 rounded-xl p-1 bg-white dark:bg-slate-800 shadow-lg">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const IconComponent = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-md transition-all ${
                    isActive
                      ? "bg-slate-900 text-white dark:bg-slate-600 dark:text-white shadow-md"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-400"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredPortfolios.slice(0, visibleCount).map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-slate-800 rounded-md overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all h-48 md:h-64"
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Type Tag */}
                <div className="absolute top-1 left-2">
                  <span className="px-2 py-1 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-[10px] font-semibold rounded-sm shadow-sm">
                    {item.type}
                  </span>
                </div>
                {/* Always Visible Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-2 md:p-3">
                  <h3 className="text-white/90 text-sm md:text-base font-semibold md:font-bold">
                    {item.title}
                  </h3>
                </div>
                {/* External Link Icon */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-4 h-4 text-slate-900 dark:text-white" />
                </div>
              </div>
            </a>
          ))}

          {filteredPortfolios.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-slate-500 dark:text-slate-400">
                Belum ada portofolio untuk kategori &quot;{activeTab}&quot;.
              </p>
            </div>
          )}
        </div>
        {visibleCount < filteredPortfolios.length && (
          <div className="w-full flex justify-center items-center">
            <button
              onClick={() => loadMore()}
              className="hover cursor-pointer dark:bg-gray-50 dark:text-gray-900 flex gap-2 items-center mt-6 mx-auto px-6 py-2 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors"
            >
              Show more <Eye />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
