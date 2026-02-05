import { CONTACT_PERSON } from "@/data/data";

function Hero() {
  return (
    <section
      id="home"
      className="py-24 bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase">
            Undangan Digital &<br />
            <span className="inline-block text-slate-900 dark:text-white border-b-4 md:border-b-8 border-yellow-400 pb-1">
              Website Profesional
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-900 dark:text-white font-bold max-w-2xl mx-auto mb-8">
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
              className="px-5 md:px-8 py-3 md:py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-4 border-slate-900 dark:border-white font-black hover:bg-white hover:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white uppercase"
            >
              Mulai Diskusi
            </a>
            <a
              href="#portfolio"
              className="px-5 md:px-8 py-3 md:py-4 border-4 border-slate-900 dark:border-white text-slate-900 dark:text-white bg-white dark:bg-slate-900 font-black hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 uppercase"
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
              <div key={i} className="text-center border-4 border-slate-900 dark:border-white bg-yellow-400 p-4">
                <div className="text-3xl font-black text-slate-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-900">
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
