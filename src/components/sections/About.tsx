import { Link } from "../ui/Link"
import Section, { SectionHeader } from "../ui/Section"

export default function About() {
  return (
    <Section id="about">
      <SectionHeader title="About" />
      <div className="space-y-4">
        <p>Hi there!</p>
        <p>
          I&apos;m Saad Tariq, a third-year computer science student at{" "}
          <Link href="https://www.mcmaster.ca/" external>
            McMaster University
          </Link>{" "}
          and a web developer. I specialize in crafting aesthetic, robust and
          performant web applications.
        </p>
      </div>
    </Section>
  )
}
