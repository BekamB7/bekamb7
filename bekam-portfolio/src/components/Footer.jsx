"use client";

import { Code, Briefcase, Send, ArrowUp } from "lucide-react";

export default function Footer() {
  const top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
py-12
bg-[#050816]
border-t
border-white/10
"
    >
      <div
        className="
max-w-6xl
mx-auto
px-6
flex
flex-col
md:flex-row
items-center
justify-between
gap-8
"
      >
        <div>
          <h3
            className="
text-2xl
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
          </h3>

          <p
            className="
text-sm
text-slate-500
mt-2
"
          >
            Full Stack Developer
          </p>
        </div>

        <div
          className="
flex
gap-3
"
        >
          <a
            className="
w-10
h-10
rounded-full
border
border-white/10
flex
items-center
justify-center
text-slate-400
hover:text-white
transition
"
          >
            <Code size={17} />
          </a>

          <a
            className="
w-10
h-10
rounded-full
border
border-white/10
flex
items-center
justify-center
text-slate-400
hover:text-white
transition
"
          >
            <Briefcase size={17} />
          </a>

          <a
            className="
w-10
h-10
rounded-full
border
border-white/10
flex
items-center
justify-center
text-slate-400
hover:text-white
transition
"
          >
            <Send size={17} />
          </a>
        </div>

        <button
          onClick={top}
          className="
w-10
h-10
rounded-full
border
border-white/10
flex
items-center
justify-center
text-white
"
        >
          <ArrowUp size={17} />
        </button>
      </div>
    </footer>
  );
}
