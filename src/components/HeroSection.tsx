import Image from 'next/image';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd7NqnnRSaFTtXKcCoB-VyKpRm4R-rCL6-NxZHjCvX0VycTWg/viewform';

export default function HeroSection() {
  return (
    <section className="bg-[#f8f9ff] py-32 border-b border-[#eef0f6] relative overflow-hidden" style={{ minHeight: '80vh' }}>
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(173,189,255,0.38),transparent_34%),radial-gradient(circle_at_75%_18%,rgba(146,232,255,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(248,249,255,0.96))]" />

      <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-center relative z-10">
        
        {/* Left Column Text */}
        <div className="flex flex-col gap-8 md:gap-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-indigo-100 shadow-sm px-5 py-2.5 rounded-full w-max">
            <div className="w-2 h-2 rounded-full bg-[#4f46e5] animate-pulse" />
            <span className="text-[12px] font-[800] tracking-[0.05em] text-[#4f46e5] uppercase">India&apos;s Premier Talent Platform</span>
          </div>

          <h1 className="text-[52px] lg:text-[64px] font-[800] tracking-[-0.02em] leading-[1.05] text-[#0d0d1a] uppercase">
            WHAT IS <br />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">TOPTIMIZE ?</span>
          </h1>

          <p className="text-[18px] leading-[1.75] text-[#6b7280] font-[500] max-w-lg">
            A platform for top notch time optimization, with an ability to earn on an existing point of business, optimized time usage for multiple sources of income, based on your day-to-day priorities, tasks and activities offering you with the paramount of skill sets, training and incentives, Welcoming you to the new-age of time activity customization.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-[800] hover:shadow-xl hover:shadow-indigo-500/25 transition-all text-[15px] text-center"
            >
              Apply Instantly &rarr;
            </a>
            <button className="w-full sm:w-auto px-10 py-4 rounded-full border border-gray-200 text-[#0d0d1a] bg-white font-[800] hover:bg-gray-50 shadow-sm transition-colors text-[15px]">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Column Grid */}
        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute inset-x-10 top-10 h-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(111,135,255,0.2),_transparent_72%)] blur-3xl" />
          <div className="absolute -bottom-8 left-6 h-28 w-28 rounded-full bg-[rgba(154,203,255,0.22)] blur-3xl" />
          <div className="absolute right-4 top-6 rounded-full border border-white/70 bg-white/75 px-4 py-2 text-[11px] font-[700] uppercase tracking-[0.18em] text-[#5260a8] shadow-[0_18px_45px_rgba(117,130,189,0.14)] backdrop-blur-xl">
            Curated Growth Stories
          </div>

          <div className="relative grid gap-5 rounded-[40px] border border-white/60 bg-white/45 p-4 shadow-[0_30px_90px_rgba(96,110,173,0.14)] backdrop-blur-xl sm:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] sm:p-5 lg:gap-6">
            <div className="relative min-h-[440px] overflow-hidden rounded-[32px] border border-white/70 shadow-[0_22px_60px_rgba(74,83,138,0.14)] group sm:min-h-[540px]">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=85"
                alt="Professional woman working in a bright collaborative workspace"
                fill
                priority
                sizes="(max-width: 639px) 100vw, (max-width: 1024px) 55vw, 32vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.03)_0%,rgba(17,24,39,0.12)_52%,rgba(15,23,42,0.74)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="max-w-[220px] rounded-[24px] border border-white/18 bg-white/10 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[11px] font-[700] uppercase tracking-[0.22em] text-white/72">TOPTIMIZE</p>
                  <p className="mt-2 text-[25px] font-[800] leading-[1.05] text-white">Time Optimization</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-rows-2 lg:gap-6">
              <div className="relative min-h-[212px] overflow-hidden rounded-[32px] border border-white/70 shadow-[0_20px_55px_rgba(74,83,138,0.12)] group">
                <Image
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=85"
                  alt="Young professional in a polished modern work setting"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1024px) 45vw, 24vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(15,23,42,0.08)_100%)]" />
              </div>

              <div className="relative min-h-[212px] overflow-hidden rounded-[32px] border border-white/70 shadow-[0_20px_55px_rgba(74,83,138,0.12)] group">
                <Image
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=85"
                  alt="Team collaboration around laptops in a growth-focused workspace"
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1024px) 45vw, 24vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04)_0%,rgba(15,23,42,0.14)_100%)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
