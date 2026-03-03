import { BriefcaseBusiness, Megaphone } from "lucide-react";
import type { ReactNode } from "react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ServiceCardVariant = "orange" | "navy" | "light" | "silver";
export type ServiceCardIconVariant = "pill" | "circle" | "none";
export type ServiceCardIcon = "none" | "megaphone" | "briefcase";

export type ServiceCardData = {
  title: string;
  description: string;
  variant: ServiceCardVariant;
  iconVariant: ServiceCardIconVariant;
  icon?: ServiceCardIcon;
  iconNode?: ReactNode;
  iconContainerClassName?: string;
  watermarkText?: string;
};

const variantStyles: Record<ServiceCardVariant, string> = {
  orange: "bg-[#ff7a1a] text-[#f7f5ee]",
  navy: "bg-gradient-to-b from-[#092347] to-[#34383e] text-[#f1f4f8]",
  light: "bg-[#d8e0e6] text-[#5a626b]",
  silver: "bg-gradient-to-b from-[#d4d4d4] to-[#b9b9b9] text-[#f0f0f0]",
};

const titleStyles: Record<ServiceCardVariant, string> = {
  orange: "text-[#f7f5ee]",
  navy: "text-[#e8edf3]",
  light: "text-[#616973]",
  silver: "text-[#e7e7e7]",
};

export function ServiceCard({
  title,
  description,
  variant,
  iconVariant,
  icon = "none",
  iconNode,
  iconContainerClassName,
  watermarkText,
}: ServiceCardData) {
  const renderedIcon =
    iconNode ??
    (icon === "megaphone" ? (
      <Megaphone className="h-8 w-8" strokeWidth={2.5} />
    ) : icon === "briefcase" ? (
      <BriefcaseBusiness className="h-8 w-8" strokeWidth={2.5} />
    ) : null);

  return (
    <Card
      className={cn(
        "relative min-h-96 overflow-hidden rounded-2xl border-0 px-8 pb-8 pt-7 text-center shadow-none",
        variantStyles[variant],
      )}
    >
      <h4
        className={cn(
          "text-3xl font-medium sm:text-5xl leading-[0.96] tracking-tighter",
          titleStyles[variant],
        )}
      >
        {title}
      </h4>

      <p className="mx-auto mt-2 max-w-xs text-xl text-inherit/60">{description}</p>

      <div className="absolute inset-x-0 bottom-10 flex justify-center">
        {iconVariant === "pill" && <div className="h-20 w-52 rounded-full bg-[#4c4f54]" />}

        {iconVariant === "circle" && (
          <div
            className={cn(
              "flex h-20 w-20 items-center justify-center rounded-full",
              variant === "navy" ? "bg-[#d7d9dc] text-black" : "bg-[#ff6f00] text-white",
              iconContainerClassName,
            )}
          >
            {renderedIcon}
          </div>
        )}
      </div>

      {watermarkText && (
        <p className="pointer-events-none absolute -bottom-2 left-3 text-7xl font-semibold leading-none tracking-tighter text-[#1f2124]/35">
          {watermarkText}
        </p>
      )}
    </Card>
  );
}
