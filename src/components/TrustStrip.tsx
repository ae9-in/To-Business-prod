'use client';

import { motion } from 'framer-motion';
import { Target, GraduationCap, Briefcase, Users, Rocket } from 'lucide-react';

const highlights = [
  { icon: Target, label: 'Skill-Focused Opportunities' },
  { icon: GraduationCap, label: 'Real Experience for Students' },
  { icon: Briefcase, label: 'Freelance & Part-Time Roles' },
  { icon: Users, label: 'Business-Ready Talent Pool' },
  { icon: Rocket, label: 'Growth-Driven Ecosystem' },
];

export default function TrustStrip() {
  return (
    <section className="relative py-8 bg-[var(--surface)] border-y border-[var(--border-light)]">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 justify-center"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-[var(--border)] flex items-center justify-center shadow-sm shrink-0">
                <item.icon className="w-5 h-5 text-[var(--accent)]" />
              </div>
              <span className="text-[13px] font-semibold text-[var(--charcoal)] leading-tight">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
