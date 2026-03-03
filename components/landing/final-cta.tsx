import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-8 py-14 text-center md:px-16 md:py-20">
      <p className="text-xs uppercase tracking-[0.22em] text-[#7a8188]">
        So what are you waiting for
      </p>
      <h2 className="mt-4 text-5xl font-semibold tracking-tight text-[#2a3239] md:text-7xl">
        Let&apos;s talk
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-[#626a72] md:text-base">
        Bring your product idea, roadmap, or rough concept. We&apos;ll help you shape it into
        something real.
      </p>

      <Button variant="cta" size="lg" className="mt-8 h-20 px-14 text-2xl cursor-pointer">
        Start a Project
        <ArrowRight className="h-6 w-6" strokeWidth={2.5} />
      </Button>
    </section>
  );
}
