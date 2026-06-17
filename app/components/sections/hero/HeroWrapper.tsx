"use client";

import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

// Dynamically import the visual to prevent server-side hydration mismatches with animations
const HeroVisual = dynamic(() => import("./HeroVisual"), { ssr: false });

export default function HeroWrapper() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Bottom fade to blend seamlessly into the next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-24 w-full bg-gradient-to-b from-transparent to-[#0b0b1a]" />

      <div
        className="
          relative z-10 mx-auto w-full max-w-7xl
          px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10
          pt-16 pb-10
          sm:pt-20 sm:pb-12
          lg:pt-24 lg:pb-16
          grid items-center gap-8
          lg:grid-cols-[1.05fr_0.95fr] lg:gap-8
          xl:gap-12
        "
      >
        <HeroContent />
        <div className="hidden min-h-[420px] w-full items-center justify-center lg:flex xl:min-h-[500px]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
