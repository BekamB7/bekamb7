"use client";

import { motion } from "framer-motion";
import { Code2, Database, Smartphone, Brain, Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    desc: "React, Next.js, Tailwind — crafting interfaces that feel alive.",
  },
  {
    icon: Database,
    title: "Backend Architecture",
    desc: "Node.js, Express, FastAPI — scalable APIs that just work.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Flutter apps with native performance and beautiful design.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    desc: "OpenAI, LLMs, automation — intelligent features that add value.",
  },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Nebalab Team",
    period: "2023 - Present",
    type: "Team",
  },
  {
    role: "Backend Developer",
    company: "Freelance",
    period: "2021 - 2023",
    type: "Freelance",
  },
  {
    role: "Junior Developer",
    company: "Self-Taught Journey",
    period: "2019 - 2021",
    type: "Learning",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-pitch-black">
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
              About
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-cream leading-tight mb-6">
                Crafting digital
                <br />
                <span className="text-gradient-blue">experiences</span> that
                matter.
              </h2>
              <p className="text-cream-muted/70 leading-relaxed mb-8 font-light">
                I started my journey 5 years ago, driven by curiosity and a
                desire to build things that make a real impact. From self-taught
                beginnings to working with teams, I&apos;ve developed a deep
                understanding of both frontend elegance and backend robustness.
              </p>
              <p className="text-cream-muted/70 leading-relaxed font-light">
                Based in Addis Ababa, I specialize in creating end-to-end
                solutions — combining modern web technologies with AI
                capabilities to deliver intelligent, scalable applications.
              </p>

              {/* Quote */}
              <div className="mt-10 p-6 rounded-2xl bg-navy/[0.3] border border-white/[0.04] relative">
                <Sparkles className="absolute top-4 right-4 w-4 h-4 text-accent-blue/40" />
                <p className="text-cream-muted italic text-sm leading-relaxed">
                  &ldquo;I believe the best solutions come from understanding
                  both the user and the technology deeply. Every line of code
                  should serve a purpose.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Right Column - Services & Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-6"
            >
              {/* Services */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="p-5 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/[0.1] transition-all duration-300 group"
                  >
                    <service.icon className="w-5 h-5 text-accent-blue mb-3" />
                    <h4 className="text-cream text-sm font-semibold mb-1">
                      {service.title}
                    </h4>
                    <p className="text-cream-muted/60 text-xs leading-relaxed">
                      {service.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Experience Timeline */}
              <div className="space-y-1 mt-8">
                <h3 className="text-sm font-semibold text-cream mb-4 tracking-wide uppercase">
                  Experience
                </h3>
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-3 border-b border-white/[0.03] last:border-0"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 shrink-0" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-cream text-sm font-medium">
                          {exp.role}
                        </span>
                        <span className="text-xs text-cream-muted/50">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-cream-muted/60 text-xs">
                          {exp.company}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-navy text-cream-muted/70">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-accent-blue text-sm font-medium mt-4 group"
              >
                Let&apos;s work together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}