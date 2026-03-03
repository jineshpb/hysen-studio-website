import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export type ProjectCardImageType = "gradient" | "image";

export type ProjectCardData = {
  title: string;
  description?: string;
  /** Gradient classes for image area when imageType is "gradient", e.g. "from-[#0a2137] to-[#4d4f50]" */
  imageGradient?: string;
  /** Image src when imageType is "image" */
  imageSrc?: string | null;
  imageAlt?: string;
  imageType: ProjectCardImageType;
  /** If true, text sits on dark overlay; if false, text sits on textBackgroundClass */
  textOverlay: boolean;
  /** When textOverlay is false, use this for the text block (e.g. "bg-[#b5eb98] text-[#5b6a56]") */
  textBackgroundClass?: string;
  showLinkIcon?: boolean;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
  imageClassName?: string;
  imageSizes?: string;
  projectGradient?: string;
  /** Any valid CSS color (e.g. "#9ca3af", "rgb(156 163 175)", "white") */
  descriptionTextColor?: string;
};

type ProjectCardProps = ProjectCardData & {
  className?: string;
  fullWidth?: boolean;
  /** Override image area with custom node (e.g. Next Image with fill) */
  imageNode?: ReactNode;
};

const uniformImageHeight = "h-40";
const defaultTextOverlayClass = "bg-[#000000B3] text-white";

export function ProjectCard({
  title,
  description,
  projectGradient,
  descriptionTextColor,
  imageSrc,
  imageAlt = "",
  imageType,
  textOverlay,
  textBackgroundClass,
  showLinkIcon = false,
  titleClassName,
  descriptionClassName,
  contentClassName,
  imageClassName,
  imageSizes = "(max-width: 768px) 100vw, 50vw",
  className,
  fullWidth,
  imageNode,
}: ProjectCardProps) {
  const hasValidImageSrc = typeof imageSrc === "string" && imageSrc.trim().length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border-0 shadow-none bg-gradient-to-br p-3",
        fullWidth && "w-full",
        className,
        projectGradient ?? "from-gray-700 to-gray-900",
      )}
    >
      <div className="relative overflow-hidden rounded-xl">
        {imageNode !== undefined ? (
          <div className={cn("relative w-full", uniformImageHeight, imageClassName)}>
            {imageNode}
          </div>
        ) : imageType === "image" && hasValidImageSrc ? (
          <div className={cn("relative w-full", uniformImageHeight, imageClassName)}>
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes={imageSizes} />
          </div>
        ) : (
          <div
            className={cn(
              "w-full bg-gradient-to-br",
              uniformImageHeight,
              imageClassName,
              projectGradient ?? "from-gray-700 to-gray-900",
            )}
          />
        )}

        {showLinkIcon && (
          <div className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-sm">
            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </div>
        )}
      </div>

      <div className={cn("px-4 py-3", "text-white", contentClassName)}>
        <p
          className={cn(
            "text-[50px] leading-[0.96] font-medium tracking-tight bg-brand-primary-gradient text-transparent bg-clip-text",
            titleClassName,
          )}
        >
          {title}
        </p>
        {description && (
          <p
            className={cn(
              "mt-1 text-sm leading-snug opacity-90",
              !descriptionTextColor && "text-white",
            )}
            style={descriptionTextColor ? { color: descriptionTextColor } : undefined}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
