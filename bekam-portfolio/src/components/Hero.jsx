"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Download,
  Send,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const roles = ["Web Apps", "Mobile Apps", "UI Design", "AI Integration"];

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

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[loopIndex % roles.length];
    const delay = isDeleting
      ? 50
      : displayText === currentRole
        ? 2000
        : 150;
    const timer = setTimeout(() => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setLoopIndex((index) => index + 1);
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }
      } else if (displayText === currentRole) {
        setIsDeleting(true);
      } else {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-[#0a0a0a] overflow-hidden"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="pointer-events-none absolute bottom-0 right-0 z-[1] h-[55%] md:h-[65%] lg:bottom-auto lg:-top-[4%] lg:h-[104%]">
        <Image
          src="/portfolio_background_removed.png"
          alt="Bekam Berhanu"
          width={430}
          height={580}
          sizes="(min-width: 1024px) 54vw, (min-width: 768px) 68vw, 85vw"
          className="h-full w-auto max-w-none object-contain object-bottom"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 80%, transparent 100%)",
          }}
          priority
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(rgba(10,10,10,0.6), rgba(10,10,10,0.14)), radial-gradient(ellipse at 50% 35%, rgba(10,10,10,0) 35%, rgba(10,10,10,0.18) 70%, rgba(10,10,10,0.32) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="w-full max-w-full lg:max-w-[min(31vw,640px)] xl:max-w-[min(34vw,640px)]">
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
                Available for freelance &amp; remote work
              </span>
            </div>

            {/* Name */}
            <h1 className="text-[clamp(2.25rem,4vw,4.25rem)] font-bold text-white tracking-tight leading-tight">
              I&apos;m <span className="gradient-text">Bekam Berhanu</span>
            </h1>

            <p className="text-[clamp(1.1rem,1.75vw,1.5rem)] font-medium text-muted-light">
              Full-Stack Developer
            </p>

            <h2 className="text-[clamp(1.4rem,2.65vw,2.75rem)] font-bold tracking-tight leading-tight text-balance">
              I build simple, impactful products{" "}
              <span className="gradient-text">with clear structure.</span>
            </h2>

            <div className="min-h-6 text-sm leading-6">
              <span className="text-muted">Specializing in </span>
              <span className="font-semibold text-blue-400">
                {displayText}
                <span className="ml-0.5 inline-block h-4 w-[2px] animate-pulse bg-blue-400 align-middle" />
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-muted max-w-lg leading-relaxed">
              Full-stack developer building web apps, mobile apps, and
              AI-powered features, with a business eye for solving real problems
              with the least complexity.
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

              {/* TODO(Bekam): add resume.pdf to /public */}
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3 rounded-full border border-white/10 bg-black/30 backdrop-blur-sm text-white font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition"
              >
                <Download size={15} />
                Download Resume
              </motion.a>
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-4">
              {/* TODO(Bekam): add LinkedIn link when ready */}
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
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