"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Scaling ML Models with Kubernetes: A Production Guide",
    excerpt:
      "Learn how to deploy and scale machine learning models using Kubernetes, including auto-scaling strategies and resource optimization techniques.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "MLOps",
    slug: "scaling-ml-models-kubernetes",
    featured: true,
  },
  {
    title: "Building Robust ML Pipelines with DVC and MLflow",
    excerpt:
      "A comprehensive guide to creating reproducible and trackable machine learning workflows using modern MLOps tools.",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "Data Engineering",
    slug: "robust-ml-pipelines-dvc-mlflow",
    featured: false,
  },
  {
    title: "Monitoring ML Models in Production: Best Practices",
    excerpt:
      "Essential strategies for monitoring model performance, detecting drift, and maintaining reliability in production environments.",
    date: "2024-01-02",
    readTime: "10 min read",
    category: "Monitoring",
    slug: "monitoring-ml-models-production",
    featured: false,
  },
  {
    title: "Optimizing Hugging Face Models for Edge Deployment",
    excerpt:
      "Techniques for compressing and optimizing transformer models for deployment on edge devices and resource-constrained environments.",
    date: "2023-12-28",
    readTime: "15 min read",
    category: "Optimization",
    slug: "optimizing-huggingface-edge-deployment",
    featured: true,
  },
]

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="blog" ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Technical Blog
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Insights, tutorials, and deep dives into MLOps, deployment strategies, and production ML
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group cursor-pointer ${post.featured ? "lg:col-span-2" : ""}`}
            >
              <div
                className={`bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-green-500/30 transition-all duration-300 h-full ${
                  post.featured ? "bg-gradient-to-br from-green-500/5 to-cyan-500/5" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      post.category === "MLOps"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : post.category === "Data Engineering"
                          ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                          : post.category === "Monitoring"
                            ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                            : "bg-green-500/20 text-green-400 border border-green-500/30"
                    }`}
                  >
                    {post.category}
                  </span>
                  {post.featured && (
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-cyan-500 text-black text-xs font-bold rounded">
                      FEATURED
                    </span>
                  )}
                </div>

                <h3
                  className={`font-bold mb-4 text-white group-hover:text-green-400 transition-colors duration-300 ${
                    post.featured ? "text-2xl" : "text-xl"
                  }`}
                >
                  {post.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-green-400 group-hover:text-green-300 transition-colors duration-300"
                  >
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight size={16} />
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(34, 197, 94, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-green-600 to-cyan-600 rounded-lg font-semibold transition-all duration-300"
          >
            View All Posts
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
