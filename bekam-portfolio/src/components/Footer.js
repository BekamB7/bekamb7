"use client";

import { Code, Briefcase, X, Send, Camera, ArrowUp } from "lucide-react";

const socials = [
  { icon: Code, href: "#", label: "GitHub" },
  { icon: Briefcase, href: "#", label: "LinkedIn" },
  { icon: X, href: "#", label: "Twitter" },
  { icon: Send, href: "#", label: "Telegram" },
  { icon: Camera, href: "#", label: "Instagram" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/[0.04] bg-pitch-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={scrollToTop} className="group">
            <span className="text-cream font-bold text-lg">
              Bekam<span className="text-accent-blue">.</span>
            </span>
          </button>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/[0.05] flex items-center justify-center text-cream-muted/50 hover:text-cream hover:border-white/[0.15] hover:bg-white/[0.02] transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>

          {/* Copyright & Back to top */}
          <div className="flex items-center gap-4">
            <p className="text-xs text-cream-muted/50">
              © {new Date().getFullYear()} Bekam Berhanu
            </p>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full border border-white/[0.08] flex items-center justify-center text-cream-muted/50 hover:text-cream hover:border-white/[0.2] transition-all"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
