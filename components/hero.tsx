"use client"

import { useLanguage } from "@/components/language-provider"
import { Github, Linkedin, Copy, Check, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Hero() {
  const { t, language } = useLanguage()
  const [copied, setCopied] = useState(false)
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 0.8])

  const copyEmail = async () => {
    await navigator.clipboard.writeText("sergio.gomeztr13@outlook.es")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.section
      className="flex flex-col items-center justify-center min-h-screen text-center space-y-12 px-4"
      style={{ opacity, scale, willChange: "transform, opacity" }}
    >
      <motion.div
        className="relative w-48 h-48 overflow-hidden rounded-full border-4 border-[#3B82F6]"
        whileHover={{ scale: 1.1, rotateY: 180 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ willChange: "transform" }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagen%20de%20WhatsApp%202024-12-19%20a%20las%2018.46.24_ea3385b7.jpg-YhYclJDyVIvFjKKNTPgRQ4LQjflYw7.jpeg"
          alt="Profile"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="space-y-6">
        <motion.h1
          className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#93C5FD]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Innovación & Desarrollo
        </motion.h1>
        <motion.p
          className="text-[#93C5FD] max-w-[600px] text-xl sm:text-2xl font-semibold mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {t("hero.title")} | {t("hero.subtitle")} |{" "}
          {language === "es" ? "Creando el futuro digital" : "Creating the digital future"}
        </motion.p>
      </div>
      <motion.div
        className="flex justify-center gap-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {[
          { href: "https://github.com/sergio001g", icon: Github, label: "GitHub" },
          { href: "https://www.linkedin.com/in/sergio-g%C3%B3mez-269431325/", icon: Linkedin, label: "LinkedIn" },
        ].map((social, index) => (
          <motion.div
            key={social.label}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: "transform" }}
          >
            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full bg-[#3B82F6] text-white hover:bg-[#2563EB]"
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <social.icon className="h-5 w-5" />
                <span>{social.label}</span>
              </a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-lg text-[#93C5FD] select-all">sergio.gomeztr13@outlook.es</p>
        <Button
          variant="outline"
          size="icon"
          onClick={copyEmail}
          className="h-10 w-10 rounded-full bg-[#3B82F6] text-white hover:bg-[#2563EB]"
        >
          {copied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
          <span className="sr-only">{copied ? "Copiado" : "Copiar email"}</span>
        </Button>
      </motion.div>
      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ArrowDown className="h-8 w-8 text-[#3B82F6]" />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
