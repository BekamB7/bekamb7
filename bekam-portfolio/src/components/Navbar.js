"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Credentials", href: "#credentials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-black/70 backdrop-blur-2xl border-b border-white/[0.04]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("#home")}
          className="relative group"
        >
          <div className="text-cream font-bold text-xl tracking-tight">
            Bekam<span className="text-accent-blue">.</span>
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent-blue group-hover:w-full transition-all duration-300" />
        </button>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm tracking-wide transition-all duration-300 hover:text-cream ${
                activeSection === link.href
                  ? "text-cream"
                  : "text-cream-muted"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Resume Button */}
        <motion.a
          href="/files/BEKAMB7.pdf"
          download
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-cream text-sm hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-300"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Resume</span>
        </motion.a>
      </div>
    </motion.nav>
  );
}