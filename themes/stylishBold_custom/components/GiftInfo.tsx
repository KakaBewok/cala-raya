"use client";

import { nyghtSerif, theSecret } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";

const GiftInfo = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (params: boolean) => void;
}) => {
  const { invitationData: data } = useInvitation();

  const eventDate = new Date(data?.rundowns?.[0].date ?? "");
  const day = String(eventDate.getDate()).padStart(2, "0");
  const month = String(eventDate.getMonth() + 1).padStart(2, "0");
  const year = String(eventDate.getFullYear()).slice(-2);

  return (
    <section
      className="text-center bg-secondary-stylishb px-7 pt-10 pb-28 relative overflow-hidden"
      data-aos="zoom-in"
    >
      <div
        data-aos="fade-left"
        className={`${nyghtSerif.className} text-[45px] text-slate-700 text-left z-30 tracking-wider pl-5 font-light flex justify-center items-center mb-4`}
      >
        tanda
        <div
          className={`${theSecret.className} mt-16 text-[44px] font-normal text-line-stylishb leading-none`}
        >
          kasih
        </div>
      </div>
      <p
        className={`${nyghtSerif.className} text-xs text-neutral-600 font-extralight italic mb-8`}
      >
        Doa restu yang kami terima sangat berarti, namun jika memberi merupakan
        tanda kasih, tentunya semakin melengkapi kebahagiaan kami.
      </p>

      <button
        className="cursor-pointer relative inline-flex items-center justify-center font-normal bg-transparent overflow-visible px-4 py-[10px] text-xs"
        onClick={() => setIsModalOpen(true)}
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
              stroke="#EF4444"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              className="stroke-line-stylishb"
            />
          </svg>
        </div>
        <span
          className={`${nyghtSerif.className} relative z-10 font-nyght-serif text-line-stylishb`}
        >
          Kirim Hadiah
        </span>
      </button>

      <div
        className={`translate -rotate-12 absolute right-0 bottom-0 leading-none ${theSecret.className} text-[90px] text-neutral-400 text-left z-30 tracking-wider font-light flex justify-center items-center`}
      >
        {day}
        <span>.</span>
        {month}
        <span>.</span>
        {year}
      </div>
    </section>
  );
};

export default GiftInfo;
