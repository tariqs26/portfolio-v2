import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Skills from "@/components/sections/Skills"
import Experience from "@/components/sections/Experience"
import Projects from "@/components/sections/Projects"
import Contact from "@/components/sections/Contact"

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl flex-grow px-8 pt-0 pb-32 space-y-32">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
