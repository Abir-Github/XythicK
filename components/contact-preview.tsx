"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, MessageCircle, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const contactMethods =
  [
    {
      icon: Mail,
      title: "Email Me",
      description: "hellruin@proton.me",
      action: "Send Email",
      href: "mailto:hellruin@proton.me",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageCircle,
      title: "Let's Chat",
      description: "Available for project discussions",
      action: "Start Conversation",
      href: "/contact",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a 30-min consultation",
      action: "Book Now",
      href: "https://calendly.com/",
      color: "from-purple-500 to-pink-500",
    },
  ] || []

const socialLinks =
  [
    {
      name: "Hugging Face",
      handle: "@XythicK",
      url: "https://huggingface.co/XythicK",
      icon: "🤗",
      stats: "500+ Downloads",
    },
    {
      name: "LinkedIn",
      handle: "mashhudur-rahim",
      url: "https://linkedin.com/in/mashhudur-rahim",
      icon: "💼",
      stats: "500+ Connections",
    },
    {
      name: "Twitter",
      handle: "@XythicK",
      url: "https://twitter.com/XythicK",
      icon: "🐦",
      stats: "MLOps Insights",
    },
    {
      name: "GitHub",
      handle: "Abir-Github",
      url: "https://github.com/Abir-Github",
      icon: "⚡",
      stats: "Open Source",
    },
  ] || []

export default function ContactPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Safety checks
  const safeContactMethods = contactMethods || []
  const safeSocialLinks = socialLinks || []

  return (
    <section ref={ref} className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to discuss your next MLOps project or explore collaboration opportunities?
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {safeContactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center`}
                >
                  <method.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{method.title}</h3>
                <p className="text-gray-400 mb-6">{method.description}</p>
                <motion.a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${method.color} rounded-lg font-semibold transition-all duration-300`}
                >
                  <span>{method.action}</span>
                  <ArrowRight size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-cyan-400">Find Me Online</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {safeSocialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -3, scale: 1.05 }}
                className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-3">{social.icon}</div>
                <h4 className="text-white font-medium mb-1">{social.name}</h4>
                <p className="text-gray-400 text-sm mb-2">{social.handle}</p>
                <p className="text-cyan-400 text-xs">{social.stats}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Full Contact Page Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(168, 85, 247, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold transition-all duration-300"
            >
              <span>View Full Contact Page</span>
              <ArrowRight size={20} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
