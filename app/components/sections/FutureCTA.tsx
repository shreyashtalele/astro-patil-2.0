"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20personal%20astrology%20guidance.";

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

type Particle = {
  ox: number;
  oy: number;
  x: number;
  y: number;
  r: number;
  speed: number;
  angle: number;
  opacity: number;
};

export default function FutureCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      buildParticles();
    };

    const buildParticles = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      const count = width < 480 ? 20 : 45;

      particles = Array.from({ length: count }, () => ({
        ox: Math.random() * width,
        oy: Math.random() * height,
        x: 0,
        y: 0,
        r: Math.random() * 1.2 + 0.4,
        speed: Math.random() * 0.004 + 0.002,
        angle: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.45 + 0.12,
      }));
    };

    const animate = () => {
      if (document.hidden) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      particles.forEach((particle) => {
        particle.angle += particle.speed;

        particle.x = particle.ox + Math.cos(particle.angle) * 28;

        particle.y = particle.oy + Math.sin(particle.angle) * 18;

        ctx.beginPath();

        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(212,175,55,${particle.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [shouldReduceMotion]);

  return (
    <section
      aria-labelledby="future-cta-heading"
      className="relative overflow-hidden bg-[#0B0B1A] py-12 sm:py-16"
    >
      {!shouldReduceMotion && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
      )}

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 bg-linear-to-r from-transparent to-[#D4AF37]/50" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]/70">
              Book a Session
            </span>

            <div className="h-px w-8 bg-linear-to-l from-transparent to-[#D4AF37]/50" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="future-cta-heading"
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            Still confused about{" "}
            <span className="text-[#D4AF37]">your future?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-[#F2D6A0]/65 md:text-base"
          >
            Get personalised guidance rooted in ancient Vedic wisdom. Gain
            clarity on relationships, career, finances, and important life
            decisions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center gap-3 sm:flex-row"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-linear-to-r from-[#c9a037] to-[#f0d060] px-8 py-3 text-sm font-bold text-black shadow-lg transition-transform duration-300 hover:scale-105"
            >
              Chat on WhatsApp
            </a>

            <a
              href="#services"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10"
            >
              View Services
            </a>
          </motion.div>

          {/* Trust Text */}
          <motion.p
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#F2D6A0]/35"
          >
            5000+ Consultations · 100% Confidential
          </motion.p>
        </div>
      </div>
    </section>
  );
}
