"use client"

import { useLanguage } from "@/components/language-provider"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer className="bg-[#1E3A8A] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">
              {language === "es" ? "Desarrollador Full Stack" : "Full Stack Developer"}
            </p>
            <p className="text-sm text-[#93C5FD]">
              {language === "es" ? "Creando soluciones digitales" : "Creating digital solutions"}
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/sergio001g"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60A5FA] transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/sergio-g%C3%B3mez-269431325/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#60A5FA] transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:sergio.gomeztr13@outlook.es" className="hover:text-[#60A5FA] transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
