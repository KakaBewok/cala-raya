// src/components/ModalHadiah.tsx

import { nyghtSerif } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import React, { useState } from "react";

// Props untuk komponen Modal
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GiftModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

  return (
    // Latar belakang overlay
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 p-4 font-serif">
      {/* Konten Modal */}
      <div className="bg-primary-stylishb text-white rounded-4xl p-8 md:p-10 w-full max-w-sm text-center relative">
        {/* Tombol Close (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition-colors"
          aria-label="Tutup modal"
        >
          &times;
        </button>

        {/* Konten dinamis dari array giftInfo */}
        <div className="flex flex-col space-y-8">
          {data?.gift_infos?.map((item, idx) => (
            <div
              key={item.id}
              className={`${nyghtSerif.className} flex flex-col items-center`}
            >
              <h3 className="text-sm font-semibold tracking-wider">
                {item.provider_name}
              </h3>
              {item.account_number && (
                <p className="mt-1 text-xs">{item.account_number}</p>
              )}
              <p className="mt-1 text-xs">{item.account_holder}</p>

              {/* Separator */}
              <div className="my-4 text-lg">|</div>

              <button
                className="cursor-pointer relative inline-flex items-center justify-center font-normal bg-transparent overflow-visible px-4 py-[10px] text-xs"
                onClick={() => handleCopy(item.account_number, idx)}
                type="button"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <svg
                    className="absolute w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="50"
                      cy="20"
                      rx="49.5"
                      ry="19.5"
                      fill="none"
                      stroke="#FFFF"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
                <span
                  className={`${nyghtSerif.className} relative z-10 font-nyght-serif text-white`}
                >
                  {copiedIndex === idx ? "Tersalin" : "Salin"}
                </span>
              </button>
            </div>
          ))}
          {data?.gift_infos?.[0].gift_delivery_address && (
            <div
              className={`${nyghtSerif.className} flex flex-col items-center`}
            >
              <h3 className="text-sm font-semibold tracking-wider">Alamat</h3>
              {data?.gift_infos?.[0].gift_delivery_address && (
                <p className="mt-1 px-4 text-sm leading-relaxed">
                  {data?.gift_infos?.[0].gift_delivery_address}
                </p>
              )}

              <button
                className="mt-4 cursor-pointer relative inline-flex items-center justify-center font-normal bg-transparent overflow-visible px-4 py-[10px] text-xs"
                onClick={() =>
                  handleCopy(data?.gift_infos?.[0].gift_delivery_address || "")
                }
                type="button"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <svg
                    className="absolute w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="50"
                      cy="20"
                      rx="49.5"
                      ry="19.5"
                      fill="none"
                      stroke="#FFFF"
                      strokeWidth="1"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
                <span
                  className={`${nyghtSerif.className} relative z-10 font-nyght-serif text-white`}
                >
                  {addressCopied ? "Tersalin" : "Salin"}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftModal;
