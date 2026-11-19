"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Route } from "lucide-react";

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();

  // Smooth spring animation
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  const iconPosition = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <aside
      className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center"
      aria-label="Scroll progress"
    >
      <Route aria-hidden="true" size={16} className="mb-5 text-white/50" />

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

        <div className="absolute inset-y-8 left-0 right-0">
          <motion.div
            className="absolute left-1/2 top-0"
            style={{
              top: iconPosition,
              x: "-50%",
              y: "-50%",
            }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.35, 0.7, 0.35],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="relative z-10 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none items-center justify-center"
              whileHover={{
                scale: 1.2,
                rotate: 8,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <span
                aria-hidden="true"
                className="select-none text-xl leading-none text-white"
              >
                𓆌
              </span>
            </motion.div>
          </motion.div>
        </div>
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