import Image, { type StaticImageData } from "next/image"
import { motion } from "framer-motion"

interface Props {
  title: string
  data: {
    name: string
    src: StaticImageData
    invert?: boolean
  }[]
  even?: boolean
}

export default function SkillCard(props: Props) {
  return (
    <motion.section
      className="space-y-4"
      initial={{ opacity: 0, x: props.even ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.25, ease: "easeInOut" }}
    >
      <h4 className="text-center text-accent2">{props.title}</h4>
      <section className="flex flex-wrap justify-center gap-4">
        {props.data.map(({ name, src, invert }, i) => (
          <motion.div
            key={name}
            className="inline-flex items-center gap-x-2 rounded-md bg-secondary px-2 py-2 font-medium text-secondary-foreground shadow"
          >
            <Image
              src={src.src}
              alt={name}
              width={32}
              height={32}
              className={(invert ? "dark:invert " : "") + "h-8 w-8"}
            />
            {name}
          </motion.div>
        ))}
      </section>
    </motion.section>
  )
}
