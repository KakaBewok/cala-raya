import { nyghtSerif } from "@/fonts/fonts";
import Image from "next/image";

const Bismillah = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-secondary-stylishb py-10 px-10 text-center overflow-hidden">
      <div>
        <Image
          src="/assets/images/magazine/bismillah.png"
          alt="Bismillah"
          width={180}
          height={180}
          data-aos="fade-left"
        />
      </div>
      <p
        className={`${nyghtSerif.className} text-xs text-neutral-900 font-light text-left`}
        data-aos="fade-right"
      >
        Kami mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan
        kami
      </p>
    </div>
  );
};

export default Bismillah;
