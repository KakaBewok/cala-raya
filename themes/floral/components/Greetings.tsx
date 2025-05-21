import Image from "next/image";

export default function Greetings() {
  return (
    <div className="h-screen bg-[#fdfaf6] flex flex-col items-center justify-center border border-red-500 relative overflow-hidden">
      {/* frame */}
      <div className="border border-[#e6d6c9] p-1 text-center max-w-md bg-white/60 backdrop-blur-md relative z-10">
        <div className="border border-[#e6d6c9] p-10 text-center max-w-md bg-white/60 backdrop-blur-md relative z-10">
          <h1 className="text-4xl font-serif text-[#c6a886] mb-6">• SF •</h1>
          <p className="text-xs text-[#c6a886] leading-relaxed font-medium">
            It has been eight long years.
            <br />
            Look how far we’ve come.
            <br />
            Though it took the long way,
            <br />
            we knew we’d get there someday.
            <br />
            <br />
            And now,
            <br />
            <strong className="font-semibold text-[#c6a886]">
              we’ve finally made it.
            </strong>
            <br />
            <br />
            12 • 12 • 2023
          </p>
        </div>
      </div>

      {/* floral */}
      <Image
        src={`/assets/images/floral/bunga7.webp`}
        width={70}
        height={70}
        alt="Bunga kanan tengah"
        className="swing-right-fast absolute top-56 right-12 z-20"
      />
      <Image
        src={`/assets/images/floral/bunga6.webp`}
        width={70}
        height={70}
        alt="Bunga kiri tengah"
        className="swing-left-fast absolute top-56 left-10 z-20"
      />
      <Image
        src={`/assets/images/floral/bunga3.webp`}
        width={80}
        height={80}
        alt="Bunga kiri atas"
        className="swing-left-fast absolute top-9 left-12"
      />
      <Image
        src={`/assets/images/floral/bunga4.webp`}
        width={110}
        height={110}
        alt="Bunga kanan atas"
        className="swing-left-fast absolute top-16 right-12 z-20"
      />
      <Image
        src={`/assets/images/floral/bunga2.webp`}
        width={80}
        height={80}
        alt="Bunga kiri bawah"
        className="swing-left-fast absolute bottom-48 left-14 z-10"
      />
      <Image
        src={`/assets/images/floral/bunga5.webp`}
        width={160}
        height={160}
        alt="Bunga kanan bawah"
        className="swing-right-fast absolute bottom-[216px] right-6 z-10"
      />
      <div className="z-20 mt-20 w-full flex justify-center items-center bg-[#efe7dd] h-32">
        <p className=" text-[#c1915a] text-xl font-arabic">
          بسم الله الرحمن الرحيم
        </p>
      </div>
    </div>
  );
}

// text-[#c6a886]
