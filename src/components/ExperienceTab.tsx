"use client"

import { motion, AnimatePresence } from "framer-motion"
import { experiences } from "@/content/experiences"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function ExperienceTab() {
  const [selectedItem, setSelectedItem] = useState(experiences[0])
  return (
    <>
      {experiences.length > 1 ? (
        <nav className="flex w-fit border-b-2 md:max-w-[20ch] md:flex-col md:self-start md:border-b-0 md:border-l-2">
          {experiences.map((item) => (
            <li
              key={item.company}
              className={cn(
                item === selectedItem && "bg-secondary/80",
                "relative cursor-pointer list-none px-4 py-2 transition-colors hover:bg-secondary/80",
              )}
              onClick={() => setSelectedItem(item)}
            >
              {item.company}
              {item === selectedItem ? (
                <motion.div
                  className="absolute -bottom-[2px] left-0 right-0 h-[2px] w-full bg-accent md:-left-[2px] md:bottom-0 md:h-full md:w-[2px]"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </nav>
      ) : null}
      <main className="flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedItem ? selectedItem.company : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="min-h-[240px] w-full"
          >
            <h4 className="text-accent2">
              {selectedItem.position} - {selectedItem.company}
            </h4>
            <p className="font-medium text-muted-foreground">
              {selectedItem.dateRange}
            </p>
            <ul>
              {selectedItem.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  )
}
