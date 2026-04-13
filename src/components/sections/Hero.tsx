"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import ThreeVisuals from "@/components/ui/ThreeVisuals";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % PORTFOLIO_DATA.identity.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      <ThreeVisuals />

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center pt-28 pb-20">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col gap-10 relative z-10"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 rounded-full bg-warm animate-pulse" />
            <span className="text-dim text-xs tracking-[0.3em] uppercase">
              Available for projects
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-heading font-bold leading-[0.92] tracking-tight text-white"
          >
            Karan
            <br />
            Jung
            <br />
            <span className="text-gradient-warm">Budhathoki</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="h-10 overflow-hidden mt-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="text-warm text-lg tracking-[0.2em] uppercase font-medium"
              >
                {PORTFOLIO_DATA.identity.roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-dim text-lg max-w-lg leading-relaxed"
          >
            {PORTFOLIO_DATA.identity.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-8 pt-2">
            <a
              href="#projects"
              className="group flex items-center gap-3 bg-white text-black px-10 py-4 text-sm font-semibold uppercase tracking-widest hover:bg-cream transition-all duration-500 hover:shadow-[0_4px_30px_rgba(200,184,160,0.15)]"
            >
              View Work
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="text-sm uppercase tracking-widest text-dim hover:text-warm transition-colors duration-500 border-b border-subtle hover:border-warm pb-1"
            >
              Contact
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-20 pt-14 mt-6 border-t border-border"
          >
            {PORTFOLIO_DATA.identity.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + idx * 0.15, duration: 0.6 }}
              >
                <span className="text-4xl font-heading font-bold text-white">
                  {stat.value}
                </span>
                <p className="text-dim text-xs uppercase tracking-[0.2em] mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          <div className="relative w-[300px] h-[420px] sm:w-[340px] sm:h-[460px] lg:w-[380px] lg:h-[510px]">
            {/* Decorative frame corners */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -top-5 -left-5 w-20 h-20 border-t border-l border-warm/30"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="absolute -bottom-5 -right-5 w-20 h-20 border-b border-r border-warm/30"
            />

            {/* Subtle glow behind image */}
            <div className="absolute -inset-8 bg-warm/[0.03] rounded-full blur-3xl" />

            {/* Main image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-full overflow-hidden bg-surface"
            >
              <Image
                src="/karan.png"
                alt="Karan Jung Budhathoki"
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 380px"
                className="object-cover object-top grayscale-[50%] hover:grayscale-0 transition-all duration-1000"
                priority
              />
              {/* Bottom gradient fade */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </motion.div>

            {/* Side label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute -right-14 top-1/2 -translate-y-1/2 hidden lg:block"
            >
              <p className="text-warm/40 text-[10px] tracking-[0.4em] uppercase -rotate-90 whitespace-nowrap">
                Kathmandu, Nepal
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-dim text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-warm/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
