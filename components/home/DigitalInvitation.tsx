export default function DigitalInvitation() {
  const features = [
    "Tema premium & elegan",
    "Galeri foto & video",
    "Custom nama tamu",
    "RSVP real-time",
    "Google Maps lokasi",
    "Musik custom",
    "Kirim otomatis via WhatsApp",
  ];

  return (
    <section className="py-20" id="undangan">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Undangan Digital Modern
        </h2>

        <p className="text-center text-slate-600 mt-3">
          Undangan digital siap pakai, elegan, dan mudah dibagikan kepada tamu.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white shadow rounded-xl border hover:shadow-md transition"
            >
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
