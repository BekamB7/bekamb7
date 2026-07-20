"use client";

import { Code, Briefcase, X, Send, Camera, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Code, href: "#", label: "GitHub" },
    { icon: Briefcase, href: "#", label: "LinkedIn" },
    { icon: X, href: "#", label: "Twitter" },
    { icon: Send, href: "#", label: "Telegram" },
    { icon: Camera, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="border-t border-blue-500/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm flex items-center gap-1">
            © {currentYear} Bekam Berhanu. Built with
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-blue-500/20 flex items-center justify-center text-gray-500 hover:text-blue-400 hover:border-blue-400/40 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
