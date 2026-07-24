"use client";

import { motion } from "framer-motion";
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss,
  SiNodedotjs, 
  SiExpress, 
  SiFastapi, 
  SiMysql,
  SiFlutter, 
  SiDart, 
  SiFirebase,
  SiOpenid,  // ← Changed from SiOpenai to SiOpenid
  SiDocker, 
  SiGit, 
  SiVercel
} from "react-icons/si";

const stacks = [
  {
    title: "Frontend",
    icon: "🎨",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Mobile",
    icon: "📱",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "AI & Tools",
    icon: "🤖",
    items: [
      { name: "OpenID", icon: SiOpenid, color: "#412991" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
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
                <span className="text-2xl">{stack.icon}</span>
                <h3 className="text-xl font-bold text-white">{stack.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3 relative z-10">
                {stack.items.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    <item.icon size={20} color={item.color} />
                    <span className="text-sm text-muted-light">{item.name}</span>
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