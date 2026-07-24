"use client";

import { motion } from "framer-motion";
import { Download, Award, GraduationCap, CheckCircle2 } from "lucide-react";

const certificates = [
  { name: "Meta Backend Developer", issuer: "Meta", year: "2023" },
  { name: "FreeCodeCamp Full Stack", issuer: "FreeCodeCamp", year: "2023" },
  { name: "AI For Everyone", issuer: "DeepLearning.AI", year: "2022" },
  { name: "System Design Fundamentals", issuer: "Groking", year: "2023" },
];

export default function Credentials() {
  return (
    <section id="credentials" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* CV Card - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-700" />
            <div className="relative p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                  <GraduationCap className="text-blue-400" size={32} />
                </div>
                
                <h2 className="text-4xl font-black text-white">My Resume</h2>
                <p className="mt-4 text-muted leading-relaxed">
                  Download my CV to see my experience, technical skills, and completed projects in detail.
                </p>
                
                <motion.a
                  href="/files/BEKAMB7.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:shadow-[0_0_60px_rgba(59,130,246,0.3)] transition-shadow"
                >
                  <Download size={18} />
                  Download CV
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Certificates - Takes 3 columns */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4 h-full"
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                      <Award className="text-purple-400" size={24} />
                    </div>
                    <CheckCircle2 className="text-green-400" size={18} />
                  </div>
                  <h3 className="text-white font-semibold mt-4">{cert.name}</h3>
                  <p className="text-sm text-muted mt-1">{cert.issuer}</p>
                  <p className="text-xs text-muted mt-2">{cert.year}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}