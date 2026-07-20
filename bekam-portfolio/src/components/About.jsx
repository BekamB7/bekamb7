"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Rocket, Brain } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "Building modern frontend experiences and scalable backend systems.",
  },
  {
    icon: Brain,
    title: "AI Integration",
    text: "Creating intelligent features using AI APIs and automation.",
  },
  {
    icon: Rocket,
    title: "Product Thinking",
    text: "Turning ideas into useful digital products people can use.",
  },
];

export default function About() {
  return (
    <section
      id="about"
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
gap-16
items-center
"
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
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
              About Me
            </p>

            <h2
              className="
text-5xl
md:text-6xl
font-black
text-white
leading-tight
"
            >
              Building technology that creates real impact.
            </h2>

            <p
              className="
mt-8
text-lg
leading-relaxed
text-slate-400
"
            >
              I'm Bekam Berhanu, a Full Stack Developer focused on creating
              modern web applications, backend architectures and AI-powered
              solutions.
            </p>

            <p
              className="
mt-5
text-lg
leading-relaxed
text-slate-400
"
            >
              My journey started with curiosity and self-learning. Over the
              years I have transformed ideas into functional products, from SaaS
              platforms to custom digital solutions.
            </p>

            <div
              className="
mt-8
p-6
rounded-3xl
border
border-white/10
bg-white/[0.03]
"
            >
              <Sparkles
                className="
text-purple-400
mb-3
"
              />

              <p
                className="
italic
text-slate-300
"
              >
                "Great software is not only about code. It is about solving
                problems people actually have."
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
space-y-5
"
          >
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="
p-6
rounded-3xl
border
border-white/10
bg-white/[0.03]
hover:bg-white/[0.05]
transition
"
              >
                <div
                  className="
flex
gap-5
"
                >
                  <div
                    className="
w-12
h-12
rounded-2xl
bg-blue-500/10
flex
items-center
justify-center
"
                  >
                    <item.icon
                      className="
text-blue-400
"
                    />
                  </div>

                  <div>
                    <h3
                      className="
text-white
font-bold
text-lg
"
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
mt-2
text-sm
text-slate-400
"
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
