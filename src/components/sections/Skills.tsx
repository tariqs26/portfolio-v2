"use client"

import { frontend, backend } from "@/content/skills"
import TechnologyCard from "../SkillCard"
import Section, { SectionHeader } from "../ui/Section"

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader title="Skills"></SectionHeader>
      <main className="grid gap-8 sm:grid-cols-2">
        <TechnologyCard title="Frontend" data={frontend} />
        <TechnologyCard title="Backend" data={backend} even />
      </main>
    </Section>
  )
}
