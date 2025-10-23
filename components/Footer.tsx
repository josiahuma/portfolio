import Container from './Container'
import { Github, Linkedin } from 'lucide-react' // simple icons

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-400 border-t border-gray-800">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          {/* === Left side === */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Josiah Uma</span>.  
            All rights reserved.
          </p>

          {/* === Right side: social links === */}
          <nav className="flex items-center gap-5">
            <a
              href="https://github.com/josiahuma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <Github size={18} />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/josiah-uma/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-orange-500 transition-colors"
            >
              <Linkedin size={18} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            <a
              href="/evidence"
              className="hover:text-orange-500 transition-colors"
            >
              Evidence
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  )
}
