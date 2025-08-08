import React from 'react';

const heroTrustLogos = [
  { name: 'Muon Space', src: '/logos/muon-space.svg' },
  { name: 'Gappify', src: '/logos/gappify.svg' },
  { name: 'Airkit', src: '/logos/airkit.svg' },
  { name: 'Productiv', src: '/logos/productiv.svg' },
  { name: 'Voyage Foods', src: '/logos/voyage-foods.svg' },
];

const HeroTrustBar: React.FC = () => {
  return (
    <div className="py-4 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-t border-neutral-200">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {heroTrustLogos.map((logo, idx) => (
            <div key={idx} className="h-10 flex items-center opacity-80 hover:opacity-100 transition-opacity" aria-label={logo.name}>
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-8 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroTrustBar;
