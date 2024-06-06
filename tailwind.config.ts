import type { Config } from "tailwindcss"
import { screens, fontFamily, animation } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    screens: { xs: "512px", ...screens },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
        mono: ["var(--font-roboto-mono)", ...fontFamily.mono],
      },
      colors: {
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
        accent2: {
          DEFAULT: "hsl(var(--accent2))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    // backgroundImage: {
    //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //   "gradient-conic":
    //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    // },
    keyframes: {
      "full-width": {
        to: { width: "100%" },
      },
      "full-bg": {
        to: { backgroundSize: "100%" },
      },
      "blink-caret": {
        "from, to": { borderColor: "transparent" },
        "50%": { borderColor: "currentColor" },
      },
    },
    animation: {
      typing:
        "full-width 600ms steps(40, end) forwards, blink-caret 75ms step-end 4 forwards",
      "full-bg": "full-bg 500ms 600ms ease-in-out forwards",
      ...animation
    },
  },
}

export default config
