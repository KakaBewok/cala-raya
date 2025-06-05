import React from "react";
import { Eye, X } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface GalleryProps {
  images?: GalleryImage[];
}

const HorizontalGallery: React.FC<GalleryProps> = ({
  images = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1200&fit=crop",
      alt: "Mountain landscape",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      alt: "Forest path",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop",
      alt: "Lake view",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=1200&fit=crop",
      alt: "Sunset sky",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=1200&fit=crop",
      alt: "Desert dunes",
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      alt: "Ocean waves",
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1418065460487-3599164771c2?w=800&h=600&fit=crop",
      alt: "Mountain peak",
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=1200&fit=crop",
      alt: "Rocky coast",
    },
  ],
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const toggleGallery = () => {
    setIsTransitioning(true);

    setTimeout(() => {
      setIsGalleryOpen(!isGalleryOpen);
    }, 100);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  // Create layout pattern: randomly decide if column has 1 or 2 images
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

  const layout = createLayout(images);

  return (
    <div className="relative w-full h-screen bg-[#f8f5ef] overflow-hidden">
      {/* Door Effect - Left Door (Groom) */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-transparent z-30 transition-transform duration-1000 ease-in-out flex items-center justify-center ${
          isGalleryOpen ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white/90 transform -rotate-90 whitespace-nowrap tracking-wider drop-shadow-2xl">
          ALEXANDER
        </div>
      </div>

      {/* Door Effect - Right Door (Bride) */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-transparent z-30 transition-transform duration-1000 ease-in-out flex items-center justify-center ${
          isGalleryOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white/90 transform -rotate-90 whitespace-nowrap tracking-wider drop-shadow-2xl">
          ISABELLA
        </div>
      </div>

      {/* Toggle Gallery Button */}
      <button
        onClick={toggleGallery}
        disabled={isTransitioning}
        className={`absolute bottom-24 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 hover:bg-white text-gray-800 px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl flex items-center gap-2 font-medium ${
          isTransitioning ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label={isGalleryOpen ? "Close gallery" : "Open gallery"}
      >
        {isGalleryOpen ? (
          <>
            <X size={20} />
            Close
          </>
        ) : (
          <>
            <Eye size={20} />
            Open
          </>
        )}
      </button>

      {/* Gallery Container */}
      <div
        ref={scrollRef}
        className={`flex h-screen overflow-x-auto overflow-y-hidden scrollbar-hide transition-all duration-300 ${
          isGalleryOpen
            ? "cursor-grab active:cursor-grabbing"
            : "overflow-x-hidden cursor-default"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {layout.map((column, index) => (
          <div key={index} className="flex-shrink-0 px-4 first:pl-8 last:pr-8">
            {column.type === "single" ? (
              // Single image column
              <div className="h-screen py-8">
                <div
                  className={`relative h-full w-80 group overflow-hidden transition-all duration-500 ${
                    !isGalleryOpen ? "grayscale" : "grayscale-0"
                  }`}
                >
                  <img
                    src={column.images[0].src}
                    alt={column.images[0].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ) : (
              // Double image column
              <div className="h-screen py-8 flex flex-col gap-4">
                <div
                  className={`relative flex-1 w-80 group overflow-hidden transition-all duration-500 ${
                    !isGalleryOpen ? "grayscale" : "grayscale-0"
                  }`}
                >
                  <img
                    src={column.images[0].src}
                    alt={column.images[0].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div
                  className={`relative flex-1 w-80 group overflow-hidden transition-all duration-500 ${
                    !isGalleryOpen ? "grayscale" : "grayscale-0"
                  }`}
                >
                  <img
                    src={column.images[1].src}
                    alt={column.images[1].alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalGallery;
