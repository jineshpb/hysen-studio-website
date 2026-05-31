import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { HERO_VARIANTS, ServiceHeroVariant } from "@/lib/service-hero";

const brands = [
  {
    name: "bolt",
    icon: "/hero/brands/bolt.svg",
  },
  {
    name: "Raycast",
    icon: "/hero/brands/ray.svg",
  },
  {
    name: "Soundcloud",
    icon: "/hero/brands/s-c.svg",
  },
  {
    name: "Replicate",
    icon: "/hero/brands/replicate.svg",
  },
];

type HeroSectionProps = {
  variant?: ServiceHeroVariant;
  layoutType?: "auto" | "floating-center" | "split-grid";
  heading?: string;
  subheading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

const isJpegSource = (src: string) => /\.(jpe?g)(\?.*)?(#.*)?$/i.test(src);

export function HeroSection({
  variant = "home-default",
  layoutType = "auto",
  heading,
  subheading,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref,
}: HeroSectionProps) {
  const variantContent = HERO_VARIANTS[variant];
  const headingLines = (heading ?? variantContent.heading).split("\n");
  const finalSubheading = subheading ?? variantContent.subheading;
  const finalDescription = description ?? variantContent.description;
  const finalImageSrc = imageSrc ?? variantContent.imageSrc;
  const finalImageAlt = imageAlt ?? variantContent.imageAlt;
  const finalCtaLabel = ctaLabel ?? variantContent.ctaLabel;
  const finalCtaHref = ctaHref ?? variantContent.ctaHref;
  const isJpegImage = isJpegSource(finalImageSrc);
  const resolvedLayoutType =
    layoutType === "auto" ? (isJpegImage ? "split-grid" : "floating-center") : layoutType;

  return (
    <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 sm:px-10 sm:pt-28 sm:pb-28">
      {resolvedLayoutType === "split-grid" ? (
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl leading-[0.95] tracking-tighter font-mono font-medium bg-brand-primary-gradient text-transparent bg-clip-text sm:text-7xl">
              {headingLines.map((line, index) => (
                <span key={`${line}-${index}`}>
                  {line}
                  {index < headingLines.length - 1 && <br />}
                </span>
              ))}
            </h1>
            <h2 className="mt-5 text-2xl font-medium tracking-tight bg-brand-primary-gradient text-transparent bg-clip-text sm:text-3xl">
              {finalSubheading}
            </h2>
            <p className="mt-3 text-base font-medium tracking-tight text-gray-500 sm:text-lg">
              {finalDescription}
            </p>

            <div className="mt-7">
              <Button asChild variant="cta" className="cursor-pointer">
                <Link href={finalCtaHref}>{finalCtaLabel}</Link>
              </Button>
            </div>
          </div>

          <div className="relative ">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(207,147,69,0.22),transparent_65%)]" />
            <Image
              className="w-full rounded-3xl border border-[#e0d6c6] object-cover shadow-[0_22px_50px_rgba(42,50,57,0.16)]"
              src={finalImageSrc}
              alt={finalImageAlt}
              width={900}
              height={650}
              priority
            />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl leading-[0.95] tracking-tighter font-mono font-medium bg-brand-primary-gradient text-transparent bg-clip-text sm:text-[80px]">
            {headingLines.map((line, index) => (
              <span key={`${line}-${index}`}>
                {line}
                {index < headingLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <h2 className="mt-4 text-2xl font-medium tracking-tight bg-brand-primary-gradient text-transparent bg-clip-text sm:text-[32px]">
            {finalSubheading}
          </h2>
          <p className="mt-2 text-base font-medium tracking-tight text-gray-500 sm:text-lg">
            {finalDescription}
          </p>

          <div className="relative mx-auto w-fit -mt-14">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(207,147,69,0.2),transparent_70%)]" />
            <Image
              className="relative z-10 h-auto w-[300px] drop-shadow-[0_24px_45px_rgba(42,50,57,0.25)] sm:w-[560px] -mt-10"
              src={finalImageSrc}
              alt={finalImageAlt}
              width={780}
              height={780}
              priority
            />
          </div>

          <Button asChild variant="cta" className="mt-4 cursor-pointer">
            <Link href={finalCtaHref}>{finalCtaLabel}</Link>
          </Button>
        </div>
      )}

      {/* <div className="relative mt-16 sm:mt-20">
        <p className="text-center text-[12px] text-[#7f878e]">Trusted by</p>

        <div className="relative mt-6 flex flex-wrap items-center justify-center gap-8 text-[12px] text-[#7f878e] sm:gap-12">
          {brands.map((brand) => (
            <Image key={brand.name} src={brand.icon} alt={brand.name} width={40} height={40} />
          ))}
        </div>
      </div> */}
    </section>
  );
}
