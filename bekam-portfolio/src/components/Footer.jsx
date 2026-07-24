"use client";

import { motion } from "framer-motion";
import { ArrowUp, Code, Briefcase, X, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black text-white">
              Bekam<span className="gradient-text">.</span>
            </h3>
            <p className="text-sm text-muted mt-1">Full Stack Developer</p>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              className="text-muted hover:text-white transition-colors"
            >
              <Code size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              className="text-muted hover:text-white transition-colors"
            >
              <Briefcase size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="#"
              className="text-muted hover:text-white transition-colors"
            >
              <X size={18} />
            </motion.a>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-xs text-muted flex items-center gap-1">
              Made with <Heart size={12} className="text-pink-500" /> in
              Ethiopia
            </p>

            <motion.button
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
