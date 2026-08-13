// app/components/layout/Footer.tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import type { ReactNode } from "react";
import { SITE_CONFIG } from "@/app/data/config";
import { navLinks, serviceLinks } from "@/app/data/navigation";

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  hoverClass: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "WhatsApp",
    href: SITE_CONFIG.whatsapp,
    icon: <FaWhatsapp size={17} />,
    hoverClass: "hover:text-[#25D366] hover:border-[#25D366]/30",
    external: true,
  },
  {
    label: "Call",
    href: `tel:${SITE_CONFIG.phone}`,
    icon: <FaPhoneAlt size={13} />,
    hoverClass: "hover:text-[#D4AF37] hover:border-[#D4AF37]/30",
  },
  {
    label: "Email",
    href: `mailto:${SITE_CONFIG.email}`,
    icon: <FaEnvelope size={14} />,
    hoverClass: "hover:text-[#D4AF37] hover:border-[#D4AF37]/30",
  },
  {
    label: "Instagram",
    href: SITE_CONFIG.instagram,
    icon: <FaInstagram size={15} />,
    hoverClass: "hover:text-[#E1306C] hover:border-[#E1306C]/30",
    external: true,
  },
  {
    label: "AstroTalk",
    href: SITE_CONFIG.astrotalk,
    icon: <span className="text-[10px] font-bold">AT</span>,
    hoverClass: "hover:text-[#FF6B35] hover:border-[#FF6B35]/30",
    external: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

function SocialButton({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      aria-label={link.label}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/55 transition-all duration-300 hover:-translate-y-1 ${link.hoverClass}`}
    >
      {link.icon}
    </a>
  );
}

export default function Footer() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <footer className="border-t border-white/6 bg-[#0B0B1A]">
      <div className="section-container py-8 sm:py-10">
        <motion.div
          variants={fadeUp}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 border-b border-white/6 pb-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* ── Brand column ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo / name */}
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[10px] font-bold text-[#D4AF37]">
                ॐ
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-white">
                {SITE_CONFIG.name.toUpperCase()}
              </span>
            </div>

            <p className="max-w-60 text-xs leading-relaxed text-[#F2D6A0]/50">
              Personalised Vedic astrology consultations rooted in a 20-year
              family legacy — helping you find clarity on life's most important
              decisions.
            </p>

            {/* Contact lines */}
            <div className="mt-4 space-y-2">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-xs text-[#F2D6A0]/50 transition-colors hover:text-[#D4AF37]"
              >
                <FaPhoneAlt size={11} className="text-[#D4AF37]" />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-xs text-[#F2D6A0]/50 transition-colors hover:text-[#D4AF37]"
              >
                <FaEnvelope size={11} className="text-[#D4AF37]" />
                {SITE_CONFIG.email}
              </a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              Navigation
            </h4>
            <nav aria-label="Footer navigation" className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className="text-xs text-[#F2D6A0]/55 transition-colors hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── Services ── */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-[#F2D6A0]/55 transition-colors hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Connect ── */}
          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              Connect
            </h4>

            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <SocialButton key={link.label} link={link} />
              ))}
            </div>

            {/* WhatsApp prompt */}
            <a
              href={SITE_CONFIG.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/8 px-4 py-2.5 text-xs font-semibold text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/14"
            >
              <FaWhatsapp size={14} />
              Book via WhatsApp
            </a>
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:flex-row">
          <p className="text-[10px] text-[#F2D6A0]/28">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights
            reserved.
          </p>

          {/* Ornament */}
          <div className="flex items-center gap-2 text-[#D4AF37]/20">
            <span className="h-px w-6 bg-[#D4AF37]/15" />
            <span className="text-[10px] text-[#F2D6A0]/28">
              Vedic Astrology · Palmistry · Vastu · Numerology
            </span>
            <span className="h-px w-6 bg-[#D4AF37]/15" />
          </div>

          <p className="text-[10px] text-[#F2D6A0]/28">
            {SITE_CONFIG.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
