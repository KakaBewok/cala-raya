"use client";

import React, { useState, useMemo } from "react";
import { Heart, Layout } from "lucide-react";

function Portfolio() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const portfolios = [
    {
      title: "Wedding - Andi & Siti",
      type: "Undangan Digital", // Kategori 1
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    },
    {
      title: "Company Profile - PT Maju",
      type: "Website & Sistem", // Kategori 2
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      title: "Birthday - Sweet 17",
      type: "Undangan Digital",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    },
    {
      title: "E-Commerce Fashion",
      type: "Website & Sistem",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    },
    {
      title: "Wedding - Budi & Ani",
      type: "Undangan Digital",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    },
    {
      title: "Landing Page Startup",
      type: "Website & Sistem",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&q=80",
    },
    {
      title: "Aqiqah - Baby Zahra",
      type: "Undangan Digital",
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80",
    },
    {
      title: "Restaurant Website",
      type: "Website & Sistem",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    },
  ];

  // Hanya Dua Tab Pilihan Utama
  const tabs = [
    { id: "Undangan Digital", label: "Undangan Digital", icon: Heart },
    { id: "Website & Sistem", label: "Website & Sistem", icon: Layout },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Filter portofolio berdasarkan tab yang aktif
  const filteredPortfolios = useMemo(() => {
    return portfolios.filter((item) => item.type === activeTab);
  }, [activeTab, portfolios]);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Portfolio Kami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Beberapa project yang telah kami selesaikan untuk klien-klien
            spesial
          </p>
        </div>

        {/* --- Komponen Tabs Filter (2 Pilihan) --- */}
        <div className="flex justify-center mb-10">
          <div className="flex border border-slate-200 dark:border-slate-700 rounded-xl p-1 bg-white dark:bg-slate-800 shadow-lg">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const IconComponent = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? "bg-slate-900 text-white dark:bg-sky-500 dark:text-white shadow-md"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-sky-400"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        {/* --- End Komponen Tabs Filter --- */}

        {/* Tampilan Portofolio yang Difilter */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredPortfolios.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay Button */}
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-white text-slate-900 rounded-full font-semibold text-xs transition-all hover:bg-slate-100">
                    Lihat Detail
                  </button>
                </div>
                {/* Type Tag */}
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-[10px] font-semibold rounded-full shadow-sm">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {item.type}
                </p>
              </div>
            </div>
          ))}

          {/* Pesan jika tidak ada portofolio di tab yang dipilih */}
          {filteredPortfolios.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-slate-500 dark:text-slate-400">
                Belum ada portofolio untuk kategori &quot;{activeTab}&quot;.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
