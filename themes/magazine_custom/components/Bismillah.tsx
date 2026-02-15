import Image from "next/image";

const Bismillah = () => {
  return (
    // <div className="flex flex-col items-center justify-center gap-1 bg-white py-10 px-10 text-center">
    //   <p className="text-xs text-gray-400 font-medium" data-aos="fade-up">
    //    1 Peter 4:8 – “Above all, love each other deeply, because love covers over a multitude of sins.”
    //   </p>
    //   <p className="text-xs text-gray-400 font-medium" data-aos="fade-up">
    //     We cordially invite you to attend our wedding
    //   </p>
    // </div>
    <div className="text-center max-w-lg mx-auto px-6 py-12">
    <div className="mb-8">
      <p className="italic text-gray-400 leading-relaxed text-sm">
        "Above all, love each other deeply, because love covers over a multitude of sins."
      </p>
      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mt-2">
        — 1 Peter 4:8
      </p>
    </div>

    <div className="w-24 h-[1px] bg-gray-200 mx-auto mb-8"></div>

    <h1 className="text-xs text-gray-400 font-medium" data-aos="fade-up">
      We cordially invite you to attend our wedding
    </h1>
  </div>
  );
};

export default Bismillah;
