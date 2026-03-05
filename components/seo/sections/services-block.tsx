import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SeoPageContent } from "@/lib/seo-pages";

export function ServicesBlock({ services }: { services: SeoPageContent["services"] }) {
  return (
    <section className="mx-auto mt-24 max-w-4xl px-8 text-center">
      <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">{services.heading}</h3>
      <ul className="mx-auto mt-8 max-w-2xl space-y-3 text-left text-[#4b5660]">
        {services.points.map((point) => (
          <li key={point} className="rounded-xl border border-[#ddd0bf] bg-white/70 px-4 py-3">
            • {point}
          </li>
        ))}
      </ul>
      <Button asChild variant="cta" className="mt-8 cursor-pointer">
        <Link href={services.ctaHref}>{services.ctaLabel}</Link>
      </Button>
    </section>
  );
}
