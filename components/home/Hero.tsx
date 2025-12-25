import { CONTACT_PERSON } from "@/data/data";

function Hero() {
  return (
    <section
      id="home"
      className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Undangan Digital &<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
              Website Profesional
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Undangan digital dan website profesional dengan pendekatan desain
            yang modern dan fungsional
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                "Halo, saya ingin bertanya tentang jasa pembuatan Undangan Digital/Website"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 md:px-8 py-3 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg"
            >
              Mulai Sekarang
            </a>
            <a
              href="#portfolio"
              className="px-5 md:px-8 py-3 md:py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Lihat Portfolio
            </a>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 max-w-2xl mx-auto mt-10 md:mt-16">
            {[
              { number: "100%", label: "Kepuasan Klien" },
              { number: "24/7", label: "Support" },
            ].map((stat, i: number) => (
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
