"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, X, Send, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: X, href: "#", label: "Twitter" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: Camera, href: "#", label: "Instagram" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/15 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-blue-400 font-medium mb-4 tracking-wider uppercase text-sm"
            >
              Full Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
                Bekam
              </span>
              <br />
              <span className="text-white">Berhanu</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Building user-centric and best food solutions on the table. Crafting
              robust digital experiences with clean code, modern architecture, and
              AI-powered innovation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-14 text-base group"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600/50 text-blue-300 hover:bg-blue-600/10 rounded-full px-8 h-14 text-base"
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex gap-4 mt-10 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-blue-500/30 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/60 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar with modern treatment */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-blue-500/20"
                style={{ padding: "20px" }}
              />
              {/* Middle decorative ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-dashed border-blue-400/10"
              />
              {/* Image container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gradient-to-br from-blue-600/20 to-blue-900/20 backdrop-blur-sm border border-blue-500/20 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-blue-950">
                  <img
                    src="/images/profile.png"
                    alt="Bekam Berhanu"
                    className="w-full h-full object-cover mix-blend-luminosity opacity-90 hover:mix-blend-normal hover:opacity-100 transition-all duration-700"
                  />
                </div>
              </div>
              {/* Floating dot decorations */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-4 h-4 rounded-full bg-blue-500/60"
              />
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-blue-400/40"
              />
            </div>
          </motion.div>

          {/* Mobile avatar (smaller, centered) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="lg:hidden flex justify-center"
          >
            <div className="relative w-48 h-48 rounded-full overflow-hidden bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/30 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-900 to-blue-950">
                <img
                  src="/images/profile.png"
                  alt="Bekam Berhanu"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center"
        >
          <div className="w-1 h-2 bg-blue-400 rounded-full mt-1" />
        </motion.div>
      </motion.div>
    </section>
  );
}