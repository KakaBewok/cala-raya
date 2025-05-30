"use client";

import { useEffect, useState } from "react";
import OpeningScreen from "./components/OpeningScreen";

export default function InvitationPage() {
  const [opened, setOpened] = useState<boolean>(false);
  const [ope, setOpe] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpe(true);
    }, 1000);

    return () => clearTimeout(timer); // Bersihkan timer saat komponen unmount
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-pink-50">
      {/* Tunda render konten utama sampai OpeningScreen selesai */}

      {ope && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-white shadow-lg rounded-xl">
          <h2 className="text-4xl font-bold mb-2">Undangan Pernikahan</h2>
          <p className="text-lg text-gray-700">Tyara & Dicky</p>
        </div>
      )}

      {!opened && (
        <OpeningScreen
          onOpen={() => {
            setOpened(true);
          }}
        />
      )}
    </div>
  );
}
