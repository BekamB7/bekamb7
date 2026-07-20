"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code, Briefcase, X, Send, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  const socialLinks = [
    { icon: Code, href: "#", label: "GitHub" },
    { icon: Briefcase, href: "#", label: "LinkedIn" },
    { icon: X, href: "#", label: "Twitter" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: Camera, href: "#", label: "Instagram" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatedBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 z-10 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <span className="text-sm text-gray-400">
                Available for projects
              </span>
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Bekam
              </span>
            </h1>
            <div className="mt-4 text-2xl sm:text-3xl md:text-4xl text-gray-500 font-light">
              Full Stack Developer
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-center text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building user-centric and best food solutions on the table. 
            I craft robust digital experiences with clean code, modern 
            architecture, and AI-powered innovation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center mb-12"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-base group shadow-lg shadow-blue-600/20"
              asChild
            >
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500/40 text-blue-300 hover:bg-blue-600/10 rounded-full px-8 h-14 text-base backdrop-blur-sm"
              asChild
            >
              <a href="/files/BEKAMB7.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-3 justify-center"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                className="w-11 h-11 rounded-full border border-blue-500/20 bg-blue-500/5 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 backdrop-blur-sm"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-xs tracking-[0.2em] uppercase text-gray-600">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center">
          <motion.div
            animate={{ y: [4, 16, 4] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-blue-400 rounded-full mt-1"
          />
        </div>
      </motion.div>
    </section>
  );
}