'use client';

import { Play, TrendingUp, Layers, CheckCircle, Zap, ShieldCheck } from 'lucide-react';
import LogoLoop from './LogoLoop';

const marqueeItems = [
  { 
    node: (
      <div className="flex items-center gap-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer px-4">
        <Play className="w-6 h-6" /> <span className="font-bold uppercase tracking-widest text-base">Real Projects</span>
      </div>
    ), 
    title: "Real Projects" 
  },
  { 
    node: (
      <div className="flex items-center gap-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer px-4">
        <TrendingUp className="w-6 h-6" /> <span className="font-bold uppercase tracking-widest text-base">Career Growth</span>
      </div>
    ), 
    title: "Career Growth" 
  },
  { 
    node: (
      <div className="flex items-center gap-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer px-4">
        <Layers className="w-6 h-6" /> <span className="font-bold uppercase tracking-widest text-base">Skill Development</span>
      </div>
    ), 
    title: "Skill Development" 
  },
  { 
    node: (
      <div className="flex items-center gap-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer px-4">
        <CheckCircle className="w-6 h-6" /> <span className="font-bold uppercase tracking-widest text-base">Trusted Partners</span>
      </div>
    ), 
    title: "Trusted Partners" 
  },
  { 
    node: (
      <div className="flex items-center gap-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer px-4">
        <Zap className="w-6 h-6" /> <span className="font-bold uppercase tracking-widest text-base">Impact Work</span>
      </div>
    ), 
    title: "Impact Work" 
  },
  { 
    node: (
      <div className="flex items-center gap-4 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer px-4">
        <ShieldCheck className="w-6 h-6" /> <span className="font-bold uppercase tracking-widest text-base">Premium Talent</span>
      </div>
    ), 
    title: "Premium Talent" 
  }
];

export default function BrandMarquee() {
  return (
    <div className="py-6 border-y border-gray-100 bg-white relative overflow-hidden">
      <LogoLoop
        logos={marqueeItems}
        speed={80}
        direction="left"
        logoHeight={48}
        gap={64}
        hoverSpeed={0}
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Platform features"
      />
    </div>
  );
}
