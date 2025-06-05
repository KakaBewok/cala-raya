import React, { useMemo } from "react";
import { Eye, X } from "lucide-react";
import Image from "next/image";
import { useInvitation } from "@/hooks/use-invitation";
import { remineFares } from "@/fonts/fonts";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const HorizontalGallery = () => {
  const { invitationData: data } = useInvitation();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState<boolean>(false);
  const [isTransitioning, setIsTransitioning] = React.useState<boolean>(false);

  const images = useMemo(() => {
    const filtered = data?.images?.filter((image) => image.type === "gallery");
    const sorted = filtered?.sort((a, b) => a.order_number - b.order_number);

    return sorted?.map((image, index) => ({
      id: image.id,
      src: image.url,
      alt: `Gallery image ${index + 1}`,
    }));
  }, [data?.images]);

  const toggleGallery = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsGalleryOpen(!isGalleryOpen);
    }, 100);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const createLayout = (images: GalleryImage[]) => {
    const columns = [];
    let imageIndex = 0;

    while (imageIndex < images.length) {
      const isDoubleColumn =
        Math.random() > 0.4 && imageIndex + 1 < images.length;

      if (isDoubleColumn) {
        columns.push({
          type: "double",
          images: [images[imageIndex], images[imageIndex + 1]],
        });
        imageIndex += 2;
      } else {
        columns.push({
          type: "single",
          images: [images[imageIndex]],
        });
        imageIndex += 1;
      }
    }

    return columns;
  };

  const layout = useMemo(() => {
    if (!images || images.length < 2) return [];

    const firstImage = images[0];
    const lastImage = images[images.length - 1];
    const middleImages = images.slice(1, images.length - 1);
    const middleLayout = createLayout(middleImages);

    return [
      { type: "first", images: [firstImage] },
      ...middleLayout,
      { type: "last", images: [lastImage] },
    ];
  }, [images]);

  return (
    <div className="relative w-full h-screen bg-[#f8f5ef] overflow-hidden">
      {/* Door Effects Left*/}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full z-30 transition-transform duration-1000 ease-in-out ${
          isGalleryOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className={`absolute -left-[250px] top-1/2 -translate-y-1/2 ${remineFares.className} text-[11rem] font-bold text-neutral-700 transform -rotate-90 whitespace-nowrap drop-shadow-2xl`}
        >
          {data?.host_one_nickname.toLowerCase()}
        </div>
      </div>
      {/* Door Effects Right*/}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full z-30 transition-transform duration-1000 ease-in-out ${
          isGalleryOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div
          className={`absolute -right-[190px] top-1/2 -translate-y-1/2 ${remineFares.className} text-[11rem] font-bold text-neutral-700 transform -rotate-90 whitespace-nowrap drop-shadow-2xl`}
        >
          {data?.host_two_nickname.toLowerCase()}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleGallery}
        disabled={isTransitioning}
        className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-medium ${
          isTransitioning ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isGalleryOpen ? (
          <>
            <X size={20} /> Close
          </>
        ) : (
          <>
            <Eye size={20} /> Open
          </>
        )}
      </button>

      {/* Gallery */}
      <div
        ref={scrollRef}
        className={`flex h-screen overflow-x-auto scrollbar-hide transition-all duration-300 ${
          isGalleryOpen
            ? "cursor-grab active:cursor-grabbing"
            : "cursor-default"
        }`}
      >
        {layout.map((column, index) => {
          if (column.type === "first") {
            return (
              <div key={index} className="flex-shrink-0 px-4 first:pl-8">
                <div className="h-screen py-8">
                  <div className="relative h-full w-[500px] group overflow-hidden">
                    <Image
                      src={column.images[0].src}
                      alt={column.images[0].alt}
                      fill
                      className={`object-cover transition-all duration-500 ${
                        isGalleryOpen ? "grayscale-0" : "grayscale"
                      }`}
                    />
                    <div className="absolute bottom-4 left-4 text-white text-xl font-semibold bg-black/40 px-3 py-1 rounded">
                      Pembuka
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          if (column.type === "last") {
            return (
              <div key={index} className="flex-shrink-0 px-4 last:pr-8">
                <div className="h-screen py-8">
                  <div className="relative h-full w-[500px] group overflow-hidden">
                    <Image
                      src={column.images[0].src}
                      alt={column.images[0].alt}
                      fill
                      className={`object-cover transition-all duration-500 ${
                        isGalleryOpen ? "grayscale-0" : "grayscale"
                      }`}
                    />
                    <div className="absolute bottom-4 right-4 text-white text-xl font-semibold bg-black/40 px-3 py-1 rounded">
                      Penutup
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={index} className="flex-shrink-0 px-4">
              {column.type === "single" ? (
                <div className="h-screen py-8">
                  <div className="relative h-full w-80 group overflow-hidden">
                    <Image
                      src={column.images[0].src}
                      alt={column.images[0].alt}
                      fill
                      className={`object-cover transition-all duration-500 ${
                        isGalleryOpen ? "grayscale-0" : "grayscale"
                      }`}
                    />
                  </div>
                </div>
              ) : (
                <div className="h-screen py-8 flex flex-col gap-4">
                  {column.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative flex-1 w-80 group overflow-hidden"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className={`object-cover  transition-all duration-500 ${
                          isGalleryOpen ? "grayscale-0" : "grayscale"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalGallery;
