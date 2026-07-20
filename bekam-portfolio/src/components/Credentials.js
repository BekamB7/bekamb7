"use client";

import { motion } from "framer-motion";
import { Download, Award, FileText, ExternalLink, Shield, Star } from "lucide-react";

const certificates = [
  {
    title: "Meta Backend Developer",
    issuer: "Meta (Coursera)",
    date: "2024",
    credential: "Verified Certificate",
    color: "from-blue-500/20 to-blue-600/5",
    border: "border-blue-500/20",
    icon: Award,
  },
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    date: "2023",
    credential: "Certification",
    color: "from-emerald-500/20 to-emerald-600/5",
    border: "border-emerald-500/20",
    icon: Shield,
  },
  {
    title: "AI For Everyone",
    issuer: "DeepLearning.AI",
    date: "2024",
    credential: "Course Certificate",
    color: "from-purple-500/20 to-purple-600/5",
    border: "border-purple-500/20",
    icon: Star,
  },
  {
    title: "System Design Fundamentals",
    issuer: "Udemy",
    date: "2024",
    credential: "Certificate of Completion",
    color: "from-amber-500/20 to-amber-600/5",
    border: "border-amber-500/20",
    icon: FileText,
  },
];

export default function Credentials() {
  return (
    <section id="credentials" className="relative py-32 bg-pitch-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-accent-blue font-semibold">
              Credentials
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left: CV Download Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-2 p-10 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-navy/[0.4] to-navy/[0.1] flex flex-col justify-between relative overflow-hidden"
            >
              {/* Decorative background */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-blue/5 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-accent-blue/10 flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-accent-blue" />
                </div>
                <h3 className="text-2xl font-bold text-cream mb-3">
                  Download My CV
                </h3>
                <p className="text-cream-muted/70 leading-relaxed mb-8 font-light">
                  Get a detailed overview of my experience, skills, and
                  projects. Available in PDF format.
                </p>
              </div>

              <motion.a
                href="/files/BEKAMB7.pdf"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cream text-pitch-black font-semibold text-sm hover:bg-cream-dark transition-colors w-fit"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Right: Certificates Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-3 grid sm:grid-cols-2 gap-4"
            >
              {certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className={`p-5 rounded-2xl border ${cert.border} bg-gradient-to-br ${cert.color} bg-white/[0.01] transition-all duration-300 group cursor-default`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <cert.icon className="w-5 h-5 text-cream-muted group-hover:text-cream transition-colors" />
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05] text-cream-muted/60">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-cream mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-cream-muted/60 mb-2">
                    {cert.issuer}
                  </p>
                  <span className="text-[10px] text-accent-blue/70">
                    {cert.credential}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}