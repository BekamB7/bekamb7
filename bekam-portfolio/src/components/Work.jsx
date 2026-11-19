"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import {
  SiExpress,
  SiFramer,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { assetPath } from "@/lib/asset-path.mjs";

const SHOW_ROLE_BADGE = false;

const techIcons = {
  "React.js": SiReact,
  React: SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  "Tailwind CSS": SiTailwindcss,
  "Next.js": SiNextdotjs,
  "Next.js (App Router)": SiNextdotjs,
  "Framer Motion": SiFramer,
  TypeScript: SiTypescript,
};

const projects = [
  {
    title: "MenuGo",
    category: "Web App",
    subtitle: "Digital Restaurant Menu & Smart Recommendation System",
    shortDescription:
      "Digital restaurant menu with smart food recommendations.",
    description:
      "Replaces paper-based restaurant menus with a digital platform that makes menu browsing, food discovery, and ordering more convenient for customers and restaurant owners.",
    role: "Backend development and API integration.",
    roleBadge: "Backend & API",
    deployment: "Frontend on Vercel, backend on Render.",
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
  },
  {
    title: "Fast-Ex",
    category: "SaaS Platform",
    subtitle: "Multi-Tenant Online Exam Platform",
    shortDescription:
      "Multi-tenant online exam platform with automatic grading.",
    description:
      "Lets institutions such as schools and universities generate secure exam codes and host their own branded exam portals. Students enter a code, take a timed exam with multiple choice, true/false, or fill-in-the-blank questions, and get instant, auto-graded results. Admins can export results as PDF, and a super-admin dashboard oversees the whole platform.",
    role:
      "Built the full-stack application solo: database design with Prisma, Express REST APIs with JWT authentication and auto-grading logic, and the full Next.js frontend, including a 5-step exam stepper that keeps progress after a refresh and a mobile-first bottom navigation.",
    roleBadge: "Full-stack · Solo",
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
    code: "https://github.com/BekamB7/Fast-Ex",
  },
  {
    title: "Nebelbal",
    category: "SaaS Dashboard",
    subtitle: "Salon & Business Management Dashboard",
    shortDescription:
      "Salon and business management dashboard for Ethiopian salons.",
    description:
      "Solves fragmented operations for Ethiopian salons and service businesses by bringing appointments, staff attendance and commissions, product stock, and customer payments into one dashboard.",
    role:
      "Frontend Developer. Built the responsive user interface, turned complex dashboard requirements into clear layouts, integrated backend APIs with RTK Query and Axios, and added real-time sales and attendance updates with Socket.IO.",
    roleBadge: "Frontend",
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
  },
];

export default function Work() {
  const [imageStates, setImageStates] = useState({});
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted uppercase tracking-[0.3em]">
            Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-muted mt-3 max-w-xl">
            A selection of applications and platforms I&apos;ve designed and
            built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, index) => {
            const imageLoaded = imageStates[project.title] === "loaded";
            const remainingTech = project.tech.slice(4);

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="group relative h-full rounded-2xl bg-white/10 p-px transition-colors duration-300 hover:bg-gradient-to-r hover:from-blue-500/60 hover:to-purple-500/60 md:hover:shadow-[0_6px_20px_rgba(59,130,246,0.08)]"
              >
                <div className="flex h-full flex-col overflow-hidden rounded-[15px] bg-[#0a0a0a]">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live demo`}
                    className="relative block aspect-[16/10] overflow-hidden rounded-t-[15px] bg-gradient-to-br from-blue-600/50 via-indigo-700/50 to-purple-700/70"
                  >
                    <div className="absolute inset-0 grid place-items-center">
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-30"
                        style={{
                          backgroundImage:
                            "radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)",
                          backgroundSize: "18px 18px",
                        }}
                      />
                      <span className="relative text-4xl font-black tracking-tight text-white/90 drop-shadow-lg">
                        {project.title}
                      </span>
                    </div>

                    {imageStates[project.title] !== "error" && (
                      <Image
                        src={project.image}
                        alt={`${project.title} project screenshot`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        onLoad={() =>
                          setImageStates((current) => ({
                            ...current,
                            [project.title]: "loaded",
                          }))
                        }
                        onError={() =>
                          setImageStates((current) => {
                            if (current[project.title] === "error") {
                              return current;
                            }
                            return { ...current, [project.title]: "error" };
                          })
                        }
                        className={`object-cover object-top transition-opacity duration-300 motion-safe:transition-transform motion-safe:duration-700 motion-safe:ease-out motion-safe:group-hover:scale-105 ${
                          imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    )}

                    {SHOW_ROLE_BADGE && (
                      <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                        {project.roleBadge}
                      </span>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100" />
                    <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white opacity-100 backdrop-blur-sm transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                      <ArrowUpRight size={18} aria-hidden="true" />
                    </span>
                  </a>

                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-xs font-medium uppercase tracking-wider text-muted">
                      {project.category}
                    </span>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 truncate text-sm text-muted-light" title={project.subtitle}>
                      {project.subtitle}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => {
                        const Icon = techIcons[tech] ?? Code2;

                        return (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-light"
                          >
                            <Icon
                              size={14}
                              className="shrink-0"
                              aria-hidden="true"
                            />
                            {tech}
                          </span>
                        );
                      })}
                      {remainingTech.length > 0 && (
                        <span
                          title={remainingTech.join(", ")}
                          aria-label={`Additional technologies: ${remainingTech.join(", ")}`}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted-light"
                        >
                          +{remainingTech.length}
                        </span>
                      )}
                    </div>

                    <div className="mt-auto flex items-center gap-3 pt-6">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                      >
                        Live Demo <ArrowUpRight size={15} aria-hidden="true" />
                      </a>
                      {project.privateRepository ? (
                        <span className="px-3 py-2 text-sm text-muted">
                          Private
                        </span>
                      ) : (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-muted-light transition-colors hover:border-white/30 hover:text-white"
                        >
                          <Code2 size={15} aria-hidden="true" />
                          Code
                        </a>
                      )}
                    </div>
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
