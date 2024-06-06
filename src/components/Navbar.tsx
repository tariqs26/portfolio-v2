"use client"

import logo from "/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Switch from "./ui/Switch"

export default function Navbar() {
  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="sticky top-0 z-[999] flex w-full items-center justify-between px-6 py-3 md:px-8 md:py-4"
    >
      <Link href="/#home">
        <Image {...logo} alt="logo" className="h-8 w-8 rounded-md" />
      </Link>
      <nav className="border-white border-opacity-5 bg-white bg-opacity-80 p-2 shadow-lg shadow-black/[0.03] backdrop-blur-[0.2rem] dark:bg-black/80 sm:w-[30rem] sm:rounded-full">
        <Links />
      </nav>
      <Switch />
    </motion.header>
  )
}

const links = ["About", "Experience", "Projects", "Contact"]

function Links() {
  return (
    <>
      <div className="hidden justify-between sm:flex">
        {links.map((link) => {
          return (
            <Link
              key={link}
              className="rounded-full p-2 transition hover:bg-secondary"
              href={`/#${link.toLowerCase()}`}
            >
              {link}
            </Link>
          )
        })}
      </div>
      <Bruh />
    </>
  )
}

const Bruh = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <button
      className="group grid gap-1.5 hover:cursor-pointer sm:hidden"
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      {[1, 2, 3].map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-[2px] w-6 rounded-full bg-secondary-foreground transition-all duration-300 group-hover:bg-muted-foreground",
            isMenuOpen &&
              (!i
                ? "translate-y-2 rotate-45 transform"
                : i === 1
                  ? "scale-0"
                  : "-translate-y-2 -rotate-45 transform"),
          )}
        />
      ))}
    </button>
  )
}
