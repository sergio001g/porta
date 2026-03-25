"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Eye, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { TechIcon } from "./tech-icons"
import { useState } from "react"

const projects = [
  {
    title: "CSER - Autoclicker Minimalista",
    titleEn: "CSER - Minimalist Autoclicker",
    description:
      "Autoclicker minimalista para automatizar clicks con control de CPS, tipo de click y hotkeys. Ideal para Minecraft.",
    descriptionEn:
      "A minimalist autoclicker to automate clicks with CPS control, click type, and hotkeys. Great for Minecraft.",
    image: "/images/cser-preview.png",
    tech: ["React", "TypeScript", "CSS", "JavaScript"],
    preview: "https://cser-web-tau.vercel.app/",
  },
  {
    title: "NOTEMA - Notas Minimalistas (Electron)",
    titleEn: "NOTEMA - Minimal Notes (Electron)",
    description:
      "Aplicación de notas minimalista en Electron con editor, panel lateral y herramientas de mapas conceptuales.",
    descriptionEn:
      "A minimalist Electron notes app with an editor, sidebar, and concept map tools.",
    image: "/images/notema-preview.png",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/sergio001g/electron-notas-minimalistas-",
  },
  {
    title: "DJ-BEE - Plataforma Musical",
    titleEn: "DJ-BEE - Music Platform",
    description:
      "Experiencia de DJ Virtual Futurista con Marshmello y personajes 3D. Plataforma interactiva para DJs con efectos visuales avanzados y controles profesionales.",
    descriptionEn:
      "Futuristic Virtual DJ Experience with Marshmello and 3D characters. Interactive platform for DJs with advanced visual effects and professional controls.",
    image: "/images/dj-bee-preview.png",
    tech: ["React", "TypeScript", "CSS", "JavaScript"],
    link: "https://github.com/sergio001g/DJ-BEE",
    preview: "https://dj-bee11-sergio001gs-projects.vercel.app/",
  },
  {
    title: "Paleta de Colores para UX/UI",
    titleEn: "Color Palette for UX/UI",
    description:
      "Una herramienta interactiva para crear y explorar paletas de colores, ideal para diseñadores UX/UI y desarrolladores.",
    descriptionEn:
      "An interactive tool for creating and exploring color palettes, ideal for UX/UI designers and developers.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Jt7P15FwlH07jmisneiCduaC5yyxhv.png",
    tech: ["TypeScript", "React", "CSS"],
    link: "https://github.com/sergio001g/Paletas-web",
    preview: "https://rl6k9jtq1atw8ibi.vercel.app/",
  },
  {
    title: "Calculadora de Sueldos Ecuador",
    titleEn: "Ecuador Salary Calculator",
    description:
      "Aplicación web para calcular sueldos en Ecuador, basada en la API de midudev y adaptada al contexto ecuatoriano.",
    descriptionEn:
      "Web application for calculating salaries in Ecuador, based on midudev's API and adapted to the Ecuadorian context.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R8ouvgEgD5xyfhLeZXHY2OIpfz5km9.png",
    tech: ["React", "TypeScript", "TailwindCSS"],
    preview: "https://ti1tq7iw3zk2mawt.vercel.app/",
  },
  {
    title: "Portal de Juegos",
    titleEn: "Games Portal",
    description: "Una colección de juegos web interactivos con explicaciones detalladas de cada juego.",
    descriptionEn: "A collection of interactive web games with detailed explanations of each game.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sQlt98vujYYUtEM2JEwn3Vv650l15T.png",
    tech: ["HTML", "CSS", "JavaScript"],
    preview: "https://jweivypyimuaubex.vercel.app/",
  },
  {
    title: "Componente de Login Personalizado",
    titleEn: "Custom Login Component",
    description:
      "Componente de login altamente personalizable con soporte para modo oscuro, internacionalización y login social.",
    descriptionEn:
      "Highly customizable login component with support for dark mode, internationalization, and social login.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-o5OJWVkDrRXVl90DOJDfYdVSym8Jbz.png",
    tech: ["React", "TypeScript", "CSS"],
    link: "https://github.com/sergio001g/loginreact",
  },
  {
    title: "Gestor de Tareas Avanzado",
    titleEn: "Advanced Task Manager",
    description:
      "Aplicación de escritorio para gestión de tareas con características avanzadas como subtareas, etiquetas y priorización.",
    descriptionEn:
      "Desktop application for task management with advanced features such as subtasks, tags, and prioritization.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1ZSaRjVw9vQHKwfa1IHRASvFNtgrY2.png",
    tech: ["Python", "SQL", "GUI"],
    link: "https://github.com/sergio001g/Gestor-deT-aresas",
  },
]

export default function Projects() {
  const { t, language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="projects" className="space-y-12 py-16 px-4">
      <motion.h2
        className="text-4xl font-bold tracking-tighter text-center text-[#60A5FA]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t("projects.title")}
      </motion.h2>

      <motion.div
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                },
              },
            }}
            whileHover={{ scale: 1.03, rotateY: 5 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            style={{ willChange: "transform" }}
          >
            <Card className="overflow-hidden bg-[#1E3A8A] border-2 border-[#3B82F6] h-full flex flex-col">
              <CardHeader className="space-y-2">
                <motion.div
                  className="relative aspect-video overflow-hidden rounded-xl cursor-pointer group"
                  onClick={() => setSelectedImage(project.image)}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={language === "es" ? project.title : project.titleEn}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform group-hover:scale-105 duration-300 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <CardTitle className="text-lg text-[#60A5FA]">
                  {language === "es" ? project.title : project.titleEn}
                </CardTitle>
                <CardDescription className="text-[#93C5FD] text-sm">
                  {language === "es" ? project.description : project.descriptionEn}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <motion.div
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Badge variant="secondary" className="bg-[#2563EB] text-white flex items-center gap-1">
                        <TechIcon name={tech} />
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-[#3B82F6] text-white hover:bg-[#2563EB]"
                    asChild
                  >
                    <a
                      href={project.preview || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {project.preview ? <ExternalLink className="w-4 h-4" /> : <Github className="w-4 h-4" />}
                      {project.preview ? (language === "es" ? "Ver Web" : "View Website") : "GitHub"}
                    </a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full h-auto m-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Project preview"
              width={1920}
              height={1080}
              className="rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-colors duration-200"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
