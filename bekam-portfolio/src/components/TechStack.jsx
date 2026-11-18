"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPrisma,
  SiMysql,
  SiFlutter,
  SiMongodb,
  SiDeepseek,
  SiGithubcopilot,
  SiFigma,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FiGlobe, FiPenTool } from "react-icons/fi";
import { TbBrandOpenai } from "react-icons/tb";
import {
  BrainCircuit,
  Code2,
  Database,
  Server,
  Smartphone,
  Wrench,
} from "lucide-react";

const stacks = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      { name: "Next.js", icon: SiNextdotjs, highlight: true },
      { name: "React", icon: SiReact, highlight: true },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
      { name: "Framer Motion", icon: SiFramer },
      { name: "Redux Toolkit", icon: SiRedux },
      { name: "RTK Query", icon: SiRedux },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [
      { name: "Node.js", icon: SiNodedotjs, highlight: true },
      { name: "Express.js", icon: SiExpress, highlight: true },
      { name: "REST APIs", icon: FiGlobe },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Socket.IO", icon: SiSocketdotio },
      { name: "Prisma", icon: SiPrisma, highlight: true },
    ],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: [{ name: "Flutter", icon: SiFlutter, learning: true }],
  },
  {
    title: "Databases",
    icon: Database,
    items: [
      { name: "MySQL", icon: SiMysql, highlight: true },
      { name: "MongoDB", icon: SiMongodb, learning: true },
    ],
  },
  {
    title: "AI",
    icon: BrainCircuit,
    items: [
      { name: "OpenAI", icon: TbBrandOpenai },
      { name: "DeepSeek", icon: SiDeepseek },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
    ],
  },
  {
    title: "Design & Tools",
    icon: Wrench,
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Google Stitch", icon: FiPenTool },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Render", icon: SiRender },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-purple-500/5 to-pink-500/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400" />
            <span className="text-sm text-muted uppercase tracking-[0.3em]">Technology</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white">
            Tools I build with
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <stack.icon
                  size={22}
                  className="text-blue-300"
                  aria-hidden="true"
                />
                <h3 className="text-xl font-bold text-white">{stack.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 relative z-10">
                {stack.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                      item.highlight
                        ? "border-blue-400/40 bg-blue-500/10 hover:border-blue-300/60"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <item.icon
                      size={20}
                      className="shrink-0 text-muted-light"
                      aria-hidden="true"
                    />
                    <span className="text-sm text-muted-light">{item.name}</span>
                    {item.learning && (
                      <span className="ml-auto text-[10px] text-blue-300">
                        Learning
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}