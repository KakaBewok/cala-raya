export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Apa Kata Mereka?</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 bg-white border rounded-xl shadow">
              <p className="text-slate-600 italic">
                Layanannya sangat memuaskan! Undangannya elegan dan cepat
                dibuat.
              </p>
              <p className="font-bold mt-4">Client {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
