"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import {
  MonitorSmartphone, Code2, PenTool, Search,
  Gauge, ShieldCheck, Layout, Palette, ArrowUpRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  MonitorSmartphone: <MonitorSmartphone className="w-7 h-7" />,
  Code2: <Code2 className="w-7 h-7" />,
  PenTool: <PenTool className="w-7 h-7" />,
  Search: <Search className="w-7 h-7" />,
  Gauge: <Gauge className="w-7 h-7" />,
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  Layout: <Layout className="w-7 h-7" />,
  Palette: <Palette className="w-7 h-7" />,
};

export default function Services() {
  return (
    <section id="services" className="py-40 border-t border-border relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px glow-line" />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24"
        >
          <p className="text-warm text-xs tracking-[0.3em] uppercase mb-6">
            / Services
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold leading-[1.05] text-white max-w-lg">
            What I
            <br />
            Bring
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-border-light rounded-sm overflow-hidden">
          {PORTFOLIO_DATA.services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: "easeOut" }}
              whileHover={{ backgroundColor: "rgba(200,184,160,0.04)" }}
              className="bg-black p-10 lg:p-12 group cursor-default transition-colors duration-700 relative"
            >
              <span className="absolute top-8 right-8 text-subtle/50 text-[11px] font-mono">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="text-warm/50 group-hover:text-warm transition-colors duration-500 mb-8"
              >
                {ICON_MAP[service.icon]}
              </motion.div>

              <h3 className="text-lg font-heading font-bold text-white mb-4 leading-tight">
                {service.title}
              </h3>

              <p className="text-dim text-sm leading-[1.7] mb-8">
                {service.desc}
              </p>

              <div className="flex items-center gap-2 text-warm/40 text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Learn more <ArrowUpRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
