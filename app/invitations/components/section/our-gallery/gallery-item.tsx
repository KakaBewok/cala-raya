import Image from "next/image";

export const GalleryItem = ({ src }: { src: string }) => (
  <Image
    data-aos="zoom-in"
    src={src}
    alt="Gallery Image"
    loading="eager"
    className="w-full cursor-pointer rounded-sm object-cover hover:opacity-70 hover:duration-500"
    width={300}
    height={200}
    // style={{
    //   minHeight: "200px",
    // }}
  />
);
