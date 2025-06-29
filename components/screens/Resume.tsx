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
          <Link href="/me.png">
            <img
              src="/me.png"
              alt="Samuel"
              className="w-60 rounded-lg bg-slate-100 border-4 border-slate-300"
            />
          </Link>
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

      {/* Experience */}
      <section className="bg-gray-800 rounded-lg p-8 mb-8 shadow-gray-900 shadow-xl">
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faBriefcase} className="text-sky-500" />
          Work Experience
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-gray-200 font-semibold mb-1">
              Junior Fronend Developer
            </h3>
            <p className="text-gray-400 mb-2">
              U:BIT s.r.o • 06.2024 - Present
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Collaborated on the design and development of responsive web
                applications
              </li>
              <li>
                Focused on UX/UI improvements to enhance usability and visual
                appeal
              </li>
              <li>
                Implemented interactive frontend components using React and
                Tailwind CSS
              </li>
              <li>
                Worked closely with backend developers to integrate APIs and
                ensure data consistency
              </li>
              <li>
                Participated in code reviews and contributed to agile
                development processes
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1 text-gray-200">
              Intership as translator
            </h3>
            <p className="text-gray-300 mb-2">CABO s.r.o • 02. 2022- 05.2022</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Translation of text and creation of dubbing intended for voice
                actors from English to Slovak.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1 text-gray-200">
              Intership as translator
            </h3>
            <p className="text-gray-300 mb-2">Karpatská nadácia • 2022</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                Translation of the text Ufor Women from Slovak to English.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-1 text-gray-400">
              Administration
            </h3>
            <p className="text-gray-300 mb-2">FAJN CENTRUM s.r.o • 2019-2020</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2"></ul>
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
      <section className="bg-gray-800 rounded-lg p-8 shadow-gray-900 shadow-xl">
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faLanguage} className="text-sky-500" />
          Languages
        </h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold">English Language - C1</h3>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Slovak Language - C2 </h3>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Russian Language - B1</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
