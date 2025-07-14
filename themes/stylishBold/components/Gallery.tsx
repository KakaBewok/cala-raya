import React, { useMemo } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { useInvitation } from "@/hooks/use-invitation";
import { nyghtSerif, remineFares, theSecret } from "@/fonts/fonts";
import { Button } from "@/components/ui/button";
import SwipeHandIcon from "./SwipeHandIcon";
import { motion } from "motion/react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const HorizontalGallery = () => {
  const { invitationData: data } = useInvitation();
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState<boolean>(false);
  const [hasUserSwiped, setHasUserSwiped] = React.useState<boolean>(false);

  const eventDate = new Date(data?.event_date ?? "");
  const day = String(eventDate.getDate()).padStart(2, "0");
  const month = String(eventDate.getMonth() + 1).padStart(2, "0");
  const year = String(eventDate.getFullYear()).slice(-2);

  React.useEffect(() => {
    const ref = scrollRef.current;
    if (!ref) return;

    const handleScroll = () => {
      if (!hasUserSwiped && isGalleryOpen) {
        setHasUserSwiped(true);
      }
    };

    ref.addEventListener("scroll", handleScroll);
    return () => ref.removeEventListener("scroll", handleScroll);
  }, [hasUserSwiped, isGalleryOpen]);

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
    setTimeout(() => {
      const newState = !isGalleryOpen;
      setIsGalleryOpen(newState);

      if (newState) {
        setHasUserSwiped(false);
      }
    }, 100);
  };

  const createLayout = (images: GalleryImage[]) => {
    const columns = [];
    let imageIndex = 0;

    while (imageIndex < images.length) {
      const isDoubleColumn =
        Math.random() > 0.3 && imageIndex + 1 < images.length;

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
    <div className="relative w-full h-screen bg-[#ede0d1] overflow-hidden">
      <motion.div
        initial={{ opacity: 1 }}
        animate={isGalleryOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 2.2, ease: "easeInOut" }}
        className="w-full h-full flex flex-col justify-between items-start z-20"
      >
        <motion.div
          className={`${nyghtSerif.className} text-[64px] text-neutral-400 text-left z-30 tracking-wider pl-5 font-light relative flex items-center mt-28`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 1 }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          {day}
          <span>.</span>
          {month}
          <span>.</span>
          {year}
          <div
            className={`${theSecret.className} flex flex-col absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-[64px] font-normal text-rose-700 leading-none`}
          >
            <span>{data?.host_two_nickname}</span>
            <span className="translate-x-12">{data?.host_one_nickname}</span>
          </div>
        </motion.div>
        <div
          className={`z-40 grid grid-cols-3 w-full h-auto aspect-square gap-[10px] p-5 pb-20`}
        >
          {data?.images
            ?.filter((image) => image.type === "gallery")
            .slice(0, 5)
            .map((image, index) => (
              <Image
                src={image.url}
                alt={`Gallery thumbnail ${index + 1}`}
                width={200}
                height={200}
                className="object-cover object-center aspect-square w-full h-auto"
                key={index}
              />
            ))}
          <div
            className={`cursor-pointer ${nyghtSerif.className} pointer-events-auto w-full h-full flex justify-center items-center relative aspect-square border border-rose-700 text-rose-700 font-medium font-nyght-serif rotate-[6deg] swing-left-fast`}
            onClick={toggleGallery}
          >
            <span>Buka Galeri</span>
          </div>
          {data?.images
            ?.filter((image) => image.type === "gallery")
            .slice(5, 8)
            .map((image, index) => (
              <Image
                src={image.url}
                alt={`Gallery thumbnail ${index + 1}`}
                width={200}
                height={200}
                className="object-cover object-center aspect-square w-full h-auto"
                key={index}
              />
            ))}
        </div>
      </motion.div>

      {/* Toggle Button */}
      {isGalleryOpen && (
        <Button
          size="sm"
          onClick={toggleGallery}
          className={`cursor-pointer text-neutral-800 rounded-lg border border-neutral-800 bg-transparent absolute bottom-24 left-1/2 transform -translate-x-1/2 z-40 px-4 py-3 flex items-center gap-2 font-medium`}
        >
          <X size={20} />
        </Button>
      )}

      {/* Gallery */}
      <div
        ref={scrollRef}
        className={`flex h-screen w-screen overflow-x-auto scrollbar-hide transition-all duration-300 ${
          isGalleryOpen
            ? "cursor-grab active:cursor-grabbing"
            : "cursor-default"
        }`}
      >
        {layout.map((column, index) => {
          if (column.type === "first") {
            return (
              <div key={index} className="flex-shrink-0 ">
                <div className="h-screen w-screen flex items-center justify-center ">
                  <div
                    className={`
                        absolute top-1/2 left-1/2 h-[1px] bg-neutral-700 z-10 rounded-full
                        transition-all duration-700 ease-in-out
                        ${
                          isGalleryOpen
                            ? "w-0 opacity-0 scale-x-0"
                            : "w-40 opacity-100 scale-x-100"
                        }
                    `}
                    style={{
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                  <div
                    className={`absolute top-[50%] right-3 -translate-y-1/2 z-10 h-14 w-14 transition-opacity duration-700 ${
                      isGalleryOpen && !hasUserSwiped
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <SwipeHandIcon />
                  </div>
                  <div className="relative h-56 w-56 group ">
                    <div
                      className={`${
                        remineFares.className
                      } absolute -top-24 -right-5 text-neutral-600 text-3xl leading-[2.5rem] font-semibold z-10 transition-opacity duration-700
                        ${
                          isGalleryOpen
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                    >
                      <div>{day}</div>
                      <div>{month}</div>
                      <div>{year}</div>
                    </div>
                    <Image
                      src={column.images[0].src}
                      alt={column.images[0].alt}
                      fill
                      className={`object-cover object-center transition-all duration-500 ${
                        isGalleryOpen ? "grayscale-0" : "grayscale"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          }

          if (column.type === "last") {
            return (
              <div className="flex-shrink-0 w-screen h-screen" key={index}>
                {/* 1 */}
                <div className="flex flex-col w-full h-full items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={column.images[0].src}
                      alt={column.images[0].alt}
                      fill
                      className={`object-cover object-center transition-all duration-500 ${
                        isGalleryOpen ? "grayscale-0" : "grayscale"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/10`}
                    ></div>
                    <div
                      className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2`}
                    >
                      <h1
                        className={`${remineFares.className} text-4xl font-medium text-white`}
                      >
                        {data?.host_two_nickname.toLocaleLowerCase()} <br /> &{" "}
                        {data?.host_one_nickname.toLocaleLowerCase()}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={index} className="flex-shrink-0">
              {column.type === "single" ? (
                <div className="flex-shrink-0 w-screen h-screen">
                  {/* 1 */}
                  <div className="flex flex-col w-full h-full p-6 items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={column.images[0].src}
                        alt={column.images[0].alt}
                        fill
                        className={`object-cover object-center transition-all duration-500 ${
                          isGalleryOpen ? "grayscale-0" : "grayscale"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-shrink-0 w-screen h-screen flex flex-col">
                  {/* 1 */}
                  <div className="flex flex-col w-full h-full p-12 items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={column.images[0].src}
                        alt={column.images[0].alt}
                        fill
                        className={`object-cover object-center transition-all duration-500 ${
                          isGalleryOpen ? "grayscale-0" : "grayscale"
                        }`}
                      />
                    </div>
                  </div>
                  {/* 2 */}
                  <div className="flex flex-col w-full h-full items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={column.images[1].src}
                        alt={column.images[1].alt}
                        fill
                        className={`object-cover object-center transition-all duration-500 ${
                          isGalleryOpen ? "grayscale-0" : "grayscale"
                        }`}
                      />
                    </div>
                  </div>
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
