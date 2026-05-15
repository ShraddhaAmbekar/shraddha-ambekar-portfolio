"use client";

import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-30">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <p className="section-eyebrow">SKILLS</p>
        <h2 className="section-title heading-font mt-3 text-white">Crafted for Impact</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              data-reveal
              className="glass-panel rounded-3xl p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: "0 20px 50px rgba(0, 255, 208, 0.12)" }}
            >
              <h3 className="heading-font text-xl text-white">{group.title}</h3>
              <ul className="mt-5 space-y-2 text-sm text-white/80">
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
