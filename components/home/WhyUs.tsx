export default function WhyUs() {
  const reasons = [
    "Desain modern & mobile-friendly",
    "Pengerjaan cepat",
    "Support via WhatsApp",
    "Teknologi terbaru",
    "Keamanan data maksimal",
    "Bisa custom sesuai kebutuhan",
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Kenapa Memilih Kami?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow rounded-xl border hover:shadow-md transition"
            >
              <p className="font-medium">{r}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
