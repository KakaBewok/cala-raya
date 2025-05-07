"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ChevronsDown, Pause } from "lucide-react";

export default function AutoScrollToggle() {
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(false);
  const [showInstruction, setShowInstruction] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowInstruction(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoScroll) {
      intervalId = setInterval(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollPosition = window.innerHeight + window.scrollY;

        if (scrollHeight <= scrollPosition + 10) {
          setIsAutoScroll(false);
          clearInterval(intervalId);
          return;
        }

        window.scrollBy(0, 1.5);
      }, 16); // ~60fps
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAutoScroll]);

  return (
    <>
      <button
        onClick={() => setIsAutoScroll((prev) => !prev)}
        className={`fixed top-3 right-3 z-50 bg-red-600 text-white p-1 cursor-pointer rounded-full shadow opacity-55 hover:opacity-100 transition ${
          !isAutoScroll ? "animate-bounce" : ""
        }`}
      >
        {isAutoScroll ? <Pause size={13} /> : <ChevronsDown size={13} />}
      </button>
      {showInstruction && (
        <div
          className="flex gap-2 items-center justify-center fixed top-9 right-2 z-50 text-white bg-red-500 rounded-sm p-2 text-xs opacity-75"
          data-aos="fade-left"
        >
          <p>Aktifkan Auto Scroll </p>
          <ArrowUp size={13} />
        </div>
      )}
    </>
  );
}
