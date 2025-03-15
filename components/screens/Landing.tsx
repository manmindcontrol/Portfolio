"use client";

import FallingStars from "../FallingStars";

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="w-screen min-h-screen bg-gradient-to-r from-[#0f172a] to-[#334155] overflow-hidden">
      <FallingStars />
      <div className="flex flex-col items-center text-center md:text-left md:items-start px-6 py-10 md:px-40 mt-40 md:mt-60">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl text-white font-semibold">
          Hello, I{"'"}m
          <p className="text-[10vw] md:text-[7vw] font-bold uppercase tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500 transition-transform duration-300 transform hover:scale-110">
            Samuel Rychvalský
          </p>
        </h1>
        {/* Description */}
        <p className="text-gray-400 md:block max-w-[900px] text-lg md:text-2xl mt-4">
          Frontend Developer at{" "}
          <strong className="text-green-300">U:Bit s.r.o</strong> with 1 year of
          experience building modern, high-performance web applications using{" "}
          <strong className="text-gray-300">
            React, TypeScript, Next.js, Node.js, Tailwind CSS
          </strong>{" "}
          and other technologies. 🚀
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-8">
          <button
            onClick={() => scrollToSection("projects")}
            className="relative outline px-6 py-3 text-lg text-white rounded-full max-w-[200px] shadow-xl shadow-black before:absolute before:inset-0 before:rounded-full transition-transform duration-300 transform hover:scale-110"
          >
            My Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="relative outline px-6 py-3 text-lg text-white rounded-full max-w-[200px] shadow-xl shadow-black before:absolute before:inset-0 before:rounded-full transition-transform duration-300 transform hover:scale-110"
          >
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}
