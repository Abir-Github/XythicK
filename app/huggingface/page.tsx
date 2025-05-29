"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls } from "@react-three/drei"
import HuggingFaceSection from "@/components/huggingface-section"
import Navigation from "@/components/navigation"
import TechBackground from "@/components/tech-background"

export default function HuggingFacePage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Fixed 3D Background */}
      <div className="fixed inset-0 z-0">
        <Suspense fallback={<div className="w-full h-full bg-black" />}>
          <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
            <Environment preset="night" />
            <TechBackground />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
          </Canvas>
        </Suspense>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Content */}
      <div className="relative z-10 pt-20">
        <HuggingFaceSection />
      </div>

      {/* Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none z-5" />
    </div>
  )
}
