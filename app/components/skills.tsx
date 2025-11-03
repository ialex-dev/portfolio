"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      category: "Backend",
      skills: ["Python", "Flask", "Django", "PostgreSQL", "RESTful APIs"],
    },
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML/CSS"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "Git", "Linux", "AWS", "CI/CD Pipelines"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "SQL Optimization", "Data Modeling"],
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
          Technical Skills
        </motion.h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="rounded-lg bg-black p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h3 className="mb-4 text-xl font-semibold text-white">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-300">
                    <span className="mr-3 inline-block h-2 w-2 rounded-full bg-white"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
