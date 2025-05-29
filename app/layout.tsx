import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "M Mashhudur Rahim | MLOps Engineer",
  description:
    "Building the brains behind the AI revolution. MLOps expert specializing in scalable ML infrastructure, model deployment, and automation.",
  keywords: "MLOps, Machine Learning, Kubernetes, Docker, Python, AI, Hugging Face, Data Engineering",
  authors: [{ name: "M Mashhudur Rahim" }],
  openGraph: {
    title: "M Mashhudur Rahim | MLOps Engineer",
    description: "Building the brains behind the AI revolution",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased`}>{children}</body>
    </html>
  )
}
