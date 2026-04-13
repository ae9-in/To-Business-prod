export default function HourglassSymbol({ className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 320" className={className}>
      {/* Bases */}
      <rect x="20" y="20" width="160" height="20" rx="8" fill="#2d3142" />
      <rect x="20" y="280" width="160" height="20" rx="8" fill="#2d3142" />
      
      {/* Glass Outline */}
      <path d="M 30 40 L 30 60 C 30 110, 75 140, 85 150 C 90 155, 110 155, 115 150 C 125 140, 170 110, 170 60 L 170 40" fill="none" stroke="#2d3142" strokeWidth="16" strokeLinejoin="round" />
      <path d="M 30 280 L 30 260 C 30 210, 75 180, 85 170 C 90 165, 110 165, 115 170 C 125 180, 170 210, 170 260 L 170 280" fill="none" stroke="#2d3142" strokeWidth="16" strokeLinejoin="round" />

      {/* Top Sand Area */}
      {/* The sand fills exactly the bottom part of the upper bulb but avoids the bottom half of the circle */}
      {/* We can use a path that draws the sand surface, but subtracts the circle */}
      <path d="M 38 75 Q 60 70, 70 75 L 70 75 A 30 30 0 0 0 130 75 Q 140 70, 162 75 C 162 105, 125 130, 110 140 C 105 145, 95 145, 90 140 C 75 130, 38 105, 38 75 Z" fill="#2d3142" />

      {/* The Male Symbol Circle overlay */}
      {/* The circle has dark stroke, and its top half is filled, bottom half is empty */}
      <path d="M 70 75 A 30 30 0 0 1 130 75 Z" fill="#2d3142" />
      <circle cx="100" cy="75" r="30" fill="none" stroke="#2d3142" strokeWidth="12" />
      
      {/* The Arrow pointing up */}
      <path d="M 100 45 L 100 15 M 80 35 L 100 15 L 120 35" fill="none" stroke="#2d3142" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Falling Sand */}
      <circle cx="100" cy="150" r="4" fill="#2d3142" />
      <circle cx="95" cy="165" r="3.5" fill="#2d3142" />
      <circle cx="106" cy="172" r="4" fill="#2d3142" />
      <circle cx="98" cy="184" r="3" fill="#2d3142" />
      <circle cx="102" cy="195" r="4" fill="#2d3142" />

      {/* Additional random sand particles */}
      <circle cx="104" cy="142" r="2.5" fill="#2d3142" />
      <circle cx="92" cy="152" r="2.5" fill="#2d3142" />
      <circle cx="108" cy="160" r="3" fill="#2d3142" />
      <circle cx="95" cy="178" r="2.5" fill="#2d3142" />
      <circle cx="105" cy="188" r="3" fill="#2d3142" />

      {/* Bottom section with human */}
      {/* Human head */}
      <circle cx="100" cy="210" r="12" fill="#2d3142" />
      {/* Body and legs */}
      <path d="M 100 220 L 105 240 L 120 280 M 100 220 L 95 240 L 75 280 M 100 220 L 100 230" fill="none" stroke="#2d3142" strokeWidth="14" strokeLinecap="round" />
      {/* Arms reaching up */}
      <path d="M 65 190 C 75 210, 90 225, 100 225 C 110 225, 125 210, 135 190" fill="none" stroke="#2d3142" strokeWidth="10" strokeLinecap="round" />

      {/* Accumulated Sand Piles on left and right */}
      {/* Rendered as many small dots or jagged shapes to look like sand */}
      <path d="M 40 280 L 70 280 L 85 240 Z" fill="#2d3142" opacity="0.9" />
      <path d="M 160 280 L 130 280 L 115 240 Z" fill="#2d3142" opacity="0.9" />
      
      {/* Some dots around the sand piles for texture */}
      <circle cx="50" cy="270" r="3" fill="#2d3142" />
      <circle cx="65" cy="275" r="3" fill="#2d3142" />
      <circle cx="75" cy="265" r="3" fill="#2d3142" />
      <circle cx="80" cy="250" r="3" fill="#2d3142" />
      <circle cx="58" cy="260" r="3.5" fill="#2d3142" />

      <circle cx="150" cy="270" r="3" fill="#2d3142" />
      <circle cx="135" cy="275" r="3" fill="#2d3142" />
      <circle cx="125" cy="265" r="3" fill="#2d3142" />
      <circle cx="120" cy="250" r="3" fill="#2d3142" />
      <circle cx="142" cy="260" r="3.5" fill="#2d3142" />
    </svg>
  );
}
