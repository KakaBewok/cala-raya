import { commuters, lagunac } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { Rundown } from "@/types/invitation-data";
import { findImage } from "@/utils/find-image";
import { formatDate } from "@/utils/format-date";
import { formatTime } from "@/utils/format-time";
import { DateTime } from "luxon";
import Image from "next/image";
import Link from "next/link";

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
    <section className="p-10 relative w-full h-auto bg-[#f8f4ec] overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <Image
        src={findImage(data, "event-info")}
        alt="Event info"
        fill
        className="object-cover object-center z-0"
        priority
      />

      <div
        className="z-20 h-auto bg-[#f8f4ec] flex flex-col justify-start items-center py-6"
        data-aos="fade-up"
      >
        {data?.rundowns
          ?.sort((a, b) => a.order_number - b.order_number)
          .map((rundown, index) => (
            <div
              className="p-6 w-full flex flex-col justify-center items-center"
              key={index}
            >
              <h1
                className={`
                px-1
                pb-2
                w-fit
                text-2xl font-medium text-neutral-700
                text-center
                ${lagunac.className}
            `}
              >
                {rundown.title.toUpperCase() || `RUNDOWN ${index + 1}`}
              </h1>
              <div className="px-16 py-2 w-fit border-t-1 border-neutral-700" />
              <p
                className={`${lagunac.className} text-sm font-medium mb-2 text-neutral-700`}
              >
                {formatDate(rundown.date, true, "en-US")?.toUpperCase()}
              </p>
              {rundown.start_time && (
                <p
                  className={`${lagunac.className} text-sm font-medium mb-2 text-neutral-700`}
                >
                  · {formatTime(rundown.start_time)} {rundown.time_zone} -{" "}
                  {rundown.end_time && rundown.start_time
                    ? `${formatTime(rundown.end_time)} ${rundown.time_zone}`
                    : "selesai"}{" "}
                  ·
                </p>
              )}

              <Link
                href={generateGoogleCalendarUrl(rundown)}
                target="_blank"
                rel="noopener noreferrer"
                className={`${commuters.className} text-xs font-medium underline text-neutral-700`}
              >
                Add to calendar
              </Link>
            </div>
          ))}
        <div className="p-6 w-full flex flex-col justify-center items-center">
          <p
            className={`${commuters.className} text-md font-light mb-6 text-neutral-700 text-center`}
          >
            {data?.location || "-"}
          </p>

          <Link
            href={data?.location_url || "#"}
            target="_blank"
            className={`${commuters.className} font-semibold py-2 px-4 text-xs bg-transparent rounded-none border border-neutral-700 text-neutral-700 cursor-pointer hover:bg-transparent`}
          >
            SEE LOCATION
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
