"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

// --- Animation Variants ---
// Using string-based easing ("easeOut") to completely bypass TypeScript tuple errors
const navVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const mobileItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((s): s is Element => s !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { threshold: [0.2, 0.35, 0.5], rootMargin: "-80px 0px -50% 0px" },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.header
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-full"
    >
      <nav
        className={`transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#050510]/85 shadow-[0_8px_32px_rgba(0,0,0,0.28)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        {/* ── Top bar ── */}
        <div
          className={`section-container flex items-center justify-between transition-all duration-300
            h-14 sm:h-16 ${scrolled ? "lg:h-16" : "lg:h-20"}`}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="relative shrink-0 group"
          >
            <h1 className="text-[12px] font-semibold tracking-[0.18em] text-[#F6DFA8] min-[360px]:text-[13px] sm:text-[15px] lg:text-lg lg:tracking-[0.28em] transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(246,223,168,0.8)]">
              ASTROPATIL
            </h1>
            <span className="absolute -bottom-1 left-0 h-px w-10 bg-linear-to-r from-[#D4AF37] via-[#D4AF37]/70 to-transparent sm:w-14" />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 lg:flex xl:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  active === link.href
                    ? "text-[#D4AF37]"
                    : "text-[#F6DFA8]/65 hover:text-[#F6DFA8]"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="desktop-active"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-[#D4AF37]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="group relative hidden items-center justify-center overflow-hidden rounded-full px-5 py-2.5 lg:flex xl:px-6 xl:py-3 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-shadow"
          >
            <span className="absolute inset-0 bg-linear-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37]" />
            <span className="absolute inset-px rounded-full bg-[#080814] transition-opacity duration-300 group-hover:opacity-0" />
            <span className="relative text-xs font-bold uppercase tracking-[0.2em] text-[#F6DFA8] transition-colors duration-300 group-hover:text-[#070713]">
              Get Guidance
            </span>
          </motion.a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/3 text-[#F6DFA8] transition-colors duration-200 hover:border-[#D4AF37]/30 hover:bg-white/6 active:scale-95 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* ── Mobile drawer ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="overflow-hidden lg:hidden"
            >
              <div className="section-container pb-4 pt-1">
                <div className="rounded-2xl border border-[#D4AF37]/12 bg-[#050510]/95 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                  <nav className="flex flex-col">
                    {links.map((link) => {
                      const isActive = active === link.href;
                      return (
                        <motion.a
                          variants={mobileItemVariants}
                          key={link.href}
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center justify-between border-b border-white/[0.07] py-4 text-[15px] font-medium transition-colors duration-200 last:border-b-0 active:bg-white/3 ${
                            isActive
                              ? "text-[#D4AF37]"
                              : "text-[#F6DFA8]/80 hover:text-[#F6DFA8]"
                          }`}
                        >
                          {link.label}
                          {isActive && (
                            <motion.span
                              layoutId="mobile-active"
                              className="h-2 w-2 rounded-full bg-[#D4AF37]"
                            />
                          )}
                        </motion.a>
                      );
                    })}
                  </nav>

                  <motion.a
                    variants={mobileItemVariants}
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="mt-4 flex w-full items-center justify-center rounded-full bg-linear-to-r from-[#D4AF37] via-[#F2D6A0] to-[#D4AF37] px-5 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#070713] shadow-[0_10px_30px_rgba(212,175,55,0.25)] active:scale-[0.98]"
                  >
                    Get Guidance
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
