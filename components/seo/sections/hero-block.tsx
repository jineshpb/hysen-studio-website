import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SeoPageContent } from "@/lib/seo-pages";

export function HeroBlock({ hero }: { hero: SeoPageContent["hero"] }) {
  const isJpegImage = hero.imageSrc.endsWith(".jpg") || hero.imageSrc.endsWith(".jpeg");

  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 sm:px-10 sm:pt-28">
      {isJpegImage ? (
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-medium tracking-tight sm:text-7xl bg-brand-primary-gradient text-transparent bg-clip-text">
              {hero.heading}
            </h1>
            <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#2f3a44] sm:text-3xl">{hero.subheading}</h2>
            <p className="mt-3 max-w-3xl text-base text-[#626a72] sm:text-lg">{hero.description}</p>

            <div className="mt-7">
              <Button asChild variant="cta" className="cursor-pointer">
                <Link href={hero.ctaHref}>{hero.ctaLabel}</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(207,147,69,0.22),transparent_65%)]" />
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              width={900}
              height={650}
              className="h-auto w-full rounded-3xl border border-[#ddd0bf] object-cover shadow-[0_22px_50px_rgba(42,50,57,0.16)]"
              priority
            />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-medium tracking-tight sm:text-7xl bg-brand-primary-gradient text-transparent bg-clip-text">
            {hero.heading}
          </h1>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#2f3a44] sm:text-3xl">{hero.subheading}</h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-[#626a72] sm:text-lg">{hero.description}</p>

          <div className="relative mx-auto mt-8 w-fit">
            <div className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[radial-gradient(circle,rgba(207,147,69,0.2),transparent_70%)]" />
            <Image
              src={hero.imageSrc}
              alt={hero.imageAlt}
              width={780}
              height={780}
              className="h-auto w-[300px] drop-shadow-[0_24px_45px_rgba(42,50,57,0.25)] sm:w-[560px]"
              priority
            />
          </div>

          <Button asChild variant="cta" className="mt-4 cursor-pointer">
            <Link href={hero.ctaHref}>{hero.ctaLabel}</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
