import { features } from "@/data/data";

function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex px-4 py-2 bg-emerald-50 dark:bg-emerald-800/20 text-emerald-700 dark:text-emerald-400 rounded-full mb-4">
            <span className="text-sm font-medium">Kenapa Pilih Kami?</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Kelebihan Produk Kami
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Berbagai keunggulan yang membuat kami menjadi pilihan terbaik
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, i: number) => (
            <div
              key={i}
              className="group bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-500 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-800/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
                <feature.IconComponent className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>

              {/* Content */}
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
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
