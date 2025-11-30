export default function Portfolio() {
  return (
    <section className="py-20" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Portfolio Kami
        </h2>

        <p className="text-center text-slate-600 mt-3">
          Beberapa undangan digital dan website yang telah kami buat.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {/* Replace with real images */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-slate-200 h-48 rounded-lg"></div>
          ))}
        </div>
      </div>
    </section>
  );
}
