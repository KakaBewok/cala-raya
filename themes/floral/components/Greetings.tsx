import Image from "next/image";

export default function Greetings() {
  return (
    <div className="h-screen bg-[#fdfaf6] flex flex-col items-center justify-center border border-red-500 relative overflow-hidden px-4">
      {/* frame */}
      <div className="border border-[#e6d6c9] p-1 text-center max-w-md bg-white/60 backdrop-blur-md relative z-10">
        <div className="border border-[#e6d6c9] p-10 text-center max-w-md bg-white/60 backdrop-blur-md relative z-10">
          {/* <AnimatedFlower
            src="/assets/images/favicon.ico"
            className="flower-animate w-20 h-20 absolute top-0 left-0"
          /> */}
          <Image
            src={`/assets/images/bunga3.png`}
            width={9}
            height={9}
            alt="Bunga kiri atas"
            className="flower-animate-fast absolute top-0 -left-12 w-20 animate-floating border border-red-500"
          />
          <Image
            src={`/assets/images/bunga4.png`}
            width={9}
            height={9}
            alt="Bunga kanan bawah"
            className="flower-animate-fast absolute bottom-0 right-0 w-20 animate-floating-reverse"
          />
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

      {/* Tulisan Arab */}
      <p className="mt-16 text-[#c6a886] text-xl font-arabic">
        بسم الله الرحمن الرحيم
      </p>
    </div>
  );
}
