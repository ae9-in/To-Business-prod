'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd7NqnnRSaFTtXKcCoB-VyKpRm4R-rCL6-NxZHjCvX0VycTWg/viewform';

export default function CTASection() {
  return (
    <section className="bg-[#f8f9ff] py-24 relative overflow-hidden">
      <div className="mx-4 md:mx-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#1e1b4b] via-[#2e1a47] to-[#1e1b4b] rounded-[40px] border border-indigo-700/30 overflow-hidden shadow-2xl"
        >
          {/* Centered Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center py-32 px-6">
            <h2 className="text-[44px] md:text-[52px] font-[800] tracking-[-0.02em] text-white leading-tight mb-6">
              Ready to rewrite your<br />
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">Career Story?</span>
            </h2>
            
            <p className="text-[18px] font-[500] text-indigo-200/80 mb-12 max-w-xl">
              Stop waiting for opportunities. Step into our premium ecosystem and connect with ambitious startups actively looking for your exact skills.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-[15px] font-[800] hover:shadow-xl hover:shadow-indigo-500/30 transition-all outline-none flex items-center justify-center gap-2 group">
                Apply Instantly <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Line */}
            <div className="flex items-center gap-3 text-[13px] font-[700] text-indigo-300/60 tracking-wider uppercase">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" />
              <span>Free to join · No placement fee · 5,000+ students placed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
