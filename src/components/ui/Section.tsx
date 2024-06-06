"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

export const motionOptions = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: 0.5, duration: 0.3, ease: "easeInOut" },
  viewport: { once: true },
}

type SectionProps = HTMLMotionProps<"section">

export default function Section({ className, ...props }: SectionProps) {
  return (
    <motion.section
      className={cn("space-y-6", className)}
      {...motionOptions}
      {...props}
    />
  )
}

type SectionHeaderProps = {
  title: string
  center?: boolean
}

export function SectionHeader({ title, center }: SectionHeaderProps) {
  return (
    <header className="flex items-center gap-x-4">
      {center && <span className="gradient-rev h-[1px] flex-1" />}
      <h3 className="font-semibold text-accent">{title}</h3>
      <span className="gradient h-[1px] flex-1" />
    </header>
  )
}
