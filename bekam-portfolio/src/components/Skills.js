"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Smartphone,
  Brain,
  GitBranch,
  Cloud,
  Layers,
  Cpu,
} from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    icon: Code2,
    items: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 82 },
      { name: "Python FastAPI", level: 78 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: [
      { name: "Flutter", level: 72 },
      { name: "Dart", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "Firebase", level: 65 },
    ],
  },
  {
    category: "AI & Tools",
    icon: Brain,
    items: [
      { name: "OpenAI API", level: 78 },
      { name: "System Design", level: 68 },
      { name: "Git & Vercel", level: 88 },
      { name: "Prompt Engineering", level: 75 },
    ],
  },
];

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-cream-muted group-hover:text-cream transition-colors">
          {name}
        </span>
        <span className="text-xs text-cream-muted/50">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.03] overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            delay: 0.3 + index * 0.1,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full rounded-full bg-gradient-to-r from-accent-blue to-accent-blue-light"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-pitch-black">
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
              Skills
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: groupIndex * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="p-8 rounded-3xl border border-white/[0.04] bg-white/[0.01] hover:border-white/[0.08] transition-all duration-500"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                    <group.icon className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="text-lg font-semibold text-cream">
                    {group.category}
                  </h3>
                </div>
                <div className="space-y-5">
                  {group.items.map((skill, i) => (
                    <SkillBar
                      key={i}
                      name={skill.name}
                      level={skill.level}
                      index={i}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}