import React from "react";
import {
  faDownload,
  faPhone,
  faMapPin,
  faCalendar,
  faBook,
  faBriefcase,
  faEnvelope,
  faCode,
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

function Resume() {
  return (
    <div className="pt-20 px-4 pb-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-gray-800 rounded-lg p-8 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl text-white font-bold mb-2">
              Samuel Rychvalský
            </h1>
            <h2 className="text-xl text-gray-400">Junior Frontend Developer</h2>
          </div>
          <a
            href="/resume.pdf"
            download
            className="flex items-center text-white font-normal gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md  text-lg hover:opacity-90 transition-transform duration-300 transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faDownload} />
            Download PDF
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-sky-500" />
            srychvalsky28@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-sky-500" />
            +421 918 034 555
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapPin} className="text-sky-500" />
            Bardejov, SK
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendar} className="text-sky-500" />
            Available for opportunities
          </div>
        </div>
      </div>

      {/* Summary */}
      <section className="bg-gray-800 rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
          <FontAwesomeIcon icon={faBook} className="text-sky-500" />
          Professional Summary
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Frontend Developer at U:BIT s.r.o with 1 year of experience building
          modern, high-performance web applications using React, TypeScript,
          Next.js, Node.js, Tailwind CSS and other technologies. 🚀
        </p>
      </section>

      {/* Experience */}
      <section className="bg-gray-800 rounded-lg p-8 mb-8">
        <h2 className="text-2xl text-white font-bold mb-6 flex items-center gap-2">
          <FontAwesomeIcon icon={faBriefcase} className="text-sky-500" />
          Work Experience
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl text-gray-400 font-semibold mb-1">
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
            <h3 className="text-xl font-semibold mb-1 text-gray-400">
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
            <h3 className="text-xl font-semibold mb-1 text-gray-400">
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
      <section className="bg-gray-800 rounded-lg p-8 mb-8">
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
      <section className="bg-gray-800 rounded-lg p-8">
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
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Ekonomická univerzita v Bratislave
            </h3>
            <p className="text-gray-400">2023 – súčasnosť</p>
            <p className="italic text-sm">Podnikový obchod a marketing</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
