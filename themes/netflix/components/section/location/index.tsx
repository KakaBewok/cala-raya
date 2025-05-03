import { useInvitation } from "@/context/InvitationDataContext";
import DataTypes from "@/types/data-types";

const Location = () => {
  const { invitationData } = useInvitation();
  const data = invitationData as DataTypes;

  return (
    <>
      <div className="pb-4 text-center" data-aos="fade-right">
        <div className="mb-2">
          <iframe
            src={data.location.mapUrl}
            style={{
              border: 0,
              width: "100%",
            }}
            className="rounded-sm"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-center text-xs text-slate-200">
          {data.location.address}
        </p>
        <a
          className="text-center text-xs text-blue-500 underline"
          href={data.location.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Lihat lokasi
        </a>
      </div>
    </>
  );
};

export default Location;
