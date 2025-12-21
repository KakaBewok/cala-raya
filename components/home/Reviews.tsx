"use client";

import { reviews } from "@/data/data";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex: number) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Get visible reviews based on screen size
  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      visible.push(reviews[index]);
    }
    return visible;
  };

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Testimoni Client
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Apa kata mereka yang telah menggunakan jasa kami
          </p>
        </div>

        {/* Desktop & Tablet - Show 3 reviews */}
        <div className="relative hidden md:block">
          <div className="grid md:grid-cols-3 gap-6">
            {getVisibleReviews().map((review, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all"
              >
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
                    className="w-12 h-12 rounded-full"
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
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
          >
            <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
          >
            <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        {/* Mobile - Show 1 review */}
        <div className="relative md:hidden">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            {/* Chat Screenshot */}
            <div className="mb-4 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700">
              <img
                src={reviews[currentIndex].chatImage}
                alt="chat"
                className="w-full h-32 object-cover"
              />
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src={reviews[currentIndex].image}
                alt={reviews[currentIndex].name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {reviews[currentIndex].name}
                </h4>
                <div className="flex gap-1">
                  {[...Array(reviews[currentIndex].rating)].map((_, idx) => (
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
              &quot;{reviews[currentIndex].comment}&quot;
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
            >
              <ChevronRight className="w-6 h-6 text-slate-600 dark:text-slate-300" />
            </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "bg-slate-900 dark:bg-white w-8"
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
