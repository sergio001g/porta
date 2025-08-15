'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'
import DinoGame from './dino-game'

export function MacTerminal() {
  const { language } = useLanguage()

  return (
    <motion.div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg max-w-2xl mx-auto mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="bg-gray-700 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-white text-sm mx-auto">Terminal</div>
      </div>
      <div className="p-4 font-mono text-sm">
        <p className="text-green-400">$ cat experiencia.txt</p>
        <p className="text-white mt-2 font-press-start">
          {language === 'es' ? 'No tengo ;C' : 'I don\'t have any ;C'}
        </p>
        <motion.p 
          className="text-white mt-2 font-press-start"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {language === 'es' ? 'Próximo a actualizar...' : 'Coming soon...'}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className="text-green-400 mt-4">$ ./run_dino_game.sh</p>
          <div className="mt-2">
            <DinoGame />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
