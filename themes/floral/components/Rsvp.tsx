"use client";

import { poppins } from "@/fonts/fonts";
import { useEffect, useState } from "react";
import badwords from "indonesian-badwords";
import db from "@/configs/db-config";
import toast from "react-hot-toast";
import { useInvitation } from "@/hooks/use-invitation";
import Image from "next/image";

const RSVP = () => {
  const { invitationData, guest } = useInvitation();
  const [data, setData] = useState<
    {
      guest_name: string;
      message: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    message: "",
    attending: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { message, attending } = form;
    const cleanMessage = message ? badwords.censor(message) : "";

    const { error } = await db.from("rsvps").insert([
      {
        guest_name: guest?.name ?? "Guest",
        message: cleanMessage,
        attendance_status:
          attending === "1" || attending === "2" || attending === "3",
        total_guest: attending ?? 0,
        invitation_id: invitationData?.id,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error("Failed saving RSVP: ", error.message);
      toast.error("Terjadi kesalahan saat menyimpan RSVP.");
    } else {
      fetchData();
      toast.success("RSVP berhasil dikirim. Terima kasih!");
      setForm({ message: "", attending: "" });
    }
  };

  const fetchData = async () => {
    const { data, error } = await db
      .from("rsvps")
      .select("guest_name, message")
      .eq("invitation_id", invitationData?.id)
      .not("message", "eq", "")
      .order("updated_at", { ascending: false });

    if (error) console.error("Error fetching RSVP data: ", error);
    else setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // bg-[#f1ebdd]

  return (
    <div className="w-full overflow-hidden" data-aos="zoom-in">
      {/* form */}
      <section className="bg-[#f8f3ea] px-6 py-10 w-full flex flex-col items-center relative">
        <Image
          data-aos="zoom-in"
          src={`/assets/images/floral/28.webp`}
          width={80}
          height={80}
          alt="Bunga kiri atas"
          className="swing-left-fast absolute top-0 -left-5 transform rotate-[40deg]"
        />

        <h2
          className={`${poppins.className} text-4xl font-light tracking-wide text-[#c4a790] mb-2`}
        >
          RSVP
        </h2>
        <div className="w-14 h-px bg-[#c4a790] mb-8" />

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          {/* Message */}
          <div>
            <label
              className={`${poppins.className} block text-base tracking-wide text-[#c4a790] font-medium mb-2`}
            >
              Ucapan
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Ucapan untuk pengantin"
              rows={4}
              className="text-[#c4a790] text-xs w-full bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              required
            />
          </div>

          {/* Attending */}
          <div>
            <label
              className={`${poppins.className} block text-base tracking-wide text-[#c4a790] font-medium mb-2`}
            >
              Konfirmasi Kehadiran
            </label>
            <select
              name="attending"
              value={form.attending}
              onChange={handleChange}
              className="cursor-pointer text-xs text-[#c4a790] w-full px-4 py-3 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-neutral-400"
              required
            >
              <option value="">Pilih</option>
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
              <option value="3">Lebih dari 2 orang</option>
              <option value="0">Tidak Hadir</option>
            </select>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="cursor-pointer w-full bg-[#c4a790] text-white py-2 text-xs tracking-wide hover:bg-neutral-800 transition"
          >
            Kirim
          </button>
        </form>
      </section>
      {/* RSVP message */}
      <section className="relative w-full py-10 px-6 bg-[#f9f4ec] text-neutral-700">
        <h2
          className={`${poppins.className} text-[#c4a790] z-10 text-3xl font-light text-center mb-2 tracking-wide relative`}
        >
          <span>Ucapan & Doa</span>
          <span className="block border-b border-[#c4a790] w-14 mx-auto mt-2"></span>
        </h2>

        <Image
          data-aos="zoom-in"
          src={`/assets/images/floral/16.webp`}
          width={110}
          height={110}
          alt="Bunga kiri bawah"
          className="swing-left-fast absolute bottom-20 -left-11 transform rotate-[40deg]"
        />

        <Image
          data-aos="zoom-in"
          src={`/assets/images/floral/18.webp`}
          width={60}
          height={60}
          alt="Bunga kanan tengah"
          className="swing-left-slow absolute z-20 top-0 right-0"
        />

        <div className="mt-8 space-y-6 max-h-96 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {data.map((item, index) => (
            <div
              key={index}
              className="px-6 py-4 rounded-sm text-xs text-center bg-orange-100/40 backdrop-blur-xs"
            >
              <p className="font-bold mb-3 text-neutral-600">
                {item.guest_name}
              </p>
              <p className="font-medium text-neutral-500">{item.message}</p>
            </div>
          ))}
        </div>
        {/* Scroll-down icon */}
        <div className="flex justify-center mt-4">
          <div className="w-6 h-6 border border-neutral-400 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-neutral-500 text-lg mb-2">⌄</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSVP;
