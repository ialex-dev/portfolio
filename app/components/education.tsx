"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const education = [
    {
      school: "Cooperative University of Kenya",
      degree: "Bachelors of Science in Information Technology",
      year: "2017 - 2021",
      details: "Focused on software development, database design, and system architecture",
    },
    {
      school: "Cisco Networking Academy",
      degree: "CCNA Certification",
      year: "2021 - 2022",
      details: "Focused on networking fundamentals, IP services, security fundamentals, and automation",
    },
    {
      school: "Moringa School",
      degree: "Software Development Bootcamp",
      year: "2024",
      details: "Focused on software development, database design, and system architecture",
    },
    {
      school: "Oracle University",
      degree: "ORACLE OCI",
      year: "2025",
      details: "Focused on Oracle Cloud Infrastructure fundamentals and services",
    },
  ]

  return (
    <section className="relative py-20 bg-black">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>
        <div className="mx-auto max-w-3xl grid gap-8 sm:grid-cols-2">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="rounded-lg border border-zinc-700 bg-zinc-900 p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="mb-2 text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="mb-1 text-sm text-gray-400">{edu.school}</p>
              <p className="mb-4 text-xs text-gray-500">{edu.year}</p>
              <p className="text-sm text-gray-300">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
