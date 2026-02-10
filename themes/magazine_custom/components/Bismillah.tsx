import Image from "next/image";

const Bismillah = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 bg-white py-10 px-10 text-center">
      <Image
        src="/assets/images/magazine/bismillah.png"
        alt="Bismillah"
        width={150}
        height={150}
        data-aos="fade-up"
      />
      <p className="text-xs text-gray-400 font-medium" data-aos="fade-up">
        We cordially invite you to attend our wedding
      </p>
    </div>
  );
};

export default Bismillah;
