"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Nebalab Team",
    location: "Remote",
    description: "Building scalable web applications, APIs, and digital products with modern technologies and best practices.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    year: "2021 - 2023",
    role: "Backend Developer",
    company: "Freelance",
    location: "Addis Ababa",
    description: "Designed backend systems, databases, and REST APIs for various applications and clients.",
    skills: ["Express", "MySQL", "REST API", "Prisma"],
  },
  {
    year: "2019 - 2021",
    role: "Self-Taught Developer",
    company: "Learning Journey",
    location: "Online",
    description: "Built strong foundations in programming, web development, and software engineering through self-learning.",
    skills: ["JavaScript", "Python", "HTML/CSS", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400" />
            <span className="text-sm text-muted uppercase tracking-[0.3em]">Experience</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white">My Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-16 group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] transition-shadow">
                  <Briefcase size={16} className="text-white" />
                </div>

                <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group-hover:border-white/20">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <span className="text-sm text-purple-400 font-medium flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.year}
                      </span>
                      <h3 className="text-2xl font-bold text-white mt-2">{exp.role}</h3>
                      <p className="text-blue-400 font-medium mt-1">{exp.company}</p>
                      <p className="text-sm text-muted flex items-center gap-2 mt-1">
                        <MapPin size={14} />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-muted leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full text-xs border border-white/10 bg-white/5 text-muted-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}