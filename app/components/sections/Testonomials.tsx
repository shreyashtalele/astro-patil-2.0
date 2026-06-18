"use client";

import { useCallback, useEffect, useRef, useState, memo } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Aans",
    location: "Mumbai",
    service: "Life Guidance",
    text: "The consultation gave me real clarity during one of the most difficult phases of my life. The guidance was practical, grounded, and surprisingly accurate.",
    rating: 5,
  },
  {
    name: "Navid",
    location: "Pune",
    service: "Kundli Reading",
    text: "Incredibly detailed reading with predictions that matched my situation almost exactly. I was genuinely taken aback by the accuracy.",
    rating: 5,
    highlight: true,
  },
  {
    name: "Samachan",
    location: "Nagpur",
    service: "Career Guidance",
    text: "Made a major career decision with full confidence after this session. The clarity I got was something I couldn't find anywhere else.",
    rating: 5,
  },
  {
    name: "Priya",
    location: "Mumbai",
    service: "Marriage Compatibility",
    text: "The kundli matching gave us both genuine reassurance before our wedding. Every concern was addressed thoughtfully and without judgment.",
    rating: 5,
  },
  {
    name: "Rohit",
    location: "Nashik",
    service: "Vastu Consultation",
    text: "Professional, fully confidential, and very accurate. The Vastu remedies suggested were simple to follow and made a real difference.",
    rating: 5,
  },
  {
    name: "Sneha",
    location: "Delhi",
    service: "Finance Guidance",
    text: "Every question answered with patience and depth. Left the session with a completely different perspective on my financial situation.",
    rating: 5,
    highlight: true,
  },
];

const AUTO_DELAY = 5000;

function useVisibleCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1280) setCount(3);
      else if (window.innerWidth >= 768) setCount(2);
      else setCount(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return count;
}

const slideVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 40 : -40 }),
  center: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: (dir: number) => ({
    opacity: 0,
    x: dir > 0 ? -40 : 40,
    transition: { duration: 0.25, ease: "easeIn" },
  }),
};

function TestimonialCard({
  item,
  i,
}: {
  item: (typeof testimonials)[0];
  i: number;
}) {
  return (
    <motion.article
      key={`${item.name}-${i}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: i * 0.08 }}
      className="relative group h-full"
    >
      {/* Highlight glow */}
      {item.highlight && (
        <div className="absolute -inset-2 rounded-2xl bg-[#D4AF37]/10 blur-2xl opacity-60 pointer-events-none" />
      )}

      <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#D4AF37]/30">
        {/* Radial inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_65%)] opacity-80" />

        {/* Top row: quote icon + featured badge + service tag */}
        <div className="relative mb-5 flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/10">
            <Quote size={16} className="text-[#D4AF37]" />
          </div>

          <div className="flex items-center gap-2">
            {/* Service tag */}
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#F2D6A0]/50">
              {item.service}
            </span>

            {item.highlight && (
              <span className="rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/10 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#D4AF37]">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Review text */}
        <p className="relative grow text-sm leading-7 text-[#F2D6A0]/75">
          &ldquo;{item.text}&rdquo;
        </p>

        {/* Stars */}
        <div className="relative mt-5 flex gap-0.5">
          {Array.from({ length: item.rating }).map((_, si) => (
            <Star
              key={si}
              size={13}
              fill="currentColor"
              className="text-[#D4AF37]"
            />
          ))}
        </div>

        {/* Author */}
        <div className="relative mt-4 flex items-center gap-3 border-t border-white/10 pt-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F2D6A0] via-[#D4AF37] to-[#B76E79] text-sm font-bold text-black">
            {item.name[0]}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white">{item.name}</h4>
            <p className="text-xs text-[#F2D6A0]/50">{item.location}</p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const visibleCount = useVisibleCount();
  const pauseRef = useRef(false);
  const totalGroups = Math.ceil(testimonials.length / visibleCount);

  useEffect(() => {
    setIndex(0);
  }, [visibleCount]);

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + totalGroups) % totalGroups);
    },
    [totalGroups],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pauseRef.current) go(1);
    }, AUTO_DELAY);
    return () => clearInterval(timer);
  }, [go]);

  const visibleTestimonials = testimonials.slice(
    index * visibleCount,
    index * visibleCount + visibleCount,
  );

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-6 lg:py-8"
      onMouseEnter={() => {
        pauseRef.current = true;
      }}
      onMouseLeave={() => {
        pauseRef.current = false;
      }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/5 blur-[100px]" />

      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          {/* Ornament */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Client Stories
            </span>
            <span className="h-px w-10 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          <h2 className="text-3xl font-semibold text-white lg:text-4xl">
            Real people.{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] bg-clip-text text-transparent">
              Real clarity.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#F2D6A0]/55">
            Over 5,000 clients have found direction through personalised
            consultations. Here's what a few of them had to say.
          </p>

          {/* Aggregate rating */}
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/8 px-4 py-1.5">
            <span className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill="currentColor"
                  className="text-[#D4AF37]"
                />
              ))}
            </span>
            <span className="text-xs font-semibold text-white">5.0</span>
            <span className="text-xs text-[#F2D6A0]/50">
              · 5,000+ consultations
            </span>
          </div>
        </motion.div>

        {/* ── Carousel wrapper ── */}
        <div className="relative">
          {/* Nav buttons */}
          {totalGroups > 1 && (
            <>
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonials"
                className="absolute -left-5 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md transition hover:border-[#D4AF37]/40 hover:bg-white/[0.06] md:flex"
              >
                <ChevronLeft size={18} className="text-[#F2D6A0]" />
              </button>

              <button
                onClick={() => go(1)}
                aria-label="Next testimonials"
                className="absolute -right-5 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md transition hover:border-[#D4AF37]/40 hover:bg-white/[0.06] md:flex"
              >
                <ChevronRight size={18} className="text-[#F2D6A0]" />
              </button>
            </>
          )}

          {/* Slides */}
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={`${index}-${visibleCount}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
            >
              {visibleTestimonials.map((item, i) => (
                <TestimonialCard key={`${item.name}-${i}`} item={item} i={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Dot indicators ── */}
        {totalGroups > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: totalGroups }).map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => {
                  setDirection(dotIndex > index ? 1 : -1);
                  setIndex(dotIndex);
                }}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className="flex h-6 w-6 items-center justify-center"
              >
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    dotIndex === index
                      ? "h-2 w-7 bg-[#D4AF37]"
                      : "h-2 w-2 bg-white/20 hover:bg-white/35"
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md sm:flex-row"
        >
          <div className="text-center sm:text-left">
            <p className="font-semibold text-white">
              Ready to find your clarity?
            </p>
            <p className="mt-0.5 text-sm text-[#F2D6A0]/55">
              Join thousands who've already taken the first step.
            </p>
          </div>
          <a
            href="https://wa.me/917385803537"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] px-6 py-2.5 text-sm font-bold text-black shadow-[0_0_28px_rgba(212,175,55,0.2)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]"
          >
            Book Your Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
