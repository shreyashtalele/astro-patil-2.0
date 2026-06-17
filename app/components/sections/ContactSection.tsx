"use client";

import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
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
    label: "Phone",
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
    value: "Pune, India",
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
];

const inputStyles =
  "w-full rounded-lg border border-white/10 bg-[#0B0B1A] px-4 py-3 text-sm text-white placeholder:text-white/30 transition-all focus:border-[#D4AF37]/50 focus:outline-none";

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

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleWhatsApp = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const formData = new FormData(e.currentTarget);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !service || !message) {
      setError("Please fill in all fields.");
      return;
    }

    const whatsappText = `
New Astrology Enquiry

Name: ${name}
Phone: ${phone}
Service: ${service}

Message:
${message}
      `.trim();

    setSuccess(true);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        whatsappText,
      )}`,
      "_blank",
    );

    e.currentTarget.reset();
  }, []);

  return (
    <section id="contact" className="bg-[#0B0B1A] py-12 sm:py-16">
      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Contact
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Get in Touch
          </h2>

          <p className="mt-3 text-sm text-[#F2D6A0]/70">
            Have a question or need guidance? Reach out and let's discuss your
            concerns.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#171124] p-4 transition-all duration-300 hover:border-[#D4AF37]/30"
                >
                  <div className="rounded-lg bg-[#D4AF37]/10 p-3 text-[#D4AF37]">
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#F2D6A0]/50">
                      {item.label}
                    </p>

                    <p className="text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] py-3 font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#c9a037]"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeUp}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleWhatsApp}
            className="rounded-2xl border border-white/10 bg-[#171124]/50 p-5"
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                name="name"
                placeholder="Your Name"
                className={inputStyles}
                aria-label="Your Name"
              />

              <input
                name="phone"
                type="tel"
                placeholder="Mobile Number"
                className={inputStyles}
                aria-label="Mobile Number"
              />
            </div>

            <select
              name="service"
              defaultValue=""
              className={`${inputStyles} mt-3`}
              aria-label="Select Service"
            >
              <option value="" disabled>
                Select Service
              </option>

              {services.map((service) => (
                <option key={service} value={service} className="bg-[#171124]">
                  {service}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              rows={5}
              placeholder="Tell us about your concern..."
              className={`${inputStyles} mt-3 resize-none`}
              aria-label="Message"
            />

            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

            {success && (
              <p className="mt-3 text-sm text-green-400">
                Redirecting to WhatsApp...
              </p>
            )}

            <button
              type="submit"
              className="mt-4 w-full rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 py-3 text-sm font-bold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/20"
            >
              Send Message →
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
