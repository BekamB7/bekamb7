"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 text-sm">
            Contact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
              Work Together
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project idea? I&apos;d love to hear about it. Reach out and let&apos;s build something amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Card className="border-blue-500/10 bg-blue-950/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white font-medium">hello@bekamberhanu.dev</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-500/10 bg-blue-950/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white font-medium">Addis Ababa, Ethiopia</p>
                </div>
              </CardContent>
            </Card>

            <Button
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-14 text-base group mt-2"
            >
              <a href="/files/BEKAMB7.pdf" download className="flex items-center">
                Download CV
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-blue-500/10 bg-blue-950/10 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Send a Message
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full bg-blue-950/30 border border-blue-500/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors text-sm resize-none"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full h-12 group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
