function Portfolio() {
  const portfolios = [
    {
      title: "Wedding - Andi & Siti",
      type: "Undangan Digital",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    },
    {
      title: "Company Profile - PT Maju",
      type: "Website",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    },
    {
      title: "Birthday - Sweet 17",
      type: "Undangan Digital",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
    },
    {
      title: "E-Commerce Fashion",
      type: "Website",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    },
    {
      title: "Wedding - Budi & Ani",
      type: "Undangan Digital",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
    },
    {
      title: "Landing Page Startup",
      type: "Website",
      image:
        "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&q=80",
    },
    {
      title: "Aqiqah - Baby Zahra",
      type: "Undangan Digital",
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80",
    },
    {
      title: "Restaurant Website",
      type: "Website",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Portfolio Kami
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Beberapa project yang telah kami selesaikan
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {portfolios.map((item, i) => (
            <div
              key={i}
              className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/80 transition-all flex items-center justify-center">
                  <button className="opacity-0 group-hover:opacity-100 px-4 py-2 bg-white text-slate-900 rounded-full font-semibold text-xs transition-all">
                    Lihat Detail
                  </button>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 bg-white/90 dark:bg-slate-900/90 text-[10px] font-semibold rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Portfolio;
