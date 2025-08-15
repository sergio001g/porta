"use client"

import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { useState } from "react"
import DinoExperience from "./dino-experience"

const skills = {
  "Frontend Development": [
    {
      name: "React",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      description: "Biblioteca para construir interfaces de usuario interactivas y componentes reutilizables.",
    },
    {
      name: "JavaScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      description: "Lenguaje de programación versátil para desarrollo web interactivo.",
    },
    {
      name: "TypeScript",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      description: "Superset de JavaScript que añade tipado estático para mayor robustez.",
    },
    {
      name: "HTML5",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      description: "Lenguaje de marcado para estructurar el contenido web de manera semántica.",
    },
    {
      name: "CSS3",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
      description: "Lenguaje de estilos para diseñar interfaces web modernas y responsivas.",
    },
    {
      name: "TailwindCSS",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      description: "Framework CSS utilitario para diseño rápido y eficiente.",
    },
    {
      name: "Next.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
      description: "Framework de React para aplicaciones web con renderizado del lado del servidor.",
    },
  ],
  "Backend & Languages": [
    {
      name: "Node.js",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      description: "Entorno de ejecución de JavaScript en el servidor para aplicaciones escalables.",
    },
    {
      name: "Python",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      description: "Lenguaje versátil para desarrollo backend, análisis de datos y automatización.",
    },
    {
      name: "Java",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      description: "Lenguaje robusto y orientado a objetos para aplicaciones empresariales.",
    },
    {
      name: "C#",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      description: "Lenguaje de programación moderno y orientado a objetos de Microsoft.",
    },
    {
      name: "C++",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      description: "Lenguaje de programación de alto rendimiento para sistemas y aplicaciones complejas.",
    },
  ],
  "Databases & Tools": [
    {
      name: "MySQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      description: "Sistema de gestión de bases de datos relacionales ampliamente utilizado.",
    },
    {
      name: "MongoDB",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      description: "Base de datos NoSQL flexible y escalable para aplicaciones modernas.",
    },
    {
      name: "PostgreSQL",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      description: "Sistema de gestión de bases de datos relacional avanzado y de código abierto.",
    },
    {
      name: "Git",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      description: "Sistema de control de versiones distribuido para el desarrollo colaborativo.",
    },
    {
      name: "GitHub",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      description: "Plataforma de desarrollo colaborativo basada en Git para alojar proyectos.",
    },
    {
      name: "Vercel",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
      description: "Plataforma de despliegue para aplicaciones frontend y full-stack.",
    },
  ],
  "AI Tools": [
    {
      name: "v0",
      icon: "/images/v0-logo.png",
      description: "Herramienta de IA de Vercel para generar componentes de React y interfaces de usuario.",
    },
    {
      name: "Cursor",
      icon: "https://www.cursor.com/favicon.ico",
      description: "Editor de código potenciado por IA para desarrollo más eficiente y inteligente.",
    },
    {
      name: "GitHub Copilot",
      icon: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
      description: "Asistente de programación con IA que sugiere código en tiempo real.",
    },
    {
      name: "Trae AI",
      icon: "/images/trae-ai-logo.png",
      description: "Plataforma de IA para automatización y asistencia en desarrollo de software.",
    },
  ],
}

export default function Skills() {
  const { language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string
    description: string
    icon: string
  } | null>(null)

  const categoryEmojis = {
    "Frontend Development": "🎨",
    "Backend & Languages": "⚙️",
    "Databases & Tools": "🗄️",
    "AI Tools": "🤖",
  }

  return (
    <section id="skills" ref={ref} className="py-16 px-4">
      <motion.h2
        className="text-4xl font-bold tracking-tighter text-center text-[#60A5FA] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {language === "es" ? "Habilidades" : "Skills"}
      </motion.h2>

      <div className="grid gap-6 max-w-6xl mx-auto">
        {Object.entries(skills).map(([category, skillList], categoryIndex) => (
          <motion.div
            key={category}
            className="bg-[#1e3a8a] rounded-3xl p-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            whileHover={{ scale: 1.02 }}
            style={{ willChange: "transform" }}
          >
            {/* Background stripes with animation */}
            <div className="absolute inset-0 flex justify-around -z-0 opacity-20">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-8 h-full bg-blue-400"
                  animate={{
                    scaleY: [1, 1.1, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                  style={{ willChange: "transform, opacity" }}
                />
              ))}
            </div>

            <motion.h3
              className="text-2xl font-bold text-white mb-8 relative z-10 flex items-center gap-2"
              initial={{ x: -20, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.2 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: categoryIndex * 0.5 }}
              >
                {categoryEmojis[category as keyof typeof categoryEmojis]}
              </motion.span>
              {category}
            </motion.h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 relative z-10">
              {skillList.map((skill, skillIndex) => (
                <motion.button
                  key={skill.name}
                  className="flex flex-col items-center gap-2 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <motion.div
                    className="relative w-12 h-12 transition-transform duration-300"
                    whileHover={{
                      rotateY: 180,
                      transition: { duration: 0.6 },
                    }}
                  >
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </motion.div>
                  <motion.span className="text-white text-sm font-medium text-center" whileHover={{ color: "#60A5FA" }}>
                    {skill.name}
                  </motion.span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <DinoExperience />

      {/* Modal para mostrar la descripción de la habilidad */}
      {selectedSkill && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedSkill(null)}
        >
          <motion.div
            className="bg-[#1E3A8A] p-6 rounded-lg max-w-md mx-4 border-2 border-[#3B82F6]"
            initial={{ scale: 0.7, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.7, y: 50 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                className="relative w-12 h-12"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Image
                  src={selectedSkill.icon || "/placeholder.svg"}
                  alt={selectedSkill.name}
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h3 className="text-2xl font-bold text-[#60A5FA]">{selectedSkill.name}</h3>
            </div>
            <p className="text-[#93C5FD] mb-4">{selectedSkill.description}</p>
            <motion.button
              className="w-full bg-[#3B82F6] text-white py-2 rounded-lg hover:bg-[#2563EB] transition-colors"
              onClick={() => setSelectedSkill(null)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === "es" ? "Cerrar" : "Close"}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
