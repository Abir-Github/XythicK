"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Star, GitFork } from "lucide-react"

function HuggingFaceIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )
}

const projects = [
  {
    title: "Titanic",
    description: "DEATH RECORD'S OF RMS TITANIC INCIDENT",
    tech: ["Python", "CSV", "Parquet", "Pytorch"],
    huggingface: "https://huggingface.co/datasets/XythicK/Titanic",
    demo: "https://huggingface.co/datasets/XythicK/Titanic",
    downloads: 200,
    rows: 30,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "CodeReasoningPro",
    description:
      "CodeReasoningPro is a large-scale synthetic dataset comprising 1,785,725 competitive programming problems in Python, created by XythicK, an MLOps Engineer.",
    tech: ["Python", "CSV", "Parquet", "PyTorch"],
    huggingface: "https://huggingface.co/datasets/XythicK/CodeReasoningPro",
    demo: "https://huggingface.co/XythicK",
    downloads: 87,
    rows: 1785725,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Chemistry",
    description:
      "A dataset of 62,941,756 chemistry questions covering Organic Chemistry (Alkenes, Nomenclature), Inorganic Chemistry (Oxidation States), and Physical Chemistry (Kinetics). Each row includes a question, 2-3 answers with explanations, and difficulty level.",
    tech: ["Python", "Chemistry", "Education", "Dataset"],
    huggingface: "https://huggingface.co/datasets/XythicK/Chemistry",
    demo: "https://huggingface.co/datasets/XythicK/Chemistry",
    downloads: 88,
    rows: 63002273,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Orca-Instruct-100K",
    description:
      "This repository contains scripts and documentation for generating a synthetic dataset inspired by the Open-Orca dataset. The dataset consists of conversational instruction-response pairs, designed for natural language processing tasks.",
    tech: ["Python", "NLP", "Instruction", "Dataset"],
    huggingface: "https://huggingface.co/XythicK/Orca-Instruct-100K",
    demo: "https://huggingface.co/XythicK/Orca-Instruct-100K",
    downloads: 28,
    rows: 100000,
    gradient: "from-orange-500 to-red-500",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my latest work in MLOps, from automated pipelines to scalable deployment solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                />

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.huggingface}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-yellow-500/20 transition-colors duration-300 text-yellow-400"
                    >
                      <span className="text-lg">🤗</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Star size={16} />
                    <span>{project.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <GitFork size={16} />
                    <span>{project.rows.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://huggingface.co/XythicK"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(251, 191, 36, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-lg font-semibold transition-all duration-300"
          >
            <span>🤗</span>
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
