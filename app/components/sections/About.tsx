"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Users, Clock, type LucideIcon } from "lucide-react";

type Stat = {
  icon: LucideIcon;
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: Clock,
    value: "9+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: "5000+",
    label: "Clients Guided",
  },
  {
    icon: Sparkles,
    value: "20+",
    label: "Years Legacy",
  },
];

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function StatCard({ stat }: { stat: Stat }) {
  const Icon = stat.icon;

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.07]">
      <Icon size={18} className="mx-auto mb-2 text-[#D4AF37]" />

      <p className="text-lg font-bold text-white">{stat.value}</p>

      <p className="text-[10px] uppercase tracking-wider text-[#F2D6A0]/60">
        {stat.label}
      </p>
    </div>
  );
}

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden py-12 sm:py-16">
      <div className="section-container relative z-10">
        <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-70 md:max-w-90"
          >
            <div className="rounded-2xl bg-linear-to-br from-[#D4AF37]/20 to-transparent p-px">
              <div className="overflow-hidden rounded-2xl bg-[#0d0b1a]">
                <div className="relative aspect-3/4">
                  <Image
                    src="/image/Image.png"
                    alt="Astro Patil"
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 360px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              About Me
            </span>

            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Rooted in tradition,
              <span className="block text-[#D4AF37]">guided by stars</span>
            </h2>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#F2D6A0]/75 md:text-base">
              <p>
                I am a Software Engineer and dedicated Astrologer with over 9
                years of professional experience helping individuals navigate
                important life decisions.
              </p>

              <p>
                By combining analytical thinking with ancestral wisdom, I
                provide meaningful chart readings and practical, time-tested
                remedies tailored to each individual.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
