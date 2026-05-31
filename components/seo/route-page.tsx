import { Header } from "@/components/landing/header";
import { HeroBackground } from "@/components/landing/hero-background";
import { HeroSection } from "@/components/landing/hero-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FinalCta } from "@/components/landing/final-cta";
import { FooterSection } from "@/components/landing/footer-section";
import { CapabilitiesBlock } from "@/components/seo/sections/capabilities-block";
import { SeoRoute } from "@/lib/seo-routes";
import { getServiceHeroVariant } from "@/lib/service-hero";
import { deriveCapabilitiesFromServices } from "@/lib/seo-capabilities";

type Props = {
  route: SeoRoute;
};

export function SeoRoutePage({ route }: Props) {
  const isServiceRoute = route.type === "services";
  const serviceHeroVariant = isServiceRoute ? getServiceHeroVariant(route.slug, route.keyword) : undefined;
  const introDescription = isServiceRoute
    ? `If you are searching for "${route.keyword}", we can help you move from idea to a tested, launch-ready result faster.`
    : "We help teams execute faster with clear design, rapid prototyping, and practical product support.";
  const fallbackServicePoints = [
    `${route.title} strategy and planning`,
    "UX and interaction design execution",
    "Implementation-ready handoff support",
    "Launch and optimization collaboration",
  ];
  const capabilityItems = deriveCapabilitiesFromServices(fallbackServicePoints, route.slug);

  return (
    <main className="relative min-h-screen bg-[#f4efe4] text-[#2a3239]">
      <HeroBackground />
      <Header />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-14">
        {isServiceRoute && serviceHeroVariant ? (
          <HeroSection
            variant={serviceHeroVariant}
            heading={route.title}
            description={introDescription}
            imageAlt={`${route.title} service hero visual`}
          />
        ) : null}

        <CapabilitiesBlock items={capabilityItems} />
        <TestimonialsSection />
        <FinalCta />
      </div>

      <FooterSection />
    </main>
  );
}
