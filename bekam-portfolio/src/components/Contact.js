"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, ArrowRight, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-pitch-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-16"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-accent-blue font-semibold">
              Contact
            </span>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-cream leading-tight mb-6">
                Let&apos;s build
                <br />
                <span className="text-gradient-blue">something great</span>
                {" "}together.
              </h2>
              <p className="text-cream-muted/70 leading-relaxed mb-10 font-light text-lg">
                Have a project in mind? I&apos;d love to hear about it. Reach
                out and let&apos;s discuss how we can bring your ideas to life.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-cream-muted/60 mb-0.5">Email</p>
                    <p className="text-sm text-cream">hello@bekamberhanu.dev</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/[0.04] bg-white/[0.01]">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-accent-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-cream-muted/60 mb-0.5">Location</p>
                    <p className="text-sm text-cream">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <form className="p-8 rounded-3xl border border-white/[0.06] bg-white/[0.01] space-y-5">
                <div>
                  <label className="block text-xs text-cream-muted/70 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-transparent border border-white/[0.08] rounded-xl px-4 py-3 text-cream placeholder:text-cream-muted/30 focus:outline-none focus:border-accent-blue/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-cream-muted/70 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-transparent border border-white/[0.08] rounded-xl px-4 py-3 text-cream placeholder:text-cream-muted/30 focus:outline-none focus:border-accent-blue/50 transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-cream-muted/70 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-transparent border border-white/[0.08] rounded-xl px-4 py-3 text-cream placeholder:text-cream-muted/30 focus:outline-none focus:border-accent-blue/50 transition-colors text-sm resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream text-pitch-black font-semibold text-sm hover:bg-cream-dark transition-colors"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}