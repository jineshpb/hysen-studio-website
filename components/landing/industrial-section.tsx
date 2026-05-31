"use client";

import { useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DEFAULT_INDUSTRIAL_ITEMS = [
  "Industrial Design",
  "Mechanical Engineering",
  "Rapid Prototyping",
  "3D Printing & CNC",
  "Electronics Integration",
  "Product Visualization",
];

const CURSOR_OFFSET_X = 90;
const CURSOR_OFFSET_Y = 90;

type IndustrialSectionProps = {
  items?: string[];
};

export function IndustrialSection({ items = DEFAULT_INDUSTRIAL_ITEMS }: IndustrialSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [thumbStyle, setThumbStyle] = useState<{
    left: number;
    top: number;
    rotate: number;
  } | null>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const randomIn = (min: number, max: number) => min + Math.random() * (max - min);

  const handleMouseEnter = useCallback(
    (index: number, e: React.MouseEvent<HTMLElement> | React.FocusEvent<HTMLElement>) => {
      const mouse = e as React.MouseEvent<HTMLElement>;
      const left = (mouse.clientX ?? 0) + CURSOR_OFFSET_X;
      const top = (mouse.clientY ?? 0) + CURSOR_OFFSET_Y;
      const rotate = randomIn(-6, 8);

      setActiveIndex(index);
      setThumbStyle({ left, top, rotate });

      requestAnimationFrame(() => {
        if (!thumbRef.current) return;
        gsap.killTweensOf(thumbRef.current);
        gsap.set(thumbRef.current, { xPercent: -50, yPercent: -50 });
        gsap.fromTo(
          thumbRef.current,
          {
            opacity: 0,
            scale: 0.88,
            rotation: rotate - 8,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: rotate,
            duration: 0.22,
            ease: "power3.out",
          },
        );
      });
    },
    [],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (activeIndex === null) return;
      setThumbStyle((prev) =>
        prev
          ? {
              ...prev,
              left: e.clientX + CURSOR_OFFSET_X,
              top: e.clientY + CURSOR_OFFSET_Y,
            }
          : prev,
      );
    },
    [activeIndex],
  );

  const handleMouseLeave = useCallback(() => {
    if (!thumbRef.current) {
      setActiveIndex(null);
      setThumbStyle(null);
      return;
    }
    gsap.killTweensOf(thumbRef.current);
    gsap.to(thumbRef.current, {
      opacity: 0,
      scale: 0.92,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        setActiveIndex(null);
        setThumbStyle(null);
      },
    });
  }, []);

  return (
    <section className="relative mt-20 px-6 py-16 text-center sm:px-12 md:px-20">
      <div className="mx-auto mt-10 max-w-xl space-y-4">
        {items.map((label, index) => (
          <button
            key={label}
            type="button"
            onMouseEnter={(e) => handleMouseEnter(index, e)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onFocus={(e) => handleMouseEnter(index, e)}
            onBlur={handleMouseLeave}
            className={cn(
              "block w-full text-center text-2xl font-medium tracking-tight transition-colors duration-150 sm:text-5xl",
              activeIndex === index ? "text-gray-800" : "text-gray-500",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-14">
        <Button asChild variant="cta" className="gap-2">
          <Link href="/contact">
            Start a Project
            <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
          </Link>
        </Button>
      </div>

      {thumbStyle && (
        <div
          ref={thumbRef}
          className="pointer-events-none fixed z-50 h-44 w-44 origin-center rounded-2xl bg-white p-2 shadow-xl"
          style={{
            left: thumbStyle.left,
            top: thumbStyle.top,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="h-full w-full overflow-hidden rounded-xl bg-linear-to-br from-gray-200 to-gray-400" />
        </div>
      )}
    </section>
  );
}
