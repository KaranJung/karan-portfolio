"use client";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2024 -- Present",
    role: "Senior Creative Technologist",
    company: "Freelance / Independent",
    description:
      "Architecting premium web experiences, pushing the boundaries of 3D motion, and building scalable full-stack applications for global clients.",
  },
  {
    year: "2022 -- 2024",
    role: "Full-Stack Developer",
    company: "Tech Agency",
    description:
      "Led the development of bespoke CRM dashboards and high-performance Laravel/React ecosystems. Managed SEO audits and technical performance optimization.",
  },
  {
    year: "2021 -- 2022",
    role: "UI/UX Designer & Web Developer",
    company: "Creative Studio",
    description:
      "Designed responsive, accessible, and high-conversion interfaces. Integrated modern styling frameworks to unify brand identities.",
  },
];

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

        <div className="space-y-0">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ backgroundColor: "rgba(200,184,160,0.02)" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 border-t border-border group transition-colors duration-700 px-6 -mx-6"
            >
              <div className="lg:col-span-3 flex items-start">
                <span className="text-warm/70 text-sm font-mono tracking-wider">
                  {item.year}
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
    </section>
  );
}
