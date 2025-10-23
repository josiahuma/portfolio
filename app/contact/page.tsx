"use client";

import Container from "../../components/Container";
import Section from "../../components/Section";
import { SITE } from "../../data/site";
import { Mail, Linkedin, Github } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* ===== Hero Section ===== */}
      <section className="py-20 md:py-28 text-center bg-gradient-to-r from-orange-500/10 via-orange-100/5 to-transparent dark:from-orange-500/10 dark:via-gray-800 dark:to-gray-950">
        <Container>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Con<span className="text-orange-600">tact</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let’s build something meaningful together.
          </p>
        </Container>
      </section>

      {/* ===== Contact Content Section ===== */}
      <Container>
        <Section>
          <div className="grid md:grid-cols-2 gap-10">
            {/* === Contact Info === */}
            <div className="card p-8 bg-white/90 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Let’s Connect
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                I’m always open to collaborations, speaking opportunities, or just
                an interesting chat. You can reach me directly at{" "}
                <a
                  className="text-orange-600 font-medium hover:underline"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
                .
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="btn-primary inline-flex items-center gap-2"
                  href={SITE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <a
                  className="btn-outline inline-flex items-center gap-2"
                  href={SITE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
              </div>

              <div className="mt-8 flex items-center gap-3 text-gray-500 dark:text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>{SITE.email}</span>
              </div>
            </div>

            {/* === Contact Form === */}
            <form
              className="card p-8 bg-white/90 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all"
              action="https://formspree.io/f/your-id" // TODO: replace with your Formspree ID
              method="POST"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  className="mt-1 w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 outline-none transition"
                  name="name"
                  required
                />
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  className="mt-1 w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 outline-none transition"
                  name="email"
                  type="email"
                  required
                />
              </div>

              <div className="mt-5">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  className="mt-1 w-full border border-gray-300 dark:border-gray-700 rounded-xl p-3 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 outline-none transition"
                  name="message"
                  rows={5}
                  required
                />
              </div>

              <button
                className="btn-primary mt-6 w-full md:w-auto px-6 py-3 font-semibold"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </Section>
      </Container>
    </main>
  );
}
