import { Button } from "@/components/ui/button";
import { optivaground } from "@/fonts/fonts";
import { MoveDown } from "lucide-react";
import Image from "next/image";

const Cover = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="https://slametandfatma.wedding/galeri/2.jpg"
        alt="Cover background"
        fill
        priority
        className="object-cover object-center z-0"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-black/55 z-10 pointer-events-none" />

      <div className="relative z-20 h-screen flex flex-col justify-between items-center text-white">
        <div className="tracking-wider mt-28 flex flex-col items-center justify-center">
          <p className="text-sm mb-2">#SlametFatmaDay</p>
          <p className={`${optivaground.className} text-4xl mb-2`}>
            Slamet & Fatma
          </p>
          <p className="text-sm">01 . 06 . 2025</p>
        </div>

        <Button className="mb-16 w-7 h-7 bg-neutral-600/20 text-white cursor-pointer rounded-full transition animate-bounce flex items-center justify-center">
          <MoveDown size={11} className="animate-pulse" />
        </Button>
      </div>
    </div>
  );
};

export default Cover;
