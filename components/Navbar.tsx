"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 md:px-12 lg:px-20">
          {/* Monogram */}
          <Link href="/" className="hover-line text-fg font-syne font-bold text-lg tracking-tight">
            SR
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollTo("projects")}
              className="section-label hover:text-fg transition-colors duration-200"
            >
              Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="section-label hover:text-fg transition-colors duration-200"
            >
              Contact
            </button>
            <Link
              href="/resume"
              className="section-label hover:text-fg transition-colors duration-200"
            >
              CV
            </Link>

            <div className="w-px h-4 bg-white/10" />

            <div className="flex items-center gap-4 text-muted">
              <Link
                href="https://www.github.com/manmindcontrol"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg transition-colors duration-200"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/samuel-rychvalsk%C3%BD-b21a73228/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.instagram.com/samuel_rychvalsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-fg transition-colors duration-200"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-4 h-4" />
              </Link>
            </div>

            {/* Available indicator */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="section-label text-accent">Available</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-px bg-fg origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="block w-6 h-px bg-fg"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block w-6 h-px bg-fg origin-center"
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden bg-bg-dark/95 backdrop-blur-xl flex flex-col pt-24 px-8 pb-12"
          >
            <div className="flex flex-col gap-8 flex-1">
              {[
                { label: "Work", action: () => scrollTo("projects") },
                { label: "Contact", action: () => scrollTo("contact") },
              ].map(({ label, action }) => (
                <button
                  key={label}
                  onClick={action}
                  className="font-syne text-4xl font-bold text-left text-fg/40 hover:text-fg transition-colors duration-300"
                >
                  {label}
                </button>
              ))}
              <Link
                href="/resume"
                onClick={() => setMenuOpen(false)}
                className="font-syne text-4xl font-bold text-left text-fg/40 hover:text-fg transition-colors duration-300"
              >
                CV
              </Link>
            </div>

            <div className="flex items-center gap-6 text-muted text-lg border-t border-white/5 pt-8">
              <Link
                href="https://www.github.com/manmindcontrol"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="hover:text-fg transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/samuel-rychvalsk%C3%BD-b21a73228/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="hover:text-fg transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link
                href="https://www.instagram.com/samuel_rychvalsky/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="hover:text-fg transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
