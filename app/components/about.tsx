"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative py-20 bg-black">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="mx-auto max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            I'm a passionate software engineer with a strong foundation in backend development and a keen interest in
            building robust, scalable applications. With experience working with tech experts in top companies, I've developed expertise in architecting solutions that solve
            real-world problems.
          </p>
          <p className="mb-6 text-lg leading-relaxed text-gray-300">
            My journey in technology started  from Cooperative University of Kenya, where I
            discovered my love for crafting elegant code and understanding complex systems. I'm committed to continuous
            learning and stay updated with the latest trends in software development.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            I believe in writing clean, maintainable code and collaborating with talented teams to deliver impactful
            solutions. When I'm not coding, you'll find me exploring new technologies or contributing to the tech
            community in Kenya.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
