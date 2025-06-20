"use client";

import { useInvitation } from "@/hooks/use-invitation";
import { Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

const Gift = () => {
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
    <section
      className="space-y-10 bg-black px-6 py-10 text-white"
      data-aos="fade-left"
    >
      <div className="text-center">
        <h2 className="mb-2 text-lg leading-5 font-bold text-white">
          Wedding Gift
        </h2>
        <p className="mx-auto max-w-xl text-xs text-slate-300">
          Restu dan doa dari Anda adalah anugerah yang sangat berarti bagi kami.
          Namun jika memberi adalah ungkapan kasih sayang Anda, Anda dapat
          memberikannya secara elektronik.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {data?.gift_infos?.map((gift, idx) => (
          <div
            key={idx}
            className="relative w-full rounded-sm border border-neutral-950 bg-neutral-900 p-3 text-center transition-shadow hover:shadow-lg"
          >
            <h3 className="text-md font-semibold text-red-500">
              {gift.provider_name}
            </h3>
            <p className="mt-2 text-sm tracking-wider">{gift.account_number}</p>
            <p className="text-xs text-gray-300 italic">
              {gift.account_holder}
            </p>

            <button
              onClick={() => handleCopy(gift.account_number, idx)}
              className="absolute top-2 right-2 cursor-pointer"
              aria-label="Copy"
            >
              {copiedIndex === idx ? (
                <CopyCheck className="h-5 w-5 text-red-500" />
              ) : (
                <Copy className="h-5 w-5 text-white" />
              )}
            </button>
          </div>
        ))}
      </div>

      {data?.gift_infos?.[0].gift_delivery_address && (
        <div className="relative w-full rounded-sm border border-neutral-950 bg-neutral-900 p-3 text-center transition-shadow hover:shadow-lg">
          <h3 className="text-md font-semibold text-red-500">Hadiah fisik</h3>
          <p className="mt-2 text-xs tracking-wider">
            {data?.gift_infos?.[0].gift_delivery_address}
          </p>

          <button
            onClick={() =>
              handleCopy(data?.gift_infos?.[0].gift_delivery_address || "")
            }
            className="cursor pointer absolute top-2 right-2"
            aria-label="Copy"
          >
            {addressCopied ? (
              <CopyCheck className="h-5 w-5 text-red-500" />
            ) : (
              <Copy className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default Gift;
