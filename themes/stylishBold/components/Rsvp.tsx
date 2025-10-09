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
    <div className="flex items-center justify-center min-h-screen bg-[#5D2323]">
      <div
        className={`${nyghtSerif.className} px-8 w-full max-w-md space-y-6  text-white`}
      >
        <div className="text-center">
          <h1 className="text-7xl font-semibold">RSVP</h1>
          <p className="mt-4 text-lg">
            Konfirmasi kehadiranmu dengan mengisi form di bawah ini.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Input Nama */}
          <div className="relative">
            <label htmlFor="name" className="text-xl">
              Nama
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white py-2 text-lg"
            />
          </div>

          {/* Dropdown Kehadiran */}
          <div className="relative">
            <label htmlFor="attending" className="text-xl">
              Saya akan menghadiri
            </label>
            <div className="relative mt-2">
              <select
                id="attending"
                name="attending"
                value={form.attending}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-white py-2 text-lg text-white"
              >
                {/* Opsi dropdown perlu warna teks yang kontras saat dibuka */}
                <option className="text-black" value="1">
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
          <div className="relative">
            <label htmlFor="message" className="text-xl">
              Ucapan & Doa
            </label>
            <textarea
              id="message"
              name="message"
              rows={2}
              value={form.message}
              onChange={handleChange}
              className="w-full bg-transparent border-0 border-b-2 border-white focus:outline-none focus:ring-0 focus:border-white py-2 text-lg resize-none"
            />
          </div>

          {/* Tombol Kirim */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-10 py-3 font-semibold border-2 border-white rounded-full bg-transparent text-white transition-colors duration-300 hover:bg-white hover:text-[#5D2323]"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // return (
  //   <div className="w-full" data-aos="zoom-in">
  //     {/* form */}
  //     <section
  //       className={`${nyghtSerif.className} bg-rose-700 px-6 py-10 w-full flex flex-col items-center`}
  //     >
  //       <h2 className={`text-4xl font-light tracking-wide text-slate-50 mb-2`}>
  //         rsvp
  //       </h2>
  //       <div className="w-28 h-px bg-neutral-800 mb-8" />

  //       <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
  //         {/* Message */}
  //         <div>
  //           <label
  //             className={`block text-base tracking-wide text-slate-50 font-medium mb-2`}
  //           >
  //             ucapan
  //           </label>
  //           <textarea
  //             name="message"
  //             value={form.message}
  //             onChange={handleChange}
  //             placeholder="Ucapan untuk pengantin"
  //             rows={4}
  //             className="text-xs w-full bg-white px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-400"
  //             required
  //           />
  //         </div>

  //         {/* Attending */}
  //         <div>
  //           <label
  //             className={`block text-base tracking-wide text-neutral-700 font-medium mb-2`}
  //           >
  //             konfirmasi kehadiran
  //           </label>
  //           <select
  //             name="attending"
  //             value={form.attending}
  //             onChange={handleChange}
  //             className="cursor-pointer text-xs text-neutral-700 w-full px-4 py-3 bg-white appearance-none focus:outline-none focus:ring-1 focus:ring-neutral-400"
  //             required
  //           >
  //             <option value="">Pilih</option>
  //             <option value="1">1 Orang</option>
  //             <option value="2">2 Orang</option>
  //             <option value="3">Lebih dari 2 orang</option>
  //             <option value="0">Tidak Hadir</option>
  //           </select>
  //         </div>

  //         <button
  //           disabled={loading}
  //           type="submit"
  //           className="cursor-pointer w-full bg-neutral-700 text-white py-2 text-xs tracking-wide hover:bg-neutral-800 transition"
  //         >
  //           Kirim
  //         </button>
  //       </form>
  //     </section>
  //     {/* RSVP message */}
  //     <section className="w-full py-10 px-6 bg-[#f9f4ec] text-neutral-700">
  //       <h2
  //         className={`${remineFares.className} z-10 text-4xl font-medium text-center mb-2 tracking-wide relative`}
  //       >
  //         <span>ucapan & doa</span>
  //         <span className="block border-b border-neutral-700 w-28 mx-auto mt-2"></span>
  //       </h2>

  //       <div className="mt-8 space-y-6 max-h-96 overflow-y-auto overflow-x-hidden scrollbar-hide">
  //         {data.map((item, index) => (
  //           <div
  //             key={index}
  //             className="bg-[#f1ebdd] px-6 py-4 rounded-sm text-xs text-center"
  //           >
  //             <p className="font-bold mb-3">{item.guest_name}</p>
  //             <p className="font-medium">{item.message}</p>
  //           </div>
  //         ))}
  //       </div>

  //       {/* Scroll-down icon */}
  //       <div className="flex justify-center mt-4">
  //         <div className="w-8 h-8 border border-neutral-400 rounded-full flex items-center justify-center animate-bounce">
  //           <span className="text-neutral-500 text-xl">⌄</span>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );
};

export default RSVP;
