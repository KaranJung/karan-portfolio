"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import { Code2, MonitorSmartphone, Shield, Cpu } from "lucide-react";

const focusAreas = [
  {
    title: "Full-Stack Development",
    icon: <Code2 className="w-6 h-6" />,
    desc: "Building scalable and robust modern web architectures from frontend to backend.",
  },
  {
    title: "Creative Design",
    icon: <MonitorSmartphone className="w-6 h-6" />,
    desc: "Crafting beautiful interfaces with premium experiences that engage and convert users.",
  },
  {
    title: "Hardware / Systems",
    icon: <Cpu className="w-6 h-6" />,
    desc: "Integrating hardware logic with advanced software pipelines and IoT solutions.",
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="w-6 h-6" />,
    desc: "Ensuring applications and infrastructure are secure from modern digital threats.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-40 relative">
      {/* Subtle warm separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px glow-line" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28"
        >
          <div className="lg:col-span-4">
            <p className="text-warm text-xs tracking-[0.3em] uppercase mb-6">
              / About
            </p>
            <h2 className="text-5xl md:text-6xl font-heading font-bold leading-[1.05] text-white">
              Who
              <br />
              I Am
            </h2>
          </div>
          <div className="lg:col-span-8 flex items-end">
            <div className="space-y-6">
              <p className="text-dim text-lg leading-[1.8] max-w-2xl">
                {PORTFOLIO_DATA.identity.summary}
              </p>
              <p className="text-dim text-lg leading-[1.8] max-w-2xl">
                I thrive at the intersection of design and engineering, ensuring
                products not only perform exceptionally well but feel immersive and
                stunning to the end user.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Focus Areas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border-light rounded-sm overflow-hidden">
          {focusAreas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ backgroundColor: "rgba(200,184,160,0.04)" }}
              className="bg-black p-12 group cursor-default transition-colors duration-700"
            >
              <motion.div
                whileHover={{ rotate: -10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-warm/60 group-hover:text-warm transition-colors duration-500 mb-8"
              >
                {area.icon}
              </motion.div>
              <h3 className="text-xl font-heading font-bold text-white mb-4 leading-tight">
                {area.title}
              </h3>
              <p className="text-dim text-[15px] leading-[1.7]">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
