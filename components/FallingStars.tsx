"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: string;
  size: string;
  delay: number;
  duration: number;
  opacity: number;
}

const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${Math.random() * 100}vw`,
    size: `${Math.random() * 3 + 2}px`,
    delay: Math.random() * 5,
    duration: Math.random() * 7 + 5,
    opacity: Math.random() * 0.5 + 0.5,
  }));
};

export default function FallingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(30));
    const interval = setInterval(() => {
      setStars(generateStars(30));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full shadow-lg"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            opacity: star.opacity,
          }}
          initial={{ opacity: 0, y: "-10vh", scale: 0.6 }}
          animate={{ opacity: 1, y: "110vh", scale: 1 }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
}
