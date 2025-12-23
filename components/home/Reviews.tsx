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
  const plugin = Autoplay({ delay: 2500, stopOnInteraction: false });

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="reviews" className="py-12 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400">
            Pengalaman klien setelah pakai layanan kami
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          setApi={setApi}
          plugins={[plugin]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, i: number) => (
              <CarouselItem
                key={i}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 h-full shadow-lg shadow-slate-500/10 ml-0 md:ml-2"
              >
                <div className="bg-white dark:bg-slate-900 p-4 h-full">
                  {/* Chat Screenshot */}
                  <div className="mb-4 rounded-xs overflow-hidden">
                    <Image
                      width={400}
                      height={128}
                      src={review.reviewImage}
                      alt="chat"
                      className="w-full h-50 md:h-65 object-contain object-center"
                      unoptimized
                    />
                  </div>

                  {/* Profile */}
                  <div className="mb-2">
                    <div className="flex flex-col gap-1">
                      <h4 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-white">
                        {review.name}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mb-2">
                        {review.product} - {review.type}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-3 h-3 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="italic text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                    &quot;{review.comment}&quot;
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Dots Indicator */}
        <div className="mt-7 md:mt-12 flex justify-center gap-1 md:gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-1 md:h-2 w-1 md:w-2 rounded-full transition-all cursor-pointer ${
                index === current
                  ? "bg-slate-900 dark:bg-white w-2 md:w-4"
                  : "bg-slate-300 dark:bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
