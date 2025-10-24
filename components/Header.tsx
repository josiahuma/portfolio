'use client'

import { useState, type SVGProps } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
// lightweight icon set fallback (inline SVGs to avoid external dependency)
const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 12h18M3 6h18M3 18h18" />
  </svg>
)

const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
)

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/evidence', label: 'Evidence' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/50">
      <nav className="container-narrow flex items-center justify-between h-16">
        {/* === Logo === */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-gray-900 dark:text-white hover:text-orange-600 transition-colors"
        >
          JU
        </Link>

        {/* === Desktop Menu === */}
        <ul className="hidden md:flex items-center gap-2 lg:gap-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === l.href
                    ? 'text-orange-600 bg-orange-100 dark:bg-orange-600/20 dark:text-orange-400'
                    : 'text-gray-700 hover:text-orange-600 dark:text-gray-300'
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="/Josiah_Uma_CV.pdf"
              download
              className="ml-3 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-lg transition"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* === Mobile Menu Button === */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          ) : (
            <Menu className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </nav>

      {/* === Mobile Dropdown Menu === */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    'block px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    pathname === l.href
                      ? 'text-orange-600 bg-orange-100 dark:bg-orange-600/20 dark:text-orange-400'
                      : 'text-gray-700 hover:text-orange-600 dark:text-gray-300'
                  )}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/Josiah_Uma_CV.pdf"
                download
                className="block text-center mt-3 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold text-sm rounded-lg transition"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
