"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "foodpanda", icon: "🛵" },
  { name: "potato", icon: "🥔" },
  { name: "BAGDCOM", icon: "📡" },
  { name: "Google", icon: "🔍" },
];

export default function Clients() {
  return (
    <section className="relative py-24 bg-black overflow-hidden border-t border-b border-white/5">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted uppercase tracking-[0.3em] mb-12"
        >
          Trusted by brands worldwide
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-5xl md:text-6xl opacity-30 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0">
                  {client.icon}
                </span>
                <span className="text-lg font-bold text-muted group-hover:text-white transition-colors duration-300">
                  {client.name}
                </span>
                <div className="w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}