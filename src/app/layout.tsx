import type { Metadata } from "next"
import { Inter, Roboto_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Saad Tariq",
  description:
    "Saad Tariq is a Computer Science student at McMaster University, with experience in full-stack web development.",
}

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
