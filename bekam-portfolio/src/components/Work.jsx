"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, code, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "MenuGo Digital Menu SaaS",
    category: "SaaS Platform",

    description:
      "A multi-tenant restaurant management platform that allows businesses to create digital menus, generate QR codes, manage orders and analyze customer activity.",

    problem:
      "Restaurants need a faster way to manage menus and improve customer ordering experience.",

    solution:
      "Built a scalable SaaS architecture with restaurant isolation, dashboards, QR ordering and analytics.",

    tech: ["Next.js", "React", "Node.js", "MySQL", "Prisma", "Tailwind"],

    image: "/images/menu-go.png",

    live: "#",

    github: "#",

    featured: true,
  },

  {
    title: "Mezmur App",

    category: "Web Application",

    description:
      "A modern music platform for discovering and listening to spiritual songs with search and personalized features.",

    problem: "Users needed an easier way to discover and organize songs.",

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
      "A management platform designed to organize district operations, reporting and resource tracking.",

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
  return (
    <section
      id="work"
      className="
relative
py-32
bg-[#050816]
"
    >
      <div
        className="
container
mx-auto
px-6
max-w-7xl
"
      >
        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
mb-20
"
        >
          <p
            className="
text-blue-400
uppercase
tracking-[0.3em]
text-xs
mb-5
"
          >
            Featured Work
          </p>

          <h2
            className="
text-5xl
md:text-7xl
font-black
tracking-tight
"
          >
            Projects that
            <br />
            <span
              className="
bg-gradient-to-r
from-blue-400
to-purple-500
text-transparent
bg-clip-text
"
            >
              solve real problems
            </span>
          </h2>

          <p
            className="
mt-6
text-slate-400
max-w-xl
text-lg
"
          >
            A selection of applications and platforms I have designed and built.
          </p>
        </motion.div>

        <div
          className="
space-y-32
"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className={`
grid
lg:grid-cols-2
gap-12
items-center
${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}
`}
            >
              {/* IMAGE */}

              <div
                className="
relative
group
"
              >
                <div
                  className="
absolute
inset-0
bg-gradient-to-r
from-blue-500/30
to-purple-500/30
blur-3xl
opacity-0
group-hover:opacity-100
transition
"
                />

                <div
                  className="
relative
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={900}
                    height={600}
                    className="
w-full
h-[420px]
object-cover
group-hover:scale-105
transition
duration-700
"
                  />
                </div>
              </div>

              {/* CONTENT */}

              <div>
                <span
                  className="
text-sm
text-purple-400
"
                >
                  {project.category}
                </span>

                <h3
                  className="
text-4xl
font-bold
text-white
mt-4
"
                >
                  {project.title}
                </h3>

                <p
                  className="
text-slate-400
mt-5
leading-relaxed
"
                >
                  {project.description}
                </p>

                <div
                  className="
mt-8
space-y-4
"
                >
                  <div>
                    <h4
                      className="
text-white
font-semibold
"
                    >
                      Problem
                    </h4>

                    <p
                      className="
text-sm
text-slate-400
"
                    >
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4
                      className="
text-white
font-semibold
"
                    >
                      Solution
                    </h4>

                    <p
                      className="
text-sm
text-slate-400
"
                    >
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* TECH */}

                <div
                  className="
flex
flex-wrap
gap-2
mt-8
"
                >
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
px-3
py-1.5
rounded-full
text-xs
border
border-white/10
bg-white/5
text-slate-300
"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* LINKS */}

                <div
                  className="
flex
gap-4
mt-10
"
                >
                  <a
                    href={project.live}
                    className="
px-5
py-3
rounded-full
bg-white
text-black
font-semibold
text-sm
flex
items-center
gap-2
"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.code}
                    className="
px-5
py-3
rounded-full
border
border-white/10
text-white
text-sm
flex
items-center
gap-2
"
                  >
                    <code size={16} />
                    Code
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
