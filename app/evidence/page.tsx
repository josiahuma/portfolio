import Container from '../../components/Container'
import Section from '../../components/Section'
import type { Metadata } from 'next'
import { FileText, Lock, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Evidence Hub',
  description: 'Private hub with documents supporting my Global Talent Visa application.',
  robots: { index: false, follow: false },
}

export default function EvidencePage() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-950 to-black min-h-screen text-gray-300 py-16 md:py-24">
      <Container>
        <Section
          title="Evidence Hub"
          subtitle="Private repository of official documents supporting my Global Talent Visa application."
        >
          {/* === Security Notice === */}
          <div className="mb-10 flex items-center gap-2 text-sm text-gray-500">
            <Lock className="w-4 h-4" />
            <span>This page is private and not indexed by search engines.</span>
          </div>

          {/* === Evidence Cards === */}
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Director’s Recognition Letter",
                description: "PDF scan of the Regional Director commendation.",
                file: "/evidence/director-letter.pdf",
              },
              {
                title: 'BCS AI Certificate & Membership',
                description: 'Official BCS Professional Certificate in AI and membership proof.',
                file: '/evidence/bcs-certificate.pdf',
              },
              {
                title: 'HMIP Inspection Mention',
                description: 'Excerpt highlighting my digital transformation work.',
                file: '/evidence/hmip-excerpt.pdf',
              },
              {
                title: 'Personal Statement',
                description: 'Personal statement submitted with my Global Talent Visa application.',
                file: '/evidence/personal-statement.pdf',
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
  )
}
