import { Header } from "@/components/landing/header";
import { HeroBackground } from "@/components/landing/hero-background";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { TeamSection } from "@/components/landing/team-section";
import { FooterSection } from "@/components/landing/footer-section";
import { HeroBlock } from "@/components/seo/sections/hero-block";
import { CtaBandBlock } from "@/components/seo/sections/cta-band-block";
import { CapabilitiesBlock } from "@/components/seo/sections/capabilities-block";
import { ServicesBlock } from "@/components/seo/sections/services-block";
import { FinalCtaBlock } from "@/components/seo/sections/final-cta-block";
import type { SeoPageContent } from "@/lib/seo-pages";

export function SeoLandingPage({ content }: { content: SeoPageContent }) {
  return (
    <main className="relative min-h-screen bg-[#f4efe4] text-[#2a3239]">
      <HeroBackground />
      <Header />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <HeroBlock hero={content.hero} />
        <CtaBandBlock ctaBand={content.ctaBand} />
        <CapabilitiesBlock capabilities={content.capabilities} />
        <ServicesBlock services={content.services} />

        <TestimonialsSection />
        <TeamSection />

        <FinalCtaBlock finalCta={content.finalCta} />
      </div>

      <FooterSection />
    </main>
  );
}
