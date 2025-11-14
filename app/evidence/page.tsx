import Container from "../../components/Container";
import Section from "../../components/Section";
import { ShieldCheck, FileText, Link as LinkIcon } from "lucide-react";

// Helper UI: small pill link
function Pill({ href = "#", label }: { href?: string; label: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1.5 text-sm font-medium text-orange-300 hover:bg-orange-500/20 hover:text-orange-200 transition-colors"
    >
      <LinkIcon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}

export default function EvidenceClient() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-950 to-black min-h-screen text-gray-300 py-16 md:py-24">
      <Container>
        <Section
          title="Evidence Hub"
          subtitle="Repository of official documents supporting my Global Talent Visa application."
        >
          {/* Security / context notice */}
          <div className="mb-10 flex items-center gap-2 text-sm text-gray-500">
            <ShieldCheck className="w-4 h-4" />
            <span>
              This page is intended for Tech Nation panel reviewers to access my
              documentation in one place.
            </span>
          </div>

          {/* OFFICIAL DOCUMENTS */}
          <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-5 w-5 text-orange-400" />
              <h2 className="text-xl font-semibold text-white">Official Documents</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {/* Replace href values with your real file paths */}
              <Pill href="/Josiah_Uma_Global_Talent_CV.pdf" label="CV" />
              <span className="text-gray-600">|</span>
              <Pill
                href="/evidence/Personal_Statement_Josiah_Uma.pdf"
                label="Personal Statement"
              />
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* MANDATORY CRITERIA */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Mandatory Criteria</h3>
            <p className="text-sm text-gray-400">
              Recognised as having the potential to be a leading talent in the
              digital technology field in the last 5 years.
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Map to your real files */}
              <Pill href="/evidence/mandatory-evidence-1.pdf" label="Evidence 1" />
              <span className="text-gray-600">|</span>
              <Pill href="/evidence/mandatory-evidence-2.pdf" label="Evidence 2" />
              <span className="text-gray-600">|</span>
              <Pill href="/evidence/mandatory-evidence-3.pdf" label="Evidence 3" />
              <span className="text-gray-600">|</span>
              <Pill
                href="/evidence/recognition-intranet.pdf"
                label="Recognition for Intranet"
              />
            </div>
          </section>

          {/* DIVIDER */}
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* OPTIONAL CRITERIA ONE */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Optional Criteria One</h3>
            <p className="text-sm text-gray-400">
              Innovation generated as a founder of a product-led digital technology
              company.
            </p>
            <div className="flex flex-wrap gap-3">
              <Pill href="/evidence/oc1-evidence-1.pdf" label="Evidence 1" />
              <span className="text-gray-600">|</span>
              <Pill href="/evidence/oc1-evidence-2.pdf" label="Evidence 2" />
              <span className="text-gray-600">|</span>
              <Pill href="/evidence/oc1-evidence-3.pdf" label="Evidence 3" />
              <span className="text-gray-600">|</span>
              <Pill
                href="/evidence/certificates-of-incorporation.pdf"
                label="Certificates of Incorporation"
              />
            </div>
          </section>

          {/* DIVIDER */}
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

          {/* OPTIONAL CRITERIA TWO */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Optional Criteria Two</h3>
            <p className="text-sm text-gray-400">
              Recognised for work beyond occupation that contributed to advancement
              of the field.
            </p>
            <div className="flex flex-wrap gap-3">
              <Pill href="/evidence/oc2-evidence-1.pdf" label="Evidence 1" />
              <span className="text-gray-600">|</span>
              <Pill href="/evidence/oc2-evidence-2.pdf" label="Evidence 2" />
            </div>
          </section>
        </Section>
      </Container>
    </main>
  );
}
