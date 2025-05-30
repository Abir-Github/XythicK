"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle, Zap, Code, Database, Cloud } from "lucide-react"

// Ensure all arrays have fallbacks
const skillCategories =
  [
    {
      title: "MLOps & DevOps",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Kubernetes", level: 95, certified: true },
        { name: "Docker", level: 92, certified: true },
        { name: "GitHub Actions", level: 90, certified: false },
        { name: "Jenkins", level: 85, certified: false },
        { name: "Terraform", level: 88, certified: true },
        { name: "Prometheus", level: 82, certified: false },
      ],
    },
    {
      title: "Machine Learning",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "PyTorch", level: 90, certified: true },
        { name: "TensorFlow", level: 85, certified: true },
        { name: "Hugging Face", level: 93, certified: false },
        { name: "MLflow", level: 88, certified: false },
        { name: "DVC", level: 85, certified: false },
        { name: "Weights & Biases", level: 80, certified: false },
      ],
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "AWS", level: 90, certified: true },
        { name: "Google Cloud", level: 85, certified: true },
        { name: "Azure", level: 80, certified: false },
        { name: "Apache Airflow", level: 88, certified: false },
        { name: "Redis", level: 82, certified: false },
        { name: "Elasticsearch", level: 78, certified: false },
      ],
    },
    {
      title: "Programming & Data",
      icon: Database,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Python", level: 95, certified: true },
        { name: "Go", level: 9, certified: false },
        { name: "SQL", level: 88, certified: true },
        { name: "MongoDB", level: 85, certified: false },
        { name: "PostgreSQL", level: 90, certified: true },
        { name: "Apache Spark", level: 82, certified: false },
      ],
    },
  ] || []

const certifications =
  [
    {
      title: "CS50x",
      issuer: "Harvard University",
      date: "2025",
      level: "Professional",
      icon: "🏆",
    },
    {
      title: "Certified Python Developer",
      issuer: "UpGrad",
      date: "2024",
      level: "Expert",
      icon: "⚡",
    },
    {
      title: "Python Developer",
      issuer: "Future Learn",
      date: "2024",
      level: "Professional",
      icon: "🎯",
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2022",
      level: "Associate",
      icon: "🐳",
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "TensorFlow",
      date: "2021",
      level: "Developer",
      icon: "🧠",
    },
    {
      title: "HashiCorp Terraform Associate",
      issuer: "HashiCorp",
      date: "2023",
      level: "Associate",
      icon: "🔧",
    },
  ] || []

const achievements =
  [
    {
      title: "Open Source Contributor",
      description: "Hugging Face Community",
      metric: "500+ Downloads",
      icon: "🤗",
    },
    {
      title: "Open Source Impact",
      description: "GitHub Contributions",
      metric: "20+ Commits",
      icon: "⭐",
    },
    {
      title: "Model Performance",
      description: "Production Models",
      metric: "99.9% Uptime",
      icon: "🚀",
    },
    {
      title: "Cost Optimization",
      description: "Infrastructure Savings",
      metric: "40% Reduction",
      icon: "💰",
    },
  ] || []

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Safety checks
  const safeSkillCategories = skillCategories || []
  const safeCertifications = certifications || []
  const safeAchievements = achievements || []

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Certifications
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Expertise across the full MLOps stack with industry-recognized certifications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {safeSkillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title || categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
            >
              <div className="flex items-center mb-6">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                >
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {(category.skills || []).map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        {skill.certified && <CheckCircle className="text-green-400" size={16} />}
                      </div>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 1 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Professional Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeCertifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-yellow-400 text-sm font-medium">{cert.level}</span>
                    <span className="text-gray-500 text-sm">{cert.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safeAchievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-green-500/30 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  {achievement.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
