'use client';

import { motion } from 'framer-motion';
import { Trophy, Wallet, GraduationCap, ShieldCheck, HeartHandshake, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Wallet,
    title: 'Transparent Earnings',
    desc: 'Clear upfront project rates. No hidden fees, meaning you take home what you actually earn.'
  },
  {
    icon: HeartHandshake,
    title: 'Trusted Network',
    desc: 'Work directly with verified fast-growing businesses, ensuring completely reliable payouts.'
  },
  {
    icon: Trophy,
    title: 'Performance Rewards',
    desc: 'Exceptional delivery is recognized. Unlock bonuses, badges, and prioritized future matching.'
  },
  {
    icon: GraduationCap,
    title: 'Portfolio Building',
    desc: 'Convert academic knowledge into shipped products in your real-case professional resume.'
  },
  {
    icon: ShieldCheck,
    title: 'Vetted Quality',
    desc: 'We filter out scam listings and low-quality clients so you only interact with serious teams.'
  },
  {
    icon: Zap,
    title: 'Instant Workflow',
    desc: 'Spend less time writing cover letters and more time executing exactly what you excel at.'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-32 lg:py-48 bg-white relative border-y border-gray-100">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50" />

      <div className="section-container relative z-10">
         <div className="mb-24 lg:mb-32">
           <h2 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] text-center leading-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
             Designed specifically for<br />
             <span className="gradient-text">Top-Tier Performers</span>
           </h2>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
           {benefits.map((b, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               viewport={{ once: true, margin: "-50px" }}
               className="premium-card p-12 group"
             >
               <div className="w-16 h-16 rounded-[20px] bg-blue-50 border border-blue-100 flex items-center justify-center mb-10 group-hover:bg-blue-600 transition-colors duration-300">
                 <b.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
               </div>
               <h3 className="text-2xl font-bold text-[#0f172a] mb-5 group-hover:text-blue-600 transition-colors">{b.title}</h3>
               <p className="text-lg text-gray-500 leading-relaxed font-medium">{b.desc}</p>
             </motion.div>
           ))}
         </div>
      </div>
    </section>
  );
}
