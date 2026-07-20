"use client";

import { motion } from "framer-motion";

const experience = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "Nebalab Team",
    description:
      "Building scalable web applications, APIs and digital products with modern technologies.",
  },

  {
    year: "2021 - 2023",
    role: "Backend Developer",
    company: "Freelance",
    description:
      "Designed backend systems, databases and REST APIs for different applications.",
  },

  {
    year: "2019 - 2021",
    role: "Self-Taught Developer",
    company: "Learning Journey",
    description:
      "Built strong foundations in programming, web development and software engineering.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="
py-32
bg-[#050816]
"
    >
      <div
        className="
max-w-5xl
mx-auto
px-6
"
      >
        <p
          className="
text-blue-400
uppercase
tracking-[0.3em]
text-xs
mb-6
"
        >
          Experience
        </p>

        <h2
          className="
text-5xl
font-black
text-white
mb-16
"
        >
          My Journey
        </h2>

        <div
          className="
relative
border-l
border-white/10
space-y-12
"
        >
          {experience.map((item, index) => (
            <motion.div
              key={item.role}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
relative
pl-10
"
            >
              <div
                className="
absolute
-left-[6px]
top-2
w-3
h-3
rounded-full
bg-blue-500
"
              />

              <p
                className="
text-sm
text-purple-400
"
              >
                {item.year}
              </p>

              <h3
                className="
text-2xl
font-bold
text-white
mt-2
"
              >
                {item.role}
              </h3>

              <p
                className="
text-blue-400
mt-1
"
              >
                {item.company}
              </p>

              <p
                className="
mt-4
text-slate-400
max-w-xl
"
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
