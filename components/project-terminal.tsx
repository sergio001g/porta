'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Proyecto-Integrador-Grupo-7',
    description: 'Proyecto integrador para el curso de Desarrollo Web Full Stack',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'MongoDB'],
    url: 'https://github.com/sergio001g/Proyecto-Integrador-Grupo-7'
  },
  {
    name: 'Proyecto-Integrador-Grupo-7-Front',
    description: 'Frontend para el proyecto integrador',
    tech: ['React', 'Redux', 'Axios', 'Styled Components'],
    url: 'https://github.com/sergio001g/Proyecto-Integrador-Grupo-7-Front'
  },
  {
    name: 'Proyecto-Integrador-Grupo-7-Back',
    description: 'Backend para el proyecto integrador',
    tech: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'],
    url: 'https://github.com/sergio001g/Proyecto-Integrador-Grupo-7-Back'
  },
  {
    name: 'Proyecto-Integrador-Grupo-7-Mobile',
    description: 'Aplicación móvil para el proyecto integrador',
    tech: ['React Native', 'Expo', 'Redux', 'Axios'],
    url: 'https://github.com/sergio001g/Proyecto-Integrador-Grupo-7-Mobile'
  }
]

export function ProjectTerminal() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <div className="terminal mt-16">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <div className="terminal-button bg-red-500"></div>
          <div className="terminal-button bg-yellow-500"></div>
          <div className="terminal-button bg-green-500"></div>
        </div>
        <div className="text-sm">projects.sh</div>
      </div>
      <div className="terminal-content">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-command">ls projects</span>
        </div>
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="terminal-line cursor-pointer"
            onClick={() => setActiveProject(index)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="terminal-output">{project.name}</span>
          </motion.div>
        ))}
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-command">cat {projects[activeProject].name}/info.json</span>
        </div>
        <div className="terminal-line">
          <pre className="terminal-output">
            {JSON.stringify(projects[activeProject], null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}
