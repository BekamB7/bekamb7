"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, Brain, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "Building modern frontend experiences and scalable backend systems with best practices.",
    color: "blue",
  },
  {
    icon: Brain,
    title: "AI Integration",
    text: "Creating intelligent features using AI APIs, machine learning, and automation.",
    color: "purple",
  },
  {
    icon: Rocket,
    title: "Product Thinking",
    text: "Turning ideas into useful digital products that people actually want to use.",
    color: "pink",
  },
];

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Passion for Building" },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-purple-500/5 to-pink-500/5 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400" />
              <span className="text-sm text-muted uppercase tracking-[0.3em]">About Me</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
              Building technology that creates
              <span className="gradient-text block mt-2">real impact.</span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-muted">
              I'm <span className="text-white font-semibold">Bekam Berhanu</span>, a Full Stack Developer 
              focused on creating modern web applications, backend architectures, and AI-powered solutions 
              that make a difference.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-muted">
              My journey started with curiosity and self-learning. Over the years, I've transformed 
              ideas into functional products—from SaaS platforms to custom digital solutions.
            </p>

            <div className="mt-8 p-6 rounded-3xl border border-white/10 bg-white/5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5" />
              <Sparkles className="text-purple-400 mb-3 relative z-10" />
              <p className="italic text-muted-light relative z-10">
                "Great software is not only about code. It's about solving problems people actually have."
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-black gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 8 }}
                className="group p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 cursor-pointer"
              >
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:gradient-text transition-all">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}