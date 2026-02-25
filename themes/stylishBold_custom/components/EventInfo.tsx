import { nyghtSerif, theSecret } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { Rundown } from "@/types/invitation-data";
import { formatDate } from "@/utils/format-date";
import { formatTime } from "@/utils/format-time";
import { DateTime } from "luxon";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

const EventInfo = () => {
  const { invitationData: data } = useInvitation();
  const lineRef = useRef<HTMLDivElement | null>(null);

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

  const { scrollYProgress: lineScrollY } = useScroll({
    target: lineRef,
    offset: ["start 70%", "start 40%"],
  });

  const rawLineHeight = useTransform(
    lineScrollY,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    ["0%", "20%", "40%", "60%", "80%", "100%"]
  );

  const lineHeight = useSpring(rawLineHeight, {
    damping: 20,
    stiffness: 100,
  });

  const rundownData = data?.rundowns?.[0];
  const eventDate = new Date(rundownData?.date ?? "");
  const day = String(eventDate.getDate()).padStart(2, "0");
  const month = String(eventDate.getMonth() + 1).padStart(2, "0");
  const year = String(eventDate.getFullYear()).slice(-2);

  return (
    <section className="relative w-full h-screen bg-[#ede0d1] overflow-hidden flex justify-center items-center">
      {/* LEFT SIDE */}
      <div className="flex h-full flex-col items-center justify-center pl-6 pr-4 flex-shrink-0 relative overflow-hidden">
        <div
          className={`flex flex-col items-center justify-center text-[64px] ${nyghtSerif.className} text-center leading-none`}
        >
          {day}
          <br />
          {month}
          <br />
          {year}
        </div>
        <motion.div
          ref={lineRef}
          style={{ height: lineHeight }}
          className=" border border-rose-700 absolute top-[88px] right-0 origin-top"
        />
      </div>
      {/* RIGHT SIDE */}
      <div className="flex-grow relative flex-col flex gap-6">
        {data?.rundowns
          ?.sort((a, b) => a.order_number - b.order_number)
          .map((rundown, index) => (
            <div
              className="flex flex-col gap-7 pl-4 pr-6 py-5"
              key={index}
              data-aos="fade-left"
            >
              <div
                className={`${theSecret.className} text-rose-900 text-4xl font-medium`}
              >
                <p>{rundown.title}</p>
                <div className="mt-2 w-14 h-[0.9px] bg-rose-900" />
              </div>
              <div
                className={`${nyghtSerif.className} flex flex-col gap-2 text-neutral-800`}
              >
                <div className="text-base font-normal">
                  {formatDate(rundown.date, true)}
                </div>
                <div className="text-base font-normal">
                  {" "}
                  {formatTime(rundown.start_time)} -{" "}
                  {rundown.end_time && rundown.start_time
                    ? `${formatTime(rundown.end_time)} ${rundown.time_zone}`
                    : "selesai"}{" "}
                </div>
                <div className="text-[11px]">
                  <Link
                    href={generateGoogleCalendarUrl(rundown)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline cursor-pointer"
                  >
                    Tambah ke Kalender
                  </Link>
                </div>
              </div>
            </div>
          ))}

        <div
          className="flex flex-col gap-6 pl-4 pr-6 py-5"
          data-aos="fade-left"
        >
          <div
            className={`${theSecret.className} text-4xl text-rose-800 font-medium`}
          >
            <span>Lokasi</span>
            <div className="mt-2 w-14 h-[0.9px] bg-rose-900" />
          </div>
          <div
            className={`${nyghtSerif.className} flex flex-col gap-2 text-neutral-800`}
          >
            <div className="text-base font-normal mb-2">{rundownData?.location}</div>
            <div className="text-xs font-light">{rundownData?.location_detail}</div>
            <div className="cursor-pointer relative inline-flex items-center justify-center font-light overflow-visible px-4 py-[10px] text-xs w-36">
              <div className="absolute inset-0 overflow-hidden w-36">
                <svg
                  className="absolute w-full h-full"
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
                    stroke="#EF4444"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>
              <Link
                href={rundownData?.location_url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-neutral-800"
              >
                Lihat Lokasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
