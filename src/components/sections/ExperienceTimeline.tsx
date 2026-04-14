"use client";

import { motion } from "framer-motion";
import { experience } from "@/constants/data";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-40 border-t border-border relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px glow-line" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-24"
        >
          <p className="text-warm text-xs tracking-[0.3em] uppercase mb-6">
            / Experience
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold leading-[1.05] text-white">
            Professional
            <br />
            Journey
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[11px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-[var(--color-warm)]/30 via-[var(--color-warm)]/10 to-transparent hidden lg:block" />
          
          <div className="space-y-0">
            {experience.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ backgroundColor: "rgba(200,184,160,0.02)" }}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 border-t border-border group transition-colors duration-700 px-6 -mx-6"
              >
                {/* Status indicator dot */}
                <div className="absolute left-0 top-[4.5rem] hidden lg:flex items-center justify-center">
                  <div 
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      idx === 0 
                        ? "border-[var(--color-warm)] bg-[var(--color-warm)] shadow-[0_0_15px_rgba(200,184,160,0.4)]" 
                        : "border-[var(--color-warm)]/40 bg-black group-hover:border-[var(--color-warm)]"
                    }`}
                  >
                    {idx === 0 && (
                      <div className="w-2 h-2 bg-black rounded-full" />
                    )}
                  </div>
                </div>

                <div className="lg:col-span-3 lg:pl-12 flex items-start">
                  <span className="text-warm/70 text-sm font-mono tracking-wider">
                    {item.period}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2 leading-tight group-hover:text-cream transition-colors duration-500">
                    {item.role}
                  </h3>
                  <p className="text-warm text-base">{item.company}</p>
                </div>
                <div className="lg:col-span-4 flex items-start pt-1">
                  <p className="text-dim text-[15px] leading-[1.8]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
