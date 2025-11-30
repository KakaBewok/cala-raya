"use client";

import { FaWhatsapp } from "react-icons/fa";

interface Props {
  phone: string; // example: "6281234567890"
  message?: string;
}

export default function WhatsAppFloating({ phone, message }: Props) {
  const text = message
    ? encodeURIComponent(message)
    : "Halo, saya ingin memesan.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      className="
        fixed bottom-6 right-6 z-50 
        bg-green-500 text-white p-4 rounded-full shadow-xl 
        hover:bg-green-600 active:scale-95 transition
        animate-bounce
      "
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
