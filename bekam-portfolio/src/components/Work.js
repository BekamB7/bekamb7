"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Code,
  Building2,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const affiliations = [
  {
    type: "Internship",
    name: "TechSphere Solutions",
    role: "Backend Developer Intern",
    period: "2023",
    icon: Building2,
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/20",
  },
  {
    type: "Education",
    name: "Addis Ababa University",
    role: "Computer Science",
    period: "2019 - 2023",
    icon: GraduationCap,
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/20",
  },
  {
    type: "Certification",
    name: "Meta Backend Certificate",
    role: "API Development",
    period: "2024",
    icon: Briefcase,
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/20",
  },
];

const projects = [
  {
    title: "Digital Menu SaaS",
    description:
      "A complete SaaS platform for restaurants to manage digital menus, QR code ordering, real-time analytics, and inventory tracking.",
    tech: ["Next.js", "Node.js", "MySQL", "Tailwind CSS", "QR API", "Stripe"],
    color: "from-blue-600/30 to-blue-800/10",
    featured: true,
  },
  {
    title: "Mezmur Streaming App",
    description:
      "Mobile-first web app for streaming spiritual music with offline caching, playlists, and social sharing features.",
    tech: ["React", "FastAPI", "MySQL", "PWA", "Audio API"],
    color: "from-emerald-600/30 to-emerald-800/10",
    featured: true,
  },
  {
    title: "District Management System",
    description:
      "Comprehensive solution for managing district-level operations, resource allocation, and citizen service requests.",
    tech: ["Next.js", "Express", "PostgreSQL", "Docker"],
    color: "from-purple-600/30 to-purple-800/10",
    featured: false,
  },
  {
    title: "Nebalab Team Platform",
    description:
      "Internal collaboration platform for the Nebalab team with real-time chat, task management, and file sharing.",
    tech: ["Next.js", "Socket.io", "MySQL", "Tailwind CSS"],
    color: "from-amber-600/30 to-amber-800/10",
    featured: false,
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-32 bg-pitch-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-accent-blue font-semibold">
              Work & Experience
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>

          {/* Affiliations / Logos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid sm:grid-cols-3 gap-4 mb-24"
          >
            {affiliations.map((aff, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                className={`p-5 rounded-2xl border ${aff.borderColor} bg-gradient-to-br ${aff.color} bg-white/[0.01] transition-all duration-300`}
              >
                <aff.icon className="w-5 h-5 text-cream-muted mb-3" />
                <p className="text-xs text-cream-muted/60 mb-1">{aff.type}</p>
                <p className="text-cream text-sm font-semibold">{aff.name}</p>
                <p className="text-xs text-cream-muted/50 mt-0.5">
                  {aff.role} · {aff.period}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.1] transition-all duration-500"
              >
                <div className="p-8 md:p-10 flex flex-col md:flex-row gap-8">
                  {/* Project Visual Placeholder */}
                  <div className="shrink-0 w-full md:w-48 h-48 md:h-auto rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-50`}
                    />
                    <span className="relative text-4xl font-black text-cream/20 select-none">
                      {project.title.charAt(0)}
                    </span>
                    {project.featured && (
                      <span className="absolute top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-accent-blue/20 text-accent-blue border border-accent-blue/30 backdrop-blur-sm">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-cream mb-3 group-hover:text-accent-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-cream-muted/70 leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.05] text-cream-muted/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm text-cream-muted hover:text-cream transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm text-cream-muted hover:text-cream transition-colors"
                      >
                        <Code className="w-4 h-4" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-blue/0 via-accent-blue/[0.02] to-accent-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
