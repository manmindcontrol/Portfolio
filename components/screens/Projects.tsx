"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "studystarter.io",
    description:
      "AI-Powered Learning Platform with intelligent study materials generation from PDFs and lectures. Features automated note-taking, quiz generation (GPT-4o), audio transcription (Whisper), interactive AI chatbot, and tiered subscription via Stripe.",
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "OpenAI",
      "Stripe",
    ],
    image: "/studystarter.png",
    liveLink: "https://study-starter-l8nsq.ondigitalocean.app/",
    githubLink: "",
  },
  {
    id: 2,
    title: "MetaHost.sk",
    description:
      "Game Server Rental Platform. Led UI/UX design end-to-end — modern look, intuitive navigation, full responsiveness, and interactive elements ensuring a smooth experience on all devices.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Node.js"],
    image: "/metahost.png",
    liveLink: "https://metahost.sk/en",
    githubLink: "",
  },
  {
    id: 3,
    title: "Ejoin Charging Connectors",
    description:
      "Real-time charging station display app showcased at EJOIN gas stations. Built the complete frontend and API for seamless real-time status updates.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "API"],
    image: "/ejoin-hubmonitor.png",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 4,
    title: "Genexy.io",
    description:
      "CLI tool for generating new projects. Focused on UI/UX design, ensuring an intuitive, user-friendly, and visually consistent product website.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    image: "/genexy.png",
    liveLink: "https://genexy.io/en",
    githubLink: "",
  },
  {
    id: 5,
    title: "Bookni",
    description:
      "Web application for booking events and personalities. Responsible for frontend development, UI/UX design, and core feature implementation.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    image: "/bookni.png",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 6,
    title: "Smart Charge Planning",
    description:
      "E-bus fleet management application. Primary frontend & UI/UX developer, also contributed to parts of the API.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    image: "/ejoin-bus.png",
    liveLink: "",
    githubLink: "",
  },
  {
    id: 7,
    title: "WEBREFRESH",
    description:
      "A personal agency website showcasing web development services. Built with experience in crafting modern, responsive websites for businesses and individuals.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "EmailJS"],
    image: "/webrefresh.jpg",
    liveLink: "https://webique-olive.vercel.app",
    githubLink: "https://github.com/manmindcontrol/webique",
  },
  {
    id: 8,
    title: "AOLL",
    description:
      "Multi-page e-book sales website with sections covering the book, reviews, and a streamlined purchasing process.",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS", "Stripe"],
    image: "/AOLL.png",
    liveLink: "",
    githubLink: "https://github.com/manmindcontrol/aoll",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-white/5"
    >
      {/* Section header */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <p className="section-label mb-3">Selected work</p>
          <h2 className="font-syne font-black text-fg text-4xl md:text-6xl">
            Projects
          </h2>
        </div>
        <span className="section-label hidden sm:block">
          {String(projects.length).padStart(2, "0")} works
        </span>
      </div>

      {/* Bento grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const hasLive = project.liveLink && project.liveLink !== "/";
  const hasGithub = project.githubLink && project.githubLink !== "/";

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={cardVariants}
      className="project-card group relative overflow-hidden rounded-2xl border border-white/5 bg-[rgba(255,255,255,0.02)] p-6 md:p-8 flex flex-col gap-5"
    >
      {/* Index */}
      <span className="section-label">
        {String(project.id).padStart(2, "0")}
      </span>

      {/* Image */}
      <div className="overflow-hidden rounded-xl aspect-video bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          width={700}
          height={400}
          className="card-img w-full h-full object-cover"
          priority={index < 2}
        />
      </div>

      {/* Title + description */}
      <div className="flex flex-col gap-2">
        <h3 className="font-syne font-bold text-fg text-xl md:text-2xl leading-tight">
          {project.title}
        </h3>
        <p className="text-muted text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2.5 py-1 rounded-full border border-white/6 text-muted/70"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(hasLive || hasGithub) && (
        <div className="flex items-center gap-3 pt-2 border-t border-white/5">
          {hasLive && (
            <Link
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-fg transition-colors duration-200"
            >
              <FiArrowUpRight size={14} />
              Live site
            </Link>
          )}
          {hasGithub && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted hover:text-fg transition-colors duration-200"
            >
              <FaGithub size={13} />
              GitHub
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}
