"use client"

import { motion, useAnimation } from "framer-motion"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useRef } from "react"

const DinoAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 600
    canvas.height = 150

    const dino = {
      x: 50,
      y: canvas.height - 40,
      width: 44,
      height: 44,
      jumping: false,
      jumpHeight: 0,
    }

    const cube = {
      x: canvas.width,
      y: canvas.height - 30,
      size: 30,
    }

    const cubeSpeed = 3

    function drawDino(y: number) {
      ctx.fillStyle = "#535353"
      ctx.fillRect(dino.x, y, dino.width, dino.height)
    }

    function drawCube(x: number) {
      ctx.fillStyle = "#535353"
      ctx.fillRect(x, cube.y, cube.size, cube.size)
    }

    function drawGround() {
      ctx.beginPath()
      ctx.moveTo(0, canvas.height - 10)
      ctx.lineTo(canvas.width, canvas.height - 10)
      ctx.strokeStyle = "#535353"
      ctx.stroke()
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Move cube
      cube.x -= cubeSpeed
      if (cube.x < -cube.size) {
        cube.x = canvas.width
      }

      // Animate dino jump
      if (cube.x <= dino.x + dino.width && cube.x + cube.size > dino.x) {
        dino.jumping = true
      }

      if (dino.jumping) {
        dino.jumpHeight += 5
        if (dino.jumpHeight >= 60) {
          dino.jumping = false
          dino.jumpHeight = 60
        }
      } else if (dino.jumpHeight > 0) {
        dino.jumpHeight -= 5
      }

      const dinoY = dino.y - dino.jumpHeight

      drawDino(dinoY)
      drawCube(cube.x)
      drawGround()

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return <canvas ref={canvasRef} className="w-full h-[150px]" />
}

const TwinklingDots = () => {
  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-green-500/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

const JumpingText = ({ text }: { text: string }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -15, 0],
      transition: {
        duration: 0.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 1.5,
      },
    })
  }, [controls])

  return (
    <div className="flex">
      {text.split("").map((char, index) => (
        <motion.div
          key={index}
          className="inline-block relative"
          custom={index}
          animate={controls}
          transition={{
            delay: index * 0.05,
          }}
        >
          {char}
          <motion.div
            className="absolute left-0 bottom-0 w-full"
            animate={{
              scaleY: [0, 1, 0],
              transition: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 1.5,
                delay: index * 0.05,
              },
            }}
          >
            <div className="h-4 w-[2px] bg-green-400 mx-auto" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default function DinoExperience() {
  const { language } = useLanguage()

  return (
    <div className="relative w-full max-w-2xl mx-auto mt-8 mb-4 font-mono">
      <motion.div
        className="bg-[#1C2333] rounded-lg overflow-hidden shadow-lg"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#2B303B] px-4 py-2 flex items-center">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
          <div className="text-white/80 text-xs mx-auto">Terminal</div>
        </div>
        <div className="p-4 bg-[#1C2333] relative min-h-[200px]">
          <TwinklingDots />
          <div className="relative z-10 space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-green-400">$</span>
              <span className="text-green-400">cat</span>
              <span className="text-green-400">experiencia.txt</span>
            </div>
            <div className="text-white/90 pl-4">
              <JumpingText text="No tengo ;C" />
            </div>
            <div className="text-white/90 pl-4">
              <JumpingText text="Próximo a actualizar..." />
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <span className="text-green-400">$</span>
              <span className="text-green-400">./run_dino_animation.sh</span>
            </div>
            <div className="mt-2 bg-black/30 rounded-lg p-2">
              <DinoAnimation />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
