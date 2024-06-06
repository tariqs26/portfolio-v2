"use client"

import { motion, type MotionProps } from "framer-motion"
import Socials from "../Socials"

export default function Hero() {
  const motionOptions = (delay: number = 0): MotionProps => ({
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: delay + 0.5 },
  })

  return (
    <section
      id="home"
      className="relative isolate my-32 grid min-h-[calc(100vh-22rem)] items-center overflow-hidden"
    >
      <div className="peer space-y-6 bg-background/90 backdrop-blur-md">
        <header className="space-y-2">
          <motion.h1
            {...motionOptions()}
            className="text-gradient w-fit text-6xl font-medium md:text-7xl"
          >
            Saad Tariq
          </motion.h1>
          <motion.h2
            {...motionOptions(0.1)}
            className="text-5xl text-muted-foreground md:text-6xl"
          >
            Web Developer
          </motion.h2>
        </header>
        <motion.div {...motionOptions(0.2)}>
          <Socials />
        </motion.div>
        <motion.p {...motionOptions(0.3)}>
          I am a Computer Science student at McMaster University, with
          experience in web development. I am currently working at the Degroote
          School of Business as a Web Developer.
        </motion.p>
        <motion.a
          {...motionOptions(0.4)}
          href="/Saad_Tariq_Resume.pdf"
          className="inline-flex rounded-md border-2 border-accent/50 bg-transparent px-4 py-3 font-mono text-accent transition-colors hover:bg-accent/10 dark:text-foreground"
        >
          View Resume
        </motion.a>
      </div>
      <Blob />
    </section>
  )
}

function Blob() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="gradient absolute right-1 top-2 -z-10 h-[300px] w-[300px] rounded-full border-4 border-transparent transition-all peer-hover:scale-90"
    />
  )
}
