import Image from 'next/image'
import Container from '../../components/Container'
import { SITE } from '../../data/site'

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
            {/* LEFT COLUMN: TEXT */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-3">Who I Am</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  I am an <strong>ICT Training Specialist</strong> at His Majesty’s Prison and Probation Service (HMPPS),
                  Ministry of Justice, UK, and also a <strong>Software Developer.</strong> I design and build digital products that enhance communication, improve workflows, 
                  and enable data-driven decisions across the public sector.
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
                  I’m passionate about <strong>ethical civic-tech</strong> and <strong>AI</strong>: 
                  building tools that make public and private sector services simpler, faster, and more human.
                </p>
                <p className="mt-4">
                  Based in <strong>{SITE.location}</strong>. Always open to collaboration and purposeful innovation.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: IMAGE CARD */}
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
        </Container>
      </section>
    </main>
  )
}
