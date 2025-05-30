"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Download, Heart, Eye } from "lucide-react"

const huggingFaceProjects =
  [
    {
      title: "multilingual-sentiment-analyzer",
      type: "Model",
      description:
        "Fine-tuned BERT model for sentiment analysis across 15 languages with 94% accuracy on multilingual datasets.",
      downloads: "12.5K",
      likes: 89,
      views: "45.2K",
      tags: ["sentiment-analysis", "multilingual", "bert", "pytorch"],
      url: "https://huggingface.co/XythicK/multilingual-sentiment-analyzer",
    },
    {
      title: "code-generation-dataset",
      type: "Dataset",
      description: "Curated dataset of 500K+ code snippets with documentation for training code generation models.",
      downloads: "8.7K",
      likes: 156,
      views: "32.1K",
      tags: ["code-generation", "programming", "documentation", "python"],
      url: "https://huggingface.co/datasets/XythicK/code-generation-dataset",
    },
    {
      title: "efficient-text-embeddings",
      type: "Model",
      description: "Lightweight text embedding model optimized for production deployment with 10x faster inference.",
      downloads: "15.3K",
      likes: 203,
      views: "67.8K",
      tags: ["embeddings", "efficient", "production", "optimization"],
      url: "https://huggingface.co/XythicK/efficient-text-embeddings",
    },
    {
      title: "CodeReasoningPro",
      type: "Dataset",
      description:
        "CodeReasoningPro is a large-scale synthetic dataset comprising 1,785,725 competitive programming problems in Python, created by XythicK, an MLOps Engineer.",
      downloads: "87",
      likes: 28,
      views: "1.2K",
      tags: ["python", "csv", "parquet", "pytorch"],
      url: "https://huggingface.co/datasets/XythicK/CodeReasoningPro",
    },
  ] || []

export default function HuggingFaceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Ensure projects array exists and has items
  const projects = huggingFaceProjects || []

  return (
    <section id="huggingface" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Hugging Face Contributions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open-source models and datasets contributing to the AI community
          </p>
        </motion.div>

        {/* Profile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-8 border border-yellow-500/20 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
                XK
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">@XythicK</h3>
                <p className="text-gray-400">MLOps Engineer & Open Source Contributor</p>
              </div>
            </div>
            <div className="flex space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">42K+</div>
                <div className="text-gray-400 text-sm">Total Downloads</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-400">526</div>
                <div className="text-gray-400 text-sm">Total Likes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400">174K+</div>
                <div className="text-gray-400 text-sm">Total Views</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            project.type === "Model"
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              : "bg-green-500/20 text-green-400 border border-green-500/30"
                          }`}
                        >
                          {project.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                    <motion.a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-800 rounded-lg hover:bg-yellow-500/20 transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300 border border-gray-700"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download size={14} />
                        <span>{project.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart size={14} />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye size={14} />
                        <span>{project.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-2 text-center py-12">
              <p className="text-gray-400">No projects available at the moment.</p>
            </div>
          )}
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
            <span>Visit Hugging Face Profile</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
