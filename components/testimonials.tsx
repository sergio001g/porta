'use client'

import { useLanguage } from '@/components/language-provider'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: 'Juan Pérez',
    role: 'CEO, TechCorp',
    avatar: '/avatar1.jpg',
    content: 'Sergio es un desarrollador excepcional. Su habilidad para resolver problemas complejos y su atención al detalle son impresionantes.',
    contentEn: 'Sergio is an exceptional developer. His ability to solve complex problems and his attention to detail are impressive.',
  },
  {
    name: 'María González',
    role: 'Lead Developer, InnovaSoft',
    avatar: '/avatar2.jpg',
    content: 'Trabajar con Sergio fue una experiencia fantástica. Su conocimiento técnico y su capacidad para colaborar en equipo son sobresalientes.',
    contentEn: 'Working with Sergio was a fantastic experience. His technical knowledge and ability to collaborate in a team are outstanding.',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Project Manager, WebSolutions',
    avatar: '/avatar3.jpg',
    content: 'Sergio demostró una gran capacidad para adaptarse a nuevas tecnologías y entregar resultados de alta calidad en plazos ajustados.',
    contentEn: 'Sergio demonstrated a great ability to adapt to new technologies and deliver high-quality results on tight deadlines.',
  },
]

export default function Testimonials() {
  const { t, language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="testimonials" className="py-16 px-4">
      <motion.h2 
        className="text-4xl font-bold tracking-tighter text-center text-[#60A5FA] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {language === 'es' ? 'Testimonios' : 'Testimonials'}
      </motion.h2>
      <motion.div 
        className="grid gap-8 md:grid-cols-3"
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
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
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
          >
            <Card className="bg-[#1E3A8A] border-2 border-[#3B82F6] h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-[#60A5FA]">{testimonial.name}</p>
                    <p className="text-sm text-[#93C5FD]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-[#F9FAFB] flex-grow">
                  "{language === 'es' ? testimonial.content : testimonial.contentEn}"
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
