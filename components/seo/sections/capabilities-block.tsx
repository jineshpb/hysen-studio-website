import Image from "next/image";
import type { SeoPageContent } from "@/lib/seo-pages";

export function CapabilitiesBlock({ capabilities }: { capabilities: SeoPageContent["capabilities"] }) {
  return (
    <section className="mt-24 px-8">
      <h3 className="text-center text-3xl font-semibold tracking-tight sm:text-5xl">Capabilities</h3>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.map((item) => (
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
  );
}
