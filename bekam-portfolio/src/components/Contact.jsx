"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Send, X } from "lucide-react";
import { FaGithub, FaInstagram } from "react-icons/fa";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "Bebabekam@gmail.com",
    href: "mailto:Bebabekam@gmail.com",
  },
  { icon: MapPin, label: "Location", value: "Addis Ababa, Ethiopia" },
];

const socialLinks = [
  { label: "GitHub", icon: FaGithub, href: "https://github.com/BekamB7" },
  { label: "X", icon: X, href: "https://x.com/Bekam_baki12" },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/baki_m_ni/",
  },
  { label: "Telegram", icon: Send, href: "https://t.me/Chartedadam" },
];

export default function Contact() {
  const [formState, setFormState] = useState("idle");
  const [formMessage, setFormMessage] = useState("");

  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  const handleSubmit = async (event) => {
    // TODO(Bekam): 1) create the Formspree form (or EmailJS service) with Bebabekam@gmail.com, 2) confirm the activation email, 3) put the ID/keys in .env.local and restart the dev server, 4) add the same variables in the Vercel project settings and redeploy, 5) send a test message.
    event.preventDefault();
    const form = event.currentTarget;

    if (!formspreeId) {
      if (process.env.NODE_ENV === "development") {
        console.error("Formspree submission failed: NEXT_PUBLIC_FORMSPREE_ID is missing.");
      }
      setFormState("error");
      setFormMessage(
        "The contact form is not configured yet. Please email me directly.",
      );
      return;
    }

    setFormState("loading");
    setFormMessage("");

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const responseBody = await response.text();

      if (!response.ok) {
        if (process.env.NODE_ENV === "development") {
          console.error("Formspree submission failed:", {
            status: response.status,
            statusText: response.statusText,
            body: responseBody,
          });
        }
        throw new Error("The message could not be sent. Please try again.");
      }

      form.reset();
      setFormState("success");
      setFormMessage("Thanks! Your message has been sent.");
    } catch (error) {
      if (process.env.NODE_ENV === "development" && error instanceof Error) {
        console.error("Formspree request error:", error);
      }
      setFormState("error");
      setFormMessage(
        error instanceof Error
          ? error.message
          : "The message could not be sent. Please try again.",
      );
    }
  };

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
              Let&apos;s build something
              <span className="gradient-text block">great.</span>
            </h2>
            <p className="text-muted mt-6 max-w-lg leading-relaxed">
              Have a project in mind? Let&apos;s turn it into something simple,
              clear, and impactful. I&apos;m open to freelance and remote work,
              so send me a message and let&apos;s talk.
            </p>
            
            <div className="mt-8 space-y-4">
              {contacts.map((contact) => (
                <div
                  key={contact.label}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <contact.icon className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        className="text-white font-medium hover:underline"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              {/* TODO(Bekam): add LinkedIn when ready */}
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
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
            onSubmit={handleSubmit}
          >
            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-website">Leave this field empty</label>
              <input
                id="contact-website"
                name="_gotcha"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <input
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-muted outline-none focus:border-blue-500 transition"
            />
            <input
              name="email"
              placeholder="Email address"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-muted outline-none focus:border-blue-500 transition"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="w-full rounded-xl border border-white/10 bg-transparent px-5 py-4 text-white placeholder:text-muted outline-none focus:border-blue-500 transition resize-none"
            />
            {formMessage && (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  formState === "error" ? "text-red-300" : "text-green-300"
                }`}
              >
                {formMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={formState === "loading"}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formState === "loading" ? "Sending..." : "Send Message"}
              {formState !== "loading" && <Send size={16} />}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}