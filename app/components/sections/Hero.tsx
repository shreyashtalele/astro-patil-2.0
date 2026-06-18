"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      className="w-full max-w-xl lg:max-w-none lg:text-left text-center"
      initial={{ opacity: 0, x: -28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Eyebrow */}
      <div className="mb-4 flex items-center justify-center gap-3 lg:justify-start">
        <div className="h-px w-8 bg-gradient-to-r from-[#D4AF37]/70 to-transparent" />
        <span className="text-xs uppercase tracking-[0.22em] text-[#D4AF37]/70">
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
          mb-4
          text-[32px]
          sm:text-[42px]
          md:text-[50px]
          lg:text-[54px]
          xl:text-[60px]
        "
      >
        Decode your destiny
        <br />
        <span className="bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] bg-clip-text text-transparent">
          with precision
        </span>
        <br />& ancient wisdom
      </h1>

      {/* Description */}
      <p
        className="
          text-[#F2D6A0]/70
          leading-relaxed
          text-sm
          md:text-base
          max-w-xl
          mb-6
          mx-auto
          lg:mx-0
        "
      >
        Software Engineer + Astrologer with 9+ years experience. Backed by 20+
        years family legacy. Root-cause analysis with accurate and practical
        remedies.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 lg:justify-start justify-center">
        <a
          href="https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20personal%20astrology%20guidance."
          target="_blank"
          rel="noopener noreferrer"
          className="
            rounded-full
            px-7
            py-3.5
            text-black
            font-semibold
            bg-gradient-to-r
            from-[#c9a037]
            via-[#f0d060]
            to-[#c9a037]
            shadow-[0_0_25px_rgba(212,175,55,0.3)]
            hover:shadow-[0_0_40px_rgba(212,175,55,0.45)]
            transition
          "
        >
          Get Personal Guidance
        </a>

        <a
          href="#services"
          className="
            rounded-full
            border
            border-white/10
            bg-white/5
            px-7
            py-3.5
            text-[#F2D6A0]
            hover:border-[#D4AF37]/30
            transition
          "
        >
          Explore Services
        </a>
      </div>

      {/* Trust */}
      <div className="flex items-center gap-3 mt-6 justify-center lg:justify-start">
        <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
          ✦
        </div>

        <p className="text-xs text-[#F2D6A0]/60">
          Trusted by <span className="text-white">5000+ clients</span> ·
          Accurate & confidential consultations
        </p>
      </div>
    </motion.div>
  );
}
