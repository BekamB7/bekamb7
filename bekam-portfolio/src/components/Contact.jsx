"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
py-32
bg-[#050816]
relative
overflow-hidden
"
    >
      <div
        className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[600px]
h-[600px]
bg-blue-500/10
blur-[160px]
rounded-full
"
      />

      <div
        className="
max-w-6xl
mx-auto
px-6
relative
z-10
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
              Contact
            </p>

            <h2
              className="
text-5xl
md:text-7xl
font-black
text-white
leading-tight
"
            >
              Let's build something
              <span
                className="
block
bg-gradient-to-r
from-blue-400
to-purple-500
bg-clip-text
text-transparent
"
              >
                great.
              </span>
            </h2>

            <p
              className="
mt-8
text-lg
text-slate-400
max-w-lg
"
            >
              Have a project idea, startup concept, or need help building a
              digital product? Let's talk.
            </p>

            <div
              className="
mt-10
space-y-4
"
            >
              <div
                className="
flex
items-center
gap-4
p-5
rounded-2xl
border
border-white/10
bg-white/[0.03]
"
              >
                <div
                  className="
w-11
h-11
rounded-xl
bg-blue-500/10
flex
items-center
justify-center
"
                >
                  <Mail
                    className="
text-blue-400
"
                  />
                </div>

                <div>
                  <p
                    className="
text-xs
text-slate-500
"
                  >
                    Email
                  </p>

                  <p
                    className="
text-white
"
                  >
                    hello@bekamberhanu.dev
                  </p>
                </div>
              </div>

              <div
                className="
flex
items-center
gap-4
p-5
rounded-2xl
border
border-white/10
bg-white/[0.03]
"
              >
                <div
                  className="
w-11
h-11
rounded-xl
bg-purple-500/10
flex
items-center
justify-center
"
                >
                  <MapPin
                    className="
text-purple-400
"
                  />
                </div>

                <div>
                  <p
                    className="
text-xs
text-slate-500
"
                  >
                    Location
                  </p>

                  <p
                    className="
text-white
"
                  >
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORM */}

          <motion.form
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
p-8
rounded-3xl
border
border-white/10
bg-white/[0.03]
space-y-5
"
          >
            <input
              placeholder="Your name"
              className="
w-full
rounded-xl
border
border-white/10
bg-transparent
px-5
py-4
text-white
outline-none
focus:border-blue-500
"
            />

            <input
              placeholder="Email address"
              className="
w-full
rounded-xl
border
border-white/10
bg-transparent
px-5
py-4
text-white
outline-none
focus:border-blue-500
"
            />

            <textarea
              rows="5"
              placeholder="Tell me about your project..."
              className="
w-full
rounded-xl
border
border-white/10
bg-transparent
px-5
py-4
text-white
outline-none
focus:border-blue-500
resize-none
"
            />

            <button
              className="
w-full
py-4
rounded-xl
bg-white
text-black
font-bold
flex
items-center
justify-center
gap-2
hover:scale-[1.02]
transition
"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
