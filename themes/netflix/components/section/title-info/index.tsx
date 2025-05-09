import { useInvitation } from "@/hooks/use-invitation";
import { formatDate } from "@/utils/format-date";
import Image from "next/image";

export default function TitleInfo() {
  const { invitationData: data } = useInvitation();

  return (
    <div className="mb-14 space-y-2" data-aos="fade-right">
      <div className="flex items-center gap-1">
        <Image
          src={`/assets/images/favicon.ico`}
          alt="Netflix Logo (N)"
          width={18}
          height={18}
        />
        <span className="mt-0.5 text-xs tracking-widest text-[#A3A1A1]">
          DOCUMENTER
        </span>
      </div>
      <h2 className="text-lg leading-5 font-bold text-white">
        {data?.host_one_nickname} &amp; {data?.host_two_nickname}: Sebelum Hari
        H
      </h2>
      <div className="flex items-center gap-1">
        <span className="mr-2 text-green-500">100% match</span>
        <span className="mr-2 rounded-sm bg-[#4D4D4D] px-1 py-0 text-xs text-white">
          SU
        </span>
        <span className="mr-2 text-white">
          {data?.event_date.split("-")[0]}
        </span>
        <span className="mr-2 text-white">1h 26m</span>
        <span>
          <Image
            src={`/assets/images/4k-icon.png`}
            width={16}
            height={16}
            alt="4k"
          />
        </span>
        <span>
          <Image
            src={`/assets/images/hd-icon.png`}
            width={16}
            height={16}
            alt="hd"
          />
        </span>
      </div>
      <div className="w-fit rounded bg-[#E50913] px-2 py-1 text-xs font-bold text-white">
        Coming soon on Saturday, {formatDate(data?.event_date || null)}
      </div>
      <div className="pt-2">
        <p className="mb-2 text-sm leading-[1.15rem] text-white">
          {data?.greetings}
        </p>
        <p className="text-[11px] leading-[1rem] text-[#A3A1A1]">
          &quot;Segala sesuatu Kami ciptakan berpasang-pasangan agar kamu
          mengingat (kebesaran Allah)&quot; (Q.S Az-Zariyah: 49)
        </p>
      </div>
    </div>
  );
}
