'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Zap, ArrowRight, TrendingUp } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd7NqnnRSaFTtXKcCoB-VyKpRm4R-rCL6-NxZHjCvX0VycTWg/viewform';

const opportunities = [
  {
    title: 'Content Growth Strategist',
    company: 'BrandFlow Inc.',
    type: 'Freelance',
    location: 'Remote',
    category: 'Marketing',
  },
  {
    title: 'Frontend Junior Developer',
    company: 'TechVision',
    type: 'Part-Time',
    location: 'Hybrid',
    category: 'Engineering',
  },
  {
    title: 'Campus Ambassador Lead',
    company: 'TOPTIMIZE Internal',
    type: 'Internship',
    location: 'Remote',
    category: 'Growth',
  }
];

export default function OpeningsGrid() {
  return (
    <section id="opportunities" className="py-32 lg:py-48 relative bg-[#fafafa] border-t border-gray-100">
       <div className="section-container relative z-10">
         
         <div className="flex flex-col md:flex-row justify-start items-end gap-10 mb-24 max-w-4xl">
           <div className="flex-1">
             <h2 className="text-4xl md:text-6xl font-extrabold text-[#0f172a] leading-tight mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
               Curated <span className="gradient-text-accent">Opportunities</span>
             </h2>
             <p className="text-xl text-gray-500 font-medium">
               Discover hand-picked roles designed for students and skilled freelancers.
             </p>
           </div>
           <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-light shrink-0 px-8 py-4 text-base bg-white shadow-sm hover:shadow-md">
             View All Openings <ArrowRight className="w-5 h-5 ml-2" />
           </a>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
           {opportunities.map((opp, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-50px" }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="bg-white rounded-[32px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full relative overflow-hidden"
             >
               {/* Accent Gradient Glow inside card */}
               <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity" />

               <div className="p-12 flex flex-col flex-1">
                 <div className="mb-8">
                   <span className="inline-flex px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold uppercase tracking-wider mb-6">
                     {opp.category}
                   </span>
                   <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                     {opp.title}
                   </h3>
                   <p className="text-lg text-gray-500 font-semibold flex items-center gap-2">
                     <TrendingUp className="w-4 h-4" /> {opp.company}
                   </p>
                 </div>

                 <div className="flex flex-wrap gap-4 mb-10">
                   <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100">
                     <Briefcase className="w-4 h-4 text-blue-600" /> {opp.type}
                   </div>
                   <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-gray-50 py-2.5 px-4 rounded-xl border border-gray-100">
                     <MapPin className="w-4 h-4 text-violet-600" /> {opp.location}
                   </div>
                 </div>

                 <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full gap-2 text-base font-bold text-white bg-[#0f172a] group-hover:bg-blue-600 py-4 rounded-xl transition-colors mt-auto shadow-sm">
                   <Zap className="w-4 h-4" /> Apply for Role
                 </a>
               </div>
             </motion.div>
           ))}
         </div>

       </div>
    </section>
  );
}
