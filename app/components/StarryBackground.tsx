"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Draws everything on a single <canvas> instead of 50 individual DOM nodes.
// Much better performance — no layout thrash, no per-element React re-renders.

const STAR_COUNT = 120; // total stars
const SHOOTING_EVERY = 6000; // ms between shooting stars
const GOLD = { r: 242, g: 214, b: 160 }; // #F2D6A0

type Star = {
  x: number;
  y: number;
  r: number; // radius
  opacity: number;
  speed: number; // twinkle speed
  phase: number; // twinkle phase offset
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number; // 0 → 1 progress
};

function makeStars(w: number, h: number): Star[] {
  return Array.from({ length: STAR_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 1.4 + 0.3,
    opacity: Math.random() * 0.6 + 0.2,
    speed: Math.random() * 0.008 + 0.003,
    phase: Math.random() * Math.PI * 2,
  }));
}

function makeShootingStar(w: number, h: number): ShootingStar {
  const angle = (Math.random() * 30 + 20) * (Math.PI / 180); // 20–50 deg
  const speed = Math.random() * 6 + 5;
  return {
    x: Math.random() * w * 0.7,
    y: Math.random() * h * 0.4,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    length: Math.random() * 100 + 60,
    opacity: 0,
    life: 0,
  };
}

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stars: Star[] = [];
    let shooting: ShootingStar | null = null;
    let lastShoot = 0;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      stars = makeStars(w, h);
    };

    const draw = (now: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      ctx.clearRect(0, 0, w, h);

      // ── Stars ──────────────────────────────────────────────
      t += 0.016;
      stars.forEach((s) => {
        const pulse =
          s.opacity * (0.55 + 0.45 * Math.sin(t * s.speed * 60 + s.phase));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${pulse})`;
        ctx.shadowBlur = s.r * 4;
        ctx.shadowColor = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${pulse * 0.6})`;
        ctx.fill();
      });

      // ── Shooting star ──────────────────────────────────────
      if (!reduced) {
        if (!shooting && now - lastShoot > SHOOTING_EVERY) {
          shooting = makeShootingStar(w, h);
          lastShoot = now;
        }

        if (shooting) {
          shooting.life += 0.018;
          shooting.x += shooting.vx;
          shooting.y += shooting.vy;

          // Fade in then out
          shooting.opacity =
            shooting.life < 0.3
              ? shooting.life / 0.3
              : 1 - (shooting.life - 0.3) / 0.7;

          if (shooting.opacity > 0) {
            const tailX = shooting.x - shooting.vx * (shooting.length / 8);
            const tailY = shooting.y - shooting.vy * (shooting.length / 8);

            const grad = ctx.createLinearGradient(
              tailX,
              tailY,
              shooting.x,
              shooting.y,
            );
            grad.addColorStop(0, `rgba(${GOLD.r},${GOLD.g},${GOLD.b},0)`);
            grad.addColorStop(
              1,
              `rgba(${GOLD.r},${GOLD.g},${GOLD.b},${shooting.opacity})`,
            );

            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(${GOLD.r},${GOLD.g},${GOLD.b},0.6)`;
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(shooting.x, shooting.y);
            ctx.stroke();
          }

          if (shooting.life >= 1) shooting = null;
        }
      }

      // Reset shadow so stars aren't affected by shooting-star shadow state
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{ background: "var(--color-cosmic-900, #0b0b1a)" }}
    />
  );
}
