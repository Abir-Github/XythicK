"use client"

import { useRef, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import SkillsShowcase from "@/components/skills-showcase"
import PersonalInfo from "@/components/personal-info"
import ContactPreview from "@/components/contact-preview"
import Navigation from "@/components/navigation"
import TechBackground from "@/components/tech-background"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed 3D Background */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Environment preset="night" />
            <TechBackground />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </Suspense>
      </motion.div>

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <SkillsShowcase />
        <PersonalInfo />
        <ContactPreview />
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-5" />
    </div>
  )
}
