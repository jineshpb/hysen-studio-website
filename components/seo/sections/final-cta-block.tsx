import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SeoPageContent } from "@/lib/seo-pages";

export function FinalCtaBlock({ finalCta }: { finalCta: SeoPageContent["finalCta"] }) {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-8 py-14 text-center md:px-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-[#7a8188]">So what are you waiting for</p>
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#2a3239] md:text-6xl">{finalCta.heading}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-[#626a72] md:text-base">{finalCta.subheading}</p>

      <Button asChild variant="cta" size="lg" className="mt-8 h-20 px-14 text-2xl cursor-pointer">
        <Link href={finalCta.ctaHref}>
          {finalCta.ctaLabel}
          <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
        </Link>
      </Button>
    </section>
  );
}
