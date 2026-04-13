export default function HowItWorks() {
  return (
    <section id="current-openings" className="bg-white py-32 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f8f9ff] border border-indigo-100 shadow-sm mb-6">
            <span className="text-[11px] font-[800] tracking-[0.08em] uppercase text-[#4f46e5]">Current Openings</span>
          </div>
          <h2 className="text-[44px] md:text-[52px] font-[800] tracking-[-0.02em] text-[#0d0d1a] leading-tight mb-6">
            Freelancing & Part-Time <br />
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">Opportunities</span>
          </h2>
          <div className="text-[18px] text-[#6b7280] font-[500] leading-[1.75]">
            <p className="mb-6">
              Toptimize connects you with flexible freelance and part-time jobs tailored to your skills and interests. Work on projects you enjoy, earn performance-based rewards, and grow your experience — all on your own terms.
            </p>
          </div>
        </div>

        <div className="relative mt-12 flex justify-center">
          <div className="w-full max-w-4xl bg-gradient-to-br from-[#f8f9ff] to-white p-10 md:p-14 rounded-[32px] border border-indigo-50 shadow-xl shadow-indigo-900/5 text-center">
            <h3 className="text-[20px] font-[800] text-[#0d0d1a] mb-4 tracking-wider">
              PART TIME OR FREELANCING JOB OPPORTUNITIES
            </h3>
            <p className="text-[16px] text-[#6b7280] leading-relaxed font-[500] max-w-3xl mx-auto">
              These opportunities offer flexibility, performance-based earnings, and a chance to work on projects that align with your interests. It’s a smart way to gain experience, build your portfolio, and grow professionally — all while working on your own terms.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
