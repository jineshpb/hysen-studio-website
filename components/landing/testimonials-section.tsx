"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TestimonialCard } from "@/components/landing/testimonial-card";
import { testimonials } from "@/lib/landing-data";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardStep = 456; // 440px card + 16px gap

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="my-60 px-4 py-8 md:px-8 md:py-14  mx-[calc(50%-49.5vw)] overflow-x-hidden ">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
        <div className="relative z-10 flex flex-col justify-between">
          <h2 className="max-w-65 text-[55px] leading-[0.92]  uppercase t text-slate-500 font-sans font-black tracking-tighter">
            LOVED BY founders.
            <span className="block bg-linear-to-br from-[#FD4E17] to-[#FE9673]  bg-clip-text text-transparent">
              LOVED BY THE <br />
              maker.
            </span>
          </h2>

          <div className="mt-12 flex items-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f4f5] text-[#4f5258]"
              onClick={handlePrev}
            >
              <ArrowLeft className="h-6 w-6" strokeWidth={1.6} />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f3f4f5] text-[#4f5258]"
              onClick={handleNext}
            >
              <ArrowRight className="h-6 w-6" strokeWidth={1.6} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden lg:mr-[calc((100dvw-100%)/-2)]">
          <div
            className="flex gap-4 pb-2 pr-16 transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translateX(-${activeIndex * cardStep}px)` }}
          >
            {testimonials.map((item, index) => {
              const isFocused = index === activeIndex;

              return (
                <TestimonialCard key={item.name} item={item} isFocused={isFocused} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
