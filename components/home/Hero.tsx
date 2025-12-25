import { CONTACT_PERSON } from "@/data/data";
import { Heart } from "lucide-react";

function Hero() {
  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 rounded-full mb-6">
            <Heart className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">
              Solusi Digital Terpercaya
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Undangan Digital &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-500">
              Website Profesional
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Buat undangan digital modern dan website bisnis yang elegan untuk
            momen spesial Anda
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                "Halo, saya ingin bertanya tentang jasa pembuatan Undangan Digital/Website"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg"
            >
              Mulai Sekarang
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Lihat Portfolio
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 max-w-2xl mx-auto mt-16">
            {[
              { number: "100%", label: "Kepuasan Klien" },
              { number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
