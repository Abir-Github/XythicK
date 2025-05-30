"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, Briefcase, GraduationCap } from "lucide-react"

const personalDetails =
  [
    {
      icon: MapPin,
      label: "Location",
      value: "Remote • Available Worldwide",
      color: "text-blue-400",
    },
    {
      icon: Calendar,
      label: "Experience",
      value: "6+ Months in MLOps",
      color: "text-green-400",
    },
    {
      icon: Briefcase,
      label: "Current Role",
      value: "Open Source Contributor @ Nutanix",
      color: "text-purple-400",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "CS50x From Harvard University",
      color: "text-yellow-400",
    },
  ] || []

const interests =
  [
    { name: "Open Source", icon: "🌟", description: "Contributing to ML community" },
    { name: "AI Research", icon: "🧠", description: "Latest developments in AI/ML" },
    { name: "Cloud Architecture", icon: "☁️", description: "Scalable infrastructure design" },
    { name: "Automation", icon: "🤖", description: "DevOps and CI/CD pipelines" },
    { name: "Data Science", icon: "📊", description: "Analytics and insights" },
    { name: "Teaching", icon: "👨‍🏫", description: "Mentoring and knowledge sharing" },
  ] || []

const philosophy =
  [
    "Scalable AI isn't just about bigger models—it's about smarter infrastructure",
    "Automation should enhance human creativity, not replace it",
    "Open source collaboration drives innovation faster than competition",
    "The best MLOps solutions are invisible to data scientists",
  ] || []

export default function PersonalInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Safety checks
  const safePersonalDetails = personalDetails || []
  const safeInterests = interests || []
  const safePhilosophy = philosophy || []

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate about bridging the gap between AI research and production systems
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Personal Details</h3>
              <div className="space-y-6">
                {safePersonalDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center ${detail.color}`}
                    >
                      <detail.icon size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{detail.label}</p>
                      <p className="text-white font-medium">{detail.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Nutanix Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 p-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-500/20"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤗</span>
                  <div>
                    <p className="text-yellow-400 font-semibold">Nutanix Organization</p>
                    <p className="text-gray-400 text-sm">Open Source Contributor on Hugging Face</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
              <h3 className="text-2xl font-semibold mb-6 text-green-400">Interests & Passions</h3>
              <div className="grid grid-cols-2 gap-4">
                {safeInterests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-green-500/30 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{interest.icon}</div>
                    <h4 className="text-white font-medium text-sm mb-1">{interest.name}</h4>
                    <p className="text-gray-400 text-xs">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            My Philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {safePhilosophy.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="flex items-start space-x-3"
              >
                <div className="text-purple-400 text-xl mt-1">"</div>
                <p className="text-gray-300 italic leading-relaxed">{quote}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
