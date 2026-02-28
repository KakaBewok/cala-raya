"use client";

import { reviews } from "@/data/data";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useEffect, useState } from "react";

function Reviews() {
  const plugin = Autoplay({ delay: 3000, stopOnInteraction: false });

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <p className="text-[12px] md:text-[13px] font-medium tracking-[0.2em] uppercase text-stone-400 mb-3">
            Testimoni
          </p>
          <h2 className="text-2xl md:text-[2rem] font-semibold text-stone-900 tracking-tight mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-[15px] text-stone-500 max-w-md mx-auto leading-relaxed">
            Pengalaman klien setelah menggunakan layanan kami
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          plugins={[plugin]}
          className="w-full"
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="-ml-3 md:-ml-4">
            {reviews.map((review, i) => (
              <CarouselItem
                key={i}
                className="pl-3 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white rounded-xl border border-stone-100 p-5 h-full flex flex-col">
                  {/* Chat Screenshot */}
                  <div className="mb-4 rounded-lg overflow-hidden border border-stone-100 bg-stone-50">
                    <Image
                      width={400}
                      height={128}
                      src={review.reviewImage}
                      alt={`Review dari ${review.name}`}
                      className="w-full h-48 md:h-56 object-contain object-center"
                      unoptimized
                    />
                  </div>

                  {/* Profile */}
                  <div className="mb-3">
                    <h4 className="text-[15px] font-semibold text-stone-800">
                      {review.name}
                    </h4>
                    <p className="text-[12px] text-stone-400 mt-0.5">
                      {review.product} — {review.type}
                    </p>
                    <div className="flex gap-0.5 mt-2">
                      {[...Array(review.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-3.5 h-3.5 text-amber-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-[13px] text-stone-500 leading-relaxed mt-auto italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>

        {/* Dots */}
        <div className="mt-8 md:mt-10 flex justify-center gap-1.5">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === current
                  ? "bg-stone-900 w-6"
                  : "bg-stone-200 w-1.5 hover:bg-stone-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
