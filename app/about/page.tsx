"use client";

import Image from "next/image";
import Container from "../../components/Container";
import { SITE } from "../../data/site";
import { useState } from "react";
import { EXPERIENCES, type Experience } from "../../data/experience";
import { EDUCATION, type Education } from "../../data/education";

/* ---------------------------- Experience Item ---------------------------- */
function ExperienceItem({
  item,
  open,
  onToggle,
}: {
  item: Experience;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden bg-white/70 dark:bg-gray-900/60 backdrop-blur">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        aria-expanded={open}
        aria-controls={`panel-${item.id}`}
        id={`control-${item.id}`}
      >
        <div className="min-w-0">
          <div className="font-semibold truncate">{item.employer}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
            {item.role} · {item.dates}
          </div>
        </div>

        {/* Chevron */}
        <svg
          className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
            open ? "rotate-90" : "rotate-0"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 01.023-1.414L10.586 10 7.316 6.707A1 1 0 118.73 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.437 0z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        id={`panel-${item.id}`}
        role="region"
        aria-labelledby={`control-${item.id}`}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="px-6 pb-5 list-disc marker:text-orange-500 space-y-2 text-gray-700 dark:text-gray-300">
            {item.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {item.links?.length ? (
            <div className="px-6 pb-5 flex flex-wrap gap-3">
              {item.links.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path strokeWidth="2" d="M14 3h7v7m0-7L10 14" />
                    <path strokeWidth="2" d="M5 5v14h14" />
                  </svg>
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/* -------------------------- Accordion Wrapper --------------------------- */
function ExperienceAccordion() {
  const [openId, setOpenId] = useState<string | null>(EXPERIENCES[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {EXPERIENCES.map((exp) => {
        const open = exp.id === openId;
        return (
          <ExperienceItem
            key={exp.id}
            item={exp}
            open={open}
            onToggle={() => setOpenId(open ? null : exp.id)}
          />
        );
      })}
    </div>
  );
}

/* --------------------------- Education Section -------------------------- */
function EducationSection() {
  return (
    <div className="mt-16 md:mt-24">
      <h2 className="text-3xl font-extrabold tracking-tight mb-6">Education</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {EDUCATION.map((edu) => (
          <div
            key={edu.id}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/70 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
              {edu.course}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              {edu.college}
            </p>
            <p className="text-sm text-orange-600 dark:text-orange-400 mb-3">
              {edu.dates}
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
              {edu.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------- About Page ---------------------------- */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* ===== Hero Section ===== */}
      <section className="py-20 md:py-28 text-center bg-gradient-to-r from-orange-500/10 via-orange-100/5 to-transparent dark:from-orange-500/10 dark:via-gray-800 dark:to-gray-950">
        <Container>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            About <span className="text-orange-600">Me</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional background, skills, and my mission to build better digital systems for the public sector.
          </p>
        </Container>
      </section>

      {/* ===== Main Content ===== */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* LEFT COLUMN */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-3">Who I Am</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am an <strong>ICT Training Specialist</strong> at His Majesty’s Prison and Probation Service (HMPPS), Ministry of Justice, UK, and also a <strong>Software Developer.</strong> I design and build digital products that enhance communication, improve workflows, and enable data-driven decisions across the public sector.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Core Skills</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>💻 <strong>Web:</strong> Laravel, Next.js/React, Tailwind CSS, Supabase</li>
                  <li>🤖 <strong>AI & Data:</strong> Python, Pandas, ETL, SQL</li>
                  <li>☁️ <strong>Cloud/Integrations:</strong> Azure, AWS, Stripe, REST APIs</li>
                  <li>🧭 <strong>Practices:</strong> Accessibility, UX, Secure-by-Default</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Career Highlights</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>🏛️ Built the <strong>East of England Probation Service intranet</strong> serving 2,000+ staff</li>
                  <li>🏅 Regional Director commendation & recognition by HM Inspectorate for Probation</li>
                  <li>🧠 <strong>AI Champion Lead</strong> – mentoring staff on responsible AI adoption</li>
                  <li>🎓 <strong>BCS Professional Certificate in AI</strong> · BCS Member</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Vision</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I’m passionate about <strong>ethical civic-tech</strong> and <strong>AI</strong>: building tools that make public and private sector services simpler, faster, and more human.
                </p>
                <p className="mt-4">
                  Based in <strong>{SITE.location}</strong>. Always open to collaboration and purposeful innovation.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <Image
                  src="/me.jpg"
                  alt="Josiah Uma portrait"
                  width={600}
                  height={700}
                  className="w-full object-cover h-[400px] md:h-[500px]"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Josiah Uma</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    ICT Training Specialist · Software Developer · AI Champion
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    “Technology should empower people — not overwhelm them.”
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== EXPERIENCE ACCORDION ===== */}
          <div className="mt-16 md:mt-24">
            <h2 className="text-3xl font-extrabold tracking-tight mb-6">Work Experience</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Click a role to see key responsibilities and impact.
            </p>
            <ExperienceAccordion />
          </div>

          {/* ===== EDUCATION SECTION ===== */}
          <EducationSection />
        </Container>
      </section>
    </main>
  );
}
