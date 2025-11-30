export default function Pricing() {
  const packages = [
    {
      title: "Basic",
      price: "150.000",
      features: ["1 Tema", "Galeri Foto", "RSVP"],
    },
    {
      title: "Standard",
      price: "220.000",
      features: ["Semua Basic", "Custom Nama Tamu", "Musik Custom"],
    },
    {
      title: "Premium",
      price: "350.000",
      features: ["Semua Fitur", "Custom Design", "QR Code Tamu", "Revisi 2x"],
    },
  ];

  return (
    <section className="py-20" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Paket Harga</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {packages.map((p, i) => (
            <div key={i} className="p-6 border rounded-xl shadow bg-white">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-3xl font-semibold mt-2">Rp {p.price}</p>

              <ul className="mt-4 space-y-2 text-slate-700">
                {p.features.map((f, j) => (
                  <li key={j}>• {f}</li>
                ))}
              </ul>

              <button className="mt-6 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700">
                Order Sekarang
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
