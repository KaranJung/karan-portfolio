"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="py-40 border-t border-border relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px glow-line" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <p className="text-warm text-xs tracking-[0.3em] uppercase mb-6">
              / Contact
            </p>
            <h2 className="text-5xl md:text-6xl font-heading font-bold leading-[1.05] text-white mb-10">
              Let&apos;s Build
              <br />
              Something
              <br />
              Great
            </h2>
            <p className="text-dim text-lg leading-[1.8] mb-16 max-w-md">
              Whether you have a project in mind, need technical consultation, or
              want to discuss the latest in technology — I&apos;d love to connect.
            </p>

            <div className="space-y-8">
              <motion.a
                href={`mailto:${PORTFOLIO_DATA.contact.email}`}
                className="flex items-center gap-6 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 border border-border flex items-center justify-center text-warm/50 group-hover:border-warm/40 group-hover:text-warm transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-dim text-xs tracking-[0.2em] uppercase mb-1">Email</p>
                  <span className="text-white text-base group-hover:text-cream transition-colors duration-300">
                    {PORTFOLIO_DATA.contact.email}
                  </span>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-6 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 border border-border flex items-center justify-center text-warm/50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-dim text-xs tracking-[0.2em] uppercase mb-1">Phone</p>
                  <span className="text-white text-base">
                    {PORTFOLIO_DATA.contact.phone}
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-6 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-14 h-14 border border-border flex items-center justify-center text-warm/50">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-dim text-xs tracking-[0.2em] uppercase mb-1">Location</p>
                  <span className="text-white text-base">
                    {PORTFOLIO_DATA.contact.address}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-6 mt-16 pt-10 border-t border-border">
              <motion.a
                href={PORTFOLIO_DATA.contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-12 h-12 border border-border flex items-center justify-center text-dim hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <GithubIcon />
              </motion.a>
              <motion.a
                href={PORTFOLIO_DATA.contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-12 h-12 border border-border flex items-center justify-center text-dim hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <FacebookIcon />
              </motion.a>
              <motion.a
                href={PORTFOLIO_DATA.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-12 h-12 border border-border flex items-center justify-center text-dim hover:text-white hover:border-white/30 transition-all duration-300"
              >
                <InstagramIcon />
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <form className="space-y-14" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="text-warm/60 text-xs tracking-[0.2em] uppercase mb-4 block"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="w-full bg-transparent border-b border-border px-0 py-4 text-white text-base focus:outline-none focus:border-warm/50 transition-colors duration-500 placeholder:text-subtle"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="text-warm/60 text-xs tracking-[0.2em] uppercase mb-4 block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="w-full bg-transparent border-b border-border px-0 py-4 text-white text-base focus:outline-none focus:border-warm/50 transition-colors duration-500 placeholder:text-subtle"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="text-warm/60 text-xs tracking-[0.2em] uppercase mb-4 block"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  className="w-full bg-transparent border-b border-border px-0 py-4 text-white text-base focus:outline-none focus:border-warm/50 transition-colors duration-500 placeholder:text-subtle"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-warm/60 text-xs tracking-[0.2em] uppercase mb-4 block"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  className="w-full bg-transparent border-b border-border px-0 py-4 text-white text-base focus:outline-none focus:border-warm/50 transition-colors duration-500 resize-none placeholder:text-subtle"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-4 bg-white text-black px-12 py-5 text-sm font-semibold uppercase tracking-widest hover:bg-cream transition-colors duration-500 mt-4"
              >
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
