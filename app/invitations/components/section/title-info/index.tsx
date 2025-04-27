import data from "../../../data/config.json";
import Image from "next/image";

export default function TitleInfo() {
  return (
    <div className="mb-14 space-y-2" data-aos="fade-right">
      <div className="flex items-center gap-1">
        <Image
          src={`/storage/images/favicon.ico`}
          alt="Netflix Logo (N)"
          width={18}
          height={18}
          loading="eager"
        />
        <span className="mt-0.5 text-xs tracking-widest text-[#A3A1A1]">
          DOCUMENTER
        </span>
      </div>
      <h2 className="text-lg leading-5 font-bold text-white">
        {data.pegantin.wanita.panggilan} &amp; {data.pegantin.pria.panggilan}:
        Sebelum Hari H
      </h2>
      <div className="flex items-center gap-1">
        <span className="mr-2 text-green-500">100% match</span>
        <span className="mr-2 rounded-sm bg-[#4D4D4D] px-1 py-0 text-xs text-white">
          SU
        </span>
        <span className="mr-2 text-white">
          {data.tanggal_pernikahan.split("-")[0]}
        </span>
        <span className="mr-2 text-white">1h 26m</span>
        <span>
          <Image
            src={`/storage/images/4k-icon.png`}
            width={16}
            height={16}
            alt="4k"
            loading="eager"
          />
        </span>
        <span>
          <Image
            src={`/storage/images/hd-icon.png`}
            width={16}
            height={16}
            alt="hd"
            loading="eager"
          />
        </span>
      </div>
      <div className="w-fit rounded bg-[#E50913] px-2 py-1 text-xs font-bold text-white">
        Coming soon on Saturday, {data.tanggal_pernikahan}
      </div>
      <div className="pt-2">
        <p className="mb-2 text-sm leading-[1.15rem] text-white">
          {data.intro}
        </p>
        <p className="text-[11px] leading-[1rem] text-[#A3A1A1]">
          &quot;Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu
          mengingat (kebesaran Allah)&quot; (Q.S Az-Zariyah: 49)
        </p>
      </div>
    </div>
  );
}
