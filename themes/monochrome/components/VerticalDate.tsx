import { poppins } from "@/fonts/fonts";
import InvitationData from "@/types/invitation-data";

const VerticalDate = ({
  isGalleryOpen,
  data,
}: {
  isGalleryOpen: boolean;
  data: InvitationData;
}) => {
  const createDate = (data: InvitationData | null) => {
    const eventDate = new Date(data?.event_date ?? "");
    const day = String(eventDate.getDate()).padStart(2, "0");
    const month = String(eventDate.getMonth() + 1).padStart(2, "0");
    const year = String(eventDate.getFullYear()).slice(-2);

    return {
      day,
      month,
      year,
    };
  };

  return (
    <div
      className={`${
        poppins.className
      } absolute -top-28 -right-9 text-neutral-600 text-xl leading-[2.5rem] z-10 transition-opacity duration-700 font-normal
       ${!isGalleryOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div>{createDate(data).day}</div>
      <div>{createDate(data).month}</div>
      <div>{createDate(data).year}</div>
    </div>
  );
};

export default VerticalDate;
