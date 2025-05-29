"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "Kubernetes", level: 23, color: "from-blue-500 to-cyan-500" },
  { name: "PyTorch", level: 65, color: "from-orange-500 to-red-500" },
  { name: "Docker", level: 92, color: "from-blue-400 to-blue-600" },
  { name: "Python", level: 74, color: "from-yellow-400 to-yellow-600" },
  { name: "MLflow", level: 11, color: "from-green-400 to-green-600" },
  { name: "DVC", level: 8, color: "from-purple-400 to-purple-600" },
  { name: "GitHub Actions", level: 95, color: "from-gray-400 to-gray-600" },
  { name: "Hugging Face", level: 98, color: "from-yellow-500 to-orange-500" },
]

const technologies = [
  "Docker",
  "Kubernetes",
  "Python",
  "PyTorch",
  "TensorFlow",
  "MLflow",
  "DVC",
  "GitHub Actions",
  "AWS",
  "GCP",
  "Terraform",
  "Prometheus",
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey into MLOps began with a fascination for the intersection of machine learning and scalable
                infrastructure. I discovered that the real challenge wasn't just building models, but deploying them
                reliably at scale.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Through years of experience with Kubernetes, Docker, and cloud platforms, I've developed a deep
                understanding of how to bridge the gap between research and production. My work focuses on creating
                robust, automated pipelines that enable data scientists to focus on what they do best.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                As an Open Source Contributor in the{" "}
                <span className="text-yellow-400 font-semibold">Nutanix organization</span> on Hugging Face, I actively
                contribute to the AI community by sharing models, datasets, and best practices that push the boundaries
                of what's possible in AI deployment and automation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, I continue to contribute to the open-source ecosystem, helping organizations scale their AI
                initiatives while maintaining the highest standards of reliability and performance.
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Philosophy</h3>
              <p className="text-gray-300 leading-relaxed">
                "Scalable AI isn't just about bigger models—it's about smarter infrastructure, automated workflows, and
                systems that adapt and evolve with your needs."
              </p>
            </div>

            {/* Nutanix Contribution Highlight */}
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-8 border border-yellow-500/20">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🤗</span>
                <div>
                  <h3 className="text-xl font-semibold text-yellow-400">Nutanix Organization</h3>
                  <p className="text-gray-400">Open Source Contributor • Hugging Face</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Contributing to enterprise-grade AI solutions and helping democratize access to powerful machine
                learning tools through the Nutanix organization on Hugging Face.
              </p>
              <motion.a
                href="https://huggingface.co/nutanix"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center space-x-2 mt-4 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-lg text-yellow-400 hover:bg-yellow-500/30 transition-all duration-300"
              >
                <span>View Nutanix Organization</span>
                <span>→</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Core Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
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
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 1 + index * 0.05 }}
                    className="px-3 py-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full text-sm border border-gray-600 hover:border-blue-500 transition-colors duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
