"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  Heart,
  Send,
  X,
} from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/BekamB7" },
  { label: "X", icon: X, href: "https://x.com/Bekam_baki12" },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/baki_m_ni/",
  },
  { label: "Telegram", icon: Send, href: "https://t.me/Chartedadam" },
];

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
              Bekam Berhanu<span className="gradient-text">.</span>
            </h3>
            <p className="text-sm text-muted mt-1">
              Bekam Berhanu · Full-Stack Developer · Addis Ababa, Ethiopia
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ scale: 1.1, y: -2 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted hover:text-white transition-colors"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-muted">
                © {new Date().getFullYear()} Bekam Berhanu
              </p>
              <p className="text-xs text-muted flex items-center gap-1 mt-1">
                Made in
                Ethiopia
              </p>
            </div>

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
