import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#f8f9ff] py-32 lg:py-40 border-b border-[#eef0f6] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-20 lg:gap-32 items-center">
        
        {/* Left: 2x2 Abstract Grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 relative h-[280px] rounded-[32px] overflow-hidden shadow-sm border border-gray-200/50 group">
            <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80" alt="Team working over a laptop" fill sizes="(max-width: 1024px) 100vw, 34vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent mix-blend-multiply" />
          </div>
          <div className="relative h-[220px] rounded-[32px] overflow-hidden shadow-sm border border-gray-200/50 group">
            <Image src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=400&q=80" alt="Black professionals collaborating" fill sizes="(max-width: 1024px) 50vw, 16vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" />
            <div className="absolute inset-0 bg-indigo-900/20 mix-blend-overlay" />
          </div>
          <div className="relative h-[220px] rounded-[32px] overflow-hidden shadow-sm border border-gray-200/50 group">
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80" alt="Colleagues working" fill sizes="(max-width: 1024px) 50vw, 16vw" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" />
            <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay" />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex flex-col">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-indigo-100 shadow-sm w-max mb-6">
            <span className="text-[12px] font-[800] tracking-[0.08em] uppercase text-[#4f46e5]">Platform Ecosystem</span>
          </div>
          
          <h2 className="text-[44px] md:text-[52px] font-[800] tracking-[-0.02em] text-[#0d0d1a] leading-[1.1] mb-6">
            About Us
          </h2>
          
          <div className="text-[18px] text-[#6b7280] font-[500] leading-[1.75] mb-10 max-w-lg flex flex-col gap-6">
            <p>
              Toptimize connects talented individuals with freelance and part-time opportunities curated to their skills and interests. We believe work should fit your lifestyle and strengths — not the other way around.
            </p>
            <p>
              Toptimize empowers you to work smarter, explore more, and unlock your potential.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
