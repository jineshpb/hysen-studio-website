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
  heading?: string;
  subheading?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function HeroSection({
  variant = "home-default",
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

  return (
    <section className="relative text-center pt-32 pb-32 px-32 max-w-6xl mx-auto ">
      {/* <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(ellipse_at_center,_#f3822e57_0%,_#f3822e24_45%,_#f4efe400_75%)]" /> */}
      <h1 className="relative  text-xl leading-[0.92]  sm:text-[80px] tracking-tighter font-mono font-medium bg-brand-primary-gradient text-transparent bg-clip-text">
        {headingLines.map((line, index) => (
          <span key={`${line}-${index}`}>
            {line}
            {index < headingLines.length - 1 && <br />}
          </span>
        ))}
      </h1>
      <h2 className="mt-4 text-[30px] font-medium tracking-tighter bg-brand-primary-gradient text-transparent bg-clip-text sm:text-[30px]">
        {finalSubheading}
      </h2>
      <p className="text-[16px] font-medium   sm:text-[16px] tracking-tighter text-gray-500">
        {finalDescription}
      </p>
      <div className="relative mx-auto -mt-24">
        <Image
          className="z-10"
          src={finalImageSrc}
          alt={finalImageAlt}
          width={700}
          height={700}
          priority
        />
      </div>

      <Button asChild variant="cta" className="cursor-pointer">
        <Link href={finalCtaHref}>{finalCtaLabel}</Link>
      </Button>

      <div className="relative mt-32">
        <p className="text-[12px] text-[#7f878e]">Trusted by</p>

        <div className="relative mt-[24px] flex items-center justify-center gap-12 text-[12px] text-[#7f878e]">
          {brands.map((brand) => (
            <Image key={brand.name} src={brand.icon} alt={brand.name} width={40} height={40} />
          ))}
        </div>
      </div>
    </section>
  );
}
