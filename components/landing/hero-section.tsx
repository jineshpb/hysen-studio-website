import { Button } from "@/components/ui/button";
import Image from "next/image";

const brands = [
  {
    name: "bolt",
    icon: "/brands/bolt.svg",
  },
  {
    name: "Raycast",
    icon: "/brands/ray.svg",
  },
  {
    name: "Soundcloud",
    icon: "/brands/s-c.svg",
  },
  {
    name: "Replicate",
    icon: "/brands/replicate.svg",
  },
];

export function HeroSection() {
  return (
    <section className="relative text-center pt-32 pb-32 px-32 max-w-6xl mx-auto ">
      {/* <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(ellipse_at_center,_#f3822e57_0%,_#f3822e24_45%,_#f4efe400_75%)]" /> */}
      <h1 className="relative  text-xl leading-[0.92]  sm:text-[80px] tracking-tighter font-mono font-medium bg-brand-primary-gradient text-transparent bg-clip-text">
        Have an idea?
        <br />
        We build it.
      </h1>
      <h2 className="mt-4 text-[30px] font-medium tracking-tighter bg-brand-primary-gradient text-transparent bg-clip-text sm:text-[30px]">
        Design, prototype, and brand — all in one studio.
      </h2>
      <p className="text-[16px] font-medium   sm:text-[16px] tracking-tighter text-gray-500">
        Work with a team that turns concepts into real, testable products without the usual delays.
      </p>
      <div className="relative mx-auto -mt-24">
        <Image
          className="z-10"
          src="/hero-car.png"
          alt="Hero Section"
          width={700}
          height={700}
          priority
        />
      </div>

      <Button variant="cta" className="cursor-pointer">
        Start a Project
      </Button>

      <div className="relative mt-32">
        <p className="text-[12px] text-[#7f878e]">Trusted by</p>

        <div className="relative mt-[24px] flex items-center justify-center gap-12 text-[12px] text-[#7f878e]">
          {brands.map((brand) => (
            <Image key={brand.name} src={brand.icon} alt={brand.name} width={40} height={40} />
          ))}
        </div>
      </div>
    </section>
  );
}
