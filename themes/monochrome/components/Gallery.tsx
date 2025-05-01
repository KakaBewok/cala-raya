import Image from "next/image";
export default function Gallery() {
  return (
    <section id="gallery" className="py-16 text-center">
      <h2 className="text-3xl mb-4">Galeri</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <Image
          src="/assets/photo1.jpg"
          alt="photo1"
          className="rounded"
          width={300}
          height={200}
        />
        <Image
          src="/assets/photo2.jpg"
          alt="photo2"
          className="rounded"
          width={300}
          height={200}
        />
        <Image
          src="/assets/photo3.jpg"
          alt="photo3"
          className="rounded"
          width={300}
          height={200}
        />
        <Image
          src="/assets/photo4.jpg"
          alt="photo4"
          className="rounded"
          width={300}
          height={200}
        />
      </div>
    </section>
  );
}
