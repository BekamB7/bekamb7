"use client";

import { motion } from "framer-motion";
import { Code2, Server, Smartphone, Brain, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Technologies", value: "10+" },
  { label: "Happy Clients", value: "15+" },
];

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, performant web apps with React, Next.js & Tailwind",
    color: "from-blue-500/20 to-blue-600/5",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Scalable APIs with Node.js, Express & Python FastAPI",
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-emerald-500/30",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps built with Flutter",
    color: "from-purple-500/20 to-purple-600/5",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "LLM-powered features, automation & OpenAI API integration",
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-amber-500/30",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
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
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Building robust, scalable solutions that bridge the gap between ideas and reality.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-blue-500/10 bg-blue-950/10 backdrop-blur-sm text-center hover:border-blue-500/30 transition-all duration-300"
            >
              <CardContent className="py-6">
                <div className="text-3xl font-bold text-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              A bit about me
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I joined the tech world 5 years ago with a passion for creating impactful digital
              solutions. Since then, I&apos;ve immersed myself in building user-centric applications
              that solve real problems. I thrive on turning complex ideas into clean, functional
              code that makes a difference.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Currently focused on Backend Development, Flutter mobile apps, AI Integration,
              and System Design — constantly exploring new technologies and approaches to
              deliver better solutions.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="outline" className="border-blue-500/40 text-blue-300">
                <Clock className="w-3 h-3 mr-1" /> 5+ Years Exp
              </Badge>
              <Badge variant="outline" className="border-blue-500/40 text-blue-300">
                <MapPin className="w-3 h-3 mr-1" /> Addis Ababa
              </Badge>
            </div>

            <Separator className="my-6 bg-blue-500/10" />

            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-sm">📍 Based in Addis Ababa, Ethiopia</span>
            </div>
          </motion.div>

          {/* Right: Services Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {services.map((service, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${service.color} ${service.borderColor} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 group`}
              >
                <CardContent className="p-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <h4 className="text-white font-semibold mb-2 text-sm">
                    {service.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}