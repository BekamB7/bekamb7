"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Digital Menu SaaS",
    description:
      "A SaaS platform for restaurants to create and manage digital menus with QR code integration, real-time updates, and analytics dashboard.",
    tech: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "QR API"],
    image: "/images/project-digital-menu.jpg",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Mezmur App",
    description:
      "A mobile-friendly web app for browsing and listening to spiritual songs with search, favorites, and offline caching features.",
    tech: ["React", "FastAPI", "MySQL", "Audio API"],
    image: "/images/project-mezmur.jpg",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "District Management",
    description:
      "A comprehensive solution for managing district-level operations, resource allocation, and reporting workflows.",
    tech: ["Next.js", "Express", "MySQL", "Tailwind CSS"],
    image: "/images/project-district.jpg",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "Nebalab Team Platform",
    description:
      "A collaborative platform for the Nebalab team to streamline project management, task tracking, and communication.",
    tech: ["Next.js", "Node.js", "MySQL", "WebSocket"],
    image: "/images/project-nebalab.jpg",
    live: "#",
    github: "#",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my skills and passion for
            building impactful solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group border-blue-500/10 bg-blue-950/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 overflow-hidden h-full">
                <CardContent className="p-0">
                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-900/40 to-blue-950/60 flex items-center justify-center overflow-hidden">
                    <Folder className="w-16 h-16 text-blue-500/20 group-hover:text-blue-500/40 transition-colors" />
                    {project.featured && (
                      <Badge className="absolute top-3 right-3 bg-blue-600/80 text-white border-none text-xs">
                        Featured
                      </Badge>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                      <a
                        href={project.live}
                        className="w-10 h-10 rounded-full bg-blue-600/80 flex items-center justify-center hover:bg-blue-500 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={project.github}
                        className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Code className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-blue-500/20 text-blue-300/80 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
