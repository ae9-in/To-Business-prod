'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';

export default function OpportunityGrid() {
  const cards = [
    {
      title: "Content Growth Strategist",
      company: "BrandFlow Inc.",
      category: "Marketing",
      imageGradient: "from-purple-500 to-indigo-600",
      type: "Freelance",
      comp: "₹15k/mo",
      remote: "Remote",
      badgeText: "text-purple-700 bg-purple-50"
    },
    {
      title: "Frontend Junior Developer",
      company: "TechVision",
      category: "Engineering",
      imageGradient: "from-blue-600 to-indigo-700",
      type: "Part-Time",
      comp: "₹25k/mo",
      remote: "Hybrid",
      badgeText: "text-indigo-700 bg-indigo-50"
    },
    {
      title: "Campus Ambassador Lead",
      company: "TOPTIMIZE Internal",
      category: "Growth",
      imageGradient: "from-emerald-400 to-teal-500",
      type: "Internship",
      comp: "Performance",
      remote: "Remote",
      badgeText: "text-emerald-700 bg-emerald-50"
    }
  ];

  return (
    <section id="opportunities" className="bg-white py-32 lg:py-40 border-b border-[#eef0f6]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f8f9ff] border border-indigo-100 mb-6">
              <span className="text-[12px] font-[800] tracking-[0.08em] uppercase text-[#4f46e5]">Top Matches</span>
            </div>
            <h2 className="text-[44px] md:text-[52px] font-[800] tracking-[-0.02em] text-[#0d0d1a] leading-tight mb-4">
              Curated Opportunities
            </h2>
            <p className="text-[18px] text-[#6b7280] font-[500]">
              Discover hand-picked roles designed for ambitious professionals.
            </p>
          </div>
          <button className="px-8 py-4 rounded-full border-2 border-gray-200 text-[#0d0d1a] font-[800] text-[15px] hover:bg-gray-50 transition-colors w-max shadow-sm">
            View All Openings &rarr;
          </button>
        </div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {cards.map((card, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              className="bg-white rounded-[32px] border border-[#eef0f6] overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/10 transition-all duration-300 group cursor-pointer"
            >
              {/* Sleek Gradient Block Instead of Photo */}
              <div className={`relative h-[220px] w-full overflow-hidden flex items-start justify-start p-6 bg-gradient-to-br ${card.imageGradient}`}>
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[length:16px_16px]" />
                <div className={`relative z-10 px-4 py-2 rounded-lg text-[12px] font-[800] tracking-wider uppercase shadow-sm ${card.badgeText}`}>
                  {card.category}
                </div>
              </div>
              
              <div className="p-10 pt-8">
                <h3 className="text-[20px] font-[800] text-[#0d0d1a] mb-2 group-hover:text-[#4f46e5] transition-colors">{card.title}</h3>
                <p className="text-[15px] text-[#6b7280] mb-8 font-[600]">{card.company}</p>
                
                <div className="flex items-center gap-3 flex-wrap">
                  {[card.type, card.comp, card.remote].map((tag, j) => (
                    <span key={j} className="px-4 py-2 bg-[#f8f9ff] text-[#4b5563] text-[13px] font-[700] rounded-xl border border-[#eef0f6]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
