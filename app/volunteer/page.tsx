"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "../../components/Container";
import { SITE } from "../../data/site";

type LightboxImage = {
  src: string;
  alt: string;
};

export default function VolunteerPage() {
  const [lightboxImage, setLightboxImage] = useState<LightboxImage | null>(null);

  const openLightbox = (img: LightboxImage) => setLightboxImage(img);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 text-gray-900 dark:text-gray-100">
      {/* ===== Hero ===== */}
      <section className="py-20 md:py-28 text-center bg-gradient-to-r from-orange-500/10 via-orange-100/5 to-transparent dark:from-orange-500/10 dark:via-gray-800 dark:to-gray-950">
        <Container>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Volunteer <span className="text-orange-600">Impact</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Mentoring the next generation and strengthening charities with
            practical, open, and measurable digital change.
          </p>
        </Container>
      </section>

      {/* ===== Oviprime Mentoring ===== */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="order-2 md:order-1 space-y-5">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Oviprime Mentorship
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                As a volunteer mentor with{" "}
                <a
                  href="https://oviprime.com"
                  className="text-orange-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Oviprime
                </a>
                , I guide early-career developers and data professionals—especially
                from under-represented backgrounds—through practical projects in
                cloud, AI, and web development. Sessions focus on hands-on problem
                solving, career confidence, and responsible tech practices.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I also support their learning infrastructure and contribute reusable
                templates and course materials, helping mentees build portfolios that
                demonstrate real-world capability. See{" "}
                <a
                  href="https://oviprime.com/mentorship"
                  className="text-orange-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Oviprime Mentorship
                </a>{" "}
                for the programme overview.
              </p>

              <ul className="list-disc marker:text-orange-500 pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                <li>1:1 and group mentoring (cloud/AI/web)</li>
                <li>Career guidance and portfolio reviews</li>
                <li>Code walkthroughs and live demos</li>
              </ul>
            </div>

            <div className="order-1 md:order-2">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <button
                    type="button"
                    onClick={() =>
                        openLightbox({
                        src: "/mentoring.png",
                        alt: "Oviprime mentoring session screenshot",
                        })
                    }
                    className="block w-full focus:outline-none"
                    >
                    <Image
                        src="/mentoring.png"
                        alt="Oviprime mentoring session screenshot"
                        width={1200}
                        height={750}
                        className="w-full h-auto object-contain bg-black/5"
                    />

                    {/* 🔍 Magnifying Lens Icon */}
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white rounded-full p-2 text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                        🔍
                    </div>
                    </button>

                    <div className="p-6">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        Live mentorship session delivering practical tech skills.
                        Click to enlarge.
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Divider between sections ===== */}
      <section aria-hidden="true">
        <Container>
          <hr className="border-t border-gray-200 dark:border-gray-800 my-8 md:my-12" />
        </Container>
      </section>

      {/* ===== Fresh Fountain Charity ===== */}
      <section className="pb-20 pt-4">
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="relative order-1 md:order-1">
                <div className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                    <button
                    type="button"
                    onClick={() =>
                        openLightbox({
                        src: "/freshfountain-data.png",
                        alt: "Fresh Fountain website analytics overview",
                        })
                    }
                    className="block w-full focus:outline-none"
                    >
                    <Image
                        src="/freshfountain-data.png"
                        alt="Fresh Fountain website analytics overview"
                        width={1200}
                        height={750}
                        className="w-full h-auto object-contain bg-white"
                    />

                    {/* 🔍 Magnifying Lens Icon */}
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white rounded-full p-2 text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                        🔍
                    </div>
                    </button>

                    <div className="p-6">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        Website reach after launch—evidence of measurable impact.
                        Click to enlarge.
                    </div>
                    </div>
                </div>
            </div>

            <div className="space-y-5 order-2 md:order-2">
              <h2 className="text-3xl font-extrabold tracking-tight">
                Fresh Fountain Charity — Volunteer Web Developer & Digital Advisor
              </h2>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I volunteered as web developer, media supervisor, and digital
                trainer for{" "}
                <a
                  href="https://freshfountain.org/"
                  className="text-orange-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Fresh Fountain
                </a>
                , building a modern web presence and deploying and maintaining 
                organizations Microsoft 365 accounts, Azure and Active Directory, 
                and integrating an open-source CRM for membership, communications, and finance at{" "}
                <a
                  href="https://crm.freshfountain.org/"
                  className="text-orange-600 underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  crm.freshfountain.org
                </a>
                . I trained staff and volunteers on content, media, and data
                hygiene, enabling consistent publishing and better engagement.
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Outcomes include improved operational efficiency, structured data
                for decision-making, and significant growth in global reach and
                visibility across multiple regions.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                  <div className="text-2xl font-bold">8.4K</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Total views post-launch
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                  <div className="text-2xl font-bold">4K</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Unique visitors
                  </div>
                </div>
                <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Countries reached
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Lightbox / Zoom Overlay ===== */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close image"
              className="absolute -top-3 -right-3 rounded-full bg-white text-gray-800 hover:bg-gray-100 shadow-md px-2 py-1 text-sm font-semibold"
            >
              ✕
            </button>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1600}
              height={900}
              className="w-full max-h-[80vh] object-contain rounded-xl bg-black"
            />
          </div>
        </div>
      )}
    </main>
  );
}
