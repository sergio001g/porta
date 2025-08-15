'use client'

import { Moon, Sun, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/components/theme-provider'
import { useLanguage } from '@/components/language-provider'
import { motion } from 'framer-motion'

export function Header() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage, t } = useLanguage()

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <nav className="flex items-center justify-between px-6 py-2 bg-background/80 backdrop-blur-sm rounded-full shadow-lg">
        <div className="flex items-center gap-6 text-sm">
          {['about', 'projects', 'skills'].map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              className="relative px-3 py-2 rounded-full transition-colors hover:text-primary"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(`nav.${item}`)}
            </motion.a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="rounded-full"
          >
            <Languages className="h-4 w-4" />
          </Button>
        </div>
      </nav>
    </motion.header>
  )
}
