"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Code } from "lucide-react";

const projects = [
  {
    title: "MenuGo Digital Menu SaaS",
    category: "SaaS Platform",
    description: "Multi-tenant restaurant management platform with digital menus, QR codes, and analytics.",
    tech: ["Next.js", "React", "Node.js", "MySQL", "Prisma"],
    image: "/images/menu-go.png",
    live: "#",
    github: "#",
  },
  {
    title: "Mezmur Music Platform",
    category: "Web Application",
    description: "Modern music platform for discovering and listening to spiritual songs.",
    tech: ["React", "FastAPI", "MySQL", "REST API"],
    image: "/images/mezmur.png",
    live: "#",
    github: "#",
  },
  {
    title: "District Management System",
    category: "Enterprise System",
    description: "Comprehensive platform for organizing district operations and resource tracking.",
    tech: ["Next.js", "Express", "MySQL"],
    image: "/images/district.png",
    live: "#",
    github: "#",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted uppercase tracking-[0.3em]">Work</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-muted mt-3 max-w-xl">
            A selection of applications and platforms I've designed and built.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <span className="text-xs font-medium text-muted uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 group-hover:gradient-text transition">
                  {project.title}
                </h3>
                <p className="text-sm text-muted mt-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/5 text-muted-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-6">
                  <a
                    href={project.live}
                    className="text-sm font-medium text-white flex items-center gap-1 hover:gradient-text transition"
                  >
                    Live Demo <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={project.github}
                    className="text-sm font-medium text-muted flex items-center gap-1 hover:text-white transition"
                  >
                    <Code size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}