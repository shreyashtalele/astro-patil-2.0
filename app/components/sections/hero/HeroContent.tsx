"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="w-full max-w-3xl mx-auto lg:mx-0 text-center lg:text-left"
    >
      {/* Eyebrow */}
      <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
        <div className="h-px w-10 bg-gradient-to-r from-[#D4AF37] to-transparent" />

        <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37]/80">
          Tech Meets Vedic Astrology
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
          text-white
          font-semibold
          tracking-tight
          leading-[1.05]
          mb-6

          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-6xl
          xl:text-7xl
        "
      >
        Decode your destiny
        <br />
        <span className="bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] bg-clip-text text-transparent">
          with precision
        </span>
        <br />
        <span className="text-white">& ancient wisdom</span>
      </h1>

      {/* Description */}
      <p
        className="
          text-[#F2D6A0]/70
          text-base
          md:text-lg
          leading-relaxed

          max-w-2xl
          mx-auto
          lg:mx-0

          mb-8
        "
      >
        Software Engineer and Astrologer with 9+ years of experience, backed by
        a 20+ year family legacy in Vedic astrology. Get accurate predictions,
        root-cause analysis, and practical remedies tailored to your life
        journey.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
        <a
          href="https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20personal%20astrology%20guidance."
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center
            rounded-full
            px-8 py-4

            font-semibold
            text-black

            bg-gradient-to-r
            from-[#D4AF37]
            via-[#F2D6A0]
            to-[#D4AF37]

            shadow-[0_0_30px_rgba(212,175,55,0.25)]
            hover:shadow-[0_0_45px_rgba(212,175,55,0.4)]

            transition-all duration-300
          "
        >
          Get Personal Guidance
        </a>

        <a
          href="#services"
          className="
            inline-flex items-center justify-center
            rounded-full

            border border-white/10
            bg-white/[0.03]
            backdrop-blur-md

            px-8 py-4

            text-[#F2D6A0]
            font-medium

            hover:border-[#D4AF37]/40
            hover:bg-white/[0.05]

            transition-all duration-300
          "
        >
          Explore Services
        </a>
      </div>

      {/* Trust */}
      <div className="flex items-center justify-center lg:justify-start gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
          ✦
        </div>

        <p className="text-sm text-[#F2D6A0]/60">
          Trusted by{" "}
          <span className="text-white font-medium">5000+ clients</span> ·
          Accurate & confidential consultations
        </p>
      </div>
    </motion.div>
  );
}
