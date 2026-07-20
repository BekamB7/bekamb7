"use client";

import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const shapes = [
  { type: "circle", size: 300 },
  { type: "square", size: 200 },
  { type: "triangle", size: 250 },
  { type: "circle", size: 150 },
  { type: "square", size: 100 },
  { type: "circle", size: 80 },
];

function FloatingShape({ shape, index }) {
  const randomPosition = () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
  });

  const [position] = useState(randomPosition);

  const randomDuration = 15 + Math.random() * 30;
  const randomDelay = Math.random() * 5;

  return (
    <motion.div
      className="absolute opacity-[0.03]"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        width: shape.size,
        height: shape.size,
      }}
      animate={{
        x: [0, 50, -30, 20, 0],
        y: [0, -40, 30, -20, 0],
        rotate: shape.type === "square" ? [0, 90, 0] : 0,
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {shape.type === "circle" && (
        <div
          className="w-full h-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
          }}
        />
      )}
      {shape.type === "square" && (
        <div
          className="w-full h-full rounded-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(96,165,250,0.3) 0%, transparent 70%)",
          }}
        />
      )}
      {shape.type === "triangle" && (
        <div
          className="w-full h-full"
          style={{
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
            background:
              "radial-gradient(circle, rgba(147,197,253,0.3) 0%, transparent 70%)",
          }}
        />
      )}
    </motion.div>
  );
}

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <FloatingShape key={i} shape={shape} index={i} />
      ))}
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}