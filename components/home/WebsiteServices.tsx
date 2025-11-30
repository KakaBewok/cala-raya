export default function WebsiteServices() {
  const services = [
    "Landing Page",
    "Company Profile",
    "E-Commerce",
    "Custom Web App",
    "Dashboard Admin",
    "Sistem Booking",
  ];

  return (
    <section className="py-20 bg-slate-50" id="services">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Website Profesional Untuk Bisnis Anda
        </h2>

        <p className="text-center text-slate-600 mt-3">
          Dibangun menggunakan teknologi modern: Laravel, React, Next.js.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow rounded-xl border hover:shadow-md transition"
            >
              <p className="font-medium">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
