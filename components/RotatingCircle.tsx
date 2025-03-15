"use client";

import { motion } from "framer-motion";

export default function RotatingCircle() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-32 h-32 rounded-full border-4 border-gray-700 shadow-lg"
      />

      {/* Rotating Circle Fragments */}
      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      >
        <defs>
          {/* Define gradient */}
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" /> {/* Purple */}
            <stop offset="100%" stopColor="#06b6d4" /> {/* Cyan */}
          </linearGradient>
        </defs>

        {/* Circle Segments */}
        <path
          d="M50 100 A50 50 0 0 1 100 50"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M100 50 A50 50 0 0 1 150 100"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M100 150 A50 50 0 0 0 50 100"
          stroke="url(#gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
      </motion.svg>
    </div>
  );
}
