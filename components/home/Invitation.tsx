import React from "react";
import { Eye, MessageCircle } from "lucide-react";
import { allThemes, CONTACT_PERSON } from "@/data/data";
import Image from "next/image";

function Invitation() {
  return (
    <section id="themes" className="py-12 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Tema Undangan
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400">
            Koleksi tema elegan untuk berbagai kebutuhan acara
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allThemes.map((theme, i) => (
            <div
              key={i}
              className="group relative bg-slate-900 dark:bg-slate-950 rounded-md overflow-hidden transition-transform duration-300"
            >
              <div className="relative h-80">
                <Image
                  fill
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {theme.name && (
                  <div className="bg-gradient-to-tl from-green-500 to-blue-500 absolute top-0 left-0 text-white px-2 py-1 text-xs font-semibold rounded-br-md">
                    {theme.name}
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 md:p-4">
                  <div className="flex gap-1 mb-1.5 md:mb-3 overflow-x-auto scrollbar-hide">
                    {theme.features.map((f, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] md:text-xs px-2 py-1 bg-white/30 backdrop-blur text-white rounded whitespace-nowrap"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-1.5 md:gap-3">
                    <div className="flex-shrink-0">
                      <p className="text-white/60 text-xs">Mulai dari</p>
                      <p className="text-white font-bold text-base md:text-lg">
                        {theme.price}
                      </p>
                    </div>
                    <div className="w-full md:w-fit flex gap-2">
                      <a
                        href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                          `Halo admin Calaraya Project, aku tertarik untuk bikin ` +
                            `${theme.type} ${theme.name}` +
                            `. Boleh dibantu prosesnya?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer flex-1 px-1 py-0.5 md:px-2 md:py-2 bg-slate-50 dark:bg-white text-slate-800 dark:text-slate-900 rounded-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 text-xs md:text-sm"
                      >
                        <MessageCircle className="w-3.5 md:w-5 h-3.5 md:h-5" />
                        <span className="flex md:hidden">Pesan</span>
                      </a>
                      <a
                        href={theme.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer px-2 py-2 border-2 border-slate-50 text-slate-600 dark:text-slate-300 rounded-md font-semibold hover:border-slate-300 dark:hover:border-slate-500 transition-colors"
                      >
                        <Eye className="w-3.5 md:w-5 h-3.5 md:h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {allThemes.length === 0 && (
            <div className="col-span-full text-center py-10">
              <p className="text-slate-500 dark:text-slate-400">
                Belum ada tema undangan. Segera hadir!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Invitation;
