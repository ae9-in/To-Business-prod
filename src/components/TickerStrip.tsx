export default function TickerStrip() {
  const items = [
    "REAL PROJECTS",
    "CAREER GROWTH",
    "SKILL DEVELOPMENT",
    "TRUSTED PARTNERS",
    "IMPACT WORK",
    "PREMIUM TALENT"
  ];
  const doubledItems = [...items, ...items, ...items, ...items]; // Quadruple to ensure perfect infinite wrap

  return (
    <div className="w-full bg-white border-b border-[#eef0f6] overflow-hidden pt-[80px]">
      <div className="relative py-4 hover:bg-gray-50/50 transition-colors cursor-default">
        <div className="animate-marquee items-center text-[12px] font-[700] text-[#6b7280] tracking-[0.08em] uppercase flex space-x-0 w-max shrink-0">
          {doubledItems.map((item, index) => (
            <div key={index} className="flex items-center w-max shrink-0 px-8">
              <span>{item}</span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#4f46e5] ml-16 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
