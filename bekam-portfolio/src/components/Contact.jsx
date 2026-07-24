"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Code, Briefcase, X } from "lucide-react";

const contacts = [
  { icon: Mail, label: "Email", value: "hello@bekamberhanu.dev", href: "mailto:hello@bekamberhanu.dev" },
  { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia", href: null },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-muted uppercase tracking-[0.3em]">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-2 leading-tight">
              Let's build something
              <span className="gradient-text block">great.</span>
            </h2>
            <p className="text-muted mt-6 max-w-lg leading-relaxed">
              Have a project idea or need help building a digital product? Let's talk.
            </p>
            
            <div className="mt-8 space-y-4">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href || "#"}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <contact.icon className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">{contact.label}</p>
                    <p className="text-white font-medium">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              {[
                { icon: Code , href: "#" },
                { icon: Briefcase, href: "#" },
                { icon: X, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted hover:text-white hover:border-white/20 transition"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-4"
          >
            <input
              placeholder="Your name"
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-muted outline-none focus:border-blue-500 transition"
            />
            <input
              placeholder="Email address"
              type="email"
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-muted outline-none focus:border-blue-500 transition"
            />
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-muted outline-none focus:border-blue-500 transition resize-none"
            />
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition">
              Send Message
              <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}