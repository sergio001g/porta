'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const techIcons = {
  'React': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'TypeScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
  'CSS': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  'JavaScript': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'Python': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
  'HTML': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
  'Social Auth': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/oauth/oauth-original.svg',
  'SQL': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg',
  'GUI': 'https://raw.githubusercontent.com/devicons/devicon/master/icons/qt/qt-original.svg',
}

export function TechIcon({ name }: { name: string }) {
  if (!techIcons[name as keyof typeof techIcons]) return null

  return (
    <motion.div
      className="relative w-4 h-4"
      animate={name === 'React' ? { rotate: 360 } : {}}
      transition={name === 'React' ? { duration: 10, repeat: Infinity, ease: "linear" } : {}}
      whileHover={{ scale: 1.2 }}
    >
      <Image
        src={techIcons[name as keyof typeof techIcons]}
        alt={`${name} icon`}
        fill
        className="object-contain"
      />
    </motion.div>
  )
}
