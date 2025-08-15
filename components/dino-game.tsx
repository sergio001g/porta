"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-provider"

const DinoGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { language } = useLanguage()
  const [isJumping, setIsJumping] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 600
    canvas.height = 150

    const dino = {
      x: 50,
      y: 100,
      width: 40,
      height: 40,
      jumping: false,
      jumpHeight: 0,
    }

    const cactus = {
      x: canvas.width,
      y: 100,
      width: 20,
      height: 40,
      speed: 5,
    }

    function drawDino(x: number, y: number) {
      ctx.fillStyle = "#60A5FA"

      // Cuerpo principal
      ctx.fillRect(x, y, 20, 40)

      // Cabeza
      ctx.fillRect(x + 15, y - 10, 25, 25)

      // Ojo
      ctx.fillStyle = "#fff"
      ctx.fillRect(x + 30, y - 5, 5, 5)

      // Brazo
      ctx.fillStyle = "#60A5FA"
      ctx.fillRect(x + 5, y + 10, 10, 5)

      // Pierna
      ctx.fillRect(x + 5, y + 30, 8, 10)
    }

    const drawCactus = () => {
      ctx.fillStyle = "#34D399"
      ctx.fillRect(cactus.x, cactus.y, cactus.width, cactus.height)
      // Añadir detalles al cactus
      ctx.fillRect(cactus.x - 5, cactus.y + 10, 5, 10)
      ctx.fillRect(cactus.x + cactus.width, cactus.y + 15, 5, 10)
    }

    const drawGround = () => {
      ctx.beginPath()
      ctx.moveTo(0, 140)
      ctx.lineTo(canvas.width, 140)
      ctx.strokeStyle = "#60A5FA"
      ctx.stroke()
    }

    const drawClouds = () => {
      ctx.fillStyle = "rgba(96, 165, 250, 0.3)"
      ctx.beginPath()
      ctx.arc(200, 50, 20, 0, Math.PI * 2)
      ctx.arc(230, 50, 25, 0, Math.PI * 2)
      ctx.arc(260, 50, 20, 0, Math.PI * 2)
      ctx.fill()
    }

    let animationId: number
    let jumpHeight = 0
    let jumpDirection = 1

    const updateGame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (dino.jumping) {
        dino.y -= jumpDirection * 3
        jumpHeight += jumpDirection * 3

        if (jumpHeight >= 60) {
          jumpDirection = -1
        }

        if (jumpHeight <= 0) {
          dino.jumping = false
          jumpDirection = 1
          jumpHeight = 0
          dino.y = 100
          setIsJumping(false)
        }
      }

      cactus.x -= cactus.speed
      if (cactus.x < -cactus.width) {
        cactus.x = canvas.width
      }

      drawClouds()
      drawGround()
      drawDino(dino.x, dino.y)
      drawCactus()

      animationId = requestAnimationFrame(updateGame)
    }

    const startJump = () => {
      if (!dino.jumping) {
        dino.jumping = true
        setIsJumping(true)
      }
    }

    canvas.addEventListener("click", startJump)

    // Auto-play functionality
    const autoPlay = () => {
      if (cactus.x <= 150 && cactus.x > 50 && !dino.jumping) {
        startJump()
      }
    }

    const autoPlayInterval = setInterval(autoPlay, 50)
    updateGame()

    return () => {
      cancelAnimationFrame(animationId)
      clearInterval(autoPlayInterval)
      canvas.removeEventListener("click", startJump)
    }
  }, [])

  return (
    <div className="space-y-4">
      <p className="text-center text-[#93C5FD] font-press-start">
        {language === "es" ? "No tengo experiencia ;C" : "I don't have experience ;C"}
      </p>
      <motion.canvas
        ref={canvasRef}
        className="border-2 border-[#3B82F6] rounded-lg mx-auto cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      />
      <p className="text-center text-sm text-[#93C5FD]">
        {language === "es" ? "(Haz clic para saltar)" : "(Click to jump)"}
      </p>
    </div>
  )
}

export default DinoGame
