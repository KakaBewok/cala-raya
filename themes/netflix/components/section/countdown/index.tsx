"use client";

import { useInvitation } from "@/hooks/use-invitation";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  const { invitationData: data } = useInvitation();

  const calculateTimeLeft = (): TimeLeft | null => {
    const targetDateTime = `${data?.event_date}T00:00:00+07:00`; // WIB timezone
    const difference = +new Date(targetDateTime) - +new Date();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      return null;
    }
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(
    calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <p>Acara sudah dimulai!</p>;
  }

  return (
    <div className="countdown bg-black text-white mb-14 rounded-lg text-center">
      <h2
        className="mb-4 text-lg leading-5 font-bold text-white"
        data-aos="fade-right"
      >
        Countdown ⌛
      </h2>
      <div className="flex justify-center gap-5 text-md" data-aos="fade-left">
        <div className="p-2 bg-neutral-800 rounded-sm w-14 text-center">
          <p className="text-lg font-medium">{timeLeft?.days}</p>
          <p className="text-xs text-neutral-500">Hari</p>
        </div>
        <div className="p-2 bg-neutral-800 rounded-sm w-14 text-center">
          <p className="text-lg font-medium">{timeLeft?.hours}</p>
          <p className="text-xs text-neutral-500">Jam</p>
        </div>
        <div className="p-2 bg-neutral-800 rounded-sm w-14 text-center">
          <p className="text-lg font-medium">{timeLeft?.minutes}</p>
          <p className="text-xs text-neutral-500">Menit</p>
        </div>
        <div className="p-2 bg-neutral-800 rounded-sm w-14 text-center">
          <p className="text-lg font-medium">{timeLeft?.seconds}</p>
          <p className="text-xs text-neutral-500">Detik</p>
        </div>
      </div>
    </div>
  );
}
