import { CONTACT_PERSON, websiteServices } from "@/data/data";
import { ArrowRight, Check } from "lucide-react";

const Website = () => {
  return (
    <section id="website" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[12px] md:text-[13px] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">
            Layanan Website
          </p>
          <h2 className="text-2xl md:text-[2rem] font-semibold text-stone-900 tracking-tight mb-4">
            Website &amp; Aplikasi
          </h2>
          <p className="text-[15px] text-stone-500 max-w-md mx-auto leading-relaxed">
            Solusi digital custom sesuai kebutuhan bisnis Anda dengan teknologi
            modern
          </p>
        </div>

        {/* Services Grid — 2 cols on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {websiteServices.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={i}
                className={`relative bg-white rounded-xl p-3.5 sm:p-5 md:p-6 border transition-all duration-300 hover:shadow-md ${
                  service.popular
                    ? "border-stone-900 shadow-sm"
                    : "border-stone-100 hover:border-stone-200"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-2.5 left-3 sm:left-5 px-2.5 py-0.5 bg-stone-900 text-white text-[9px] sm:text-[10px] font-medium rounded-full tracking-wider uppercase">
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-stone-500" />
                </div>

                {/* Title */}
                <h3 className="text-[13px] sm:text-[15px] font-semibold text-stone-800 mb-1.5 sm:mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[11px] sm:text-[13px] text-stone-400 leading-relaxed mb-3 sm:mb-5">
                  {service.description}
                </p>

                {/* Features — show ALL */}
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 sm:gap-2">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-stone-400 flex-shrink-0 mt-0.5" />
                      <span className="text-[10px] sm:text-[12px] md:text-[13px] text-stone-500 leading-snug">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-stone-50">
                  <p className="text-[10px] sm:text-[11px] text-stone-400 mb-0.5 tracking-wide">
                    Mulai dari
                  </p>
                  <p className="text-base sm:text-xl font-semibold text-stone-900 tracking-tight">
                    {service.priceStart}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                    `Halo admin Calaraya Project, saya tertarik dengan jasa pembuatan ${service.title}. Boleh konsultasi untuk diskusi detail proyeknya?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2.5 bg-stone-50 text-stone-700 text-[11px] sm:text-[13px] font-medium rounded-lg hover:bg-stone-900 hover:text-white transition-all duration-200"
                >
                  Konsultasi
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Website;
