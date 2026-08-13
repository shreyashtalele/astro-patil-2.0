// app/components/ComponentWrapper.tsx
"use client";

import { Suspense, lazy } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/app/components/layout/Navbar"; // ✅ Add this import
import Footer from "@/app/components/layout/Footer";
import {
  HeroSkeleton,
  AboutSkeleton,
  ServicesSkeleton,
} from "@/app/components/ui/LoadingSkeleton";

// Lazy load all sections
const Hero = dynamic(() => import("@/app/components/sections/hero/Hero"), {
  loading: () => <HeroSkeleton />,
  ssr: true,
});

const About = dynamic(() => import("@/app/components/sections/About"), {
  loading: () => <AboutSkeleton />,
  ssr: true,
});

const Services = dynamic(() => import("@/app/components/sections/Services"), {
  loading: () => <ServicesSkeleton />,
  ssr: true,
});

// For components that are below the fold, we can use lazy loading with ssr: false
const Testimonials = dynamic(
  () => import("@/app/components/sections/Testimonials"),
  {
    loading: () => (
      <div className="h-40 w-full animate-pulse bg-[#171124]/50 rounded-2xl" />
    ),
    ssr: false,
  },
);

const FutureCTA = dynamic(() => import("@/app/components/sections/FutureCTA"), {
  loading: () => (
    <div className="h-40 w-full animate-pulse bg-[#171124]/50 rounded-2xl" />
  ),
  ssr: false,
});

const ContactSection = dynamic(
  () => import("@/app/components/sections/ContactSection"),
  {
    loading: () => (
      <div className="h-80 w-full animate-pulse bg-[#171124]/50 rounded-2xl" />
    ),
    ssr: false,
  },
);

export default function ComponentWrapper() {
  return (
    <div id="main-content">
      <Navbar />
      <Suspense fallback={<HeroSkeleton />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<AboutSkeleton />}>
        <About />
      </Suspense>
      <Suspense fallback={<ServicesSkeleton />}>
        <Services />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-40 w-full animate-pulse bg-[#171124]/50 rounded-2xl" />
        }
      >
        <Testimonials />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-40 w-full animate-pulse bg-[#171124]/50 rounded-2xl" />
        }
      >
        <FutureCTA />
      </Suspense>
      <Suspense
        fallback={
          <div className="h-80 w-full animate-pulse bg-[#171124]/50 rounded-2xl" />
        }
      >
        <ContactSection />
      </Suspense>
      <Footer />
    </div>
  );
}
