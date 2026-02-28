import { features } from "@/data/data";

function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[12px] md:text-[13px] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">
            Kenapa Kami
          </p>
          <h2 className="text-2xl md:text-[2rem] font-semibold text-stone-900 tracking-tight mb-4">
            Kelebihan Produk Kami
          </h2>
          <p className="text-[15px] text-stone-500 max-w-md mx-auto leading-relaxed">
            Berbagai keunggulan yang membuat kami menjadi pilihan terbaik untuk
            kebutuhan undangan digital dan website
          </p>
        </div>

        {/* Features Grid — 2 cols on mobile, 2 on sm, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-x-6 md:gap-y-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-stone-50/60 rounded-xl p-4 md:p-5 border border-stone-100/80 hover:border-stone-200 hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-lg md:rounded-xl bg-white border border-stone-100 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-stone-900 group-hover:border-stone-900 transition-all duration-300 shadow-sm">
                <feature.IconComponent className="w-4 h-4 md:w-5 md:h-5 text-stone-500 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-[13px] md:text-[15px] font-semibold text-stone-800 mb-1.5 md:mb-2 tracking-tight leading-snug">
                {feature.title}
              </h3>
              <p className="text-[11px] md:text-[13px] text-stone-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
