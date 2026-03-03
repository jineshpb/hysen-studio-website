import { FooterSection } from "@/components/landing/footer-section";
import { FinalCta } from "@/components/landing/final-cta";
import { HeroBackground } from "@/components/landing/hero-background";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { IndustrialSection } from "@/components/landing/industrial-section";
import { ProjectsSection } from "@/components/landing/projects-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TeamSection } from "@/components/landing/team-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#f4efe4] text-[#2a3239]">
      <HeroBackground />
      <Header />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <HeroSection />
        <ServicesSection />
        <IndustrialSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FinalCta />
      </div>
      <FooterSection />
    </main>
  );
}
