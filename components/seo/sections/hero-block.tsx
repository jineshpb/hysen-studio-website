import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SeoPageContent } from "@/lib/seo-pages";

export function HeroBlock({ hero }: { hero: SeoPageContent["hero"] }) {
  return (
    <section className="relative mx-auto max-w-6xl px-10 pb-24 pt-28 text-center">
      <h1 className="text-4xl font-medium tracking-tight sm:text-7xl bg-brand-primary-gradient text-transparent bg-clip-text">
        {hero.heading}
      </h1>
      <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#2f3a44] sm:text-3xl">{hero.subheading}</h2>
      <p className="mx-auto mt-3 max-w-3xl text-base text-[#626a72] sm:text-lg">{hero.description}</p>

      <div className="relative mx-auto -mt-16 w-fit">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          width={720}
          height={720}
          className="h-auto w-[300px] sm:w-[520px]"
          priority
        />
      </div>

      <Button asChild variant="cta" className="cursor-pointer">
        <Link href={hero.ctaHref}>{hero.ctaLabel}</Link>
      </Button>
    </section>
  );
}
