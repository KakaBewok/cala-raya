import { useInvitation } from "@/context/InvitationDataContext";
import DataTypes from "@/types/data-types";
import { GalleryItem } from "./gallery-item";

export default function OurGallery() {
  const { invitationData } = useInvitation();
  const data = invitationData as DataTypes;

  return (
    <div className="mb-14">
      <h2
        className="mb-4 text-lg leading-5 font-bold text-white"
        data-aos="zoom-in"
      >
        Our Gallery
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {data.gallery.map((item, index) => (
          <GalleryItem key={index} src={item} />
        ))}
      </div>
    </div>
  );
}
