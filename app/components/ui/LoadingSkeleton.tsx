// app/components/ui/LoadingSkeleton.tsx
"use client";

import { motion } from "framer-motion";

interface LoadingSkeletonProps {
  height?: string;
  width?: string;
  className?: string;
}

export function LoadingSkeleton({
  height = "h-40",
  width = "w-full",
  className = "",
}: LoadingSkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className={`${height} ${width} ${className} rounded-2xl bg-linear-to-r from-[#171124]/50 via-[#1F1A2E]/50 to-[#171124]/50`}
    />
  );
}

// Section-specific skeletons
export function HeroSkeleton() {
  return (
    <section className="min-h-svh flex flex-col justify-center items-center py-20">
      <div className="max-w-3xl mx-auto w-full px-4 text-center">
        <LoadingSkeleton height="h-12" className="mx-auto mb-6 max-w-xs" />
        <LoadingSkeleton height="h-16" className="mx-auto mb-4 max-w-2xl" />
        <LoadingSkeleton height="h-12" className="mx-auto mb-8 max-w-xl" />
        <LoadingSkeleton height="h-8" className="mx-auto max-w-xs" />
      </div>
    </section>
  );
}

export function AboutSkeleton() {
  return (
    <section className="py-6 lg:py-8">
      <div className="section-container">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <LoadingSkeleton
            height="h-[400px]"
            className="mx-auto max-w-72 md:max-w-sm"
          />
          <div>
            <LoadingSkeleton height="h-6" className="mb-3 max-w-24" />
            <LoadingSkeleton height="h-12" className="mb-4 max-w-md" />
            <LoadingSkeleton height="h-12" className="mb-6 max-w-lg" />
            <div className="grid grid-cols-2 gap-3">
              <LoadingSkeleton height="h-16" />
              <LoadingSkeleton height="h-16" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSkeleton() {
  return (
    <section className="py-6 lg:py-8">
      <div className="section-container">
        <div className="text-center mb-12">
          <LoadingSkeleton height="h-6" className="mx-auto mb-3 max-w-32" />
          <LoadingSkeleton height="h-12" className="mx-auto max-w-md" />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <LoadingSkeleton key={i} height="h-80" />
          ))}
        </div>
      </div>
    </section>
  );
}
