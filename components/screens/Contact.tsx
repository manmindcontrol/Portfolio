"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import FallingStars from "../FallingStars";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

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

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("Error sending message. Please try again later.");
    }
  };

  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden w-full h-screen flex flex-col items-center justify-center  p-8 pt-8"
      >
        <h2 className="text-4xl md:text-6xl text-white font-semibold mb-10">
          Contact me
        </h2>
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-transform duration-300 transform hover:scale-110"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-transform duration-300 transform hover:scale-110"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-transform duration-300 transform hover:scale-110"
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md font-semibold text-lg hover:opacity-90 transition-transform duration-300 transform hover:scale-110"
          >
            Send Message
          </button>
        </form>
        {status && <p className="text-white mt-4">{status}</p>}
      </section>
    </>
  );
}
