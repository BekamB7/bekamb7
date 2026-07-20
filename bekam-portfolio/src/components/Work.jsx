"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Code, ArrowUpRight, Sparkles } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "MenuGo Digital Menu SaaS",
    category: "SaaS Platform",
    description:
      "A multi-tenant restaurant management platform allowing businesses to create digital menus, generate QR codes, manage orders, and analyze customer activity.",
    problem:
      "Restaurants need faster menu management and improved customer ordering experience.",
    solution:
      "Built a scalable SaaS architecture with restaurant isolation, QR ordering, and real-time analytics.",
    tech: ["Next.js", "React", "Node.js", "MySQL", "Prisma", "Tailwind"],
    image: "/images/menu-go.png",
    live: "#",
    github: "#",
    featured: true,
  },
  {
    title: "Mezmur Music Platform",
    category: "Web Application",
    description:
      "A modern music platform for discovering and listening to spiritual songs with personalized features.",
    problem: "Users need easier discovery and organization of songs.",
    solution:
      "Created a responsive application with optimized search and audio management.",
    tech: ["React", "FastAPI", "MySQL", "REST API"],
    image: "/images/mezmur.png",
    live: "#",
    github: "#",
    featured: false,
  },
  {
    title: "District Management System",
    category: "Enterprise System",
    description:
      "A comprehensive management platform designed to organize district operations, reporting, and resource tracking.",
    problem: "Manual workflows caused inefficient data management.",
    solution:
      "Developed structured dashboards and backend services for better organization.",
    tech: ["Next.js", "Express", "MySQL"],
    image: "/images/district.png",
    live: "#",
    github: "#",
    featured: false,
  },
];

export default function Work() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400" />
            <span className="text-sm text-muted uppercase tracking-[0.3em]">
              Featured Work
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight">
            Projects that
            <br />
            <span className="gradient-text">solve real problems</span>
          </h2>

          <p className="mt-6 text-muted max-w-xl text-lg">
            A selection of applications and platforms I've designed and built
            from concept to deployment.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                  className="relative group"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={600}
                      className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold flex items-center gap-1.5">
                        <Sparkles size={12} />
                        Featured
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Content */}
                <div>
                  <span className="text-sm text-purple-400 font-medium uppercase tracking-wider">
                    {project.category}
                  </span>

                  <h3 className="text-4xl md:text-5xl font-bold text-white mt-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-muted mt-5 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-8 space-y-4">
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                        Problem
                      </h4>
                      <p className="text-sm text-muted mt-1">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm uppercase tracking-wider">
                        Solution
                      </h4>
                      <p className="text-sm text-muted mt-1">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full text-xs border border-white/10 bg-white/5 text-muted-light hover:border-white/20 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-10">
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:shadow-[0_0_50px_rgba(59,130,246,0.25)] transition-shadow"
                    >
                      Live Demo
                      <ArrowUpRight
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </motion.a>

                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white text-sm flex items-center gap-2 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                    >
                      <Code size={16} />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
