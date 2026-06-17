"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  rating: number;
  highlight?: boolean;
};

const testimonials: Testimonial[] = [
  {
    name: "Sakshi",
    role: "Mumbai",
    text: "Incredibly accurate birth chart reading. The predictions aligned perfectly with events in my life.",
    rating: 5,
  },
  {
    name: "Piyush",
    role: "Nashik",
    text: "I was skeptical at first, but the kundli reading was so accurate it left me speechless.",
    rating: 5,
  },
  {
    name: "Vaishnavi",
    role: "Nagpur",
    text: "The marriage compatibility reading gave us deep clarity before our wedding.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Aishwarya",
    role: "Mumbai",
    text: "Career guidance was spot on. Helped me make a major decision with confidence.",
    rating: 5,
  },
  {
    name: "Dipanshu",
    role: "Kolkata",
    text: "Very accurate predictions and helpful guidance. Highly recommended.",
    rating: 5,
  },
  {
    name: "Priya",
    role: "Pune",
    text: "The gemstone recommendation made a noticeable difference in just weeks.",
    rating: 5,
    highlight: true,
  },
];

const AUTO_DELAY = 4500;

const slideVariants: Variants = {
  enter: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  }),
};

function useVisibleCount() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const update = () => {
      clearTimeout(timeout);

      timeout = setTimeout(() => {
        if (window.innerWidth >= 1280) setCount(3);
        else if (window.innerWidth >= 768) setCount(2);
        else setCount(1);
      }, 100);
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", update);
    };
  }, []);

  return count;
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-[#171124]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30">
      <div className="mb-4 flex items-center justify-between">
        <Quote size={20} className="text-[#D4AF37]" fill="currentColor" />

        {item.highlight && (
          <span className="rounded-full bg-[#D4AF37]/10 px-2 py-1 text-[10px] font-bold uppercase text-[#D4AF37]">
            Featured
          </span>
        )}
      </div>

      <div className="mb-4 flex gap-1">
        {Array.from({ length: item.rating }).map((_, idx) => (
          <Star key={idx} size={14} className="fill-[#D4AF37] text-[#D4AF37]" />
        ))}
      </div>

      <p className="flex-1 text-sm leading-relaxed text-[#F2D6A0]/70">
        {item.text}
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/20 text-sm font-bold text-[#D4AF37]">
          {item.name.charAt(0)}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">{item.name}</h4>

          <p className="text-xs text-[#F2D6A0]/50">{item.role}</p>
        </div>
      </div>
    </article>
  );
}

export default function Testimonials() {
  const visibleCount = useVisibleCount();
  const shouldReduceMotion = useReducedMotion() ?? false;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const isPaused = useRef(false);

  const totalGroups = Math.ceil(testimonials.length / visibleCount);

  useEffect(() => {
    setIndex(0);
  }, [visibleCount]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);

      setIndex((prev) => {
        return (prev + dir + totalGroups) % totalGroups;
      });
    },
    [totalGroups],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused.current) {
        go(1);
      }
    }, AUTO_DELAY);

    return () => clearInterval(interval);
  }, [go]);

  const visibleTestimonials = testimonials.slice(
    index * visibleCount,
    index * visibleCount + visibleCount,
  );

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-12 sm:py-16"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
      onTouchStart={() => (isPaused.current = true)}
      onTouchEnd={() => (isPaused.current = false)}
    >
      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
            Testimonials
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Trusted by clients across India
          </h2>
        </motion.div>

        {/* Controls */}
        {totalGroups > 1 && (
          <div className="mb-6 flex justify-end gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonials"
              className="rounded-full border border-white/10 p-2 text-white transition-all hover:border-[#D4AF37]"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => go(1)}
              aria-label="Next testimonials"
              className="rounded-full border border-white/10 p-2 text-white transition-all hover:border-[#D4AF37]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${index}-${visibleCount}`}
              custom={direction}
              variants={slideVariants}
              initial={shouldReduceMotion ? false : "enter"}
              animate="center"
              exit="exit"
              className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleTestimonials.map((item) => (
                <TestimonialCard
                  key={`${item.name}-${item.role}`}
                  item={item}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        {totalGroups > 1 && (
          <div className="mt-8 flex justify-center gap-2">
            {Array.from({
              length: totalGroups,
            }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                aria-label={`Go to testimonial group ${dotIndex + 1}`}
                aria-current={dotIndex === index}
                onClick={() => {
                  setDirection(dotIndex > index ? 1 : -1);
                  setIndex(dotIndex);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  dotIndex === index
                    ? "w-8 bg-[#D4AF37]"
                    : "w-2 bg-[#F2D6A0]/20 hover:bg-[#F2D6A0]/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
