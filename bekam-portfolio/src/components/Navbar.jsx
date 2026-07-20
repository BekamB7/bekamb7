"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  {
    name: "Work",
    href: "#work",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
fixed
top-6
left-0
right-0
z-50
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
rounded-full
border
border-white/10
bg-[#050816]/70
backdrop-blur-xl
px-6
py-3
flex
items-center
justify-between
"
        >
          {/* LOGO */}

          <a
            href="#home"
            className="
text-xl
font-black
text-white
"
          >
            Bekam
            <span
              className="
text-blue-500
"
            >
              .
            </span>
          </a>

          {/* DESKTOP LINKS */}

          <div
            className="
hidden
md:flex
items-center
gap-8
"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
text-sm
text-slate-400
hover:text-white
transition
"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* BUTTON */}

          <div
            className="
hidden
md:flex
"
          >
            <a
              href="/files/BEKAMB7.pdf"
              className="
flex
items-center
gap-2
px-5
py-2.5
rounded-full
bg-white
text-black
text-sm
font-semibold
"
            >
              <Download size={15} />
              Resume
            </a>
          </div>

          {/* MOBILE */}

          <button
            onClick={() => setOpen(!open)}
            className="
md:hidden
text-white
"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div
            className="
mt-3
rounded-3xl
border
border-white/10
bg-[#050816]/90
backdrop-blur-xl
p-6
md:hidden
"
          >
            <div
              className="
flex
flex-col
gap-5
"
            >
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="
text-slate-300
"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
