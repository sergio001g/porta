'use client'

import { createContext, useContext, useState } from 'react'

type Language = 'es' | 'en'

const LanguageContext = createContext({
  language: 'es' as Language,
  toggleLanguage: () => {},
  t: (key: string) => '',
})

const translations = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'hero.title': 'Desarrollador Full Stack',
    'hero.subtitle': 'Estudiante de la UTE Ecuador',
    'projects.title': 'Proyectos Destacados',
    'skills.title': 'Habilidades',
    'skills.habilidades': 'Habilidades',
    'skills.aprendiendo': 'Aprendiendo',
    'projects.viewOnGithub': 'Ver en GitHub',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'hero.title': 'Full Stack Developer',
    'hero.subtitle': 'UTE Ecuador Student',
    'projects.title': 'Featured Projects',
    'skills.title': 'Skills',
    'skills.habilidades': 'Skills',
    'skills.aprendiendo': 'Learning',
    'projects.viewOnGithub': 'View on GitHub',
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const t = (key: string) => translations[language][key] || key

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
