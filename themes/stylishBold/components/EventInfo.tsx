import { useInvitation } from "@/hooks/use-invitation";
import { Rundown } from "@/types/invitation-data";
import { DateTime } from "luxon";

const EventInfo = () => {
  const { invitationData: data } = useInvitation();

  const generateGoogleCalendarUrl = (rundown: Rundown): string => {
    const date = rundown.date;
    const startTime = rundown.start_time;
    const endTime = rundown.end_time || startTime;

    const startDateTimeISO = `${date}T${startTime}`;
    const endDateTimeISO = `${date}T${endTime}`;

    const start = DateTime.fromISO(startDateTimeISO)
      .toUTC()
      .toFormat("yyyyLLdd'T'HHmmss'Z'");
    const end = DateTime.fromISO(endDateTimeISO)
      .toUTC()
      .toFormat("yyyyLLdd'T'HHmmss'Z'");

    const eventTitle = data?.event_title || "Wedding Event";
    const location = rundown.location || "-";
    const rundownTitle = `(${rundown.title})` || ``;
    const description = `${eventTitle} will be held at ${location} ${rundownTitle}`;

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventTitle
    )}&dates=${start}/${end}&details=${encodeURIComponent(
      description
    )}&location=${encodeURIComponent(
      rundown.location_url || ""
    )}&ctz=Asia/Jakarta`;

    return googleCalendarUrl;
  };

  return (
    <section className="relative w-full h-screen bg-[#ede0d1] overflow-hidden flex justify-center items-center">
      {/* LEFT SIDE */}
      <div className="flex h-full flex-col items-center justify-center pl-6 pr-4 flex-shrink-0 relative overflow-hidden">
        <div className="flex flex-col items-center justify-center text-[64px] font-nyght-serif text-center leading-none opacity-100">
          02
          <br />
          11
          <br />
          24
        </div>
        <span className="h-full border border-rose-900 absolute top-[88px] right-0 origin-top"></span>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-grow relative flex-col flex py-10 gap-6">
        <div className="flex flex-col gap-7 pl-4 pr-6 py-5">
          <div className="relative text-4xl text-ruby font-the-secret font-medium after:w-14 after:border-ruby after:border-t-[0.5px] after:absolute after:-bottom-3 after:left-0 after:h-0">
            Akad Nikah
          </div>
          <div className="flex flex-col gap-2 font-nyght-serif text-raisin-black">
            <div className="text-base font-normal">Sabtu, 02 November 2024</div>
            <div className="text-base font-normal">08:00 10:00 WIB</div>
            <div className="text-[10px]">
              <div className="underline cursor-pointer">Tambah ke Kalender</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 pl-4 pr-6 py-5">
          <div className="relative text-4xl text-ruby font-the-secret font-medium after:w-14 after:border-ruby after:border-t-[0.5px] after:absolute after:-bottom-3 after:left-0 after:h-0">
            Resepsi
          </div>
          <div className="flex flex-col gap-2 font-nyght-serif text-raisin-black">
            <div className="text-base font-normal">Sabtu, 02 November 2024</div>
            <div className="text-base font-normal">11:00 14:00 WIB</div>
            <div className="text-[10px]">
              <div className="underline cursor-pointer">Tambah ke Kalender</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 pl-4 pr-6 py-5">
          <div className="relative text-4xl text-ruby font-the-secret font-medium after:w-14 after:border-ruby after:border-t-[0.5px] after:absolute after:-bottom-3 after:left-0 after:h-0">
            Lokasi
          </div>
          <div className="flex flex-col gap-2 font-nyght-serif text-raisin-black mt-2">
            <div className="text-base font-normal">Aulia Hall Center</div>
            <div className="text-xs font-light italic">
              Sukarindik, Bungursari, Tasikmalaya
            </div>
            <div className="mb-2">
              <button
                className="relative inline-flex items-center justify-center bg-transparent overflow-visible px-4 py-[10px] text-xs text-raisin-black font-medium"
                type="button"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <svg
                    className="absolute w-full h-full stroke-jasper"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <ellipse
                      cx="50"
                      cy="20"
                      rx="49.5"
                      ry="19.5"
                      fill="none"
                      vector-effect="non-scaling-stroke"
                      stroke-width="1"
                      stroke="jasper"
                    ></ellipse>
                  </svg>
                </div>
                <span className="relative z-10 font-nyght-serif">
                  Lihat Lokasi
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
