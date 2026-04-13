'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    { q: "Who can register on the platform?", a: "Any student currently enrolled in a college or university can register using their institutional email ID or student ID." },
    { q: "How does it work?", a: "We partner with colleges and verified employers to provide students with real industry opportunities. After registering, students can create profiles and apply for freelance or part-time roles from trusted organizations." },
    { q: "Is there any registration fee?", a: "No, registration is completely free for students. Colleges and companies can also collaborate with us at no initial cost." },
    { q: "Are the opportunities paid?", a: "Yes. All freelancing and part-time jobs on our platform offer high pay based on the performance." },
    { q: "How does this benefit colleges?", a: "Our platform helps colleges strengthen their students’ employability by offering real-world industry exposure through freelance and part-time projects. This collaboration enhances students’ practical learning, improves placement readiness, and contributes to better training and career outcomes." },
    { q: "Is there a fee for colleges to partner?", a: "No, partnership is free of charge." },
    { q: "How can I get help or support?", a: "You can reach our support team via the “Help & Support” of our relationship manager contact. We respond within 24 hours." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-[#0d0d1a] py-32 relative">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-900 border border-indigo-800 mb-6 w-max">
            <span className="text-[12px] font-[800] tracking-[0.08em] uppercase text-indigo-400">Frequent Questions</span>
          </div>
          <h2 className="text-[44px] md:text-[52px] font-[800] tracking-[-0.02em] text-white leading-tight mb-4">
            Everything you need to know
          </h2>
          <p className="text-[16px] text-[#94a3b8] font-[500]">
            Everything about how the platform works and getting started.
          </p>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="bg-[#141428] rounded-[24px] border border-white/5 overflow-hidden transition-all duration-300 shadow-xl"
              >
                <button
                  className="w-full text-left p-8 flex items-center justify-between gap-6 outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="text-[16px] md:text-[18px] font-[800] text-[#f1f5f9]">{faq.q}</span>
                  <div className="w-[32px] h-[32px] rounded-full bg-indigo-900 flex items-center justify-center shrink-0">
                    {isOpen 
                      ? <Minus className="w-[16px] h-[16px] text-indigo-400" />
                      : <Plus className="w-[16px] h-[16px] text-indigo-400" />
                    }
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-8 pt-0 border-t border-white/5 mt-2">
                        <div className="w-[60px] h-[3px] rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 mb-6" />
                        <p className="text-[16px] leading-[1.8] text-[#94a3b8] font-[500]">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
