export default function RSVPForm() {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl mb-4">Konfirmasi Kehadiran</h2>
      <form
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
        className="max-w-md mx-auto space-y-4 px-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Nama"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <select
          name="attendance"
          required
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">-- Pilih Kehadiran --</option>
          <option value="Hadir">Hadir</option>
          <option value="Tidak Hadir">Tidak Hadir</option>
        </select>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Kirim
        </button>
      </form>
    </section>
  );
}
