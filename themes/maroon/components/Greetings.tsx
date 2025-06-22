import { playfair } from "@/fonts/fonts";
import Image from "next/image";

export default function Greetings() {
  return (
    <div className="px-10 py-11 h-full w-full bg-[#fdfaf6] flex flex-col items-center justify-between overflow-hidden">
      {/* Frame */}
      <div className="relative z-10 w-full h-full">
        {/* Kanan atas */}
        <Image
          src={`/assets/images/floral/11.webp`}
          width={80}
          height={80}
          alt="Bunga kanan atas"
          className="swing-right-fast absolute z-20 -top-8 -right-6"
          data-aos="zoom-in"
        />

        {/* Kiri Atas */}
        <Image
          data-aos="zoom-in"
          src={`/assets/images/floral/28.webp`}
          width={80}
          height={80}
          alt="Bunga kiri atas"
          className="swing-left-fast absolute -top-10 -left-5"
        />

        {/* Kiri Tengah */}
        <Image
          data-aos="zoom-in"
          src={`/assets/images/floral/26.webp`}
          width={65}
          height={65}
          alt="Bunga kiri tengah"
          className="swing-left-fast absolute z-20 top-[40%] -left-7"
        />

        {/* Kanan tengah */}
        <Image
          data-aos="zoom-in"
          src={`/assets/images/floral/18.webp`}
          width={60}
          height={60}
          alt="Bunga kanan tengah"
          className="swing-left-fast absolute z-20 top-[40%] -right-6"
        />

        {/* Bawah kiri */}
        <Image
          data-aos="zoom-in"
          src={`/assets/images/floral/16.webp`}
          width={110}
          height={110}
          alt="Bunga kiri bawah"
          className="swing-left-fast absolute z-20 -bottom-24 left-[2vw]"
        />

        {/* Bawah kanan */}
        <Image
          data-aos="zoom-in"
          src={`/assets/images/floral/bunga2.webp`}
          width={110}
          height={110}
          alt="Bunga kanan bawah"
          className="swing-right-fast absolute -bottom-32 z-20 right-[2vw]"
        />

        <div className="border border-rose-900 p-1 text-center max-w-md bg-white/60 backdrop-blur-md z-10">
          <div
            className={`${playfair.className} border border-rose-900 text-center max-w-md bg-white/60 backdrop-blur-md z-10 px-10 py-20`}
          >
            <div className="w-full h-fit flex flex-col justify-center items-center gap-11">
              <p
                className={`text-xs text-rose-800 leading-relaxed tracking-wider font-light`}
              >
                Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang.
              </p>
              <p className="text-sm text-rose-900 font-semibold">
                Q.S. Ar Rum: 21
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
