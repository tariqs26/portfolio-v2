import { projects } from "@/content/projects"
import Project from "../Project"
import Section, { SectionHeader } from "../ui/Section"

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader title="Projects" />
      <section className="space-y-12" id="projects">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </section>
    </Section>
  )
}
