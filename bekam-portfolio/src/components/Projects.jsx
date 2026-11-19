"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code, Folder } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { assetPath } from "@/lib/asset-path.mjs";

// TODO(Bekam): add more projects here later (7+ projects built so far)
const projects = [
  {
    title: "MenuGo",
    category: "Web App",
    description:
      "Digital Restaurant Menu & Smart Recommendation System. Replaces paper-based menus with a digital platform for convenient menu browsing, food discovery, and ordering. My role: Backend development and API integration. Frontend on Vercel, backend on Render.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Prisma",
      "Tailwind CSS",
      "REST API",
    ],
    image: assetPath("/project1.png"),
    live: "https://menu-go-digital-menu.vercel.app/",
    code: "https://github.com/BekamB7/MenuGo-Digital-menu/",
    featured: true,
  },
  {
    title: "Fast-Ex",
    category: "SaaS Platform",
    description:
      "Multi-Tenant Online Exam Platform for institutions to host branded exams with secure codes, timed questions, auto-graded results, PDF exports, and a super-admin dashboard. Built solo, including the database, APIs, authentication, grading, and Next.js frontend.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "Prisma",
      "MySQL",
      "JWT",
      "Vercel",
    ],
    image: assetPath("/project2.png"),
    live: "https://fast-ex-three.vercel.app/",
    // TODO(Bekam): confirm this exact repo URL
    code: "https://github.com/BekamB7/Fast-Ex",
    featured: true,
  },
  {
    title: "Nebelbal",
    category: "SaaS Dashboard",
    description:
      "Salon & Business Management Dashboard bringing appointments, staff attendance and commissions, product stock, and customer payments into one place. Frontend Developer: built responsive interfaces, integrated backend APIs, and added real-time sales and attendance updates.",
    tech: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux Toolkit",
      "RTK Query",
      "Axios",
      "Socket.IO",
      "React Hook Form",
      "Zod",
      "Redux Persist",
      "date-fns",
      "lucide-react",
      "ESLint",
      "Husky",
    ],
    image: assetPath("/project3.png"),
    live: "https://salon.nebelbal.com/?lang=en",
    privateRepository: true,
    featured: true,
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
                      {project.code && (
                        <a
                          href={project.code}
                          className="w-10 h-10 rounded-full bg-gray-800/80 flex items-center justify-center hover:bg-gray-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Code className="w-4 h-4 text-white" />
                        </a>
                      )}
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
                    {project.privateRepository && (
                      <p className="mt-4 text-sm text-gray-400">
                        Private repository
                      </p>
                    )}
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
