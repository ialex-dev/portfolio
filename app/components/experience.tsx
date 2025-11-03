"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
company: "Ministry of Defense - Kenya",
position: "SOC Analyst & Backend Developer",
period: "2022 - Present",
description:
  "Responsible for monitoring, analyzing, and responding to cybersecurity incidents within the Ministry’s digital infrastructure. I collaborate with internal teams to strengthen network defenses, perform threat detection and vulnerability assessments, and implement security controls to ensure the confidentiality and integrity of sensitive government information.",

    },
    {
      company: "MARPS AFRICA",
      position: "Backend Developer",
      period: "2024 - Present",
      description:
        "Built and maintained RESTful APIs for various client projects. Implemented database optimization strategies that improved query performance by 60%.",
    },
    {
      company: "Kericho County Government",
      position: "Junior Software Developer",
      period: "2019 - 2020",
      description:
        "Developed full-stack features for web applications. Gained experience with modern development tools and agile methodologies.",
    },
  ]

  return (
    <section className="relative py-20 bg-zinc-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </motion.h2>
        <div className="mx-auto max-w-3xl space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative border-l-2 border-white pl-8"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="absolute -left-4 top-0 h-6 w-6 rounded-full bg-black border-2 border-white"></div>
              <div>
                <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                <p className="text-sm text-gray-400">{exp.company}</p>
                <p className="mb-3 text-xs text-gray-500">{exp.period}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
