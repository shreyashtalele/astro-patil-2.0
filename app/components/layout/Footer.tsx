"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import type { ReactNode } from "react";

const PHONE = "+91 73858 03537";
const EMAIL = "astropatilofficial@gmail.com";

type NavLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  hoverClass: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks: SocialLink[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/917385803537",
    icon: <FaWhatsapp size={18} />,
    hoverClass: "hover:text-[#25D366]",
    external: true,
  },
  {
    label: "Call",
    href: "tel:+917385803537",
    icon: <FaPhoneAlt size={14} />,
    hoverClass: "hover:text-[#D4AF37]",
  },
  {
    label: "Email",
    href: `mailto:${EMAIL}`,
    icon: <FaEnvelope size={14} />,
    hoverClass: "hover:text-[#D4AF37]",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/astropatil_",
    icon: <FaInstagram size={16} />,
    hoverClass: "hover:text-[#E1306C]",
    external: true,
  },
  {
    label: "AstroTalk",
    href: "https://chat.astrotalk.com/BnlV/j0phqq83?slug=Trishit",
    icon: <span className="text-[10px] font-bold">AT</span>,
    hoverClass: "hover:text-[#FF6B35]",
    external: true,
  },
];

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

function SocialButton({ link }: { link: SocialLink }) {
  return (
    <a
      href={link.href}
      aria-label={link.label}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#F2D6A0]/60 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 ${link.hoverClass}`}
    >
      {link.icon}
    </a>
  );
}

export default function Footer() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <footer className="border-t border-white/6 bg-[#0B0B1A]">
      <div className="section-container py-10 sm:py-12">
        <motion.div
          variants={fadeUp}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 border-b border-white/6 pb-10 sm:grid-cols-2 md:grid-cols-3"
        >
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold tracking-[0.2em] text-white">
              ASTRO PATIL
            </h3>

            <p className="mx-auto mt-3 max-w-65 text-xs leading-relaxed text-[#F2D6A0]/55 sm:mx-0">
              Expert guidance through Vedic Astrology, Palmistry, Numerology,
              Face Reading, Vastu, and spiritual remedies.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Navigation
            </h4>

            <nav aria-label="Footer Navigation" className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[#F2D6A0]/60 transition-colors hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="text-center md:text-right">
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Connect
            </h4>

            <div className="mb-4 flex flex-wrap justify-center gap-2 md:justify-end">
              {socialLinks.map((link) => (
                <SocialButton key={link.label} link={link} />
              ))}
            </div>

            <a
              href="tel:+917385803537"
              className="text-xs text-[#F2D6A0]/50 transition-colors hover:text-[#D4AF37]"
            >
              {PHONE}
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-[10px] text-[#F2D6A0]/30">
            © {new Date().getFullYear()} Astro Patil. All rights reserved.
          </p>

          <p className="text-[10px] text-[#F2D6A0]/30">
            Vedic Astrology · Palmistry · Vastu · Numerology
          </p>
        </div>
      </div>
    </footer>
  );
}
