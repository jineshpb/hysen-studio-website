import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { footerSitemapLinks } from "@/lib/landing-data";

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
              <div className="relative h-[80px] w-[320px] overflow-hidden md:h-[122px] md:w-[480px] lg:h-[100px] lg:w-[640px]">
                <div className="flex flex-col transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1/2 motion-reduce:transform-none">
                  <Image
                    src="/logo-white.svg"
                    alt="Hysen Studio"
                    width={640}
                    height={200}
                    className="h-[80px] w-[320px] object-contain md:h-[122px] md:w-[480px] lg:h-[120px] lg:w-[640px]"
                  />
                  <Image
                    src="/logo-white.svg"
                    alt=""
                    aria-hidden="true"
                    width={640}
                    height={200}
                    className="h-[80px] w-[320px] object-contain md:h-[122px] md:w-[480px] lg:h-[120px] lg:w-[640px]"
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
            <p className="text-xs uppercase tracking-[0.28em] text-white/60">Sitemap</p>
            <nav className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3">
              {footerSitemapLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-1 text-[15px] text-white/88 transition-colors hover:text-white"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                </Link>
              ))}
            </nav>
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
