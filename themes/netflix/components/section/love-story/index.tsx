import { useInvitation } from "@/context/InvitationDataContext";
import DataTypes from "@/types/data-types";
import LoveItem from "./love-item";

export default function LoveStory() {
  const { invitationData } = useInvitation();
  const data = invitationData as DataTypes;

  return (
    <div className="mb-14">
      <h2
        className="mb-4 text-lg leading-5 font-bold text-white"
        data-aos="zoom-in"
      >
        Our Love Story
      </h2>
      <div className="space-y-4">
        {data.loveStory.map((item, index) => (
          <LoveItem
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            duration="26m 10s"
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
