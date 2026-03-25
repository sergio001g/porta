"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import DinoExperience from "./dino-experience"

export default function Skills() {
  const { language } = useLanguage()

  return (
    <section id="experience" className="py-16 px-4">
      <motion.h2
        className="text-4xl font-bold tracking-tighter text-center text-[#60A5FA] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {language === "es" ? "Experiencia" : "Experience"}
      </motion.h2>

      <DinoExperience />
    </section>
  )
}
