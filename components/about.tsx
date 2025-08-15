'use client'

import { useLanguage } from '@/components/language-provider'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const aboutContent = {
  es: {
    nombre: '"Sergio Gómez"',
    rol: '"Desarrollador Full Stack"',
    educacion: '"Universidad Tecnológica Equinoccial (UTE), Ecuador"',
    pasiones: ['"Desarrollo web"', '"Nuevas tecnologías"', '"Resolución de problemas"'],
    habilidades: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'Git', 'Python', 'TypeScript', 'Next.js', 'Node.js'],
    motto: '"Creando soluciones innovadoras y eficientes"'
  },
  en: {
    nombre: '"Sergio Gómez"',
    rol: '"Full Stack Developer"',
    educacion: '"Universidad Tecnológica Equinoccial (UTE), Ecuador"',
    pasiones: ['"Web development"', '"New technologies"', '"Problem solving"'],
    habilidades: ['HTML', 'CSS', 'JavaScript', 'React', 'TailwindCSS', 'Git', 'Python', 'TypeScript', 'Next.js', 'Node.js'],
    motto: '"Creating innovative and efficient solutions"'
  }
}

export default function About() {
  const { t, language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const content = aboutContent[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        stiffness: 100,
      },
    },
  }

  return (
    <section id="about" className="max-w-4xl mx-auto space-y-8 px-4 py-16">
      <motion.h2 
        className="text-4xl font-bold tracking-tighter text-center text-[#60A5FA]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        {t('nav.about')}
      </motion.h2>
      <motion.div 
        className="bg-[#1E3A8A] p-8 rounded-3xl shadow-lg code-style"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-[#F9FAFB] text-lg mb-6">
          <span className="text-[#10B981] font-semibold">const</span> <span className="text-[#60A5FA] font-bold">SergioGomez</span> <span className="text-[#10B981] font-semibold">=</span> {'{'} 
        </motion.div>
        <motion.div variants={itemVariants} className="pl-4">
          <span className="text-[#F472B6]">nombre:</span> <span className="text-[#34D399]">{content.nombre}</span>,
        </motion.div>
        <motion.div variants={itemVariants} className="pl-4">
          <span className="text-[#F472B6]">rol:</span> <span className="text-[#34D399]">{content.rol}</span>,
        </motion.div>
        <motion.div variants={itemVariants} className="pl-4">
          <span className="text-[#F472B6]">educación:</span> <span className="text-[#34D399]">{content.educacion}</span>,
        </motion.div>
        <motion.div variants={itemVariants} className="pl-4">
          <span className="text-[#F472B6]">pasiones:</span> [
          {content.pasiones.map((passion, index) => (
            <span key={passion}>
              <span className="text-[#34D399]">{passion}</span>
              {index < content.pasiones.length - 1 ? ', ' : ''}
            </span>
          ))}
          ],
        </motion.div>
        <motion.div variants={itemVariants} className="pl-4">
          <span className="text-[#F472B6]">habilidades:</span> [
        </motion.div>
        {content.habilidades.map((skill, index) => (
          <motion.div key={skill} variants={itemVariants} className="pl-8">
            <span className="text-[#34D399]">"{skill}"</span>{index < content.habilidades.length - 1 ? ',' : ''}
          </motion.div>
        ))}
        <motion.div variants={itemVariants} className="pl-4">
          ],
        </motion.div>
        <motion.div variants={itemVariants} className="pl-4">
          <span className="text-[#F472B6]">código:</span> <span className="text-[#10B981] font-semibold">()</span> <span className="text-[#60A5FA] font-semibold">=&gt;</span> {'{'} 
        </motion.div>
        <motion.div variants={itemVariants} className="pl-8">
          <span className="text-[#C084FC] font-semibold">return</span> <span className="text-[#34D399]">{content.motto}</span>;
        </motion.div>
        <motion.div variants={itemVariants} className="pl-4">
          {'}'}
        </motion.div>
        <motion.div variants={itemVariants} className="text-[#F9FAFB] text-lg mt-6">
          {'};'}
        </motion.div>
      </motion.div>
    </section>
  )
}
