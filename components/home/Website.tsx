import { websiteServices } from "@/data/data";
import { ArrowRight, Check } from "lucide-react";

const Website = () => {
  return (
    <section className="px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
          Jasa Pembuatan Website & Aplikasi
        </h2>
        <p className="text-slate-600 dark:text-slate-400">
          Solusi digital custom sesuai kebutuhan bisnis Anda
        </p>
      </div>

      {/* Grid: 2 columns on mobile, 4 columns on md+ */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {websiteServices.map((service, i) => {
          const Icon = service.icon;
          return (
            <div
              key={i}
              className={`relative bg-white dark:bg-slate-800 rounded-lg md:rounded-lg p-4 md:p-6 border-2 transition-all hover:shadow-xl hover:shadow-blue-300 group ${
                service.popular
                  ? "border-cyan-500 dark:border-cyan-600 border-3"
                  : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-2 left-2 md:left-4 bg-gradient-to-r from-blue-500 to-green-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded-full text-[10px] md:text-xs font-semibold">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-3 md:mb-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-xl font-bold text-slate-900 dark:text-white mb-2 text-center min-h-[40px] md:min-h-[56px] flex items-center justify-center">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-3 md:mb-4 text-center line-clamp-2 md:line-clamp-3 min-h-[32px] md:min-h-[60px]">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                {service.features.slice(0, 4).map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 md:gap-2">
                    <Check className="w-3 h-3 md:w-4 md:h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[10px] md:text-xs text-slate-700 dark:text-slate-300 leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price */}
              <div className="text-center mb-3 md:mb-4 py-2 md:py-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg">
                <p className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 mb-0.5">
                  Mulai dari
                </p>
                <p className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white">
                  Rp {service.priceStart.split(".")[0]}jt
                </p>
                <p className="text-[9px] md:text-[10px] text-slate-500 dark:text-slate-400">
                  *harga disesuaikan
                </p>
              </div>

              {/* CTA Button */}
              <a
                href={`https://wa.me/6289607937642?text=${encodeURIComponent(
                  `Halo admin Calaraya Project, saya tertarik dengan jasa ${service.title}. Boleh konsultasi untuk diskusi detail proyeknya?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg md:rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 transition-colors flex items-center justify-center gap-1.5 md:gap-2 shadow-lg text-xs md:text-sm duration-300"
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
