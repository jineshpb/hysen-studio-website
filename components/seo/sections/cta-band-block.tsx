import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { SeoPageContent } from "@/lib/seo-pages";

export function CtaBandBlock({ ctaBand }: { ctaBand: SeoPageContent["ctaBand"] }) {
  return (
    <section className="mx-auto mt-6 max-w-5xl px-8 text-center">
      <h3 className="text-3xl font-semibold tracking-tight sm:text-5xl">{ctaBand.heading}</h3>
      <p className="mx-auto mt-3 max-w-3xl text-[#626a72]">{ctaBand.subheading}</p>
      <Button asChild variant="cta" className="mt-6 cursor-pointer">
        <Link href={ctaBand.ctaHref}>{ctaBand.ctaLabel}</Link>
      </Button>
    </section>
  );
}
