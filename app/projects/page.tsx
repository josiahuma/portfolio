"use client";

import Container from "../../components/Container";
import Section from "../../components/Section";
import { PROJECTS } from "../../data/projects";
import { Code, Globe } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* ===== Hero Section ===== */}
      <section className="py-20 md:py-28 text-center bg-gradient-to-r from-orange-500/10 via-orange-100/5 to-transparent dark:from-orange-500/10 dark:via-gray-800 dark:to-gray-950">
        <Container>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Pro<span className="text-orange-600">jects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my recent digital products, open-source tools, and AI experiments.
          </p>
        </Container>
      </section>

      {/* ===== Projects Grid Section ===== */}
      <Container>
        <Section>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="group card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                  {/* Project title overlay */}
                  <h3 className="absolute bottom-4 left-0 w-full text-center text-white text-lg font-semibold drop-shadow-md opacity-0 group-hover:opacity-100 transition">
                    {p.title}
                  </h3>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {p.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(p.links?.github || p.links?.demo) && (
                    <div className="mt-5 flex gap-3">
                      {p.links.github && (
                        <a
                          className="btn-outline inline-flex items-center gap-2"
                          href={p.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Code className="w-4 h-4" /> Code
                        </a>
                      )}
                      {p.links.demo && (
                        <a
                          className="btn-primary inline-flex items-center gap-2"
                          href={p.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="w-4 h-4" /> Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
