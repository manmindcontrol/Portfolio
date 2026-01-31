"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "MetaHost.sk",
    description:
      "Game Server Rental Platform. This was the first project where I took full responsibility for the frontend. I led the UI/UX design, creating a modern look, intuitive navigation, full responsiveness, and interactive elements to ensure a smooth experience on all devices.",
    technologies: "React, Next.js, Typescript, TailwindCSS, Node.js",
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
  {
    id: 6,
    title: "Webique",
    description:
      "Website for a agency that creates websites for restaurants, small businesses or personal prtfolios. Featuring a portfolio, services and a contact form.",
    technologies: "React, Next.js, Typescript, TailwindCSS, EmailJS",
    image: "/webique.png",
    liveLink: "https://webique-olive.vercel.app",
    gitlabLink: "",
    githubLink: "https://github.com/manmindcontrol/webique",
  },
  {
    id: 7,
    title: "AOLL",
    description:
      "Multi-page website for selling an e-book with sections about the book, reviews, and a simple purchasing process.",
    technologies: "React, Next.js, Typescript, TailwindCSS, Stripe",
    image: "/AOLL.png",
    liveLink: "/",
    gitlabLink: "",
    githubLink: "https://github.com/manmindcontrol/aoll",
  },
];

export default function ProjectList() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-slate-900 to-sky-700 p-8 md:p-16 gap-32"
    >
      {/*<FallingStars />*/}
      <div className="pointer-events-none absolute top-0 left-0 w-full h-32 z-10 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 z-10 bg-gradient-to-t from-black/70 to-transparent" />

      <h1 className="text-white font-semibold text-4xl md:text-7xl mt-8">
        Projects
      </h1>

      <div className="flex flex-col gap-24 md:gap-32 w-full max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"
            } items-center xl:items-center justify-between gap-20`}
          >
            {/* Text */}
            <div className="flex flex-col text-white w-full md:w-2/3 text-center md:text-left">
              <h1 className="text-5xl md:text-8xl font-semibold">
                0{project.id}
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mt-4">
                {project.title}
              </h2>
              <p className="text-gray-400 mt-4 text-lg md:text-2xl">
                {project.description}
              </p>
              <p className="text-cyan-500 mt-4 text-lg md:text-2xl">
                {project.technologies}
              </p>

              <div className="flex justify-center md:justify-start space-x-6 mt-6">
                {project.liveLink && project.liveLink !== "/" && (
                  <Link
                    href={project.liveLink}
                    className="p-4 bg-white text-black rounded-full flex items-center gap-3 text-lg"
                  >
                    <FiArrowUpRight size={24} />
                  </Link>
                )}
                {project.githubLink && project.githubLink !== "/" && (
                  <Link
                    href={project.githubLink}
                    className="p-4 bg-white text-black rounded-full flex items-center gap-3 text-lg"
                  >
                    <FaGithub size={24} />
                  </Link>
                )}
              </div>
            </div>

            {/* Image - always centered */}
            <div className="w-full md:w-2/3 flex  place-content-center">
              <Image
                priority
                src={project.image}
                alt={project.title}
                width={700}
                height={400}
                className="rounded-lg shadow-xl outline outline-white shadow-black"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
