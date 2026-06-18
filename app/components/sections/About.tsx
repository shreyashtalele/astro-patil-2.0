"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Users,
  Clock,
  Code2,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

const stats: Stat[] = [
  { icon: Clock, value: "9+", label: "Years Experience" },
  { icon: Users, value: "5,000+", label: "Clients Guided" },
  { icon: Sparkles, value: "20+", label: "Years Legacy" },
];

const highlights = [
  "Vedic birth chart & transit readings",
  "Marriage compatibility (Kundali Milan)",
  "Vastu analysis for home & office",
  "Numerology & name correction",
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const Icon = stat.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.08 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.07]"
    >
      <div className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10">
        <Icon size={16} className="text-[#D4AF37]" />
      </div>
      <p className="text-xl font-bold text-white leading-none">{stat.value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-[#F2D6A0]/55">
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative py-6 lg:py-8">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#D4AF37]/4 blur-[120px]" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* ── Image column ── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mx-auto w-full max-w-72 md:max-w-sm"
          >
            {/* Gold border gradient frame */}
            <div className="rounded-2xl bg-gradient-to-br from-[#D4AF37]/25 via-[#D4AF37]/5 to-transparent p-px">
              <div className="overflow-hidden rounded-2xl bg-[#0d0b1a]">
                <div className="relative aspect-3/4">
                  <Image
                    src="/image/Image.png"
                    alt="Astro Patil — Vedic Astrologer"
                    fill
                    priority
                    sizes="(max-width: 768px) 288px, 384px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-black/60 px-3.5 py-2.5 backdrop-blur-md">
              <Code2 size={14} className="text-[#D4AF37]" />
              <span className="text-[11px] font-medium text-[#F2D6A0]/80">
                Engineer &amp; Astrologer
              </span>
            </div>
          </motion.div>

          {/* ── Content column ── */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="text-center md:text-left"
          >
            {/* Eyebrow */}
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              About Me
            </span>

            {/* Heading */}
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
              Where Logic Meets
              <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] bg-clip-text text-transparent">
                Ancestral Wisdom
              </span>
            </h2>

            {/* Bio */}
            <div className="mt-5 space-y-3.5 text-sm leading-relaxed text-[#F2D6A0]/70 md:text-base">
              <p>
                I'm a Software Engineer turned dedicated Astrologer — a rare
                combination that brings both rigorous analytical thinking and
                deep spiritual understanding to every consultation.
              </p>
              <p>
                With 9+ years of practice built on a 20-year family legacy, I
                deliver Vedic readings that are grounded, practical, and
                genuinely personalised — not generic forecasts.
              </p>
            </div>

            {/* Highlights checklist */}
            <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-[#F2D6A0]/65"
                >
                  <CheckCircle
                    size={14}
                    className="mt-0.5 shrink-0 text-[#D4AF37]"
                  />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} stat={stat} index={i} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
