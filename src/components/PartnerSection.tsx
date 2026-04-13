'use client';

import { motion } from 'framer-motion';
import { Building2, ArrowRight } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd7NqnnRSaFTtXKcCoB-VyKpRm4R-rCL6-NxZHjCvX0VycTWg/viewform';

export default function PartnerSection() {
  return (
    <section id="partners" className="py-32 lg:py-48 bg-white relative overflow-hidden">
      <div className="glow-orb glow-lavender w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none" />

      <div className="section-container relative z-10 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#fafafa] rounded-[48px] shadow-sm border border-gray-100 relative overflow-hidden"
        >
          
          <div className="relative z-20 flex flex-col items-center text-center p-16 md:p-24 lg:p-32">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-gray-200 bg-white shadow-sm mb-12">
              <Building2 className="w-5 h-5 text-violet-600" />
              <span className="text-sm font-bold text-[#0f172a] tracking-wider uppercase">For Businesses</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#0f172a] leading-tight mb-8 max-w-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
              Scale faster with <br className="hidden md:block"/>
              <span className="gradient-text-accent">Elastic Talent.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-500 font-medium mb-16 max-w-2xl leading-relaxed">
              Stop over-hiring. Access a highly vetted pool of specialized professionals and ambitious students ready to execute on your immediately critical projects.
            </p>

            <div className="flex gap-4">
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-glow px-10 py-5 text-lg hover:shadow-[0_10px_25px_-5px_rgba(139,92,246,0.3)]">
                <span className="relative z-10 flex items-center justify-center gap-2">Hire Top Talent <ArrowRight className="w-5 h-5" /></span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
