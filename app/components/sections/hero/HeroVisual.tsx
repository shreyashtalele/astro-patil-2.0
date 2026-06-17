"use client";

import { motion } from "framer-motion";
import { Moon, ArrowUp, TrendingUp } from "lucide-react";

// ── Lightweight Glass Card ──
// Removed the heavy infinite Y-axis floating, keeping a smooth entrance
function GlassCard({
  title,
  value,
  subtitle,
  icon,
  className,
  delay = 0,
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ReactNode;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`absolute z-30 rounded-2xl border border-[#D4AF37]/20 bg-[#0b0b1a]/60 px-3 py-2.5 shadow-lg backdrop-blur-md xl:px-4 xl:py-3 ${className}`}
    >
      <div className="flex items-center gap-2 xl:gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15 text-[#FFD700] xl:h-10 xl:w-10">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37] xl:text-[10px]">
            {title}
          </p>
          <p className="mt-0.5 truncate font-serif text-sm text-white xl:text-base">
            {value}
          </p>
          {subtitle && (
            <p className="mt-0.5 truncate text-[10px] text-[#E8C766]/75 xl:text-[11px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative flex h-[420px] w-full max-w-[500px] items-center justify-center xl:h-[500px] xl:max-w-[600px]">
      {/* 1. Pure CSS Glow (Replaces heavy SVG filters) */}
      <div className="absolute h-[250px] w-[250px] rounded-full bg-[#D4AF37]/15 blur-[60px] xl:h-[300px] xl:w-[300px]" />

      {/* 2. Hardware-Accelerated Orbital Rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-[#D4AF37]/30 xl:h-[400px] xl:w-[400px]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute h-[220px] w-[220px] rounded-full border border-[#D4AF37]/20 xl:h-[280px] xl:w-[280px]"
      />

      {/* 3. Centerpiece - Clean & Minimal Sun Symbol */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 backdrop-blur-sm xl:h-32 xl:w-32"
      >
        <div className="absolute h-full w-full rounded-full border border-[#D4AF37]/20 animate-ping opacity-20" />
        <span className="text-4xl text-[#FFD700] xl:text-5xl">☉</span>
      </motion.div>

      {/* 4. Glass Cards */}
      <GlassCard
        title="Moon Sign"
        value="Virgo"
        subtitle="Analytical • Practical"
        icon={<Moon size={15} />}
        className="left-0 top-12 w-[175px] xl:top-16 xl:w-[210px]"
        delay={0.2}
      />
      <GlassCard
        title="Ascendant"
        value="Leo"
        subtitle="Confident • Leader"
        icon={<ArrowUp size={15} />}
        className="right-0 top-20 w-[175px] xl:top-28 xl:w-[210px]"
        delay={0.4}
      />
      <GlassCard
        title="Current Focus"
        value="Career Growth"
        subtitle="Jupiter Favorable"
        icon={<TrendingUp size={15} />}
        className="bottom-8 left-1/2 w-[210px] -translate-x-1/2 xl:bottom-12 xl:w-[250px]"
        delay={0.6}
      />
    </div>
  );
}
