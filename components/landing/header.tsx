import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="relative z-10 mx-auto w-full ">
      <div className="flex items-center justify-between max-w-6xl mx-auto z-10 h-[72px] relative">
        <div className="absolute inset-x-0 top-0 h-[220px] bg-[radial-gradient(ellipse_at_top,_#f3822e66_0%,_#f3822e00_66%)]" />
        <Link href="/">
          <Image src="/brand/logos/logo-new.svg" alt="Logo" width={60} height={120} />
        </Link>
        <div className=" h-[72px] bg-[linear-gradient(to_bottom,#000000_0%,#00000000_100%)]" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-[82px] bg-[linear-gradient(to_bottom,#79716b_0%,#79716b00_100%)]" />
    </header>
  );
};
