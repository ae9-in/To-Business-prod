'use client';

import dynamic from 'next/dynamic';

const Iridescence = dynamic(() => import('./Iridescence'), {
  ssr: false,
});

export default function HeroIridescence() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-multiply hidden md:block">
      <Iridescence
        color={[0.5, 0.6, 0.82]}
        speed={0.45}
        amplitude={0.035}
        mouseReact={false}
      />
    </div>
  );
}
