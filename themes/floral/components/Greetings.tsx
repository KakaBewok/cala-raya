import { useInvitation } from "@/hooks/use-invitation";
import Image from "next/image";

export default function Greetings() {
  const { invitationData: data } = useInvitation();

  const initial1 = data?.host_one_nickname?.charAt(0)?.toUpperCase() ?? "";
  const initial2 = data?.host_two_nickname?.charAt(0)?.toUpperCase() ?? "";

  const formatEventDate = (dateString: string) => {
    if (!dateString) return null;

    const eventDate = new Date(dateString);
    const day = String(eventDate.getDate()).padStart(2, "0");
    const month = String(eventDate.getMonth() + 1).padStart(2, "0");
    const year = eventDate.getFullYear();

    return `${day} . ${month} . ${year}`;
  };

  return (
    <div className="h-screen bg-[#fdfaf6] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Frame */}
      <div className="relative z-10">
        {/* Kanan atas */}
        <Image
          src={`/assets/images/floral/bunga4.webp`}
          width={80}
          height={80}
          alt="Bunga kanan atas"
          className="swing-right-fast absolute z-20 -top-5 -right-6"
        />

        {/* Kiri Atas */}
        <Image
          src={`/assets/images/floral/bunga3.webp`}
          width={80}
          height={80}
          alt="Bunga kiri atas"
          className="swing-left-fast absolute -top-14 -left-7"
        />

        {/* Kiri Tengah */}
        <Image
          src={`/assets/images/floral/bunga8.webp`}
          width={130}
          height={130}
          alt="Bunga kiri tengah"
          className="swing-left-fast absolute z-20 top-[40%] -left-7"
        />

        {/* Kanan tengah */}
        <Image
          src={`/assets/images/floral/bunga7.webp`}
          width={60}
          height={60}
          alt="Bunga kanan tengah"
          className="swing-left-fast absolute z-20 top-[40%] -right-6"
        />

        <div className="border border-[#e6d6c9] p-1 text-center max-w-md bg-white/60 backdrop-blur-md relative z-10">
          <div className="border border-[#e6d6c9] p-16 text-center max-w-md bg-white/60 backdrop-blur-md relative z-10">
            <h1
              className="text-4xl font-serif text-[#c6a886] mb-6"
              data-aos="zoom-in"
              data-aos-duration={900}
            >
              • {initial1}
              {initial2} •
            </h1>
            <p
              className="text-xs text-[#c6a886] leading-relaxed font-light"
              data-aos="zoom-in"
              data-aos-duration={900}
            >
              It has been eight long years.
              <br />
              Look how far we’ve come.
              <br />
              Though it took the long way,
              <br />
              we knew we’d get there someday.
              <br />
              <br />
              And now,
              <br />
              <strong className="font-semibold text-[#c6a886]">
                we’ve finally made it.
              </strong>
              <br />
              <br />
              {formatEventDate(data?.event_date ?? "")}
            </p>
          </div>
        </div>
      </div>
      {/* Bismillah */}
      <div className="relative z-10 w-full">
        {/* Kiri Bawah */}
        <Image
          src={`/assets/images/floral/bunga2.webp`}
          width={80}
          height={80}
          alt="Bunga kiri bawah"
          className="swing-left-fast absolute -z-10 bottom-[107px] left-[6vw]"
        />

        {/* Kanan Bawah */}
        <Image
          src={`/assets/images/floral/bunga5.webp`}
          width={160}
          height={160}
          alt="Bunga kanan bawah"
          className="swing-right-fast absolute bottom-28 -z-10 right-[6vw]"
        />

        <div className="z-20 mt-20 w-full flex justify-center items-center bg-[#efe7dd] h-32">
          <p className="text-[#c1915a] text-xl font-arabic">
            بسم الله الرحمن الرحيم
          </p>
        </div>
      </div>
    </div>
  );
}
