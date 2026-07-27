"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();

  // Smooth spring animation
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  // Keep icon within track bounds
  const iconY = useTransform(progress, [0, 1], [0, 600]);

  return (
    <aside
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center"
      aria-label="Scroll progress"
    >
      {/* Vertical Label */}
      <span
        className="mb-5 text-[10px] uppercase tracking-[0.35em] text-white/40"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        Scroll
      </span>

      <div className="relative h-[80vh] w-[2px] rounded-full bg-white/10">
        {/* Background glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-pink-500/5" />

        {/* Progress fill */}
        <motion.div
          className="absolute bottom-0 left-0 w-full rounded-full"
          style={{
            scaleY: progress,
            transformOrigin: "bottom",
            background:
              "linear-gradient(to top, #ec4899, #8b5cf6, #3b82f6)",
          }}
        />

        {/* Moving indicator */}
        <motion.div
          className="absolute left-1/2"
          style={{
            y: iconY,
            x: "-50%",
          }}
        >
          {/* Glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/25 blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Crocodile */}
          <motion.div
            className=" relative-translate-x-1/2 -translate-y-1/2 cursor-pointer select-none text-2xl"
            whileHover={{
              scale: 1.25,
              rotate: 8,
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            𓆌
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom dot */}
      <motion.div
        className="mt-5 h-2 w-2 rounded-full bg-white/20"
        animate={{
          opacity: [0.2, 1, 0.2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </aside>
  );
}