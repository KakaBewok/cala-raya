import Image from "next/image";

const Bismillah = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-1 bg-[#f8f4ec] py-10 px-10 text-center">
      <Image
        src="/assets/images/magazine/bismillah.png"
        alt="Bismillah"
        width={160}
        height={160}
        data-aos="fade-up"
      />
      <p className="text-sm text-gray-700 font-semibold" data-aos="fade-up">
        We cordially invite you to our wedding
      </p>
    </div>
  );
};

export default Bismillah;
