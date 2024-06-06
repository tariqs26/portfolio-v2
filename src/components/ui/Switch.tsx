"use client"

import { useTheme } from "next-themes"
import { useMounted } from "@/hooks/useMounted"

export default function ThemeSwitch() {
  const mounted = useMounted()
  const { setTheme, theme } = useTheme()

  if (!mounted) return null

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        checked={theme === "dark"}
        className="peer sr-only"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light")
        }}
      />
      <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus-within:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus-within:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
    </label>
  )
}
