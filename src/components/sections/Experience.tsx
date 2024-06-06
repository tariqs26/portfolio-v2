import ExperienceTab from "../ExperienceTab"
import Section, { SectionHeader } from "../ui/Section"

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader title="Experience" />
      <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
        <ExperienceTab />
      </div>
    </Section>
  )
}
