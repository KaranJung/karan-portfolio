"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  // Helper to optimize Unsplash URLs
  const optimizeImageUrl = (url: string) => {
    if (url.includes('images.unsplash.com')) {
      // Replace or add w and q parameters
      const optimized = url.replace(/[?&]w=\d+/g, '').replace(/[?&]q=\d+/g, '');
      const separator = optimized.includes('?') ? '&' : '?';
      return `${optimized}${separator}w=600&q=75`;
    }
    return url;
  };

  return (
    <section id="projects" className="py-40 border-t border-border relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px glow-line" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <p className="text-warm text-xs tracking-[0.3em] uppercase mb-6">
            / Portfolio
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold leading-[1.05] text-white">
            Selected
            <br />
            Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: shouldReduceMotion ? 0 : idx * 0.15, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
              className="group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden bg-surface mb-8">
                <Image
                  src={optimizeImageUrl(project.image)}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover grayscale-[70%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

                {/* Enhanced Number badge */}
                <div className="absolute top-6 left-6">
                  <span className="text-[var(--color-warm)] text-sm font-mono bg-black/40 px-3 py-1.5 backdrop-blur-sm border border-[var(--color-warm)]/20">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Links overlay */}
                <div className="absolute bottom-6 right-6 flex items-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-heading font-bold text-white group-hover:text-cream transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-dim text-[15px] leading-[1.8]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] text-warm/60 tracking-wider uppercase px-3 py-1.5 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
