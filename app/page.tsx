import Container from '../components/Container'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import Stat from '../components/Stat'
import { PROJECTS } from '../data/projects'
import { SITE } from '../data/site'

export default function HomePage() {
  return (
    <>
    {/* === HERO SECTION === */}
    <section className="flex flex-col items-center justify-center text-center py-24 md:py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0f172a] to-[#111827] text-white">
      <span className="inline-block px-4 py-1 mb-4 text-sm text-orange-400 border border-orange-400 rounded-full">
        ICT Training Specialist • Software Developer • AI Champion
      </span>

      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight max-w-3xl">
        Hi, I’m <span className="text-orange-500">Josiah Uma</span>.<br />
        I train staff and build <span className="text-orange-500">intelligent digital systems.</span>
      </h1>

      <p className="mt-6 text-lg text-gray-300 max-w-2xl">
        I train staff within the UK public sector and also design and build digital products that enhance efficiency, improve communication,
        and drive data-informed decisions.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="/projects" className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-semibold transition">
          View My Work
        </a>
        <a href="/about" className="px-6 py-3 border border-gray-500 hover:bg-gray-800 rounded-lg font-semibold transition">
          About Me
        </a>
      </div>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-3 gap-10 text-center">
        <div>
          <p className="text-4xl font-bold text-orange-500">2,000+</p>
          <p className="text-gray-400">Staff Served</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-orange-500">10+</p>
          <p className="text-gray-400">Open-Source Repos</p>
        </div>
        <div>
          <p className="text-4xl font-bold text-orange-500">5+</p>
          <p className="text-gray-400">Years in Tech</p>
        </div>
      </div>
    </section>

    {/* === FEATURED PROJECTS SECTION === */}
<section className="py-24 bg-gradient-to-b from-white to-gray-100 text-gray-900 dark:from-gray-900 dark:to-gray-950 dark:text-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-3 text-center">Featured Projects</h2>
    <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
      Highlights from my open-source and professional work.
    </p>

    <div className="grid md:grid-cols-2 gap-12">
      {PROJECTS.slice(0, 2).map((p) => (
        <div
          key={p.title}
          className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
        >
          {/* IMAGE SECTION */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            {/* Centered title */}
            <h3 className="absolute inset-x-0 bottom-6 text-center text-xl font-semibold text-white px-4">
              {p.title}
            </h3>
          </div>

          {/* PROJECT DETAILS */}
          <div className="p-6">
            <p className="text-gray-600 dark:text-gray-400 mb-4">{p.description}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {p.stack.join(" · ")}
            </p>

            <div className="flex gap-3">
              {p.links.github && (
                <a
                  href={p.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-gray-700 dark:border-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition"
                >
                  GitHub
                </a>
              )}
              {p.links.demo && (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* VIEW ALL BUTTON */}
    <div className="mt-12 text-center">
      <a
        href="/projects"
        className="inline-block px-6 py-3 border border-gray-700 dark:border-gray-300 hover:bg-gray-800 hover:text-white rounded-lg font-semibold transition"
      >
        See all projects →
      </a>
    </div>
  </div>
</section>

    </>

  )
}
