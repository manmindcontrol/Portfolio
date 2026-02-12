"use client";

import { motion } from "framer-motion";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main
      id="landing"
      className="w-screen min-h-screen relative bg-cover bg-no-repeat bg-fixed bg-center overflow-x-hidden antialiased"
    >
      <div className="flex flex-col items-left sm:items-center justify-center text-left px-6 py-10 md:px-40 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          {/* Heading */}
          <h1 className="relative text-4xl md:text-6xl text-white font-semibold text-left pt-14 sm:pt-0">
            Hello, I&apos;m
            <span
              id="name"
              className="block text-5xl md:text-[7vw] font-bold uppercase tracking-wide"
            >
              Samuel Rychvalský
            </span>
          </h1>
          {/* Description */}
          <p className="text-white md:block max-w-[900px] text-lg md:text-2xl mt-4 ">
            Frontend Developer at{" "}
            <strong className="text-white">U:Bit s.r.o</strong> where I gained
            with experience building modern, high-performance web applications
            using{" "}
            <strong className="text-gray-300">
              React, TypeScript, Next.js, Node.js, Tailwind CSS
            </strong>{" "}
            and other technologies. 🚀
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center xs:items-start justify-center sm:justify-start space-x-4 md:space-y-0 md:space-x-6 mt-8">
            <button
              onClick={() => scrollToSection("projects")}
              className="relative border-2 border-white font-semibold px-4 py-2 md:px-6 md:py-3 text-base md:text-lg text-white rounded-full max-w-[160px] md:max-w-[200px] shadow-lg shadow-cyan-500/70 before:absolute before:inset-0 before:rounded-full transition-transform duration-300 transform hover:bg-white/20 hover:scale-110"
            >
              My Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative border-2 border-white font-semibold px-4 py-2 md:px-6 md:py-3 text-base md:text-lg text-white rounded-full max-w-[160px] md:max-w-[200px] shadow-lg shadow-cyan-500/70 before:absolute before:inset-0 before:rounded-full transition-transform duration-300 transform hover:bg-white/20 hover:scale-110"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
