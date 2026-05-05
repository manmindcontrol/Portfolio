"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(
        "service_iqkkqnh",
        "template_qam2he6",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "4cza809aNVYTuAJge"
      );
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-label mb-4"
        >
          Get in touch
        </motion.p>

        {/* Large heading */}
        <div className="overflow-hidden mb-6">
          <motion.h2
            initial={{ y: "105%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="font-syne font-black text-fg text-4xl md:text-6xl lg:text-7xl leading-none"
          >
            Let&apos;s build
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(6,182,212,0.35)",
                color: "transparent",
              }}
            >
              something great.
            </span>
          </motion.h2>
        </div>

        {/* Email link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <a
            href="mailto:srychvalsky28@gmail.com"
            className="hover-line text-muted text-base md:text-lg"
          >
            srychvalsky28@gmail.com
          </a>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input w-full px-5 py-4 text-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input w-full px-5 py-4 text-sm"
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input w-full px-5 py-4 text-sm resize-none"
            />

            <button
              type="submit"
              disabled={status === "sending"}
              className="accent-btn w-full py-4 text-sm mt-1 disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>

            {status === "sent" && (
              <p className="text-accent text-sm text-center">
                Message sent — I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>

          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col justify-between gap-12"
          >
            <div>
              <p className="section-label mb-4">Based in</p>
              <p className="text-fg text-lg">Slovakia 🇸🇰</p>
            </div>

            <div>
              <p className="section-label mb-4">Currently at</p>
              <p className="text-fg text-lg">U:Bit s.r.o</p>
            </div>

            <div>
              <p className="section-label mb-4">Socials</p>
              <div className="flex items-center gap-6 text-muted text-xl">
                <Link
                  href="https://www.github.com/manmindcontrol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/samuel-rychvalsk%C3%BD-b21a73228/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
                <Link
                  href="https://www.instagram.com/samuel_rychvalsky/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-fg transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
