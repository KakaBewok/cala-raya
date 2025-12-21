import { features } from "@/data/data";
import { Heart, Phone, Star } from "lucide-react";

function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 rounded-full mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Kenapa Pilih Kami?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Kelebihan Produk Kami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Berbagai keunggulan yang membuat kami menjadi pilihan terbaik
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {features.map((feature, i: number) => (
            <div
              key={i}
              className="group bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-emerald-300 dark:hover:border-emerald-500 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg flex items-center justify-center mb-3 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors">
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

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 shadow-lg max-w-2xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Siap Membuat Undangan atau Website Impian Anda?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Konsultasi gratis! Tim kami siap membantu mewujudkan ide Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                <Heart className="w-4 h-4" />
                Mulai Project
              </button>
              <button className="px-6 py-3 border-2 border-slate-200 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:border-slate-300 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
