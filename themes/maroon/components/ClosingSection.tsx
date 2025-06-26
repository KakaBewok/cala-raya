import { amalfiCoast, playfair, poppins } from "@/fonts/fonts";
import { useInvitation } from "@/hooks/use-invitation";
import { createSocialMediaLink } from "@/utils/create-social-media-link";
import { findImage } from "@/utils/find-image";
import Image from "next/image";
import Link from "next/link";

const ClosingSection = () => {
  const { invitationData: data } = useInvitation();
  return (
    <section>
      {/* Watermark */}
      <div className="w-full h-60 overflow-hidden bg-rose-900 flex justify-center items-start">
        <div
          className={`${amalfiCoast.className} text-8xl font-light text-white transform -rotate-25 select-none`}
        >
          {data?.host_two_nickname.toLocaleLowerCase()}
          <br className="my-2" />
          {data?.host_one_nickname.toLocaleLowerCase()}
        </div>
      </div>

      <div className="relative">
        <Image
          src={findImage(data, "closing")}
          alt="Closing image"
          width={800}
          height={600}
          className="w-full h-auto object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/20 to-black/40"></div>

        <div
          className={`${playfair.className} absolute right-0 top-0  text-neutral-200 p-6 text-right`}
          data-aos="fade-up"
        >
          <p className="text-md tracking-wide font-medium">
            <span className="border-b-1 border-neutral-200 pb-1">
              {" "}
              <Link
                href={createSocialMediaLink(data?.host_one_social_media || "")}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{data?.host_one_social_media}
              </Link>
            </span>{" "}
            |{" "}
            <span className="border-b-1 border-neutral-200 pb-1">
              <Link
                href={createSocialMediaLink(data?.host_two_social_media || "")}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{data?.host_two_social_media}
              </Link>
            </span>
          </p>
          <p className="text-xs font-medium mt-4">
            Bagikan hari bahagia di Instagram
            <br />
            dan tag kami
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClosingSection;
