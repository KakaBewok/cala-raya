import { useInvitation } from "@/context/InvitationDataContext";

const Location = () => {
  const { invitationData: data } = useInvitation();

  return (
    <>
      <div className="pb-4 text-center" data-aos="fade-right">
        <h2
          className="mb-4 text-lg leading-5 font-bold text-white"
          data-aos="zoom-in"
        >
          Location
        </h2>
        <p className="text-center text-xs text-slate-200 mb-3">
          {data?.location}
        </p>
        <div>
          <iframe
            src={data?.location_url}
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
      </div>
    </>
  );
};

export default Location;
