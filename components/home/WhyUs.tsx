import { features } from "@/data/data";

function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-12 md:py-24 bg-yellow-400"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 bg-slate-900 text-white border-4 border-slate-900 mb-4">
            <span className="text-sm font-black uppercase">Kenapa Pilih Kami?</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 uppercase">
            Kelebihan Produk Kami
          </h2>
          <p className="text-sm md:text-lg text-slate-900 font-bold max-w-2xl mx-auto">
            Berbagai keunggulan yang membuat kami menjadi pilihan terbaik
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, i: number) => (
            <div
              key={i}
              className="group bg-white border-4 border-slate-900 p-4 hover:bg-slate-100 dark:bg-slate-800"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-slate-900 border-4 border-slate-900 flex items-center justify-center mb-3 group-hover:bg-yellow-400">
                <feature.IconComponent className="w-5 h-5 text-white group-hover:text-slate-900" />
              </div>

              {/* Content */}
              <h3 className="text-sm font-black text-slate-900 dark:text-white mb-2 uppercase">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-900 dark:text-white leading-relaxed font-bold">
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
