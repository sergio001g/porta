'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code2, Palette, Database, Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import { useState } from 'react'

const services = [
  {
    icon: Code2,
    title: 'Creación de Programas',
    titleEn: 'Software Development',
    description: 'Desarrollo de aplicaciones web y de escritorio personalizadas.',
    descriptionEn: 'Custom web and desktop application development.',
  },
  {
    icon: Palette,
    title: 'Diseño Web',
    titleEn: 'Web Design',
    description: 'Diseño de interfaces modernas y responsivas.',
    descriptionEn: 'Modern and responsive interface design.',
  },
  {
    icon: Database,
    title: 'Gestión de Datos',
    titleEn: 'Data Management',
    description: 'Implementación y gestión de bases de datos.',
    descriptionEn: 'Database implementation and management.',
  },
]

export default function Services() {
  const { language } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText('sergio.gomeztr13@outlook.es')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
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
  }

  return (
    <section className="py-16 px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="bg-[#1E3A8A] border-2 border-[#3B82F6]">
              <CardHeader>
                <service.icon className="w-12 h-12 text-[#60A5FA] mb-2" />
                <CardTitle className="text-[#60A5FA]">
                  {language === 'es' ? service.title : service.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-[#93C5FD]">
                {language === 'es' ? service.description : service.descriptionEn}
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center gap-4 mt-8"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={copyEmail}
            className="relative bg-[#3B82F6] text-white hover:bg-[#2563EB] rounded-full px-8 py-6 text-lg font-semibold group overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#60A5FA] to-[#3B82F6]"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative flex items-center gap-2">
              {copied ? (
                <>
                  <Check className="w-5 h-5" />
                  {language === 'es' ? '¡Correo copiado!' : 'Email copied!'}
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  {language === 'es' ? 'Contáctame - Precios accesibles' : 'Contact me - Affordable prices'}
                </>
              )}
            </span>
          </Button>
          <p className="text-[#93C5FD] text-sm">
            {language === 'es' ? 
              'Haz clic para copiar el correo electrónico' : 
              'Click to copy email address'}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
