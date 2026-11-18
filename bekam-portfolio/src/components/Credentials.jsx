"use client";

import { motion } from "framer-motion";
import { Download, Award, BookOpen, GraduationCap } from "lucide-react";

const certificates = [
  { title: "Ethiocoder Certificate", issuer: "Ethiocoder", year: "", file: "" },
  {
    title: "Eagle Lion Systems Certificate",
    issuer: "Eagle Lion Systems",
    year: "",
    file: "",
  },
];

// TODO(Bekam): add exact certificate title, year, and confirm the exact company name as printed on the certificate
// TODO(Bekam): add certificate files later

const credentials = [
  {
    type: "education",
    title: "Jimma University",
    issuer: "BSc in Software Engineering",
    year: "2023 – Present · Ongoing",
    location: "Jimma, Ethiopia",
  },
  {
    type: "training",
    title: "MERN Stack training",
    issuer: "Evangadi",
    year: "2023 / 2024",
    location: "Remote, online",
  },
  {
    type: "training",
    title: "Huawei Online Course",
    issuer: "Online · 2023",
    year: "",
  },
  ...certificates.map((certificate) => ({
    type: "certificate",
    title: certificate.title,
    issuer: certificate.issuer,
    year: certificate.year,
    file: certificate.file,
  })),
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
            <div className="relative p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-6">
                  <GraduationCap className="text-blue-400" size={32} />
                </div>
                
                <h2 className="text-4xl font-black text-white">My Resume</h2>
                <p className="mt-4 text-muted leading-relaxed">
                  Download my resume to learn more about my experience, skills,
                  and projects.
                </p>
                
                {/* TODO(Bekam): add resume.pdf to /public */}
                <motion.a
                  href="/resume.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 mt-8 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold transition-opacity hover:opacity-90"
                >
                  <Download size={18} />
                  Download Resume
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
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full"
            >
              {/* TODO(Bekam): add expected graduation year */}
              {/* TODO(Bekam): add the exact Huawei course name and confirm the year (2023 is not confirmed) */}
              {credentials.map((credential, index) => (
                <motion.div
                  key={`${credential.type}-${credential.title}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 ${
                    credentials.length % 2 === 1 &&
                    index === credentials.length - 1
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center flex-shrink-0">
                      {credential.type === "education" ? (
                        <GraduationCap className="text-blue-400" size={24} />
                      ) : credential.type === "training" ? (
                        <BookOpen className="text-purple-400" size={24} />
                      ) : (
                        <Award className="text-purple-400" size={24} />
                      )}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold mt-4">
                    {credential.title}
                  </h3>
                  <p className="text-sm text-muted mt-1">
                    {credential.issuer}
                  </p>
                  {credential.location && (
                    <p className="text-xs text-muted mt-1">
                      {credential.location}
                    </p>
                  )}
                  {credential.year && (
                    <p className="text-xs text-muted mt-2">
                      {credential.year}
                    </p>
                  )}
                  {credential.file && (
                    <a
                      href={credential.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm text-blue-300 hover:underline"
                    >
                      View certificate
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}