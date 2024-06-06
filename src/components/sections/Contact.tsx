import Section, { SectionHeader } from "../ui/Section"

export default function Contact() {
  return (
    <Section id="contact" className="text-center">
      <SectionHeader title="Contact" center />
      <div className="space-y-4">
        <p>Just want to say hi? My inbox is always open.</p>
        <p>Shoot me a message.</p>
        <a
          href="mailto:saadtariq.dev@outlook.com"
          className="inline-flex rounded-md border-2 border-accent/50 bg-transparent px-4 py-3 font-mono font-medium text-accent transition-colors hover:bg-accent/10 dark:text-foreground"
        >
          Say Hello
        </a>
      </div>
    </Section>
  )
}
