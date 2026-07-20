"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, Code, Briefcase, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "AI Enthusiast",
    "Problem Solver",
  ];

  useEffect(() => {
    let timer;
    const currentRole = roles[loopIndex % roles.length];

    if (isDeleting) {
      setTypingSpeed(50);
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setLoopIndex(loopIndex + 1);
          setTypingSpeed(150);
        }
      }, typingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden"
    >
      {/* Profile Image as Background - Positioned on the Right */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-20">
          <Image
            src="/profile.png"
            alt="Bekam Berhanu"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
        {/* Gradient Overlay to fade the image */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0a0a]/60 to-[#0a0a0a] z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/40 z-[1]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 z-[2]" />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-xs font-medium text-muted-light">
                Available for opportunities
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl font-bold text-white tracking-tight">
              I'm <span className="gradient-text">Bekam</span>
            </h1>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Am ready for
              <br />
              <span className="gradient-text">your project</span>
            </h2>

            {/* Typing Effect */}
            <div className="flex items-center gap-2">
              <span className="text-base text-muted">I'm a</span>
              <span className="text-base font-semibold text-white">
                {displayText}
                <span className="inline-block w-[2px] h-4 bg-blue-400 ml-0.5 animate-pulse" />
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted max-w-lg leading-relaxed">
              I'm a Full Stack Developer specializing in modern web applications,
              backend architecture, and AI integrations that drive real impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-sm flex items-center gap-2 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              >
                View My Work
                <ArrowRight size={15} />
              </motion.a>

              <motion.a
                href="/files/BEKAMB7.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm text-white font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition"
              >
                <Download size={15} />
                Download CV
              </motion.a>
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-4">
              {[
                { icon: Code , href: "#" },
                { icon: Briefcase, href: "#" },
                { icon: X, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}