import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/landing/header";
import { HeroBackground } from "@/components/landing/hero-background";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TeamSection } from "@/components/landing/team-section";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";
import type { SeoPageContent } from "@/lib/seo-pages";

export function SeoLandingPage({ content }: { content: SeoPageContent }) {
  return (
    <main className="relative min-h-screen bg-[#f4efe4] text-[#2a3239]">
      <HeroBackground />
      <Header />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <section className="relative mx-auto max-w-6xl px-10 pb-24 pt-28 text-center">
          <h1 className="text-4xl font-medium tracking-tight sm:text-7xl bg-brand-primary-gradient text-transparent bg-clip-text">
            {content.hero.heading}
          </h1>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#2f3a44] sm:text-3xl">
            {content.hero.subheading}
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-[#626a72] sm:text-lg">{content.hero.description}</p>

          <div className="relative mx-auto -mt-16 w-fit">
            <Image
              src={content.hero.imageSrc}
              alt={content.hero.imageAlt}
              width={720}
              height={720}
              className="h-auto w-[300px] sm:w-[520px]"
              priority
            />
          </div>

          <Button asChild variant="cta" className="cursor-pointer">
            <Link href={content.hero.ctaHref}>{content.hero.ctaLabel}</Link>
          </Button>
        </section>

        <section className="mx-auto mt-6 max-w-5xl px-8 text-center">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">{content.ctaBand.heading}</h3>
          <p className="mx-auto mt-3 max-w-3xl text-[#626a72]">{content.ctaBand.subheading}</p>
          <Button asChild variant="cta" className="mt-6 cursor-pointer">
            <Link href={content.ctaBand.ctaHref}>{content.ctaBand.ctaLabel}</Link>
          </Button>
        </section>

        <section className="mt-24 px-8">
          <h3 className="text-center text-3xl font-semibold tracking-tight sm:text-5xl">Capabilities</h3>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.capabilities.map((item) => (
              <article key={item.title} className="rounded-2xl border border-[#ddd0bf] bg-white/70 p-5">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f6e5cd] text-xl">
                  {item.imageSrc ? (
                    <Image src={item.imageSrc} alt={item.title} width={32} height={32} className="h-8 w-8 rounded-full object-cover" />
                  ) : (
                    <span aria-hidden>{item.icon ?? "•"}</span>
                  )}
                </div>
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-[#626a72]">{item.subtitle}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-4xl px-8 text-center">
          <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">{content.services.heading}</h3>
          <ul className="mx-auto mt-8 max-w-2xl space-y-3 text-left text-[#4b5660]">
            {content.services.points.map((point) => (
              <li key={point} className="rounded-xl border border-[#ddd0bf] bg-white/70 px-4 py-3">
                • {point}
              </li>
            ))}
          </ul>
          <Button asChild variant="cta" className="mt-8 cursor-pointer">
            <Link href={content.services.ctaHref}>{content.services.ctaLabel}</Link>
          </Button>
        </section>

        <TestimonialsSection />
        <TeamSection />

        <section className="mx-auto mt-20 w-full max-w-6xl px-8 py-14 text-center md:px-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.22em] text-[#7a8188]">So what are you waiting for</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#2a3239] md:text-6xl">{content.finalCta.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[#626a72] md:text-base">{content.finalCta.subheading}</p>

          <Button asChild variant="cta" size="lg" className="mt-8 h-20 px-14 text-2xl cursor-pointer">
            <Link href={content.finalCta.ctaHref}>
              {content.finalCta.ctaLabel}
              <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
            </Link>
          </Button>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
