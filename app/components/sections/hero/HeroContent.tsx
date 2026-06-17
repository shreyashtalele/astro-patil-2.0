"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      className="mx-auto w-full max-w-lg text-center sm:max-w-xl lg:mx-0 lg:max-w-none lg:text-left"
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* ── Eyebrow ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mb-4 flex items-center justify-center gap-3 sm:mb-5 lg:justify-start"
      >
        <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4AF37]/60 sm:text-xs">
          Tech Meets Vedic Astrology
        </span>
      </motion.div>

      {/* ── H1 ── */}
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="
          mb-4 font-semibold leading-[1.12] tracking-tight text-white
          text-[28px]
          min-[360px]:text-[31px]
          min-[390px]:text-[34px]
          sm:text-[42px]
          md:text-[50px]
          lg:text-[52px]
          xl:text-[60px]
        "
      >
        Decode your destiny
        <br className="hidden sm:block" />
        <span className="bg-gradient-to-r from-[#c9a84c] via-[#F2D6A0] to-[#c9a84c] bg-clip-text text-transparent">
          {" "}
          with precision
        </span>
        <br className="hidden sm:block" /> & ancient wisdom
      </motion.h1>

      {/* ── Subtext ── */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="
          mx-auto mb-7 text-sm leading-relaxed text-[#F2D6A0]/50
          max-w-[92%]
          sm:mb-8 sm:max-w-md sm:text-[15px]
          lg:mx-0 lg:max-w-[500px]
        "
      >
        Software Engineer + Astrologer with 9+ years experience · Backed by 20+
        years family legacy · Root-cause analysis with accurate, practical
        remedies.
      </motion.p>

      {/* ── CTA buttons ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.36 }}
        className="
          flex flex-col items-center gap-3
          sm:flex-row sm:flex-wrap sm:justify-center
          lg:justify-start
        "
      >
        {/* Primary CTA */}
        <motion.a
          href="https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20personal%20astrology%20guidance."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="
            relative inline-flex w-full items-center justify-center overflow-hidden
            rounded-full bg-gradient-to-r from-[#c9a037] via-[#f0d060] to-[#c9a037]
            px-7 py-3.5 text-sm font-semibold text-black
            shadow-[0_0_24px_rgba(212,175,55,0.28)]
            transition-shadow duration-300
            hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]
            sm:w-auto
          "
        >
          <span className="relative z-10">Get Personal Guidance</span>
        </motion.a>

        {/* Secondary CTA */}
        <motion.a
          href="#services"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="
            inline-flex w-full items-center justify-center rounded-full
            border border-white/10 bg-white/[0.03]
            px-7 py-3.5 text-sm font-medium text-[#F2D6A0]/70
            backdrop-blur-sm transition-all duration-300
            hover:border-[#D4AF37]/30 hover:text-[#F2D6A0]
            sm:w-auto
          "
        >
          Explore Services
        </motion.a>
      </motion.div>

      {/* ── Trust badge ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="
          mx-auto mt-7 flex items-center justify-center gap-3
          max-w-[280px]
          sm:mt-8 sm:max-w-sm
          lg:mx-0 lg:justify-start
        "
      >
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-xs text-[#D4AF37]">
          ✦
        </div>
        <p className="text-left text-[11px] leading-tight text-[#F2D6A0]/40">
          Trusted by <span className="text-[#F2D6A0]/65">5000+ clients</span> ·
          Accurate & confidential consultations
        </p>
      </motion.div>
    </motion.div>
  );
}
