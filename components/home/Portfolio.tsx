"use client";

import { useState, useMemo } from "react";
import { ExternalLink, Mail, Globe, Eye } from "lucide-react";
import { portfolios } from "@/data/data";
import Image from "next/image";

function Portfolio() {
  const tabs = [
    { id: "Undangan Digital", label: "Undangan Digital", icon: Mail },
    { id: "Website", label: "Website", icon: Globe },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredPortfolios = useMemo(() => {
    return portfolios.filter((item) => item.product === activeTab);
  }, [activeTab]);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, filteredPortfolios.length));
  };

  const isWebsite = activeTab === "Website";

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[12px] md:text-[13px] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">
            Portfolio
          </p>
          <h2 className="text-2xl md:text-[2rem] font-semibold text-stone-900 tracking-tight mb-4">
            Portfolio Kami
          </h2>
          <p className="text-[15px] text-stone-500 max-w-md mx-auto leading-relaxed">
            Beberapa project yang telah kami selesaikan untuk klien
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-stone-100 rounded-lg p-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setVisibleCount(8);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 text-[13px] font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-white text-stone-900 shadow-sm"
                      : "text-stone-500 hover:text-stone-700"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid — wider cards for Website tab to show features */}
        <div
          className={`grid gap-3 md:gap-4 ${
            isWebsite
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          }`}
        >
          {filteredPortfolios.slice(0, visibleCount).map((item, i) =>
            isWebsite ? (
              /* ── Website Portfolio Card ── */
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden border border-stone-100 hover:border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              >
                {/* Image */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video overflow-hidden"
                >
                  <Image
                    fill
                    src={item.image}
                    alt={item.title}
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* External link */}
                  <div className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ExternalLink className="w-3.5 h-3.5 text-stone-700" />
                  </div>
                </a>

                {/* Info */}
                <div className="p-3.5 md:p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-[14px] md:text-[15px] font-semibold text-stone-800">
                      {item.title}
                    </h3>
                    <span className="flex-shrink-0 ml-2 px-2 py-0.5 bg-stone-50 text-stone-500 text-[10px] md:text-[11px] font-medium rounded-md border border-stone-100">
                      {item.type}
                    </span>
                  </div>

                  {/* Full description as feature pills — no truncation */}
                  {item.description && (
                    <div className="flex flex-wrap gap-1 md:gap-1.5">
                      {item.description.split(" - ").map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] md:text-[11px] px-1.5 md:px-2 py-0.5 bg-stone-50 text-stone-500 rounded-md font-medium border border-stone-100"
                        >
                          {feature.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* ── Undangan Digital Portfolio Card ── */
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden border border-stone-100 hover:border-stone-200 shadow-sm hover:shadow-md transition-all duration-300 aspect-[3/4]"
              >
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Type badge */}
                <div className="absolute top-2 left-2 md:top-2.5 md:left-2.5">
                  <span className="px-1.5 md:px-2 py-0.5 bg-white/90 backdrop-blur-sm text-stone-700 text-[9px] md:text-[11px] font-medium rounded-md">
                    {item.type}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent flex flex-col justify-end p-2.5 md:p-4">
                  <h3 className="text-white text-[12px] md:text-[14px] font-semibold">
                    {item.title}
                  </h3>
                </div>

                {/* External link icon */}
                <div className="absolute top-2 right-2 md:top-2.5 md:right-2.5 w-6 h-6 md:w-7 md:h-7 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ExternalLink className="w-3 h-3 md:w-3.5 md:h-3.5 text-stone-700" />
                </div>
              </a>
            )
          )}

          {filteredPortfolios.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="text-stone-400 text-[15px]">
                Belum ada portofolio untuk kategori &quot;{activeTab}&quot;.
              </p>
            </div>
          )}
        </div>

        {visibleCount < filteredPortfolios.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={loadMore}
              className="cursor-pointer flex items-center gap-2 px-6 py-2.5 border border-stone-200 text-stone-600 text-[13px] font-medium rounded-lg hover:bg-stone-50 hover:border-stone-300 transition-all duration-200"
            >
              Lihat Lebih Banyak
              <Eye className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
