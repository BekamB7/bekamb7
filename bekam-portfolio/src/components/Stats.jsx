"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "5+",
    label: "Years Learning",
  },

  {
    number: "20+",
    label: "Projects Built",
  },

  {
    number: "10+",
    label: "Technologies",
  },

  {
    number: "100%",
    label: "Passion For Building",
  },
];

export default function Stats() {
  return (
    <section
      className="
py-20
bg-[#050816]
border-y
border-white/5
"
    >
      <div
        className="
max-w-6xl
mx-auto
px-6
grid
grid-cols-2
md:grid-cols-4
gap-10
"
      >
        {stats.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="
text-center
"
          >
            <h3
              className="
text-5xl
font-black
bg-gradient-to-r
from-blue-400
to-purple-500
bg-clip-text
text-transparent
"
            >
              {item.number}
            </h3>

            <p
              className="
mt-3
text-sm
text-slate-400
"
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
