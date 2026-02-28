import { Eye, MessageCircle } from "lucide-react";
import { allThemes, CONTACT_PERSON } from "@/data/data";
import Image from "next/image";

function Invitation() {
  return (
    <section id="themes" className="py-20 md:py-28 bg-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[12px] md:text-[13px] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">
            Koleksi Tema
          </p>
          <h2 className="text-2xl md:text-[2rem] font-semibold text-stone-900 tracking-tight mb-4">
            Tema Undangan Digital
          </h2>
          <p className="text-[15px] text-stone-500 max-w-md mx-auto leading-relaxed">
            Koleksi tema elegan yang dirancang khusus untuk berbagai kebutuhan
            acara spesial Anda
          </p>
        </div>

        {/* Themes Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {allThemes.map((theme, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-xl overflow-hidden border border-stone-100 hover:border-stone-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[2/3] sm:aspect-[3/4] overflow-hidden">
                <Image
                  fill
                  src={theme.image}
                  alt={theme.name}
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />

                {/* Subtle gradient at bottom for text readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Card Footer — always visible */}
              <div className="p-2.5 sm:p-3 md:p-4">
                {/* Name + Price */}
                <div className="flex items-start justify-between gap-1 mb-2">
                  <div className="min-w-0">
                    <h3 className="text-[12px] sm:text-[13px] md:text-[15px] font-semibold text-stone-800 truncate">
                      {theme.name}
                    </h3>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-[8px] md:text-[10px] text-stone-400">
                      Mulai
                    </p>
                    <p className="text-[11px] sm:text-[12px] md:text-[15px] font-semibold text-stone-800">
                      {theme.price}
                    </p>
                  </div>
                </div>

                {/* Feature chips — horizontal scroll */}
                <div className="flex gap-1 md:gap-1.5 overflow-x-auto scrollbar-hide pb-0.5 -mx-0.5 px-0.5 mb-2.5 sm:mb-3">
                  {theme.features.map((f, idx) => (
                    <span
                      key={idx}
                      className="flex-shrink-0 text-[8px] sm:text-[9px] md:text-[11px] px-1.5 md:px-2 py-0.5 bg-stone-50 text-stone-500 rounded font-medium border border-stone-100 whitespace-nowrap"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Action Buttons — always visible */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <a
                    href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                      `Halo admin Calaraya Project, aku tertarik untuk bikin ` +
                        `${theme.type} ${theme.name}` +
                        `. Boleh dibantu prosesnya?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-stone-900 text-white text-[10px] sm:text-[11px] md:text-[13px] font-medium rounded-lg hover:bg-stone-800 active:bg-stone-700 transition-colors"
                  >
                    <MessageCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    Pesan
                  </a>
                  <a
                    href={theme.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2 bg-stone-50 text-stone-600 text-[10px] sm:text-[11px] md:text-[13px] font-medium rounded-lg border border-stone-100 hover:bg-stone-100 active:bg-stone-200 transition-colors"
                  >
                    <Eye className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden sm:inline">Preview</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {allThemes.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-400 text-[15px]">
              Tema undangan segera hadir.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Invitation;
