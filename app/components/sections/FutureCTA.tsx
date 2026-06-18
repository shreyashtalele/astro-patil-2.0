"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/917385803537?text=Hello%20Astro%20Patil,%20I%20would%20like%20personal%20astrology%20guidance.";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TRUST_PILLS = [
  { icon: Users, text: "5,000+ Consultations" },
  { icon: ShieldCheck, text: "100% Confidential" },
  { icon: Clock, text: "Quick Response" },
];

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
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      const count = w < 480 ? 22 : 50;
      particles = Array.from({ length: count }, () => ({
        ox: Math.random() * w,
        oy: Math.random() * h,
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
      particles.forEach((p) => {
        p.angle += p.speed;
        p.x = p.ox + Math.cos(p.angle) * 28;
        p.y = p.oy + Math.sin(p.angle) * 18;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.opacity})`;
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
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-[#0B0B1A] py-6 sm:py-8"
    >
      {/* Particle canvas */}
      {!shouldReduceMotion && (
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden="true"
        />
      )}

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#D4AF37]/50" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]/70">
              Book a Session
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#D4AF37]/50" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="cta-heading"
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl"
          >
            Your next big decision
            <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] bg-clip-text text-transparent">
              deserves clarity.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-[#F2D6A0]/60 md:text-base"
          >
            Whether it's career, marriage, finances, or a life crossroads — a
            personalised Vedic consultation gives you the perspective to move
            forward with confidence.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] px-7 py-3 text-sm font-bold text-black shadow-[0_0_36px_rgba(212,175,55,0.25)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_48px_rgba(212,175,55,0.4)]"
            >
              <MessageCircle size={15} strokeWidth={2.5} />
              Chat on WhatsApp
            </a>

            <a
              href="#services"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-sm font-medium text-[#F2D6A0] backdrop-blur-sm transition-all duration-300 hover:border-[#D4AF37]/30 hover:bg-white/[0.07]"
            >
              View Services
              <ArrowRight size={14} strokeWidth={2} />
            </a>
          </motion.div>

          {/* Trust pills */}
          <motion.div
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {TRUST_PILLS.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3.5 py-1.5"
              >
                <Icon size={12} className="text-[#D4AF37]" />
                <span className="text-[11px] text-[#F2D6A0]/50">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
