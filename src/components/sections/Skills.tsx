"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/data";
import Image from "next/image";

const SKILL_ICONS: Record<string, string> = {
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  typescript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
  cloudflare: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
  photoshop: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
  premiere: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg",
  figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  canva: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
};

const categories = [
  { title: "Frontend", skills: PORTFOLIO_DATA.skills.frontend },
  { title: "Backend", skills: PORTFOLIO_DATA.skills.backend },
  { title: "Tools & DevOps", skills: PORTFOLIO_DATA.skills.tools },
  { title: "Creative Suite", skills: PORTFOLIO_DATA.skills.creative },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-40 border-t border-border relative">
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
            / Expertise
          </p>
          <h2 className="text-5xl md:text-6xl font-heading font-bold leading-[1.05] text-white">
            Technical
            <br />
            Stack
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: "easeOut" }}
            >
              <h3 className="text-xs tracking-[0.3em] uppercase text-warm mb-10 pb-4 border-b border-border-light">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + sIdx * 0.08 }}
                    whileHover={shouldReduceMotion ? undefined : {
                      scale: 1.04,
                      borderColor: "rgba(200,184,160,0.3)",
                    }}
                    className="flex flex-col gap-3 px-6 py-5 bg-surface border border-border hover:bg-surface-2 transition-all duration-500 cursor-default group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 flex-shrink-0 relative">
                        <Image
                          src={SKILL_ICONS[skill.icon]}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <span className="text-white text-[15px] font-medium">
                        {skill.name}
                      </span>
                    </div>
                    {/* Proficiency dots */}
                    <div className="flex items-center gap-1.5 pl-12">
                      {[1, 2, 3, 4, 5].map((dot) => (
                        <div
                          key={dot}
                          className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                            dot <= (skill.level || 3)
                              ? "bg-[var(--color-warm)]"
                              : "bg-[var(--color-subtle)]"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
