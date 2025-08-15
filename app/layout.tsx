import type React from "react"
import { Inter, Press_Start_2P } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Header } from "@/components/header"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start-2p",
})

export const metadata = {
  title: "Sergio Gómez - Full Stack Developer",
  description:
    "Portafolio profesional de Sergio Gómez, desarrollador Full Stack especializado en React, Next.js y tecnologías modernas de desarrollo web.",
  icons: {
    icon: [
      {
        url: "/favicon.jpg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "/favicon.jpg",
        sizes: "16x16",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/apple-touch-icon.jpg",
        sizes: "180x180",
        type: "image/jpeg",
      },
    ],
    shortcut: "/favicon.jpg",
  },
  manifest: "/site.webmanifest",
  themeColor: "#3B82F6",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  author: "Sergio Gómez",
  keywords:
    "Sergio Gómez, Full Stack Developer, React, Next.js, TypeScript, JavaScript, Desarrollador Web, Ecuador, UTE",
  openGraph: {
    title: "Sergio Gómez - Full Stack Developer",
    description:
      "Portafolio profesional de Sergio Gómez, desarrollador Full Stack especializado en React, Next.js y tecnologías modernas.",
    url: "https://portafolio-sergio001g.vercel.app",
    siteName: "Sergio Gómez Portfolio",
    images: [
      {
        url: "/favicon.jpg",
        width: 1200,
        height: 630,
        alt: "Sergio Gómez - Full Stack Developer",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sergio Gómez - Full Stack Developer",
    description: "Portafolio profesional de Sergio Gómez, desarrollador Full Stack.",
    images: ["/favicon.jpg"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.jpg" sizes="any" />
        <link rel="icon" href="/favicon.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.jpg" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={`${inter.className} ${pressStart2P.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LanguageProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <Header />
              <main>{children}</main>
            </Suspense>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
