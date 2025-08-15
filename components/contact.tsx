'use client'

import { useLanguage } from '@/components/language-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'

export default function Contact() {
  const { t, language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitResult(null)

    // Here you would typically send the form data to your backend
    // For this example, we'll just simulate a submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setSubmitResult(language === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!')
    setFormState({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-16 px-4">
      <motion.h2 
        className="text-4xl font-bold tracking-tighter text-center text-[#60A5FA] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {language === 'es' ? 'Contacto' : 'Contact'}
      </motion.h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 200,
            },
          },
        }}
      >
        <Card className="bg-[#1E3A8A] border-2 border-[#3B82F6] max-w-lg mx-auto">
          <CardHeader>
            <CardTitle className="text-[#60A5FA]">
              {language === 'es' ? 'Envíame un mensaje' : 'Send me a message'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="bg-[#2A4A9A] text-white border-[#3B82F6]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder={language === 'es' ? 'Tu email' : 'Your email'}
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="bg-[#2A4A9A] text-white border-[#3B82F6]"
                />
              </div>
              <div>
                <Textarea
                  placeholder={language === 'es' ? 'Tu mensaje' : 'Your message'}
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  className="bg-[#2A4A9A] text-white border-[#3B82F6]"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting 
                  ? (language === 'es' ? 'Enviando...' : 'Sending...') 
                  : (language === 'es' ? 'Enviar mensaje' : 'Send message')}
              </Button>
            </form>
            {submitResult && (
              <p className="mt-4 text-green-400 text-center">{submitResult}</p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
