import React from "react";
import { ExternalLink } from "lucide-react";
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
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {theme.name && (
                  <div className="bg-slate-900/40 backdrop-blur-sm absolute top-0 left-0 text-white md:px-2.5 px-2 md:py-1.5 py-1 md:text-sm text-xs font-semibold rounded-br-md">
                    {theme.name}
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-2 md:p-4">
                  <div className="flex gap-1 mb-1.5 md:mb-3 overflow-x-auto scrollbar-hide">
                    {theme.features.map((f, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] md:text-xs px-2 py-1 bg-white/70 text-slate-800 font-semibold rounded whitespace-nowrap"
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
                        className="cursor-pointer flex-1 md:px-2 md:py-2 border md:border-2 border-green-500 rounded-sm font-semibold flex items-center justify-center gap-2 text-xs md:text-sm"
                      >
                        <svg
                          className="w-3.5 md:w-5 h-3.5 md:h-5 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        <span className="flex md:hidden text-green-500">
                          Pesan
                        </span>
                      </a>
                      <a
                        href={theme.previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer px-2 py-2 bg-white/40 backdrop-blur-sm rounded-md font-semibold"
                      >
                        <ExternalLink className="w-3.5 md:w-5 h-3.5 md:h-5 text-white" />
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
