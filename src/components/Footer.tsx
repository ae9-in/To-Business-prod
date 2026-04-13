import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-9 border-t border-[#eef0f6]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-1.5 mb-6">
              <span className="text-[20px] font-[800] tracking-tight text-[#0d0d1a]">
                <span className="text-[#4f46e5]">T</span>OPTIMIZE
              </span>
            </Link>
            <p className="text-[13px] text-[#6b7280] leading-[1.75] max-w-sm">
              Bridging the gap between active student talent and ambitious technology startups throughout India.
            </p>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-[11px] font-[700] tracking-[0.08em] uppercase text-[#9ca3af] mb-4">Platform</h4>
            <ul className="flex flex-col gap-3">
              {['Opportunities', 'How it Works', 'Pricing', 'Success Stories'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13px] font-[500] text-[#4b5563] hover:text-[#4f46e5] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-[700] tracking-[0.08em] uppercase text-[#9ca3af] mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Careers', 'Partner Program', 'Contact'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13px] font-[500] text-[#4b5563] hover:text-[#4f46e5] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-[700] tracking-[0.08em] uppercase text-[#9ca3af] mb-4">Legal</h4>
            <ul className="flex flex-col gap-3">
              {['Privacy Policy', 'Terms of Service', 'Cookie Guidelines', 'Trust & Safety'].map(link => (
                <li key={link}>
                  <Link href="#" className="text-[13px] font-[500] text-[#4b5563] hover:text-[#4f46e5] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-[#eef0f6] mt-12 pt-7 gap-4">
          <div className="text-[13px] font-[500] text-[#9ca3af]">
            © {new Date().getFullYear()} TOPTIMIZE. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <div className="px-3 py-1 bg-gray-100 rounded-full text-[11px] font-[700] text-[#6b7280]">Made in India 🇮🇳</div>
            <div className="px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-[11px] font-[700] text-[#4f46e5]">Free to Join</div>
          </div>
        </div>

      </div>
    </footer>
  );
}
