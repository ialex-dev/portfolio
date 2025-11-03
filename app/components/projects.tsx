"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["Python", "Flask", "PostgreSQL", "React"],
      image: "/ecommerce-dashboard.png",
      link: "#",
    },
    {
      id: 2,
      title: "Real-Time Analytics Dashboard",
      description: "Live data visualization and reporting tool",
      tech: ["Python", "Flask", "React", "WebSocket"],
      image: "/analytics-dashboard.png",
      link: "#",
    },
    {
      id: 3,
      title: "School Management System",
      description: "Scalable web app that lets you manage various activities of a school",
      tech: ["Python", "Docker", "Kubernetes", "PostgreSQL"],
      image: "/school_management.png",
      link: "#",
    },
    {
      id: 4,
      title: "CyberSecurity Blog Channel",
      description: "Blogs and Cyber Report management tool",
      tech: ["Django", "React", "PostgreSQL", "Redis"],
      image: "/cyberwatch.png",
      link: "https://moran.mod.go.ke/",
    },
    {
      id: 5,
      title: "Mobile Payment Integration",
      description: "Secure payment processing for mobile applications",
      tech: ["Python", "Flask", "Stripe API", "PostgreSQL"],
      image: "/payment-processing-interface.jpg",
      link: "#",
    },
    {
      id: 6,
      title: "Routine Schedule Manager",
      description: "Start scheduling your staff online.",
      tech: ["Python", "Pandas", "AWS", "PostgreSQL"],
      image: "/roster.png",
      link: "#",
    },
        {
      id: 7,
      title: "Caregiver Management System",
      description: "Start scheduling your staff online.",
      tech: ["Python", "Pandas", "AWS", "PostgreSQL"],
      image: "/caregiver.png",
      link: "https://newdaybreakhomesupport.netlify.app/",
    },
  ]

  return (
    <section id="projects" className="relative bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <Card className="overflow-hidden bg-zinc-900 cursor-pointer hover:border-white transition-colors h-full">
                  <CardContent className="p-0">
                    <div className="group relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6">
                        <h3 className="text-xl font-semibold text-white text-center">{project.title}</h3>
                        <p className="mt-2 text-sm text-gray-300 text-center">{project.description}</p>
                      </div>
                    </div>
                    {selectedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-zinc-700 bg-black p-4"
                      >
                        <p className="mb-3 text-sm text-gray-400">{project.description}</p>
                        <div className="mb-4 flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs text-white"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          className="inline-block text-white hover:text-gray-300 text-sm font-semibold"
                        >
                          View Project →
                        </a>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
