"use client";

import { nyghtSerif, remineFares } from "@/fonts/fonts";
import { useEffect, useState } from "react";
import badwords from "indonesian-badwords";
import db from "@/configs/db-config";
import toast from "react-hot-toast";
import { useInvitation } from "@/hooks/use-invitation";

const RSVP = () => {
  const { invitationData, guest } = useInvitation();
  const [data, setData] = useState<
    {
      id: number;
      guest_name: string;
      message: string;
    }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: "",
    message: "",
    attending: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
        guest_name: form.name ?? guest?.name,
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
      setForm({ name: "", message: "", attending: "" });
    }
  };

  const fetchData = async () => {
    const { data, error } = await db
      .from("rsvps")
      .select("id, guest_name, message")
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
    <div>
      <div className="py-20 bg-[#782523]">
        <div
          className={`${nyghtSerif.className} px-8 w-full max-w-md space-y-6  text-white`}
        >
          <div className="text-center">
            <h1 className="text-7xl font-semibold">RSVP</h1>
            <p className="mt-4 text-sm italic">
              Konfirmasi kehadiranmu dengan mengisi form di bawah ini.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Input Nama */}
            <div className="relative flex flex-col justify-center items-center">
              <label htmlFor="name" className="text-xl text-center">
                Nama
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="font-light text-center w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white py-2 text-sm"
              />
            </div>

            {/* Dropdown Kehadiran */}
            <div className="relative flex flex-col justify-center items-center">
              <label
                htmlFor="attending"
                className="text-xl text-center mx-auto"
              >
                Saya akan menghadiri
              </label>
              <div className="relative mt-2 w-full">
                <select
                  id="attending"
                  name="attending"
                  value={form.attending}
                  onChange={handleChange}
                  className="font-light text-center w-full bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white py-2 text-sm text-white"
                >
                  {/* Opsi dropdown perlu warna teks yang kontras saat dibuka */}
                  <option className="text-blac" value="1">
                    Hadir
                  </option>
                  <option className="text-black" value="0">
                    Tidak Hadir
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            {/* Textarea Ucapan & Doa */}
            <div className="relative flex flex-col justify-center items-center">
              <label htmlFor="message" className="text-xl text-center">
                Ucapan & Doa
              </label>
              <textarea
                id="message"
                name="message"
                rows={1}
                value={form.message}
                onChange={handleChange}
                className="font-light text-center w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white py-2 text-sm resize-none"
              />
            </div>

            {/* Tombol Kirim */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="px-10 py-3 font-serif border-2 border-white rounded-full bg-[#802B2B] text-white transition-colors duration-300 hover:bg-white hover:text-[#802B2B]"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        {/* messages */}
        <div>
          <div className="border border-blue-500">UCAPAN DOA</div>
          <div className="border border-red-500 w-full px-4 flex flex-col items-center justify-center gap-2">
            {data.map((d) => (
              <div key={d.id} className="p-8">
                <h2 className="font-semibold text-lg">{d.guest_name}</h2>
                <p className="text-md">{d.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
