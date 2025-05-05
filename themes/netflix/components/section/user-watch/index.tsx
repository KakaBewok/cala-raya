"use client";

import { useInvitation } from "@/context/InvitationDataContext";
import Image from "next/image";

export default function UserWatch({ onClick }: { onClick: () => void }) {
  const { guest } = useInvitation();

  return (
    <div className="space-y-36 py-14 text-center">
      <Image
        className="mx-auto scale-110 cursor-pointer transition-transform duration-400 hover:scale-150"
        src={`/assets/images/NIKAHFIX.webp`}
        width={125}
        height={48}
        alt="Nikah Fix"
      />
      <div>
        <p className="mb-10 text-2xl font-bold">Who&apos;s Watching?</p>
        <div onClick={onClick} className="group cursor-pointer">
          <Image
            className="mx-auto transition-transform duration-400 group-hover:scale-125"
            src={`/assets/images/guest-icon.png`}
            width={100}
            height={100}
            alt="Nikah Fix"
          />
          <p className="mt-2 text-xl transition-transform duration-400 group-hover:translate-y-10 group-hover:scale-125">
            Dear <span className="font-bold text-red-500">{guest}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
