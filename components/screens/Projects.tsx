"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FallingStars from "../FallingStars";

const projects = [
  {
    id: 1,
    title: "MetaHost.sk",
    description:
      "Game Server Rental Platform. My primary role was UI/UX design, ensuring an intuitive user experience, modern aesthetics, full responsiveness, and interactive elements for a seamless journey across all devices.",
    technologies: "Next.js, React, Typescript, TailwindCSS",
    image: "/metahost.png",
    liveLink: "https://metahost.sk/en",
    githubLink: "/",
  },
  {
    id: 2,
    title: "Ejoin charging connectors",
    description:
      "Charging connectors showcased at the EJOIN gas station. I was responsible for bringing the design to life on the frontend and developing the API to ensure smooth functionality.",
    technologies: "Next.js, React, Typescript, TailwindCSS, API",
    image: "/ejoin-hubmonitor.png",
    liveLink: "/",
    githubLink: "/",
  },
  {
    id: 3,
    title: "Genexy",
    description:
      "CLI tool for generating new projects. My main responsibility in this project is UI/UX design",
    technologies: "Next.js, React, Typescript, TailwindCSS",
    image: "/genexy.png",
    liveLink: "https://genexy.io/en",
    githubLink: "/",
  },
  {
    id: 4,
    title: "Bookni",
    description:
      "Web application for booking events and personalities. Responsible for frontend development, UI/UX design, and implementation of key functionality.",
    technologies: "Next.js, React, Typescript, TailwindCSS",
    image: "/bookni.png",
    liveLink: "/",
    githubLink: "/",
  },
  {
    id: 5,
    title: "Smart Charge Planning",
    description:
      "An application for managing a bus fleet. My main responsibility was implementing the UI/UX design and developing frontend functionality.",
    technologies: "Next.js, React, Typescript, TailwindCSS",
    image: "/ejoin-bus.png",
    liveLink: "/",
    githubLink: "/",
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  return (
    <>
      <section
        id="projects"
        className="relative overflow-hidden w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-slate-900 to-sky-700 p-8 md:p-16 gap-32"
      >
        <FallingStars />
        {/* Top Shadow Fade */}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-32 z-10 bg-gradient-to-b from-black/70 to-transparent" />

        {/* Bottom Shadow Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 z-10 bg-gradient-to-t from-black/70 to-transparent" />

        <h1 className="text-white font-semibold text-4xl md:text-6xl mt-8">
          Projects
        </h1>
        {/* Ensure column layout by default, switching to row on XL screens */}
        <div className="flex flex-col xl:flex-row w-full max-w-7xl items-center xl:items-start justify-between gap-10">
          {/* Left Text Section */}
          <div className="flex flex-col text-white w-full md:w-2/3 text-center md:text-left">
            <h1 className="text-5xl md:text-8xl font-semibold">
              0{projects[currentIndex].id}
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 transition-transform duration-300 transform hover:scale-110">
              {projects[currentIndex].title}
            </h2>
            <p className="text-gray-400 mt-4 text-lg md:text-2xl">
              {projects[currentIndex].description}
            </p>
            <p className="text-cyan-500 mt-4 text-lg md:text-2xl">
              {projects[currentIndex].technologies}
            </p>
            {/* Buttons */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6">
              {projects[currentIndex].liveLink &&
                projects[currentIndex].liveLink !== "/" && (
                  <Link
                    href={projects[currentIndex].liveLink}
                    className="p-4 bg-white text-black rounded-full flex items-center gap-3 text-lg"
                  >
                    <FiArrowUpRight size={24} />
                  </Link>
                )}
              {projects[currentIndex].githubLink &&
                projects[currentIndex].githubLink !== "/" && (
                  <Link
                    href={projects[currentIndex].githubLink}
                    className="p-4 bg-white text-black rounded-full flex items-center gap-3 text-lg"
                  >
                    <FaGithub size={24} />
                  </Link>
                )}
            </div>
          </div>

          {/* Right Image Section (starts below, moves to right on XL screens) */}
          <div className="w-full md:w-2/3 flex flex-col items-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[currentIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative"
              >
                <Image
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  width={700}
                  height={400}
                  className="rounded-lg shadow-xl outline outline-white shadow-black"
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-4 mt-6 pr-4">
              <button
                onClick={prevProject}
                className="text-white text-4xl p-3 rounded-xl"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                onClick={nextProject}
                className="text-white text-4xl  p-3 rounded-xl"
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* Right Image Section
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="relative"
            >
              <Image
                src={projects[currentIndex].image}
                alt={projects[currentIndex].title}
                width={700}
                height={400}
                className="rounded-lg shadow-xl outline outline-white shadow-black"
              />
            </motion.div>
          </AnimatePresence>
   
          <div className="flex gap-4 mt-6">
            <button
              onClick={prevProject}
              className="text-white text-xl shadow-lg shadow-zinc-900 bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button
              onClick={nextProject}
              className="text-white text-xl shadow-lg shadow-zinc-900 bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div> */
