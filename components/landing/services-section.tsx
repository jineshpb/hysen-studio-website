import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ServiceCard } from "@/components/landing/service-card";
import { serviceTiles } from "@/lib/landing-data";

export function ServicesSection() {
  return (
    <section className="mt-32 px-32 text-center">
      <h2 className="mt-4 text-[30px] leading-[0.92] font-medium tracking-tighter bg-brand-primary-gradient text-transparent bg-clip-text sm:text-[50px]">
        Everything your idea needs, <br /> all in one place
      </h2>
      <h3 className="mt-2 text-[16px] font-medium sm:text-[16px] tracking-tighter text-gray-500">
        From concept to launch-ready product — without juggling multiple vendors.
      </h3>

      <Button asChild variant="cta" className="mt-4 cursor-pointer">
        <Link href="/contact">Learn more</Link>
      </Button>

      <div className="mt-40 grid grid-cols-2 gap-4">
        {serviceTiles.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
