export default function Faq() {
  const faq = [
    { q: "Berapa lama pembuatan undangan digital?", a: "1-2 hari kerja." },
    { q: "Apakah bisa revisi?", a: "Bisa, menyesuaikan paket." },
    { q: "Website pakai teknologi apa?", a: "Laravel, React, Next.js." },
  ];

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">FAQ</h2>

        <div className="mt-10 space-y-4">
          {faq.map((f, i) => (
            <div key={i} className="p-4 border rounded-lg">
              <p className="font-semibold">{f.q}</p>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
