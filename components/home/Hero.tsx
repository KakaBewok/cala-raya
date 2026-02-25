import { CONTACT_PERSON } from "@/data/data";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center bg-[#FDFBF7]"
    >
      {/* Subtle decorative element */}
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(193,177,147,0.08)_0%,_transparent_70%)] pointer-events-none" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(193,177,147,0.06)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 w-full py-28 md:py-32">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-[12px] md:text-[13px] font-medium tracking-[0.2em] uppercase text-stone-400 mb-5 md:mb-6">
            Digital Invitation &amp; Website
          </p>

          {/* Headline */}
          <h1 className="text-[2.25rem] md:text-[3.25rem] lg:text-[3.75rem] leading-[1.1] font-semibold text-stone-900 mb-6 tracking-tight">
          Platform yang Dirancang
            <br />
            <span className="text-stone-400">untuk Tampil Beda.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-[15px] md:text-lg text-stone-500 leading-relaxed max-w-lg mb-10">
          Kustomisasi tanpa batas untuk menghadirkan tampilan digital yang benar-benar mewakili gaya kamu.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${CONTACT_PERSON}?text=${encodeURIComponent(
                "Halo, saya ingin bertanya tentang jasa pembuatan Undangan Digital/Website"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 bg-stone-900 text-white text-[14px] font-medium rounded-lg hover:bg-stone-800 transition-colors duration-200 tracking-wide"
            >
              Mulai Diskusi
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-7 py-3 border border-stone-200 text-stone-700 text-[14px] font-medium rounded-lg hover:border-stone-300 hover:bg-stone-50 transition-all duration-200 tracking-wide"
            >
              Lihat Portfolio
            </a>
          </div>

          {/* Minimal Stats */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-14 md:mt-16 pt-8 border-t border-stone-100">
            {[
              { number: "100%", label: "Klien Puas" },
              { number: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl md:text-3xl font-semibold text-stone-900 tracking-tight">
                  {stat.number}
                </p>
                <p className="text-[12px] md:text-[13px] text-stone-400 mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
