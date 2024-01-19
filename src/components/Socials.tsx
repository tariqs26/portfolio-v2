import Link from "next/link"
import { socials } from "@/content/socials"

export default function Socials() {
  return (
    <section className="flex items-center gap-2">
      {socials.map((social) => (
        <Link
          key={social.href}
          href={social.href}
          aria-label={social.label}
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground transition hover:-translate-y-1 hover:text-foreground pb-1"
        >
          {social.icon}
        </Link>
      ))}
    </section>
  )
}
