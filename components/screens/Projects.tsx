"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaGitlab } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FallingStars from "../FallingStars";

const projects = [
  {
    id: 1,
    title: "MetaHost.sk",
    description:
      "Game Server Rental Platform. This was the first project where I took full responsibility for the frontend. I led the UI/UX design, creating a modern look, intuitive navigation, full responsiveness, and interactive elements to ensure a smooth experience on all devices.",
    technologies: "React, Next.js, Typescript, TailwindCSS",
    image: "/metahost.png",
    liveLink: "https://metahost.sk/en",
    gitlabLink: "https://gitlab.ubit.sk/metahost/web",
    githubLink: "",
  },
  {
    id: 2,
    title: "Ejoin charging connectors",
    description:
      "An application developed for charging stations, showcased at the EJOIN gas station. I was responsible for the frontend, where I implemented a smooth, real-time display of the charging status. I also built the API to ensure everything runs seamlessly.",
    technologies: "React, Next.js, Typescript, TailwindCSS, API",
    image: "/ejoin-hubmonitor.png",
    liveLink: "/",
    gitlabLink: "/https://gitlab.ubit.sk/ejoin/ejoin-hubmonitor",
    githubLink: "",
  },
  {
    id: 3,
    title: "Genexy.io",
    description:
      "CLI tool for generating new projects. In this project, my primary focus was on the UI/UX design of the application, ensuring it’s intuitive, user-friendly, and visually consistent.",
    technologies: "React, Next.js, Typescript, TailwindCSS",
    image: "/genexy.png",
    liveLink: "https://genexy.io/en",
    gitlabLink: "https://gitlab.ubit.sk/ubit/genexy/web",
    githubLink: "",
  },
  {
    id: 4,
    title: "Bookni",
    description:
      "Web application for booking events and personalities. I was responsible for the frontend development, crafting the UI/UX design, and implementing core features to ensure a seamless user experience.",
    technologies: "React, Next.js, Typescript, TailwindCSS",
    image: "/bookni.png",
    liveLink: "/",
    gitlabLink: "https://gitlab.ubit.sk/bookni/frontend/bookni-web",
    githubLink: "",
  },
  {
    id: 5,
    title: "Smart Charge Planning",
    description:
      "An application used for managing e-buses. I was primarily responsible for the frontend development and UI/UX, but also contributed by writing parts of the API.",
    technologies: "React, Next.js, Typescript, TailwindCSS",
    image: "/ejoin-bus.png",
    liveLink: "/",
    gitlabLink: "https://gitlab.ubit.sk/ejoin/ejoin-ebus/web",
    githubLink: "",
  },
];

export default function ProjectSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
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

        <div className="flex flex-col xl:flex-row w-full max-w-7xl items-center xl:items-start justify-between gap-10">
          {/* Left Text */}
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
              {projects[currentIndex].gitlabLink &&
                projects[currentIndex].gitlabLink !== "/" && (
                  <Link
                    href={projects[currentIndex].gitlabLink}
                    className="p-4 bg-white text-black rounded-full flex items-center gap-3 text-lg"
                  >
                    <FaGitlab size={24} />
                  </Link>
                )}
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-2/3 flex flex-col items-end">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={projects[currentIndex].id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x < -100) {
                    nextProject();
                  } else if (info.offset.x > 100) {
                    prevProject();
                  }
                }}
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

            {/* Dots on mobile */}
            <div className="flex md:hidden justify-center gap-2 mt-6 w-full">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Arrows on desktop */}
            <div className="hidden md:flex gap-4 mt-6 pr-4">
              <button
                onClick={prevProject}
                className="text-white text-4xl p-3 rounded-xl"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                onClick={nextProject}
                className="text-white text-4xl p-3 rounded-xl"
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
