import { useInvitation } from "@/context/InvitationDataContext";
import { GalleryItem } from "./gallery-item";

export default function OurGallery() {
  const { invitationData: data } = useInvitation();

  return (
    <div className="mb-14">
      <h2
        className="mb-4 text-lg leading-5 font-bold text-white"
        data-aos="zoom-in"
      >
        Our Gallery
      </h2>
      <div className="grid grid-cols-3 gap-3">
        {data?.images
          ?.filter((image) => image.type == "gallery")
          .map((item, index) => (
            <GalleryItem key={index} src={item.url} />
          ))}
      </div>
    </div>
  );
}
