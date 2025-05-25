import Image from "next/image";

interface LoveItemProps {
  imageUrl: string;
  title: string;
  duration: string;
  description: string;
}

const LoveItem: React.FC<LoveItemProps> = ({
  imageUrl,
  title,
  duration,
  description,
}) => {
  return (
    <div data-aos="fade-left">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Image
            className="w-full rounded-sm object-cover object-center"
            width={300}
            height={100}
            style={{ maxHeight: "110px" }}
            src={imageUrl}
            alt="Love Story Image"
          />
        </div>
        <div className="flex justify-start">
          <div className="flex flex-col items-start justify-start">
            <p className="mb-2 tracking-tighter text-white">{title}</p>
            <p className="text-xs text-[#A3A1A1]">{duration}</p>
          </div>
        </div>
      </div>
      <div className="mt-2 p-2 bg-neutral-900 rounded-sm">
        <p className="text-xs text-[#A3A1A1]">{description}</p>
      </div>
    </div>
  );
};

export default LoveItem;
