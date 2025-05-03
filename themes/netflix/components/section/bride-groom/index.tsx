import { useInvitation } from "@/context/InvitationDataContext";
import DataTypes from "@/types/data-types";
import Image from "next/image";

export default function Bridegroom() {
  const { invitationData } = useInvitation();
  const data = invitationData as DataTypes;

  return (
    <div className="mb-14" data-aos="zoom-in">
      <h2 className="mb-4 text-lg leading-5 font-bold text-white">
        Bride and Groom
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            alt="Bride"
            src={data.brideAndGroom.bride.photo}
            className="w-full rounded-sm"
            width={300}
            height={170}
          />
          <div>
            <h4 className="text-md mt-2 font-medium text-white">
              {data.brideAndGroom.bride.fullName}
            </h4>
            <p className="text-xs leading-4 text-[#A3A1A1]">
              Putri dari {data.brideAndGroom.bride.father} &amp; Ibu{" "}
              {data.brideAndGroom.bride.mother}
            </p>
          </div>
        </div>
        <div>
          <Image
            alt="Groom"
            src={data.brideAndGroom.groom.photo}
            className="w-full rounded-sm"
            width={300}
            height={170}
          />
          <div>
            <h4 className="text-md mt-2 font-medium text-white">
              {data.brideAndGroom.groom.fullName}
            </h4>
            <p className="text-xs leading-4 text-[#A3A1A1]">
              Putri dari {data.brideAndGroom.groom.father} &amp; Ibu{" "}
              {data.brideAndGroom.groom.mother}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
