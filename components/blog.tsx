'use client'

import { useLanguage } from '@/components/language-provider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

const blogPosts = [
  {
    title: 'Introducción a React Hooks',
    titleEn: 'Introduction to React Hooks',
    excerpt: 'Descubre cómo los Hooks de React pueden simplificar tu código y mejorar la reutilización de la lógica.',
    excerptEn: 'Discover how React Hooks can simplify your code and improve logic reusability.',
    date: '2023-05-15',
  },
  {
    title: 'Optimización de rendimiento en Next.js',
    titleEn: 'Performance Optimization in Next.js',
    excerpt: 'Aprende técnicas avanzadas para mejorar el rendimiento de tus aplicaciones Next.js.',
    excerptEn: 'Learn advanced techniques to improve the performance of your Next.js applications.',
    date: '2023-06-22',
  },
  {
    title: 'Diseño de interfaces con Tailwind CSS',
    titleEn: 'Designing Interfaces with Tailwind CSS',
    excerpt: 'Explora cómo utilizar Tailwind CSS para crear interfaces modernas y responsivas de manera eficiente.',
    excerptEn: 'Explore how to use Tailwind CSS to efficiently create modern and responsive interfaces.',
    date: '2023-07-10',
  },
]

export default function Blog() {
  const { t, language } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="blog" className="py-16 px-4">
      <motion.h2 
        className="text-4xl font-bold tracking-tighter text-center text-[#60A5FA] mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {language === 'es' ? 'Blog' : 'Blog'}
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
        {blogPosts.map((post, index) => (
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
              <CardHeader>
                <CardTitle className="text-[#60A5FA]">
                  {language === 'es' ? post.title : post.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#F9FAFB] mb-4">
                  {language === 'es' ? post.excerpt : post.excerptEn}
                </p>
                <p className="text-[#93C5FD] text-sm mb-4">{post.date}</p>
                <Button variant="outline" className="w-full">
                  {language === 'es' ? 'Leer más' : 'Read more'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-8">
        <Button asChild>
          <Link href="/blog">
            {language === 'es' ? 'Ver todos los artículos' : 'View all articles'}
          </Link>
        </Button>
      </div>
    </section>
  )
}
