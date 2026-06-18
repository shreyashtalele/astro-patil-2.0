"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle,
  PhoneCall,
  ArrowRight,
} from "lucide-react";

const STATS = [
  { Icon: Users, value: "5,000+", label: "Clients Guided" },
  { Icon: Sparkles, value: "9+ Yrs", label: "Experience" },
  { Icon: ShieldCheck, value: "100%", label: "Confidential" },
];

const SPECIALTIES = [
  "Career",
  "Marriage",
  "Finance",
  "Health",
  "Education",
  "Vastu",
  "Numerology",
];

const SERVICES = [
  "Career Guidance",
  "Marriage Matching",
  "Vastu Consultation",
  "Numerology",
  "Finance Predictions",
];

export default function Hero() {
  const reduced = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: reduced ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    // Add 'as const' to the array to tell TS it is a tuple of 4 numbers
    transition: {
      duration: 0.65,
      ease: [0.25, 0.1, 0.25, 1] as const,
      delay,
    },
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 pb-10"
      style={{
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top, rgba(212,175,55,0.08), transparent 55%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "5rem",
            transform: "translateX(-50%)",
            width: "clamp(300px, 70vw, 700px)",
            height: "clamp(300px, 70vw, 700px)",
            borderRadius: "50%",
            background: "rgba(212,175,55,0.05)",
            filter: "blur(160px)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "clamp(320px, 72vw, 800px)",
            height: "clamp(320px, 72vw, 800px)",
            borderRadius: "50%",
            border: "1px dashed rgba(212,175,55,0.09)",
            animation: reduced ? "none" : "orbit-spin 90s linear infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes orbit-spin {
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>

      {/* Content */}
      <div
        className="relative"
        style={{
          zIndex: 1,
          maxWidth: 900,
          margin: "0 auto",
          width: "100%",
          padding: "0 1rem",
        }}
      >
        {/* Badge */}
        <motion.div
          {...fadeUp(0)}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            marginBottom: "1.75rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "1px solid rgba(212,175,55,0.2)",
              borderRadius: "999px",
              padding: "0.35rem 1rem",
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Star size={13} color="#D4AF37" fill="#D4AF37" />
            <span
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4AF37",
              }}
            >
              Tech Meets Vedic Astrology
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          style={{
            textAlign: "center",
            fontWeight: 600,
            fontSize: "clamp(2.2rem, 6.5vw, 4.5rem)",
            lineHeight: 1.07,
            letterSpacing: "-0.01em",
            color: "#fff",
            margin: 0,
          }}
        >
          Decode Your Destiny With
          <br />
          <span
            style={{
              background:
                "linear-gradient(100deg, #D4AF37 0%, #F2D6A0 50%, #D4AF37 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Ancient Wisdom & Modern Insight
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          {...fadeUp(0.18)}
          style={{
            textAlign: "center",
            marginTop: "1.25rem",
            fontSize: "clamp(0.9rem, 1.8vw, 1.05rem)",
            lineHeight: 1.8,
            color: "rgba(242,214,160,0.65)",
            maxWidth: 620,
            marginInline: "auto",
          }}
        >
          Get clarity on career, marriage, finances, health, and life decisions
          through personalised Vedic astrology consultations — backed by 9+
          years of experience and a 20-year family legacy.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.26)}
          style={{
            marginTop: "2rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.75rem",
          }}
        >
          <a
            href="https://wa.me/917385803537"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "999px",
              padding: "0.85rem 1.9rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#000",
              background:
                "linear-gradient(110deg, #D4AF37 0%, #F2D6A0 55%, #D4AF37 100%)",
              backgroundSize: "200% auto",
              boxShadow: "0 0 40px rgba(212,175,55,0.25)",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            <PhoneCall size={15} strokeWidth={2.2} />
            Book a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
