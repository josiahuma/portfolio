"use client";

import { useState, useEffect } from "react";
import Container from "../../components/Container";
import Section from "../../components/Section";
import { FileText, Lock, Download } from "lucide-react";

export default function EvidenceClient() {
  const [authorized, setAuthorized] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  const PASSWORD = "josiah2025!";

  useEffect(() => {
    const savedAccess = localStorage.getItem("evidenceAccess");
    if (savedAccess === "true") setAuthorized(true);
  }, []);

  const handleLogin = () => {
    if (inputPassword === PASSWORD) {
      setAuthorized(true);
      localStorage.setItem("evidenceAccess", "true");
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  if (!authorized) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
        <div className="text-center px-6">
          <Lock className="w-10 h-10 text-orange-500 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Protected Page</h1>
          <p className="text-gray-400 mb-6 text-sm">
            Enter the access password to view the Evidence Hub.
          </p>

          <div className="flex flex-col items-center gap-3">
            <input
              type="password"
              placeholder="Enter password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-orange-500 outline-none w-64"
            />
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-medium transition-all"
            >
              Unlock
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-950 to-black min-h-screen text-gray-300 py-16 md:py-24">
      <Container>
        <Section
          title="Evidence Hub"
          subtitle="Private repository of official documents supporting my Global Talent Visa application."
        >
          {/* Security Notice */}
          <div className="mb-10 flex items-center gap-2 text-sm text-gray-500">
            <Lock className="w-4 h-4" />
            <span>This page is private and not indexed by search engines.</span>
          </div>

          {/* Evidence Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Director’s Recognition Letter",
                description: "PDF scan of the Regional Director commendation.",
                file: "/evidence/director-letter.pdf",
              },
              {
                title: "Recognitions at Work",
                description:
                  "Letters of appreciation and acknowledgments from senior management and colleagues.",
                file: "/evidence/work-recognitions.pdf",
              },
              {
                title: "BCS AI Certificate",
                description: "BCS Professional AI Certificate.",
                file: "/evidence/bcs-certificate.pdf",
              },
              {
                title: "BCS Membership Certificate",
                description: "Official BCS Professional membership proof.",
                file: "/evidence/bcs-membership.pdf",
              },
              {
                title: "AI Champion Membership",
                description:
                  "Evidence of my AI Champion membership and active contributions to innovation initiatives.",
                file: "/evidence/ai-champion.png",
              },
              {
                title: "HMIP Inspection Mention",
                description: "Excerpt highlighting my digital transformation work.",
                file: "/evidence/hmip-excerpt.pdf",
              },
              {
                title: "Personal Statement",
                description:
                  "Personal statement submitted with my Global Talent Visa application.",
                file: "/evidence/personal-statement.pdf",
              },
              {
                title: "Résumé / CV",
                description:
                  "My updated résumé detailing experience, achievements, and certifications.",
                file: "/Josiah_Uma_CV.pdf",
              },
            ].map((doc) => (
              <div
                key={doc.title}
                className="card p-6 bg-gray-800/70 border border-gray-700 rounded-2xl shadow-sm hover:shadow-lg hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/10 text-orange-400">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {doc.title}
                    </h3>
                    <p className="mt-1 text-gray-400 text-sm leading-relaxed">
                      {doc.description}
                    </p>
                    <a
                      href={doc.file}
                      download
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
