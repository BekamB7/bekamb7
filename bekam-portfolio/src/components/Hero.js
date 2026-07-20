"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pitch-black bg-noise"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Large Gradient Orbs */}
      <div className="absolute top-1/3 -left-32 w-[600px] h-[600px] bg-blue-600/[0.03] rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-blue-800/[0.02] rounded-full blur-[150px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy/[0.02] rounded-full blur-[200px]" />

      <div className="container mx-auto px-6 z-10 py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-cream-muted tracking-wide">
                Open to Opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[0.9] mb-6"
          >
            <span className="text-cream">Bekam</span>
            <br />
            <span className="text-gradient-blue">Berhanu</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-xl sm:text-2xl text-cream-muted font-light mb-4 tracking-wide"
          >
            Full Stack Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-cream-muted/70 text-base sm:text-lg max-w-xl mx-auto mb-12 leading-relaxed font-light"
          >
            Building user-centric, best-in-class digital solutions — from
            scalable backends to pixel-perfect frontends, with AI-powered
            intelligence at the core.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-cream text-pitch-black font-semibold text-sm hover:bg-cream-dark transition-colors"
            >
              View My Work
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.a
              href="/files/BEKAMB7.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/[0.1] text-cream text-sm hover:bg-white/[0.03] hover:border-white/[0.2] transition-all"
            >
              <Download className="w-4 h-4" />
              Download CV
            </motion.a>
          </motion.div>

          {/* Trusted By / Quick Stats */}
          <motion.div
            variants={fadeUp}
            className="mt-20 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-cream">5+</div>
              <div className="text-xs text-cream-muted mt-1">Years Exp.</div>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cream">20+</div>
              <div className="text-xs text-cream-muted mt-1">Projects</div>
            </div>
            <div className="w-px h-8 bg-white/[0.08]" />
            <div className="text-center">
              <div className="text-2xl font-bold text-cream">10+</div>
              <div className="text-xs text-cream-muted mt-1">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pitch-black to-transparent pointer-events-none" />
    </section>
  );
}