import type { TestimonialData } from "@/lib/landing-data";

import Image from "next/image";

type TestimonialCardProps = {
  item: TestimonialData;
  isFocused: boolean;
  avatarImage?: string;
};

export function TestimonialCard({ item, isFocused }: TestimonialCardProps) {
  return (
    <article
      className={`flex h-140 w-110 flex-none flex-col rounded-[24px] px-8 py-6 ${
        isFocused ? "bg-[#f4f4f5]" : "bg-[#ececee]"
      }`}
    >
      <p className={`text-5xl leading-none ${isFocused ? "text-[#4a4d53]" : "text-[#989ba0]"}`}>
        &ldquo;
      </p>

      <p
        className={` text-3xl tracking-tighter  ${isFocused ? "text-[#36383d] font-medium" : "text-[#a3a5aa]"}`}
      >
        {item.quote}
        {item.highlight && isFocused ? (
          <span className="text-[#FE9673]"> {item.highlight}</span>
        ) : null}
      </p>

      <div className="mt-auto flex items-start gap-5 pt-10">
        {item.avatarImage ? (
          <Image
            width={120}
            height={120}
            src={item.avatarImage}
            alt={item.name}
            className="h-24 w-24 rounded-full object-cover border-2 border-gradient-to-b from-[#d8d8d8] to-[#8f9096]"
          />
        ) : (
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-full text-sm font-semibold ${
              isFocused
                ? "bg-linear-to-b from-[#d8d8d8] to-[#8f9096] text-[#202227]"
                : "bg-linear-to-b from-[#dadbdd] to-[#bcbec3] text-[#60636a]"
            }`}
          >
            {item.avatarLabel}
          </div>
        )}

        <div className="flex justify-between flex-col h-full py-2">
          <div>
            <p
              className={`text-[14px] leading-[1.2] ${isFocused ? "text-[#4f5258]" : "text-[#8f9298]"}`}
            >
              {item.name}
            </p>
            <p
              className={`text-[13px] leading-[1.2] ${isFocused ? "text-[#4f5258]" : "text-[#9ca0a5]"}`}
            >
              {item.role}, {item.company}
            </p>
          </div>

          <p
            className={`text-2xl font-medium tracking-tighter  ${isFocused ? "text-[#4f5258]" : "text-[#9da1a6]"}`}
          >
            {item.company}
          </p>
        </div>
      </div>
    </article>
  );
}
