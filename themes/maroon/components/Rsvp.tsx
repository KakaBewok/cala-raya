"use client";

import { ninfa, poppins, remineFares } from "@/fonts/fonts";
import { useEffect, useState } from "react";
import badwords from "indonesian-badwords";
import db from "@/configs/db-config";
import toast from "react-hot-toast";
import { useInvitation } from "@/hooks/use-invitation";

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

  return (
    <div className="w-full" data-aos="zoom-in">
      {/* form */}
      <section
        className={`${ninfa.className} bg-[#f8f3ea] px-6 py-10 w-full flex flex-col items-center`}
      >
        <h2 className={`text-2xl font-light tracking-wide text-rose-900 mb-2`}>
          RSVP
        </h2>
        <div className="w-28 h-px bg-rose-900 mb-8" />

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          {/* Message */}
          <div>
            <label
              className={`block text-xs tracking-wide text-rose-900 font-medium mb-2`}
            >
              UCAPAN <span className={`${poppins.className}`}>&</span> DOA
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Ucapan untuk pengantin"
              rows={4}
              className="text-rose-900 text-xs w-full bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              required
            />
          </div>

          {/* Attending */}
          <div>
            <label
              className={`block text-xs tracking-wide text-rose-900 font-medium mb-2`}
            >
              KONFIRMASI KEHADIRAN
            </label>
            <select
              name="attending"
              value={form.attending}
              onChange={handleChange}
              className="cursor-pointer text-xs text-rose-900 w-full px-4 py-3 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-neutral-400"
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
            className="cursor-pointer w-full bg-rose-900 text-white py-2 text-xs tracking-wide hover:bg-neutral-800 transition"
          >
            KIRIM
          </button>
        </form>
      </section>
      {/* RSVP message */}
      <section className="w-full py-10 px-6 bg-[#f9f4ec] text-neutral-700">
        <h2
          className={`${remineFares.className} z-10 text-4xl font-medium text-center mb-2 tracking-wide relative`}
        >
          <span>ucapan & doa</span>
          <span className="block border-b border-neutral-700 w-28 mx-auto mt-2"></span>
        </h2>

        <div className="mt-8 space-y-6 max-h-96 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-[#f1ebdd] px-6 py-4 rounded-sm text-xs text-center"
            >
              <p className="font-bold mb-3">{item.guest_name}</p>
              <p className="font-medium">{item.message}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default RSVP;
