"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Users,
  CheckCircle,
  Lock,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/app/data/services";
import { SITE_CONFIG } from "@/app/data/config";

type TrustItem = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const trustItems: TrustItem[] = [
  {
    icon: Sparkles,
    value: SITE_CONFIG.stats.experience,
    label: "Years Experience",
  },
  { icon: Users, value: SITE_CONFIG.stats.clients, label: "Clients Guided" },
  { icon: CheckCircle, value: "Root", label: "Cause Analysis" },
  { icon: Lock, value: "100%", label: "Confidential" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function ServiceCard({
  service,
  index,
  reduceMotion,
}: {
  service: (typeof services)[0];
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171124] shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4AF37]/40 hover:shadow-[0_16px_48px_rgba(212,175,55,0.12)]"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        // app/components/sections/Services.tsx // Update the Image component
        with proper optimization
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          quality={80}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#171124] via-[#171124]/20 to-transparent" />
        {/* Optional tag */}
        {service.tag && (
          <span className="absolute left-3 top-3 rounded-full border border-[#D4AF37]/30 bg-black/50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] backdrop-blur-sm">
            {service.tag}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-base font-bold text-white">{service.title}</h3>
        <p className="grow text-sm leading-relaxed text-[#F2D6A0]/65">
          {service.desc}
        </p>

        {/* CTA link */}
        <a
          href={SITE_CONFIG.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#D4AF37] opacity-0 transition-all duration-300 group-hover:opacity-100"
          aria-label={`Book ${service.title} consultation`}
        >
          Book Now <ArrowRight size={12} strokeWidth={2.5} />
        </a>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="services" className="relative py-6 lg:py-8">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute right-0 top-1/3 h-125 w-125 rounded-full bg-[#D4AF37]/4 blur-[140px]" />
      </div>

      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
              What I Offer
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              Services for every
              <span className="block bg-linear-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] bg-clip-text text-transparent">
                important life decision
              </span>
            </h2>
          </div>

          {/* Section-level CTA */}
          <a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/8 px-5 py-2.5 text-sm font-semibold text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/15 md:inline-flex"
          >
            Book a Consultation <ArrowRight size={14} strokeWidth={2.2} />
          </a>
        </motion.div>

        {/* ── Services Grid ── */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}

          {/* Final CTA tile */}
          <motion.a
            href={SITE_CONFIG.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            initial={reduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: services.length * 0.04 }}
            className="group flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#D4AF37]/20 bg-linear-to-br from-[#D4AF37]/10 to-[#D4AF37]/4 p-8 text-center transition-all duration-300 hover:border-[#D4AF37]/45 hover:from-[#D4AF37]/15 hover:to-[#D4AF37]/8 sm:col-span-2 lg:col-span-1 xl:col-span-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/15">
              <Sparkles size={20} className="text-[#D4AF37]" />
            </div>
            <div>
              <p className="font-bold text-white">Not sure where to start?</p>
              <p className="mt-1 text-sm text-[#F2D6A0]/60">
                Book a general consultation and we'll find the right path
                together.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-[#D4AF37] to-[#F2D6A0] px-4 py-1.5 text-xs font-bold text-black transition-transform duration-200 group-hover:scale-105">
              Talk to Me <ArrowRight size={11} strokeWidth={3} />
            </span>
          </motion.a>
        </div>

        {/* ── Trust Bar ── */}
        <motion.ul
          variants={fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-[#171124]/50 p-6 lg:grid-cols-4"
        >
          {trustItems.map(({ icon: Icon, value, label }) => (
            <li key={label} className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10">
                <Icon size={16} className="text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-none">
                  {value}
                </p>
                <p className="mt-0.5 text-[11px] text-[#F2D6A0]/55 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
