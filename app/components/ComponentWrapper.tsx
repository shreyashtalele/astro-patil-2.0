// app/components/ComponentWrapper.tsx
"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

// ✅ Loading skeleton for Hero section (full screen)
const HeroSkeleton = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#0B0B1A] px-4">
    <div className="w-full max-w-3xl mx-auto text-center">
      {/* Badge skeleton */}
      <div className="h-8 w-48 mx-auto mb-6 bg-[#171124]/50 rounded-full animate-pulse" />
      {/* Heading skeleton */}
      <div className="h-16 w-full max-w-2xl mx-auto mb-4 bg-[#171124]/50 rounded-lg animate-pulse" />
      <div className="h-16 w-full max-w-xl mx-auto mb-4 bg-[#171124]/50 rounded-lg animate-pulse" />
      <div className="h-12 w-full max-w-lg mx-auto mb-8 bg-[#171124]/50 rounded-lg animate-pulse" />
      {/* CTA skeleton */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="h-14 w-48 bg-[#171124]/50 rounded-full animate-pulse" />
        <div className="h-14 w-40 bg-[#171124]/50 rounded-full animate-pulse" />
      </div>
    </div>
  </div>
);

// ✅ Loading skeleton for sections (pulsing cards)
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div
    className={`${height} w-full bg-[#171124]/50 rounded-2xl animate-pulse m-4`}
  />
);

// ✅ Lazy load all sections
const Hero = dynamic(() => import("@/app/components/sections/hero/Hero"), {
  loading: () => <HeroSkeleton />,
  ssr: true, // Keep SSR for SEO
});

const About = dynamic(() => import("@/app/components/sections/About"), {
  loading: () => <SectionSkeleton height="h-[500px]" />,
  ssr: true,
});

const Services = dynamic(() => import("@/app/components/sections/Services"), {
  loading: () => <SectionSkeleton height="h-[600px]" />,
  ssr: true,
});

const Testimonials = dynamic(
  () => import("@/app/components/sections/Testimonials"),
  {
    loading: () => <SectionSkeleton height="h-[400px]" />,
    ssr: true,
  },
);

const FutureCTA = dynamic(() => import("@/app/components/sections/FutureCTA"), {
  loading: () => <SectionSkeleton height="h-[300px]" />,
  ssr: true,
});

const ContactSection = dynamic(
  () => import("@/app/components/sections/ContactSection"),
  {
    loading: () => <SectionSkeleton height="h-[500px]" />,
    ssr: true,
  },
);

export default function ComponentWrapper() {
  return (
    <div id="main-content">
      <Navbar />

      {/* Hero loads first */}
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>

      {/* Other sections load as user scrolls */}
      <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
        <Services />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[400px]" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[300px]" />}>
        <FutureCTA />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-[500px]" />}>
        <ContactSection />
      </Suspense>

      <Footer />
    </div>
  );
}
