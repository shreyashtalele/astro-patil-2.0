"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StarryBackground() {
  const [stars, setStars] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Generate random stars only on the client side to avoid hydration mismatches
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // random left position (%)
      y: Math.random() * 100, // random top position (%)
      size: Math.random() * 3 + 1, // random size between 1px and 4px
      delay: Math.random() * 5, // random animation delay
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-cosmic-900">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-gold-500 rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 2}px rgba(242, 214, 160, 0.8)`, // Glowing effect
          }}
          animate={{
            opacity: [0.2, 1, 0.2], // Twinkling effect
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 3 + 2, // Random duration between 2s and 5s
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
