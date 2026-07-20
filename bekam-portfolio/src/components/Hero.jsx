"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Code,
  Briefcase,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "Full Stack Developer",
    "UI / UX Designer",
    "AI Enthusiast",
    "Problem Solver",
  ];

  const [displayText, setDisplayText] = useState("");
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const current = roles[loopIndex % roles.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.substring(0, displayText.length + 1));

        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? 50 : 110);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#060606] overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-[-180px] -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-[180px]" />

        <div className="absolute right-[-120px] bottom-[-100px] w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[180px]" />

        <div className="absolute left-[-150px] bottom-[20%] w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[150px]" />

      </div>

      {/* Grid */}

      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-8">

        {/* Floating Card */}

        <div className="rounded-[36px] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-[0_0_80px_rgba(255,255,255,0.04)]">

          {/* ================= NAVBAR ================= */}

          <nav className="flex items-center justify-between px-8 py-7 border-b border-white/10">

            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-white"
            >
              Bekam
              <span className="text-blue-500">.</span>
            </Link>

            <div className="hidden lg:flex items-center gap-10">

              {["Home", "About", "Projects", "Services", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-zinc-400 hover:text-white transition"
                  >
                    {item}
                  </a>
                )
              )}
            </div>

            <div className="hidden lg:flex items-center gap-3">

              <a
                href="#contact"
                className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition text-sm font-medium text-white"
              >
                Let's Talk
              </a>

            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="lg:hidden text-white"
            >
              {mobileMenu ? <X /> : <Menu />}
            </button>

          </nav>

          {/* ================= HERO ================= */}

          <div className="grid lg:grid-cols-2 gap-20 items-center px-8 lg:px-16 py-16">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .7 }}
            >

              {/* Badge */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: .2 }}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2"
              >

                <span className="relative flex h-3 w-3">

                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70" />

                  <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />

                </span>

                <span className="text-sm text-zinc-300">
                  Available for freelance
                </span>

              </motion.div>

              {/* Heading */}

              <motion.h1
                initial={{ opacity:0,y:20 }}
                animate={{ opacity:1,y:0 }}
                transition={{ delay:.3 }}
                className="mt-8 text-6xl md:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tight text-white"
              >

                Building

                <br />

                Digital

                <br />

                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">

                  Experiences

                </span>

              </motion.h1>

              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:.5 }}
                className="mt-8 flex items-center gap-2"
              >

                <span className="text-zinc-400">
                  I'm a
                </span>

                <span className="font-semibold text-white">

                  {displayText}

                  <span className="ml-1 animate-pulse">
                    |
                  </span>

                </span>

              </motion.div>

              <motion.p
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:.7 }}
                className="mt-8 max-w-xl text-lg leading-8 text-zinc-400"
              >

                Hi, I'm

                <span className="text-white font-semibold">
                  {" "}Bekam Berhanu
                </span>

                , a Full Stack Developer passionate about building modern,
                scalable web applications with exceptional user experiences,
                robust backend architecture, and AI-powered solutions that
                create real business value.

              </motion.p>

              {/* Buttons */}

              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:.9 }}
                className="mt-12 flex flex-wrap gap-5"
              >

                <a
                  href="#projects"
                  className="group flex items-center gap-3 rounded-full bg-white text-black px-8 py-4 font-semibold transition hover:scale-105"
                >
                  View Projects

                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />

                </a>

                <a
                  href="/files/BEKAMB7.pdf"
                  download
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
                >
                  <Download size={18} />

                  Resume

                </a>

              </motion.div>

              {/* Socials */}

              <motion.div
                initial={{ opacity:0 }}
                animate={{ opacity:1 }}
                transition={{ delay:1 }}
                className="flex gap-5 mt-12"
              >

                {[
                  Code,
                  Briefcase,
                  Mail,
                ].map((Icon,index)=>(
                  <a
                    key={index}
                    href="#"
                    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition"
                  >
                    <Icon size={18}/>
                  </a>
                ))}

              </motion.div>

            </motion.div>

            {/* RIGHT IMAGE STARTS HERE */}
                        <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              {/* Main Glow */}

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="w-[550px] h-[550px] rounded-full bg-blue-500/10 blur-[120px]" />

              </div>

              {/* Floating Experience Card */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute left-0 top-20 z-30 hidden lg:block"
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 py-5">

                  <p className="text-4xl font-black text-white">
                    3+
                  </p>

                  <p className="text-sm text-zinc-400">
                    Years Experience
                  </p>

                </div>
              </motion.div>

              {/* Floating Project Card */}

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute right-0 bottom-16 z-30 hidden lg:block"
              >
                <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 py-5">

                  <p className="text-4xl font-black text-white">
                    50+
                  </p>

                  <p className="text-sm text-zinc-400">
                    Projects Completed
                  </p>

                </div>
              </motion.div>

              {/* Main Image Wrapper */}

              <div className="relative">

                {/* Decorative Ring */}

                <div className="absolute inset-0 rounded-full border border-white/5 scale-110" />

                <div className="absolute inset-0 rounded-full border border-white/5 scale-[1.25]" />

                {/* Image Container */}

                <motion.div
                  whileHover={{
                    rotate: 1,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative w-[340px] h-[440px] md:w-[420px] md:h-[540px]"
                >

                  {/* Glow Behind Image */}

                  <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-3xl" />

                  {/* Glass Border */}

                  <div className="absolute inset-0 rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl" />

                  {/* Profile Image */}

                  <div className="absolute inset-2 overflow-hidden rounded-[34px]">

                    <Image
                      src="/profile.png"
                      alt="Bekam Berhanu"
                      fill
                      priority
                      className="object-cover"
                    />

                    {/* Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                  </div>

                  {/* Bottom Info */}

                  <div className="absolute bottom-6 left-6 right-6 z-20">

                    <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-4">

                      <p className="text-xl font-bold text-white">
                        Bekam Berhanu
                      </p>

                      <p className="text-sm text-zinc-400">
                        Full Stack Developer
                      </p>

                    </div>

                  </div>

                </motion.div>

              </div>

              {/* Decorative Dot */}

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-10 right-20 hidden lg:block"
              >
                <div className="w-5 h-5 rounded-full bg-blue-500" />
              </motion.div>

              {/* Decorative Dot */}

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-20 left-20 hidden lg:block"
              >
                <div className="w-4 h-4 rounded-full bg-purple-500" />
              </motion.div>

            </motion.div>

          </div>

          {/* CLIENT STRIP STARTS HERE */}
                    {/* ================= CLIENTS ================= */}

          <div className="border-t border-white/10">

            <div className="px-8 lg:px-16 py-8">

              <p className="text-xs uppercase tracking-[0.35em] text-zinc-500 text-center mb-8">
                Technologies I Work With
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "TypeScript",
                  "MongoDB",
                  "Python",
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.04,
                    }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] py-5 text-center"
                  >
                    <span className="font-semibold text-zinc-300">
                      {item}
                    </span>
                  </motion.div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3"
      >

        <span className="text-xs tracking-[0.25em] uppercase text-zinc-500">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
          className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent"
        />

      </motion.div>

      {/* ================= MOBILE MENU ================= */}

      {mobileMenu && (

        <motion.div
          initial={{
            opacity: 0,
            y: -30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -30,
          }}
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl lg:hidden"
        >

          <div className="flex justify-between items-center p-8">

            <h2 className="text-2xl font-black text-white">
              Bekam
              <span className="text-blue-500">.</span>
            </h2>

            <button
              onClick={() => setMobileMenu(false)}
              className="text-white"
            >
              <X size={28} />
            </button>

          </div>

          <div className="mt-10 flex flex-col items-center gap-10">

            {[
              "Home",
              "About",
              "Projects",
              "Services",
              "Contact",
            ].map((item) => (

              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenu(false)}
                className="text-3xl font-semibold text-zinc-300 hover:text-white transition"
              >
                {item}
              </a>

            ))}

            <a
              href="/files/BEKAMB7.pdf"
              download
              className="mt-6 rounded-full bg-white text-black px-8 py-4 font-semibold"
            >
              Download Resume
            </a>

          </div>

        </motion.div>

      )}

    </section>
  );
}