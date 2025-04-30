export default function Hero() {
  const handleScroll = () => {
    const target = document.getElementById("schedule");
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      data-aos="fade-up"
      id="hero"
      className="min-h-screen flex items-center justify-center bg-black text-white text-center p-8"
    >
      <div>
        <h1 className="text-5xl mb-4 tracking-wide">Andi & Bunga</h1>
        <p className="text-xl mb-2">Mengundang Anda ke pernikahan kami</p>
        <p className="text-sm">Sabtu, 17 Mei 2025</p>
        <button
          onClick={handleScroll}
          className="mt-4 px-6 py-2 border border-white rounded hover:bg-white hover:text-black transition duration-300"
        >
          Buka Undangan
        </button>
      </div>
    </div>
  );
}
