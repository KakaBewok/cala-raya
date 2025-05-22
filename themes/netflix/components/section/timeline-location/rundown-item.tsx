import { formatDate } from "@/utils/format-date";
import { formatTime } from "@/utils/format-time";
import Image from "next/image";
import Link from "next/link";

interface RundownItemProps {
  title: string;
  location: string;
  location_url: string;
  date: string;
  start_time: string;
  end_time: string;
  time_zone: string;
  image_url: string;
}

const RundownItem: React.FC<RundownItemProps> = ({
  title,
  location,
  location_url,
  date,
  start_time,
  end_time,
  time_zone,
  image_url,
}) => {
  return (
    <div data-aos="fade-right">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Image
            className="w-full rounded-sm object-cover"
            width={300}
            height={200}
            style={{ maxHeight: "100px" }}
            src={image_url}
            alt="Rundown Image"
          />
        </div>
        <div className="flex justify-start">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="mb-2 bg-red-500 px-3 py-1 rounded-sm flex justify-center items-center">
              <p className="tracking-wide text-white text-sm">{title}</p>
            </div>
            <p className="text-xs text-[#A3A1A1] mb-2">
              {formatDate(date, true)}
            </p>
            <div className="flex items-center gap-2 text-xs text-white w-full">
              <div className="bg-slate-500 px-2 py-1 rounded-md flex justify-center items-center">
                <p>
                  {formatTime(start_time)}{" "}
                  {`s/d ${formatTime(end_time) ?? "selesai"}`}
                </p>
              </div>
              <div className=" bg-slate-500 px-2 py-1 rounded-md flex justify-center items-center">
                <p>#{time_zone ?? "WIB"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs text-[#A3A1A1]">{location}</p>
      <Link
        href={location_url}
        target="_blank"
        className="text-xs underline text-red-500"
      >
        Google maps {">>"}
      </Link>
    </div>
  );
};

export default RundownItem;
