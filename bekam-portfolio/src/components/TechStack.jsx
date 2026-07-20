"use client";

import { motion } from "framer-motion";

const stacks = [
  {
    title: "Frontend",

    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },

  {
    title: "Backend",

    items: ["Node.js", "Express", "FastAPI", "MySQL", "Prisma"],
  },

  {
    title: "Mobile",

    items: ["Flutter", "Dart", "Firebase"],
  },

  {
    title: "AI & Tools",

    items: ["OpenAI API", "Automation", "Git", "Docker", "Vercel"],
  },
];

export default function TechStack() {
  return (
    <section
      id="skills"
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
        <p
          className="
text-blue-400
uppercase
tracking-[0.3em]
text-xs
mb-5
"
        >
          Technology
        </p>

        <h2
          className="
text-5xl
font-black
text-white
mb-16
"
        >
          Tools I build with
        </h2>

        <div
          className="
grid
md:grid-cols-2
gap-6
"
        >
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{
                opacity: 0,
                y: 30,
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
rounded-3xl
border
border-white/10
bg-white/[0.03]
p-8
"
            >
              <h3
                className="
text-xl
font-bold
text-white
mb-6
"
              >
                {stack.title}
              </h3>

              <div
                className="
flex
flex-wrap
gap-3
"
              >
                {stack.items.map((item) => (
                  <span
                    key={item}
                    className="
px-4
py-2
rounded-full
border
border-white/10
bg-white/5
text-sm
text-slate-300
hover:border-blue-400/50
transition
"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
