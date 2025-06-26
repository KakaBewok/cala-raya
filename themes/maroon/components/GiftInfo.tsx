"use client";

import { ninfa, playfair } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { useState } from "react";

const GiftInfo = () => {
  const { invitationData: data } = useInvitation();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [addressCopied, setAddressCopied] = useState<boolean>(false);
  const [isGiftInfoOpen, setIsGiftInfoOpen] = useState<boolean>(false);

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
    <section
      className={`${ninfa.className} text-center bg-[#f8f4ec] px-5 py-10`}
      data-aos="zoom-in"
    >
      <h2 className={`text-rose-900 text-2xl font-light tracking-wide mb-2`}>
        TANDA KASIH
      </h2>
      <div className="w-24 h-[0.5px] bg-rose-900 mx-auto mb-6"></div>
      <p className="text-xs text-rose-900 font-light mb-8 tracking-wider">
        Doa restu yang kami terima sangat berarti, namun jika memberi merupakan
        tanda kasih, tentunya semakin melengkapi kebahagiaan kami.
      </p>

      {!isGiftInfoOpen ? (
        <div className="bg-white w-full h-48 flex justify-center items-center">
          <button
            onClick={() => setIsGiftInfoOpen(true)}
            className={`bg-rose-900 text-white text-xs px-6 py-2 cursor-pointer font-light`}
          >
            KIRIM HADIAH
          </button>
        </div>
      ) : (
        <>
          {/* Account */}
          {data?.gift_infos?.map((gift, idx) => (
            <div
              className={`${playfair.className} text-rose-900 bg-white rounded-sm py-5 px-4 mb-6`}
              key={idx}
            >
              <p className="font-bold mb-1 text-xs">{gift.provider_name}</p>
              <p className="mb-1 text-xs">{gift.account_number}</p>
              <p className="mb-4 text-xs">
                a.n.{" "}
                <span className="font-semibold">{gift.account_holder}</span>
              </p>
              <button
                onClick={() => handleCopy(gift.account_number, idx)}
                className={`${
                  copiedIndex === idx
                    ? "bg-rose-100 text-rose-900"
                    : "bg-rose-700 text-white"
                } text-xs px-6 py-2 cursor-pointer`}
              >
                {copiedIndex === idx ? "Tersalin" : "Salin"}
              </button>
            </div>
          ))}

          {/* Address */}
          <div className="bg-white rounded-sm py-5 px-4">
            <p className="font-bold mb-2 text-xs text-rose-900">ALAMAT</p>
            <p className="text-rose-900 text-xs font-light mb-4">
              {data?.gift_infos?.[0].gift_delivery_address || ""}
            </p>
            <button
              onClick={() =>
                handleCopy(data?.gift_infos?.[0].gift_delivery_address || "")
              }
              className={`${
                addressCopied
                  ? "bg-rose-100 text-rose-900"
                  : "bg-rose-700 text-white"
              } text-xs px-6 py-2 cursor-pointer`}
            >
              {addressCopied ? "Tersalin" : "Salin"}
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default GiftInfo;
