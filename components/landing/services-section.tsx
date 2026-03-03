import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/landing/service-card";
import { serviceTiles } from "@/lib/landing-data";

export function ServicesSection() {
  return (
    <section className="mt-32 px-32 text-center">
      <h2 className="text-[30px] font-medium sm:text-[50px] tracking-tighter leading-[0.92] font-mono bg-brand-primary-gradient text-transparent bg-clip-text font-sans mt-4">
        Everything your idea needs, <br /> all in one place
      </h2>
      <h3 className="mt-2 text-[16px] font-medium sm:text-[16px] tracking-tighter font-sans text-gray-500">
        From concept to launch-ready product — without juggling multiple vendors.
      </h3>

      <Button variant="cta" className="mt-4 cursor-pointer">
        Learn more
      </Button>

      <div className="mt-40 grid grid-cols-2 gap-4">
        {serviceTiles.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
