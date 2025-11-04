"use client";

import Image from "next/image";
import Container from "../../components/Container";
import Section from "../../components/Section";
import { ACHIEVEMENTS } from "../../data/achievements";
import { CERTIFICATIONS } from "../../data/certifications";
import { Award, Medal, Star, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* ===== Hero Section ===== */}
      <section className="py-20 md:py-28 text-center bg-gradient-to-r from-orange-500/10 via-orange-100/5 to-transparent dark:from-orange-500/10 dark:via-gray-800 dark:to-gray-950">
        <Container>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Achieve<span className="text-orange-600">ments</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Recognition, certifications, and leadership milestones.
          </p>
        </Container>
      </section>

      {/* ===== Achievements Section ===== */}
      <Container>
        <Section>
          <p className="mt-4 mb-10 text-gray-600 dark:text-gray-400 text-sm max-w-2xl">
            Full evidence and supporting documentation are available upon
            request and accessible on the{" "}
            <a
              href="/evidence"
              className="text-orange-600 hover:underline font-medium"
            >
              unlisted Evidence page
            </a>
            .
          </p>

          {/* MAIN GRID */}
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
            {/* LEFT SIDE - Achievements */}
            <div className="grid sm:grid-cols-2 gap-6">
              {ACHIEVEMENTS.map((a, i) => (
                <motion.div
                  key={a.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400">
                      {i % 3 === 0 ? (
                        <Award className="w-6 h-6" />
                      ) : i % 3 === 1 ? (
                        <Medal className="w-6 h-6" />
                      ) : (
                        <Star className="w-6 h-6" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors">
                        {a.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {a.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative w-full h-[480px] rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800"
            >
              <Image
                src="/lecture.gif"
                alt="Josiah Uma delivering a lecture"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>
          </div>
        </Section>
      </Container>

      {/* ===== Certifications Section ===== */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-950 dark:to-gray-900">
        <Container>
          <h2 className="text-3xl font-bold mb-10 flex items-center gap-3">
            <GraduationCap className="text-orange-500 w-7 h-7" />
            Certifications
          </h2>

          <div className="grid gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-6 p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={cert.logo}
                    alt={cert.title}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    View Certificate Evidence
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.credly.com/users/josiah-uma"
              target="_blank"
              className="inline-block text-orange-600 hover:underline font-medium"
            >
              View full certification profile on Credly →
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
