"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Code, Briefcase, X, Phone } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@bekamberhanu.dev",
    href: "mailto:hello@bekamberhanu.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Ababa, Ethiopia",
    href: null,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 900 000 000",
    href: "tel:+251900000000",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400" />
              <span className="text-sm text-muted uppercase tracking-[0.3em]">
                Contact
              </span>
            </div>

            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
              Let's build something
              <span className="block gradient-text mt-2">great.</span>
            </h2>

            <p className="mt-8 text-lg text-muted max-w-lg leading-relaxed">
              Have a project idea, startup concept, or need help building a
              digital product? Let's talk.
            </p>

            <div className="mt-10 space-y-4">
              {contacts.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href || "#"}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <contact.icon className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">
                      {contact.label}
                    </p>
                    <p className="text-white font-medium">{contact.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: Code, href: "#" },
                { icon: Briefcase, href: "#" },
                { icon: X, href: "#" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl space-y-5 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl" />

            <div className="relative z-10">
              <input
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-muted outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <div className="relative z-10">
              <input
                placeholder="Email address"
                type="email"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-muted outline-none focus:border-blue-500 transition-colors duration-300"
              />
            </div>

            <div className="relative z-10">
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-muted outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10 w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold flex items-center justify-center gap-2 shadow-[0_0_40px_rgba(59,130,246,0.15)] hover:shadow-[0_0_60px_rgba(59,130,246,0.25)] transition-shadow"
            >
              Send Message
              <Send
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
