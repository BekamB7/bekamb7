"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const links = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`
            relative rounded-full transition-all duration-500
            ${scrolled 
              ? "bg-black/60 backdrop-blur-xxl border border-white/10 shadow-xl" 
              : "bg-transparent border-transparent"
            }
          `}
        >
          <div className="px-8 py-3 flex items-center justify-between">
            {/* Desktop Links - Centered with flex-1 and justify-center */}
            <div className="hidden md:flex items-center justify-center flex-1 gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-muted hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Mobile Toggle - Only visible on mobile, pushed to right */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:border-white/20 transition-colors ml-auto"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden md:hidden"
          >
            <div className="px-8 pb-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-muted hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}