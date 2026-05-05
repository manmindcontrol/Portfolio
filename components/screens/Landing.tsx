"use client";

import { motion } from "framer-motion";

const techStack = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "Supabase",
  "PostgreSQL",
  "OpenAI API",
  "Framer Motion",
  "Stripe",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "Supabase",
  "PostgreSQL",
  "OpenAI API",
  "Framer Motion",
  "Stripe",
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Landing() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      id="landing"
      className="relative w-screen min-h-screen flex flex-col overflow-hidden"
    >
      {/* Glow blobs behind text */}
      <div className="pointer-events-none absolute inset-0">
        {/* Large cyan glow centred on the name */}
        <div
          className="absolute"
          style={{
            width: "70vw",
            height: "60vh",
            top: "28%",
            left: "-10%",
            background:
              "radial-gradient(ellipse at center, rgba(6,182,212,0.13) 0%, rgba(6,182,212,0.04) 45%, transparent 70%)",
            animation: "glow-pulse 6s ease-in-out infinite",
          }}
        />
        {/* Smaller indigo accent bottom-right */}
        <div
          className="absolute"
          style={{
            width: "40vw",
            height: "40vh",
            bottom: "10%",
            right: "5%",
            background:
              "radial-gradient(ellipse at center, rgba(99,102,241,0.10) 0%, transparent 65%)",
            animation: "glow-pulse 8s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Main hero content */}
      <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 pt-28">
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2.5 mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span className="section-label">
            Frontend Developer · Available for work
          </span>
        </motion.div>

        {/* Name — big viewport-filling type */}
        <div className="overflow-hidden leading-none">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease }}
            className="font-syne font-black uppercase tracking-tight text-fg leading-none"
            style={{ fontSize: "clamp(2.5rem, 8.5vw, 9rem)" }}
          >
            Samuel
          </motion.h1>
        </div>
        <div className="overflow-hidden leading-none">
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease }}
            className="font-syne font-black uppercase tracking-tight leading-none pt-2"
            style={{
              fontSize: "clamp(2.5rem, 8.5vw, 9rem)",
              WebkitTextStroke: "1px rgba(6,182,212,0.35)",
              color: "transparent",
            }}
          >
            Rychvalský
          </motion.h1>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mt-10"
        >
          <p className="text-muted text-base md:text-lg max-w-xs leading-relaxed">
            Building modern, high-performance web apps at{" "}
            <span className="text-fg">U:Bit s.r.o</span> using React, TypeScript
            & Next.js.
          </p>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="outline-btn px-5 py-2.5 text-sm font-medium"
            >
              View Work →
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="accent-btn px-5 py-2.5 text-sm"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>

      {/* Tech stack marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="border-t border-white/5 py-4 overflow-hidden"
      >
        <div className="marquee-track">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="flex items-center gap-5 px-5 text-muted/50 text-xs uppercase tracking-[0.2em] whitespace-nowrap"
            >
              {tech}
              <span className="w-1 h-1 rounded-full bg-accent/30 flex-shrink-0" />
            </span>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
