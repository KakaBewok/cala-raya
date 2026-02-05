import { CONTACT_PERSON, websiteServices } from "@/data/data";
import { ArrowRight, Check } from "lucide-react";

const Website = () => {
  return (
    <section id="website" className="px-3 md:px-10 lg:px-20 py-12 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 uppercase">
          Website & Aplikasi
        </h2>
        <p className="text-sm md:text-lg text-slate-900 dark:text-white font-bold">
          Solusi digital custom sesuai kebutuhan bisnis
        </p>
      </div>

      {/* Grids */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
        {websiteServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className={`relative bg-white dark:bg-slate-800 border-4 p-4 md:p-6 group ${
                service.popular
                  ? "border-green-500 dark:border-green-400"
                  : "border-slate-900 dark:border-white hover:border-yellow-400 dark:hover:border-yellow-400"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-2 md:left-4 bg-green-500 border-3 border-slate-900 text-white px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs font-black uppercase">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-900 dark:bg-white border-4 border-slate-900 dark:border-white flex items-center justify-center group-hover:bg-yellow-400 group-hover:border-yellow-400">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white dark:text-slate-900 group-hover:text-slate-900" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-xl font-black text-slate-900 dark:text-white mb-2 text-center min-h-[40px] md:min-h-[56px] flex items-center justify-center uppercase">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-slate-900 dark:text-white font-bold mb-5 md:mb-4 text-center line-clamp-4 md:line-clamp-3 min-h-[32px] md:min-h-[60px]">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 md:gap-2">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] md:text-xs text-slate-900 dark:text-white font-bold leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="text-center mb-3 md:mb-4 py-2 md:py-3 bg-yellow-400 border-3 border-slate-900">
                <p className="text-[10px] md:text-xs text-slate-900 font-black uppercase mb-0.5">
                  Mulai dari
                </p>
                <p className="text-lg md:text-2xl font-black text-slate-900 mb-0.5">
                  {service.priceStart}
                </p>
                <p className="text-[9px] md:text-[10px] text-slate-900 font-bold">
                  *harga disesuaikan
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                  `Halo admin Calaraya Project, saya tertarik dengan jasa pembuatan ${service.title}. Boleh konsultasi untuk diskusi detail proyeknya?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-4 border-slate-900 dark:border-white font-black hover:bg-white hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white flex items-center justify-center gap-1.5 md:gap-2 text-xs md:text-sm uppercase"
              >
                Konsultasi
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Website;
