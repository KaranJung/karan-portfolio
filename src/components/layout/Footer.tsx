"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/data";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialLinks = [
  {
    href: PORTFOLIO_DATA.contact.socials.github,
    icon: GithubIcon,
    label: "GitHub",
  },
  {
    href: PORTFOLIO_DATA.contact.socials.facebook,
    icon: FacebookIcon,
    label: "Facebook",
  },
  {
    href: PORTFOLIO_DATA.contact.socials.instagram,
    icon: InstagramIcon,
    label: "Instagram",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16">
      {/* Subtle gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-warm/50 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="font-heading text-2xl font-bold tracking-tight text-white">
            KJB
          </div>

          <p className="text-dim text-xs tracking-[0.15em] uppercase text-center">
            &copy; {currentYear} {PORTFOLIO_DATA.identity.fullName}. All rights
            reserved.
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 border border-border flex items-center justify-center text-dim hover:text-warm hover:border-warm/30 transition-all duration-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Back to top button */}
        <motion.button
          onClick={handleBackToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="mx-auto mt-12 flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-warm border border-warm/30 px-6 py-3 hover:bg-warm/10 hover:border-warm/50 transition-all duration-300 group"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
          Back to Top
        </motion.button>
      </div>
    </footer>
  );
}
