"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  Users,
  CheckCircle,
  Lock,
  type LucideIcon,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  image: string;
};

type TrustItem = {
  icon: LucideIcon;
  text: string;
};

const services: Service[] = [
  {
    title: "Kundli Reading",
    desc: "In-depth birth chart analysis to uncover life patterns, strengths, and future possibilities.",
    image: "/image/kundalireading.png",
  },
  {
    title: "Palmistry",
    desc: "Hand analysis to reveal personality traits, life direction, health indicators, and hidden potential.",
    image: "/image/palmistry.png",
  },
  {
    title: "Face Reading",
    desc: "Understand personality traits, emotions, behavior patterns, and life tendencies through facial analysis.",
    image: "/image/facereading.png",
  },
  {
    title: "Vastu Consultation",
    desc: "Align your home or workspace with Vastu principles to attract positivity, growth, and balance.",
    image: "/image/vastu.png",
  },
  {
    title: "Marriage Compatibility",
    desc: "Detailed kundli matching to evaluate emotional, mental, and spiritual compatibility.",
    image: "/image/marraige.png",
  },
  {
    title: "Career & Education",
    desc: "Clarity on job opportunities, promotions, and academic direction based on planetary alignment.",
    image: "/image/career.png",
  },
  {
    title: "Numerology",
    desc: "Discover your life path, destiny numbers, and how they influence decisions and success.",
    image: "/image/numerology.png",
  },
  {
    title: "Muhurta",
    desc: "Find the perfect time for weddings, business launches, travel, and major life events.",
    image: "/image/muhurta.png",
  },
  {
    title: "Money & Growth",
    desc: "Understand financial blocks, money flow, and growth opportunities.",
    image: "/image/money.png",
  },
  {
    title: "Finance Guidance",
    desc: "Astrological guidance for income, savings, investments, and financial decision-making.",
    image: "/image/finance.png",
  },
];

const trustItems: TrustItem[] = [
  { icon: Sparkles, text: "9+ Years Experience" },
  { icon: Users, text: "5000+ Clients Guided" },
  { icon: CheckCircle, text: "Root Cause Analysis" },
  { icon: Lock, text: "100% Confidential" },
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
  service: Service;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#171124] shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)]"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            (max-width: 1280px) 33vw,
            25vw
          "
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#171124] via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-lg font-bold text-white">{service.title}</h3>

        <p className="grow text-sm leading-relaxed text-[#F2D6A0]/70">
          {service.desc}
        </p>
      </div>
    </motion.article>
  );
}

export default function Services() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="services" className="relative bg-[#0B0B1A] py-16 lg:py-24">
      <div className="section-container relative z-10 text-[#F2D6A0]">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center md:text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            What I Offer
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Astrology services for every
            <br className="hidden md:block" />
            important life decision
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>

        {/* Trust Bar */}
        <ul className="mt-12 grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-[#171124]/50 p-6 lg:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.text} className="flex items-center gap-3">
                <Icon size={22} className="shrink-0 text-[#D4AF37]" />

                <span className="text-sm font-medium text-white">
                  {item.text}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
