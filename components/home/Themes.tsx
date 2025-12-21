"use client";

import React, { useState, useMemo } from "react";
import { Eye, Heart, Layout, Grid, ShoppingCart } from "lucide-react"; // Import icon baru
import { allThemes } from "@/data/data";
import Image from "next/image";

function Themes() {
  const tabs = [
    { id: "Undangan Digital", label: "Undangan Digital", icon: Heart },
    { id: "Website", label: "Website", icon: Layout },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // Filter tema berdasarkan tab yang aktif
  const filteredThemes = useMemo(() => {
    return allThemes.filter((theme) => theme.type === activeTab);
  }, [activeTab]);

  const getCategoryIcon = (category: unknown) => {
    switch (category) {
      case "Toko Online":
        return <ShoppingCart className="w-3 h-3 mr-1" />;
      case "Landing Page":
        return <Layout className="w-3 h-3 mr-1" />;
      case "Sistem Lainnya":
        return <Grid className="w-3 h-3 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <section id="themes" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Pilihan Desain & Tema
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Koleksi tema elegan untuk berbagai kebutuhan digital spesial Anda.
          </p>
        </div>

        {/* --- Komponen Tabs --- */}
        <div className="flex justify-center mb-10">
          <div className="flex border border-slate-200 dark:border-slate-700 rounded-xl p-1 bg-slate-50 dark:bg-slate-800 shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              const IconComponent = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
        {/* --- End Komponen Tabs --- */}

        {/* Tampilan Tema */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {filteredThemes.map((theme, i) => (
            <div
              key={i}
              className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="relative h-40 md:h-60 overflow-hidden">
                <Image
                  src={theme.image}
                  alt={theme.name}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-2 md:p-3">
                <div className="mb-2">
                  <h3 className="text-md md:text-lg font-bold text-slate-900 dark:text-white truncate">
                    {theme.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center">
                    {getCategoryIcon(theme.category)}
                    {theme.category}
                  </p>
                </div>
                <div className="text-left mb-3 min-h-[40px] flex items-center">
                  <div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 mb-0.5">
                      Mulai dari
                    </p>
                    <p className="text-sm md:text-base font-bold text-slate-900 dark:text-white break-words leading-tight">
                      {theme.price}
                    </p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3 overflow-auto scrollbar-hide">
                  {theme.features.map((f, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded whitespace-nowrap"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex gap-1.5">
                  <a
                    href={`https://wa.me/6289607937642?text=${encodeURIComponent(
                      `Halo admin Calaraya Project, aku tertarik untuk bikin ` +
                        `${theme.type} ${theme.name}` +
                        `. Boleh dibantu prosesnya?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer flex-1 px-1 py-0.5 md:px-2 md:py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    Pesan
                  </a>
                  <a
                    href={theme.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer px-2 py-2 border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 rounded-lg font-semibold hover:border-slate-300 dark:hover:border-slate-500 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Pesan jika tidak ada tema di tab yang dipilih */}
          {filteredThemes.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-slate-500 dark:text-slate-400">
                Belum ada tema untuk kategori &quot;{activeTab}&quot;. Segera
                hadir!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Themes;
