import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceTiles } from "@/lib/landing-data";

export function FooterSection() {
  return (
    <footer className="relative mt-28 overflow-hidden bg-neutral-800 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#ff7a1a]/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#ffffff]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-[#fd4e17]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full  px-6 pb-12 pt-20 md:px-10 lg:px-12">
        <div className="grid gap-16 md:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="group relative inline-block">
              <div className="relative h-[100px] w-[380px] overflow-hidden md:h-[150px] md:w-[620px] lg:h-[170px] lg:w-[980px]">
                <div className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1/2 motion-reduce:transform-none">
                  <Image
                    src="/brand/logos/logo-new.svg"
                    alt="Hysen Studio"
                    width={1640}
                    height={200}
                    className="h-[100px] w-[380px] origin-left scale-[1.45] object-contain md:h-[150px] md:w-[620px] lg:h-[170px] lg:w-[980px]"
                  />
                  <Image
                    src="/brand/logos/logo-new.svg"
                    alt=""
                    aria-hidden="true"
                    width={1640}
                    height={200}
                    className="h-[100px] w-[380px] origin-left scale-[1.45] object-contain md:h-[150px] md:w-[620px] lg:h-[170px] lg:w-[980px]"
                  />
                </div>
              </div>
              <div className="absolute -inset-6 -z-10 rounded-full bg-white/10 blur-2xl transition-opacity duration-500 group-hover:opacity-90" />
            </div>

            <p className="max-w-lg text-base italics tracking-tight text-white/50">
              Consulting - Design - Engineering
            </p>

            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#2d3137]"
            >
              Let&apos;s build together
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">Services</p>
            <ul className="mt-6 space-y-4">
              {serviceTiles.map((service) => (
                <li key={service.title} className="text-[15px] text-white/88">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-white/20 pt-8">
          <div className="flex flex-col gap-2 text-xs uppercase tracking-[0.22em] text-white/55 md:flex-row md:items-center md:justify-between">
            <span>Hysen Studio</span>
            <span>Crafted for ambitious founders</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
