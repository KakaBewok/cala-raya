import { nyghtSerif } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { findImage } from "@/utils/find-image";
import Image from "next/image";

export default function Greetings() {
  const { invitationData: data } = useInvitation();

  const formatEventDate = (dateString: string) => {
    if (!dateString) return null;

    const eventDate = new Date(dateString);
    const day = String(eventDate.getDate()).padStart(2, "0");
    const month = String(eventDate.getMonth() + 1).padStart(2, "0");
    const year = eventDate.getFullYear();

    return `${day} · ${month} · ${year}`;
  };

  return (
    <div
      className={`${nyghtSerif.className} h-screen w-full bg-[#ede0d1] flex flex-col justify-between overflow-hidden relative`}
    >
      <div
        className="w-full text-left font-light text-[155px] overflow-visible p-0 transform -translate-y-[5rem] tracking-tighter"
        data-aos="fade-right"
      >
        {data?.host_two_nickname.toLowerCase()}
      </div>

      {/* line */}
      <span className="z-40 h-full border border-rose-700 absolute top-0 left-1/2 origin-top -translate-x-1/2"></span>

      {/* text */}
      <div className="absolute top-1/2 left-1/2 origin-top -translate-x-1/2">
        <p className="text-xs font-light text-center leading-5 tracking-wider">
          It has been seven long years. Look how far we’ve come. Though it took
          the long way, we knew we’d get there someday. And now, we’ve finally
          made it
        </p>
      </div>

      <div
        className="w-full text-right font-light text-[155px] overflow-visible p-0 transform translate-y-[4.2rem] tracking-tighter"
        data-aos="fade-left"
      >
        {data?.host_one_nickname.toLowerCase()}
      </div>
    </div>
  );
}
