'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd7NqnnRSaFTtXKcCoB-VyKpRm4R-rCL6-NxZHjCvX0VycTWg/viewform';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-white border-b border-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-xl font-[800] tracking-tight text-[#0d0d1a]">
            <span className="text-[#4f46e5]">T</span>OPTIMIZE
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['About', 'Opportunities', 'How it Works', 'For Employers'].map((item) => (
            <Link key={item} href={`#${item.toLowerCase().replace(/ /g, '-')}`} className="text-[13px] font-[500] text-[#6b7280] hover:text-[#0d0d1a] transition-colors">
              {item}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-6">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-[13px] font-[700] hover:shadow-lg hover:shadow-indigo-500/25 transition-all"
          >
            Apply Instantly
          </a>
        </div>
      </div>
    </nav>
  );
}
