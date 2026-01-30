"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-[80px] z-50  text-white flex items-center px-6 md:px-16 text-4xl font-bold backdrop-blur-sm ">
      {/* Logo */}

      {/* Desktop Social Links */}
      <div className="ml-auto hidden md:flex items-center gap-5 text-3xl">
        <Link
          href="/resume"
          className="hover:text-cyan-500 font-normal transition-transform duration-300 transform hover:scale-125"
        >
          CV
        </Link>
        <Link
          href="https://www.github.com/manmindcontrol"
          className="hover:text-cyan-500 transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white transition-transform duration-300 transform hover:scale-125"
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/samuel-rychvalsk%C3%BD-b21a73228/"
          className="hover:text-cyan-500 transition-transform duration-300 transform hover:scale-125 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-white" />
        </Link>
        <Link
          href="https://www.instagram.com/samuel_rychvalsky/"
          className="hover:text-cyan-500 transition-transform duration-300 transform hover:scale-125"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="text-white" />
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-3xl ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[80px] right-5 w-2/4 flex flex-col items-center py-4 space-y-4 md:hidden bg-slate-200 outline-2 outline-black  opacity-90 rounded-lg shadow-xl backdrop-filter backdrop-blur-md">
          <Link
            href="/resume"
            className="text-lg text-black  hover:text-cyan-500 transition-transform duration-300 transform hover:scale-125"
          >
            CV
          </Link>
          <Link
            href="https://www.github.com/manmindcontrol"
            className="text-lg text-black hover:text-cyan-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            GitHub
          </Link>

          <Link
            href="https://www.linkedin.com/in/samuel-rychvalsk%C3%BD-b21a73228/"
            className="text-lg text-black hover:text-cyan-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/samuel_rychvalsky/"
            className="text-lg text-black hover:text-cyan-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            Instagram
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
