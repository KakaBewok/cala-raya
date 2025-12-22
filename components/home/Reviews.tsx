"use client";

import { reviews } from "@/data/data";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
// import { useRef } from "react";

function Reviews() {
  const plugin = Autoplay({ delay: 3000, stopOnInteraction: false });

  return (
    <section id="reviews" className="py-12 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">
            Testimoni Client
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400">
            Apa kata mereka yang telah menggunakan jasa kami
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          plugins={[plugin]}
          className="w-full"
          onMouseEnter={plugin.stop}
          onMouseLeave={plugin.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {reviews.map((review, i) => (
              <CarouselItem
                key={i}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow h-full">
                  {/* Chat Screenshot */}
                  <div className="mb-4 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
                    <img
                      src={review.chatImage}
                      alt="chat"
                      className="w-full h-32 object-cover"
                    />
                  </div>

                  {/* Profile */}
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">
                        {review.name}
                      </h4>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, idx) => (
                          <Star
                            key={idx}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    &quot;{review.comment}&quot;
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

export default Reviews;
