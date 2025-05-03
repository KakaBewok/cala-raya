import { useInvitation } from "@/context/InvitationDataContext";
import DataTypes from "@/types/data-types";
import Image from "next/image";

export default function BreakingNews() {
  const { invitationData } = useInvitation();
  const data = invitationData as DataTypes;

  return (
    <div className="mb-14 max-w-sm" data-aos="zoom-in">
      <h2 className="mb-4 text-lg font-bold">Breaking News</h2>
      <Image
        className="w-full rounded-sm"
        width={300}
        height={300}
        src={data.openingMessages.image}
        alt="Breaking News"
      />
      <div className="mt-3 rounded-sm border-neutral-950 bg-neutral-900 p-3 text-sm leading-[1.15rem] text-slate-100 italic">
        <div
          className="space-y-2"
          dangerouslySetInnerHTML={{
            __html: data.openingMessages.content,
          }}
        ></div>
      </div>
    </div>
  );
}
