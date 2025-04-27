import data from "../../../data/config.json";
import Image from "next/image";

export default function Bridegroom() {
  return (
    <div className="mb-14" data-aos="zoom-in">
      <h2 className="mb-4 text-lg leading-5 font-bold text-white">
        Bride and Groom
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Image
            alt="Bride"
            src={data.pegantin.wanita.foto}
            className="w-full rounded-sm"
            // height={164}
            width={300}
            height={200}
            loading="eager"
          />
          <div>
            <h4 className="text-md mt-2 font-medium text-white">
              {data.pegantin.wanita.nama}
            </h4>
            <p className="text-xs leading-4 text-[#A3A1A1]">
              Putri dari {data.pegantin.wanita.bapak} &amp; Ibu{" "}
              {data.pegantin.wanita.ibu}
            </p>
          </div>
        </div>
        <div>
          <Image
            alt="Groom"
            src={data.pegantin.pria.foto}
            className="w-full rounded-sm"
            // height={164}
            width={300}
            height={200}
            loading="eager"
          />
          <div>
            <h4 className="text-md mt-2 font-medium text-white">
              {data.pegantin.pria.nama}
            </h4>
            <p className="text-xs leading-4 text-[#A3A1A1]">
              Putra dari {data.pegantin.pria.bapak} &amp; Ibu{" "}
              {data.pegantin.pria.ibu}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
