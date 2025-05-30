"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

// Ensure all arrays have default empty array fallbacks
const topSkills =
  [
    {
      name: "Kubernetes",
      level: 23,
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      description: "Container orchestration & scaling",
    },
    {
      name: "PyTorch",
      level: 65,
      icon: "🔥",
      color: "from-orange-500 to-red-500",
      description: "Deep learning & model training",
    },
    {
      name: "Hugging Face",
      level: 98,
      icon: "🤗",
      color: "from-yellow-500 to-orange-500",
      description: "Model deployment & sharing",
    },
    {
      name: "AWS",
      level: 90,
      icon: "☁️",
      color: "from-green-500 to-teal-500",
      description: "Cloud infrastructure & services",
    },
    {
      name: "Python",
      level: 95,
      icon: "🐍",
      color: "from-purple-500 to-pink-500",
      description: "Backend development & automation",
    },
    {
      name: "Docker",
      level: 92,
      icon: "🐳",
      color: "from-blue-400 to-blue-600",
      description: "Containerization & deployment",
    },
  ] || []

const stats =
  [
    { label: "Months Experience", value: "6+", icon: "📅" },
    { label: "Models Deployed", value: "1+", icon: "🚀" },
    { label: "HF Downloads", value: "500+", icon: "📊" },
    { label: "Certifications", value: "6", icon: "🏆" },
  ] || []

export default function SkillsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Add safety checks
  const safeTopSkills = topSkills || []
  const safeStats = stats || []

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Core Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in MLOps, cloud infrastructure, and scalable AI solutions
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {safeStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {safeTopSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <p className="text-gray-400 text-sm">{skill.description}</p>
                </div>
              </div>

              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-gray-300 text-sm">Proficiency</span>
                  <span className="text-gray-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Skills Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <Link href="/skills">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold transition-all duration-300"
            >
              <span>View All Skills & Certifications</span>
              <ArrowRight size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
