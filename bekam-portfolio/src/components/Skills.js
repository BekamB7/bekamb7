"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 82 },
      { name: "Express", level: 80 },
      { name: "Python FastAPI", level: 75 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    title: "Mobile & AI",
    skills: [
      { name: "Flutter", level: 70 },
      { name: "OpenAI API", level: 75 },
      { name: "System Design", level: 65 },
      { name: "Git & Vercel", level: 85 },
    ],
  },
  {
    title: "Currently Learning",
    skills: [
      { name: "Advanced Backend", level: 50 },
      { name: "Flutter Advanced", level: 45 },
      { name: "AI & LLMs", level: 55 },
      { name: "System Architecture", level: 40 },
    ],
  },
];

function SkillBar({ name, level, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-blue-950/30 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5 + index * 0.1,
            duration: 1,
            ease: "easeOut",
          }}
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
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
            Skills
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies I{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A growing toolkit of modern technologies for building complete
            digital solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.15, duration: 0.5 }}
            >
              <Card className="border-blue-500/10 bg-blue-950/10 backdrop-blur-sm h-full">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    {category.title}
                  </h3>
                  {category.skills.map((skill, i) => (
                    <SkillBar
                      key={i}
                      name={skill.name}
                      level={skill.level}
                      index={i}
                    />
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
