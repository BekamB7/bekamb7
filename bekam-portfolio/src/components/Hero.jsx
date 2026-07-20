"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Code, Briefcase, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="
relative min-h-screen
flex items-center
overflow-hidden
bg-[#050816]
"
    >
      {/* Background */}

      <div
        className="
absolute inset-0
bg-[radial-gradient(circle_at_top,#3b82f620,transparent_40%)]
"
      />

      <div
        className="
absolute
right-0
top-1/3
w-[500px]
h-[500px]
bg-purple-600/20
blur-[160px]
rounded-full
"
      />

      <div
        className="
container mx-auto
px-6
relative z-10
"
      >
        <div
          className="
grid
lg:grid-cols-2
gap-16
items-center
max-w-7xl
mx-auto
"
        >
          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <div
              className="
inline-flex
items-center
gap-2
px-4 py-2
rounded-full
border
border-white/10
bg-white/5
mb-8
"
            >
              <span
                className="
w-2 h-2
rounded-full
bg-green-400
animate-pulse
"
              />

              <span
                className="
text-sm
text-slate-300
"
              >
                Available for opportunities
              </span>
            </div>

            <h1
              className="
text-6xl
md:text-8xl
font-black
tracking-tight
leading-[0.9]
"
            >
              Building
              <span
                className="
block
bg-gradient-to-r
from-blue-400
via-purple-400
to-blue-500
bg-clip-text
text-transparent
"
              >
                AI-powered
              </span>
              digital products.
            </h1>

            <p
              className="
mt-8
text-lg
text-slate-400
max-w-xl
leading-relaxed
"
            >
              I'm Bekam Berhanu, a Full Stack Developer specializing in modern
              web applications, backend architecture and AI integrations.
            </p>

            <div
              className="
flex
flex-wrap
gap-4
mt-10
"
            >
              <a
                href="#projects"
                className="
px-7
py-4
rounded-full
bg-white
text-black
font-semibold
flex
items-center
gap-2
hover:scale-105
transition
"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="/files/BEKAMB7.pdf"
                className="
px-7
py-4
rounded-full
border
border-white/10
bg-white/5
flex
items-center
gap-2
text-white
"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            <div
              className="
flex
gap-5
mt-10
"
            >
              <a>
                <Code />
              </a>

              <a>
                <Briefcase />
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE PROFILE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
relative
"
          >
            <div
              className="
absolute
inset-0
bg-gradient-to-r
from-blue-500
to-purple-600
blur-3xl
opacity-30
"
            />

            <div
              className="
relative
rounded-3xl
overflow-hidden
border
border-white/10
bg-white/5
p-3
"
            >
              <Image
                src="/profile.png"
                width={600}
                height={700}
                alt="Bekam"
                className="
rounded-2xl
object-cover
"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
