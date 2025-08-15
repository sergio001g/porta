import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import StarryBackground from "@/components/starry-background"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="relative">
      <StarryBackground />
      <div className="container mx-auto px-4 space-y-24 py-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
      </div>
      <Footer />
    </div>
  )
}
