"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "Eagle Lion Systems", href: "https://www.eaglelionsystems.com/" },
  { name: "Nebelbal", href: "https://salon.nebelbal.com/?lang=en" },
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
          Worked With
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24">
          {clients.map((client, index) => (
            <motion.a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="group cursor-pointer"
            >
              <span className="flex flex-col items-center gap-2 text-lg font-bold text-muted group-hover:text-white transition-colors duration-300">
                {client.name}
                <span className="w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-500" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* TODO(Bekam): add client logo files later if permission is given */}
      </div>
    </section>
  );
}