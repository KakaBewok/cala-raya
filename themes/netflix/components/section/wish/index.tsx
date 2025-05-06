"use client";

import db from "@/configs/db-config";
import { useInvitation } from "@/context/InvitationDataContext";
import badwords from "indonesian-badwords";
import Image from "next/image";
import { forwardRef, useEffect, useRef, useState } from "react";

interface WishItemProps {
  guest_name: string;
  message: string;
  icon_color: string;
}

const WishItem = forwardRef<HTMLDivElement, WishItemProps>(
  ({ guest_name, message, icon_color }, ref) => (
    <div ref={ref} className="flex gap-2">
      <div>
        <Image
          alt="profile"
          width={24}
          height={24}
          src={`/assets/images/face.png`}
          style={{
            backgroundColor: icon_color,
            minWidth: 24,
            minHeight: 24,
          }}
          className="rounded-sm"
        />
      </div>
      <div>
        <p className="text-md -mt-1 text-white">{guest_name}</p>
        <p className="text-xs text-[#A3A1A1]">{message}</p>
      </div>
    </div>
  )
);

const colorList = [
  "red",
  "#ffdb58",
  "#6bc76b",
  "#48cae4",
  "#f4a261",
  "#2a9d8f",
  "#e76f51",
  "#8ecae6",
  "#b5838d",
];

export default function WishSection() {
  const { invitationData, guest } = useInvitation();

  const lastChildRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState<WishItemProps[]>([]);
  const [message, setMessage] = useState<string>("");
  const [attending, setAttending] = useState<string>("0");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.length < 5) {
      setError("Pesan minimal 5 karakter!");
      return;
    }

    setLoading(true);
    setError(null);

    // random color based data length
    const randomColor = colorList[data.length % colorList.length];
    const newmessage = badwords.censor(message);
    const { error } = await db.from("rsvps").insert([
      {
        guest_name: guest,
        message: newmessage,
        icon_color: randomColor,
        attendance_status: attending === "1" || attending === "2",
        total_guest: attending,
        invitation_id: invitationData?.id,
      },
    ]);

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      fetchData();
      setTimeout(scrollToLastChild, 500);
      setMessage("");
    }
  };

  const fetchData = async () => {
    const { data, error } = await db
      .from("rsvps")
      .select("guest_name, message, icon_color")
      .eq("invitation_id", invitationData?.id);

    if (error) console.error("Error fetching data: ", error);
    else setData(data);
  };

  const scrollToLastChild = () => {
    if (lastChildRef.current) {
      lastChildRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div aos-data="zoom-in">
      <h2 className="mb-5 text-lg leading-5 font-bold text-white">
        Best Wishes for the Couple ❤️
      </h2>
      {/* comments list */}
      <div className="wish-container max-h-[25rem] space-y-4 overflow-auto rounded-sm border border-neutral-950 bg-neutral-900 p-3">
        {data.map((item, index) => (
          <WishItem
            guest_name={item.guest_name}
            message={item.message}
            icon_color={item.icon_color}
            key={index}
            ref={index === data.length - 1 ? lastChildRef : null}
          />
        ))}
      </div>
      {/* form input */}
      <form onSubmit={handleSubmit} className="mt-9 space-y-4">
        {error && (
          <div className="rounded-sm bg-red-500 px-2 py-1 text-sm font-normal text-slate-50">
            {error}
          </div>
        )}

        <div className="space-y-1">
          <label className="text-sm font-semibold">Pesan buat kita ✌️</label>
          <textarea
            required
            minLength={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full rounded-sm bg-slate-100 px-2 py-1 text-black focus:outline-none"
            rows={4}
          ></textarea>
        </div>
        <div className="flex flex-col justify-center items-start gap-1">
          <label className="text-sm mb-2 font-semibold">
            Konfirmasi kehadiran{" "}
          </label>
          <label className="cursor-pointer text-sm">
            <input
              type="radio"
              name="guest_amount"
              value="1"
              checked={attending === "1"}
              className="mr-3 "
              onChange={(e) => setAttending(e.target.value)}
            />
            1 Orang
          </label>

          <label className="cursor-pointer text-sm">
            <input
              type="radio"
              name="guest_amount"
              value="2"
              checked={attending === "2"}
              className="mr-3 "
              onChange={(e) => setAttending(e.target.value)}
            />
            2 Orang
          </label>

          <label className="cursor-pointer text-sm">
            <input
              type="radio"
              name="guest_amount"
              value="0"
              checked={attending === "0"}
              className="mr-3"
              onChange={(e) => setAttending(e.target.value)}
            />
            Maaf, Saya tidak bisa hadir :(
          </label>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-4 w-full rounded-sm bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600 focus:outline-none disabled:cursor-not-allowed disabled:bg-red-300"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
WishItem.displayName = "WishItem";
