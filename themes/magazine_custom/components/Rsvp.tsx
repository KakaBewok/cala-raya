"use client";

import db from "@/configs/db-config";
import { remineFares } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import badwords from "indonesian-badwords";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

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
    guest: guest?.name || "",
    message: "",
    attending: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLSelectElement | HTMLInputElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { guest, message, attending } = form;
    const cleanMessage = message ? badwords.censor(message) : "";

    const { error } = await db.from("rsvps").insert([
      {
        guest_name: guest,
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
      setForm({ guest: "", message: "", attending: "" });
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
      <section className="bg-white px-6 py-10 w-full flex flex-col items-center">
        <h2
          className={`${remineFares.className} text-4xl font-light tracking-wide text-neutral-800 mb-2`}
        >
          rsvp
        </h2>
        <div className="w-28 h-px bg-neutral-800 mb-8" />

        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          {/* Name */}
          <div>
            <label
              className={`${remineFares.className} block text-base tracking-wide text-neutral-700 font-medium mb-2`}
            >
              name
            </label>
            <input
              name="guest"
              value={form.guest}
              onChange={handleChange}
              placeholder="Your name"
              className="text-xs w-full bg-[#f4f3f3] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label
              className={`${remineFares.className} block text-base tracking-wide text-neutral-700 font-medium mb-2`}
            >
              message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              rows={4}
              className="text-xs w-full bg-[#f4f3f3] px-4 py-3 focus:outline-none focus:ring-1 focus:ring-neutral-400"
              required
            />
          </div>

          {/* Attending */}
          <div>
            <label
              className={`${remineFares.className} block text-base tracking-wide text-neutral-700 font-medium mb-2`}
            >
              attending
            </label>
            <select
              name="attending"
              value={form.attending}
              onChange={handleChange}
              className="cursor-pointer text-xs text-neutral-700 w-full px-4 py-3 bg-[#f4f3f3] appearance-none focus:outline-none focus:ring-1 focus:ring-neutral-400"
              required
            >
              <option value="">Select</option>
              <option value="1">1 Person</option>
              <option value="2">2 Person</option>
              <option value="0">Not Attending</option>
            </select>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="cursor-pointer w-full bg-neutral-700 text-white py-2 text-xs tracking-wide hover:bg-neutral-800 transition"
          >
            Send
          </button>
        </form>
      </section>
      {/* RSVP message */}
      <section className="w-full py-10 px-6 bg-white text-neutral-700">
        <h2
          className={`${remineFares.className} z-10 text-4xl font-medium text-center mb-2 tracking-wide relative`}
        >
          <span>wishes & prayers</span>
          <span className="block border-b border-neutral-700 w-28 mx-auto mt-2"></span>
        </h2>

        <div className="mt-8 space-y-6 max-h-96 overflow-y-auto overflow-x-hidden scrollbar-hide">
          {data.map((item, index) => (
            // <div
            //   key={index}
            //   className="bg-[#f4f3f3] px-6 py-4 rounded-sm text-xs text-center"
            // >
            //   <p className="font-bold mb-3">{item.guest_name}</p>
            //   <p className="font-medium">{item.message}</p>
            // </div>
            <div
              key={index}
              className="bg-[#f4f3f3] px-6 py-4 rounded-sm text-xs text-center"
            >
              {/* Bungkus Nama dan Icon dalam Flex Container agar sejajar horizontal */}
              <div className="flex items-center justify-center gap-1 mb-2">
                <p className="font-bold">{item.guest_name}</p>

                {/* Logika Centang Biru */}
                {item.guest_name.toLowerCase().includes("calaraya") && (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-blue-500 fill-current flex-shrink-0 -p-0"
                  >
                    <path d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.66.25-.83.4-1.7.4-2.6 0-3.03-2.47-5.5-5.5-5.5-.9 0-1.77.22-2.54.62C12.05 1.08 10.96.5 9.75.5 6.72.5 4.25 2.97 4.25 6c0 .9.22 1.77.62 2.54C3.58 9.32 3 10.41 3 11.62c0 1.21.58 2.3 1.5 3.08-.4 1.15-.62 2.39-.62 3.69 0 3.03 2.47 5.5 5.5 5.5.9 0 1.77-.22 2.54-.62.77.4 1.64.62 2.54.62 3.03 0 5.5-2.47 5.5-5.5 0-1.3-.22-2.54-.62-3.69.92-.78 1.5-1.87 1.5-3.08zM10 16.5l-3.5-3.5 1.41-1.41L10 13.67l6.09-6.09L17.5 9 10 16.5z" />
                  </svg>
                )}
              </div>

              <p className="font-medium">{item.message}</p>
            </div>
          ))}
        </div>

        {/* Scroll-down icon */}
        <div className="flex justify-center mt-4">
          <div className="w-8 h-8 border border-neutral-400 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-neutral-500 text-xl">⌄</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RSVP;
