"use client";

import { motion } from "framer-motion";
import { Download, Award } from "lucide-react";

const certificates = [
  "Meta Backend Developer",

  "FreeCodeCamp Full Stack",

  "AI For Everyone",

  "System Design Fundamentals",
];

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="
py-32
bg-[#050816]
"
    >
      <div
        className="
max-w-6xl
mx-auto
px-6
"
      >
        <div
          className="
grid
lg:grid-cols-2
gap-10
"
        >
          {/* CV */}

          <motion.div
            className="
rounded-3xl
border
border-white/10
bg-gradient-to-br
from-blue-500/10
to-purple-500/10
p-10
"
          >
            <h2
              className="
text-4xl
font-black
text-white
"
            >
              My Resume
            </h2>

            <p
              className="
mt-5
text-slate-400
leading-relaxed
"
            >
              Download my CV to see my experience, technical skills and
              completed projects.
            </p>

            <a
              href="/files/BEKAMB7.pdf"
              download
              className="
inline-flex
items-center
gap-3
mt-8
px-6
py-3
rounded-full
bg-white
text-black
font-semibold
"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          {/* CERTIFICATES */}

          <div
            className="
grid
sm:grid-cols-2
gap-5
"
          >
            {certificates.map((cert) => (
              <div
                key={cert}
                className="
p-6
rounded-3xl
border
border-white/10
bg-white/[0.03]
"
              >
                <Award
                  className="
text-purple-400
mb-4
"
                />

                <h3
                  className="
text-white
font-semibold
"
                >
                  {cert}
                </h3>

                <p
                  className="
text-sm
text-slate-400
mt-2
"
                >
                  Verified Certificate
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
