"use client"

import { motion } from "framer-motion"
import type { Project } from "@/content/projects"
import { ExternalLink, Github } from "./Icons"
import Image from "next/image"
import { motionOptions } from "./ui/Section"

export default function Project({
  name,
  desc,
  tech,
  imgSrc,
  codeLink,
  liveLink,
}: Project) {
  return (
    <motion.section
      className="group grid grid-cols-1 items-center md:grid-cols-[1.4fr,0.2fr,1fr] md:gap-4 md:odd:grid-cols-[1fr,0.2fr,1.4fr]"
      {...motionOptions}
    >
      <Image
        {...imgSrc}
        alt={`project ${name} image`}
        className="md:rounded-0 col-[1_/_3] w-full rounded-t-md md:row-[1] md:rounded-b-md md:group-odd:order-1 md:group-odd:col-[2_/_-1]"
      />
      <section className="first-letter: col-[2_/_-1] space-y-4 rounded-b-md border-t-2 bg-secondary/80 p-4 shadow md:row-[1] md:rounded-none md:border-t-0 md:bg-transparent md:p-0 md:shadow-none md:group-odd:order-2 md:group-odd:col-[1_/_3]">
        <h4 className="text-accent2 md:group-even:text-right">{name}</h4>
        <section className="flex flex-wrap gap-2 md:group-even:justify-end">
          {tech.map((tech) => (
            <code key={tech} className="bg-background text-base font-normal">
              {tech}
            </code>
          ))}
        </section>
        <p className="md:rounded-md md:bg-secondary md:px-4 md:py-2 md:text-secondary-foreground md:shadow-md md:group-even:text-right">
          {desc}
        </p>
        <section className="flex gap-2 md:group-even:justify-end">
          <a
            href={codeLink}
            aria-label="GitHub Link"
            target="_blank"
            className="transition hover:text-foreground/90"
          >
            <Github />
          </a>
          {liveLink && (
            <a
              href={liveLink}
              aria-label="Live Link"
              target="_blank"
              className="transition hover:text-foreground/90"
            >
              <ExternalLink />
            </a>
          )}
        </section>
      </section>
    </motion.section>
  )
}
