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

function Resume() {
  return (
    <div className="pt-20 px-4 pb-12 max-w-4xl mx-auto gap-4">
      {/* Header */}
      <div className="text-lg sm:text-xl font-semibold ">
        <Link
          href="/"
          className="block w-fit text-white text-base sm:text-lg md:text-xl font-normal 
               transition-transform duration-300 transform hover:scale-110 mt-5"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Back to Landing Page
        </Link>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between min-h-[400px] gap-6">
        {/* Text box */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-gray-900 shadow-xl flex flex-col justify-between w-full md:w-2/3 h-full">
          <div>
            <h1 className="text-4xl text-white font-bold mb-2">
              Ing. Samuel Rychvalský
            </h1>
            <h2 className="text-2xl text-gray-400 mb-6">
              Junior Frontend Developer
            </h2>
            <div className="flex flex-col gap-4 text-gray-300">
              <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-sky-500" />
                <span>srychvalsky28@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <FontAwesomeIcon icon={faPhone} className="text-sky-500" />
                <span>+421 918 034 555</span>
              </div>
              <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <FontAwesomeIcon icon={faMapPin} className="text-sky-500" />
                <span>Bardejov, SK</span>
              </div>
              <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
                <FontAwesomeIcon icon={faCalendar} className="text-sky-500" />
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Image box */}
        <div className="flex items-center justify-center h-full  mb-6 md:mb-0">
          <img
            src="/ja.jpg"
            alt="Samuel"
            className="w-60 rounded-lg bg-slate-100 border-4 border-slate-300"
          />
        </div>
      </section>

      {/* Summary */}
      <section className="bg-gray-800 rounded-lg p-8 mb-8 shadow-gray-900 shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
          <FontAwesomeIcon icon={faBook} className="text-sky-500" />
          Professional Summary
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Frontend Developer at U:BIT s.r.o, where I gained experience with
          building modern, high-performance web applications using React,
          TypeScript, Next.js, Node.js, Tailwind CSS and other technologies. 🚀
        </p>
      </section>

      {/* Internship */}
      <section className="bg-gray-800 rounded-lg p-8 mb-8 shadow-gray-900 shadow-xl">
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faBriefcase} className="text-sky-500" />
          Internship
        </h2>

        <div className="space-y-8">
          <div>
            <p className="text-gray-400 mb-1">2022</p>
            <h3 className="text-xl text-gray-200 font-semibold mb-2">
              CABO s.r.o
            </h3>
            <p className="text-gray-300 leading-relaxed">
              During my studies at UPJŠ, I completed an internship at CABO
              s.r.o., where I was engaged in translating texts from English into
              Slovak and creating dubbing for voice actors.
            </p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">2022</p>
            <h3 className="text-xl text-gray-200 font-semibold mb-2">
              Carpathian Foundation
            </h3>
            <p className="text-gray-300 leading-relaxed">
              During my studies at UPJŠ, as part of my school practice, I also
              collaborated with the Carpathian Foundation on the &quot;Ufor
              Women&quot; project, where I was responsible for translating texts
              from Slovak into English.
            </p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">2024 - 2025</p>
            <h3 className="text-xl text-gray-200 font-semibold mb-2">
              U:BIT s.r.o
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Internship as a Junior Frontend Developer.</li>
              <li>
                I contributed to the development of frontend for web
                applications and websites.
              </li>
              <li>I created and collaborated on UI/UX design using Figma.</li>
              <li>
                I gained experience with API development and teamwork in an
                agile environment.
              </li>
              <li>
                <strong>Projects:</strong> I participated in the creation of the
                websites MetaHost.sk and Genexy.io, as well as in the
                development of two applications for Ejoin s.r.o.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="bg-gray-800 rounded-lg p-8 mb-8 shadow-gray-900 shadow-xl">
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faBriefcase} className="text-sky-500" />
          Work Experience
        </h2>

        <div className="space-y-8">
          <div>
            <p className="text-gray-400 mb-1">2019 - 2020</p>
            <h3 className="text-xl text-gray-200 font-semibold mb-2">
              FAJN CENTRUM, s.r.o
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Administrative Assistant.</li>
              <li>
                I contributed to processing documentation and supporting the
                daily operations of the office.
              </li>
              <li>
                I carried out basic administrative tasks, including document
                management, data entry, and preparation of materials.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-gray-800 rounded-lg p-8 mb-8 shadow-gray-900 shadow-xl">
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faCode} className="text-sky-500 w-6 h-6" />
          Technical Skills
        </h2>

        <div className="flex flex-wrap justify-between gap-y-4">
          {[
            { name: "HTML5", icon: faHtml5 },
            { name: "React", icon: faReact },
            { name: "JavaScript", icon: faJs },
            { name: "TypeScript", src: "/icons/typescript.svg" },
            { name: "Next.js", src: "/icons/next.svg" },
            { name: "Tailwind CSS", src: "/icons/tailwind.svg" },
            { name: "Node.js", src: "/icons/node.svg" },
            { name: "OpenAPI", src: "/icons/api.svg" },
            { name: "GitHub", icon: faGithub },
            { name: "Gitlab", icon: faGitlab },
            { name: "Jira", src: "/icons/jira.svg" },
            { name: "Figma", icon: faFigma },
          ].map(({ name, icon, src }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-gray-300 w-[30%] min-w-[150px]"
            >
              {icon ? (
                <FontAwesomeIcon icon={icon} className="text-sky-500 w-5 h-5" />
              ) : (
                <img src={src} alt={name} className="w-5 h-5" />
              )}
              <span className="text-sm">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="bg-gray-800 rounded-lg mb-8 p-8 shadow-gray-900 shadow-xl">
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faBook} className="text-sky-500" />
          Education
        </h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold">
              Súkromné gymnázium DSA Bardejov
            </h3>
            <p className="text-gray-400">2015 – 2019</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Univerzita Pavla Jozefa Šafárika v Košiciach
            </h3>
            <p className="text-gray-400">2020 – 2023</p>
            <p className="italic text-sm">
              English Language for European Institutions and Economics -
              Bachelor degree
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Bratislava University of Economics and Business
            </h3>
            <p className="text-gray-400">2023 – 2025</p>
            <p className="italic text-sm">
              Corporate Business and Marketing - Master degree
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 rounded-lg p-8 mb-8 shadow-gray-900 shadow-xl">
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faLanguage} className="text-sky-500" />
          Languages
        </h2>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Slovak - Native</li>
          <li>English - C1</li>
          <li>Russian - B1</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;
