"use client";

import { remineFares } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { useState } from "react";

const GiftInfo = () => {
  const { invitationData: data } = useInvitation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [addressCopied, setAddressCopied] = useState<boolean>(false);

  const handleCopy = (text: string, index?: number) => {
    navigator.clipboard.writeText(text);
    if (index !== undefined) {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } else {
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
    }
  };

  return (
    <section className="text-center bg-[#f8f4ec] px-5 py-10" data-aos="zoom-in">
      <h2
        className={`${remineFares.className} text-neutral-700 text-3xl font-medium tracking-wide mb-2`}
      >
        Tanda Kasih
      </h2>
      <div className="w-24 h-px bg-neutral-700 mx-auto mb-6"></div>
      <p className="text-xs text-neutral-600 font-normal mb-8">
        Doa restu yang kami terima sangat berarti, namun jika memberi merupakan
        tanda kasih, tentunya semakin melengkapi kebahagiaan kami.
      </p>

      {/* Account */}
      {data?.gift_infos?.map((gift, idx) => (
        <div className="bg-white rounded-sm py-5 px-4 mb-6" key={idx}>
          <p className="font-bold mb-1 text-xs text-neutral-600">
            {gift.provider_name}
          </p>
          <p className="text-neutral-400 mb-1 text-xs">{gift.account_number}</p>
          <p className="text-neutral-400 mb-4 text-xs">
            a.n. <span className="font-semibold">{gift.account_holder}</span>
          </p>
          <button
            onClick={() => handleCopy(gift.account_number, idx)}
            className={`${
              copiedIndex === idx ? "bg-neutral-400" : "bg-neutral-800"
            } text-white text-xs px-6 py-2 cursor-pointer`}
          >
            {copiedIndex === idx ? "Tersalin" : "Salin"}
          </button>
        </div>
      ))}

      {/* Address */}
      <div className="bg-white rounded-sm py-5 px-4">
        <p className="font-bold mb-2 text-xs text-neutral-600">HADIAH FISIK</p>
        <p className="text-neutral-400 text-xs mb-4">
          {data?.gift_infos?.[0].gift_delivery_address || ""}
        </p>
        <button
          onClick={() =>
            handleCopy(data?.gift_infos?.[0].gift_delivery_address || "")
          }
          className={`${
            addressCopied ? "bg-neutral-400" : "bg-neutral-800"
          } text-white text-xs px-6 py-2 cursor-pointer`}
        >
          {addressCopied ? "Tersalin" : "Salin"}
        </button>
      </div>
    </section>
  );
};

export default GiftInfo;
