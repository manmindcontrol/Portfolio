"use client";

import React from "react";
import {
  faPhone,
  faMapPin,
  faCalendar,
  faBook,
  faBriefcase,
  faEnvelope,
  faCode,
  faLanguage,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHtml5,
  faReact,
  faJs,
  faGithub,
  faGitlab,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const skills = [
  { name: "HTML5",       icon: faHtml5 },
  { name: "React",       icon: faReact },
  { name: "JavaScript",  icon: faJs },
  { name: "TypeScript",  src: "/icons/typescript.svg" },
  { name: "Next.js",     src: "/icons/next.svg" },
  { name: "Tailwind CSS",src: "/icons/tailwind.svg" },
  { name: "Node.js",     src: "/icons/node.svg" },
  { name: "OpenAPI",     src: "/icons/api.svg" },
  { name: "GitHub",      icon: faGithub },
  { name: "GitLab",      icon: faGitlab },
  { name: "Jira",        src: "/icons/jira.svg" },
  { name: "Figma",       icon: faFigma },
];

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[rgba(255,255,255,0.02)] p-8">
      {children}
    </div>
  );
}

function SectionTitle({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-accent">{icon}</span>
      <h2 className="font-syne font-bold text-fg text-xl">{label}</h2>
    </div>
  );
}

function TimelineItem({
  date,
  title,
  children,
}: {
  date: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative pl-5 border-l border-white/8">
      <p className="section-label mb-1">{date}</p>
      <h3 className="text-fg font-semibold text-lg mb-2">{title}</h3>
      <div className="text-muted text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Resume() {
  return (
    <div className="pt-24 pb-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto flex flex-col gap-6">

      {/* Back */}
      <Link href="/" className="hover-line text-muted text-sm w-fit flex items-center gap-2">
        <FontAwesomeIcon icon={faArrowLeft} className="w-3 h-3" />
        Back
      </Link>

      {/* Hero header */}
      <Card>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex-1">
            <p className="section-label mb-3">Curriculum Vitae</p>
            <h1 className="font-syne font-black text-fg text-3xl md:text-4xl mb-1">
              Samuel Rychvalský
            </h1>
            <p className="text-accent text-sm mb-6">Frontend Developer</p>

            <div className="flex flex-col gap-3">
              {[
                { icon: faEnvelope, text: "srychvalsky28@gmail.com" },
                { icon: faPhone,    text: "+421 918 034 555" },
                { icon: faMapPin,   text: "Bardejov, Slovakia" },
                { icon: faCalendar, text: "Available for opportunities" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-muted text-sm">
                  <FontAwesomeIcon icon={icon} className="text-accent w-3.5 h-3.5 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <Image
              src="/ja.jpg"
              alt="Samuel Rychvalský"
              width={160}
              height={160}
              className="rounded-xl object-cover border border-white/8"
            />
          </div>
        </div>
      </Card>

      {/* Summary */}
      <Card>
        <SectionTitle
          icon={<FontAwesomeIcon icon={faBook} className="w-4 h-4" />}
          label="Professional Summary"
        />
        <p className="text-muted text-sm leading-relaxed">
          Frontend Developer with hands-on experience building modern,
          high-performance web applications. Proficient in React, TypeScript,
          Next.js, Node.js, and Tailwind CSS. Comfortable across the full
          frontend lifecycle — from UI/UX design in Figma through to production
          deployment.
        </p>
      </Card>

      {/* Experience */}
      <Card>
        <SectionTitle
          icon={<FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />}
          label="Experience"
        />
        <div className="flex flex-col gap-8">
          <TimelineItem date="2024 – 2025" title="U:BIT s.r.o — Frontend Developer (Internship)">
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Built and maintained frontend for multiple production web apps.</li>
              <li>Created and iterated on UI/UX designs using Figma.</li>
              <li>Contributed to API development and worked in an agile team.</li>
              <li>Key projects: MetaHost.sk, Genexy.io, two Ejoin s.r.o apps.</li>
            </ul>
          </TimelineItem>

          <TimelineItem date="2019 – 2020" title="FAJN CENTRUM, s.r.o — Administrative Assistant">
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Processed documentation and supported daily office operations.</li>
              <li>Document management, data entry, and preparation of materials.</li>
            </ul>
          </TimelineItem>
        </div>
      </Card>

      {/* Internships */}
      <Card>
        <SectionTitle
          icon={<FontAwesomeIcon icon={faBriefcase} className="w-4 h-4" />}
          label="Other Internships"
        />
        <div className="flex flex-col gap-8">
          <TimelineItem date="2022" title="CABO s.r.o">
            Translation of texts from English to Slovak and creating dubbing
            scripts for voice actors.
          </TimelineItem>
          <TimelineItem date="2022" title="Carpathian Foundation — &quot;Ufor Women&quot; project">
            Translation of project materials from Slovak to English as part of
            university practice.
          </TimelineItem>
        </div>
      </Card>

      {/* Skills */}
      <Card>
        <SectionTitle
          icon={<FontAwesomeIcon icon={faCode} className="w-4 h-4" />}
          label="Technical Skills"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {skills.map(({ name, icon, src }) => (
            <div
              key={name}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-white/5 bg-white/[0.015]"
            >
              {icon ? (
                <FontAwesomeIcon icon={icon} className="text-accent w-4 h-4 shrink-0" />
              ) : (
                <img src={src} alt={name} className="w-4 h-4 shrink-0" />
              )}
              <span className="text-muted text-xs">{name}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Education */}
      <Card>
        <SectionTitle
          icon={<FontAwesomeIcon icon={faBook} className="w-4 h-4" />}
          label="Education"
        />
        <div className="flex flex-col gap-8">
          <TimelineItem date="2023 – 2025" title="Bratislava University of Economics and Business">
            <p className="italic">Corporate Business and Marketing — Master&apos;s degree</p>
          </TimelineItem>
          <TimelineItem date="2020 – 2023" title="Univerzita Pavla Jozefa Šafárika, Košice">
            <p className="italic">English Language for European Institutions and Economics — Bachelor&apos;s degree</p>
          </TimelineItem>
          <TimelineItem date="2015 – 2019" title="Súkromné gymnázium DSA Bardejov">
            <p className="italic">Secondary school — Maturita</p>
          </TimelineItem>
        </div>
      </Card>

      {/* Languages */}
      <Card>
        <SectionTitle
          icon={<FontAwesomeIcon icon={faLanguage} className="w-4 h-4" />}
          label="Languages"
        />
        <div className="flex flex-col gap-3">
          {[
            { lang: "Slovak",  level: "Native" },
            { lang: "English", level: "C1 — Advanced" },
            { lang: "Russian", level: "B1 — Intermediate" },
          ].map(({ lang, level }) => (
            <div key={lang} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
              <span className="text-fg text-sm">{lang}</span>
              <span className="section-label">{level}</span>
            </div>
          ))}
        </div>
      </Card>

    </div>
  );
}

export default Resume;
