"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  type LucideIcon,
} from "lucide-react";

const WHATSAPP_NUMBER = "917385803537";

type ContactItem = {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
};

const contactItems: ContactItem[] = [
  {
    icon: Phone,
    label: "Call / WhatsApp",
    value: "+91 73858 03537",
    href: "tel:+917385803537",
  },
  {
    icon: Mail,
    label: "Email",
    value: "astropatilofficial@gmail.com",
    href: "mailto:astropatilofficial@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    href: "#",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Usually within a few hours",
    href: "#",
  },
];

const services = [
  "Kundli Reading",
  "Marriage Compatibility",
  "Career Guidance",
  "Vastu Consultation",
  "Numerology",
  "Face Reading",
  "Palmistry",
  "Finance Guidance",
  "Muhurta",
  "Money & Growth",
];

const inputStyles =
  "w-full rounded-xl border border-white/10 bg-[#0B0B1A] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all duration-200 focus:border-[#D4AF37]/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/20";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleWhatsApp = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const service = String(fd.get("service") || "").trim();
    const message = String(fd.get("message") || "").trim();

    if (!name || !phone || !service || !message) {
      setError("Please fill in all fields before sending.");
      return;
    }

    const text =
      `New Astrology Enquiry\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`.trim();

    setSuccess(true);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    e.currentTarget.reset();
  }, []);

  return (
    <section id="contact" className="relative section-spacing bg-[#0B0B1A]">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-[#D4AF37]/4 blur-[130px]" />
      </div>

      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
            Get in Touch
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Let's talk about{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] bg-clip-text text-transparent">
              what's on your mind
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#F2D6A0]/60">
            Whether you have a specific question or just don't know where to
            start — reach out and we'll find the right path together.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          {/* ── Left: contact info + WhatsApp CTA ── */}
          <motion.div
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {/* Contact cards */}
            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const isLink = item.href !== "#";
                const Tag = isLink ? "a" : "div";

                return (
                  <Tag
                    key={item.label}
                    {...(isLink ? { href: item.href } : {})}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#171124] p-4 transition-all duration-300 hover:border-[#D4AF37]/30"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                      <Icon size={17} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#F2D6A0]/45">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </Tag>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] py-3.5 text-sm font-bold text-black shadow-[0_0_32px_rgba(212,175,55,0.2)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_44px_rgba(212,175,55,0.35)]"
            >
              <MessageCircle size={17} strokeWidth={2.5} />
              Chat on WhatsApp
            </a>

            {/* Privacy note */}
            <p className="text-center text-[11px] text-[#F2D6A0]/35">
              All consultations are strictly private and confidential.
            </p>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.form
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleWhatsApp}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-[#171124]/50 p-6 backdrop-blur-sm lg:col-span-3"
          >
            <p className="mb-1 text-sm font-semibold text-white">
              Send a message
            </p>

            {/* Name + phone row */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="name"
                  className="text-[11px] uppercase tracking-wider text-[#F2D6A0]/45"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  placeholder="e.g. Priya Sharma"
                  className={inputStyles}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="phone"
                  className="text-[11px] uppercase tracking-wider text-[#F2D6A0]/45"
                >
                  Mobile Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={inputStyles}
                />
              </div>
            </div>

            {/* Service */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="service"
                className="text-[11px] uppercase tracking-wider text-[#F2D6A0]/45"
              >
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                className={`${inputStyles} cursor-pointer`}
              >
                <option value="" disabled>
                  Select a service…
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="bg-[#171124]">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-[11px] uppercase tracking-wider text-[#F2D6A0]/45"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Briefly describe what you'd like guidance on…"
                className={`${inputStyles} resize-none`}
              />
            </div>

            {/* Feedback */}
            {error && <p className="text-sm text-red-400">{error}</p>}
            {success && (
              <p className="text-sm text-green-400">
                Opening WhatsApp — see you there!
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 flex items-center justify-center gap-2 rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 py-3.5 text-sm font-bold text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]/45 hover:bg-[#D4AF37]/18"
            >
              <Send size={14} strokeWidth={2.5} />
              Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
