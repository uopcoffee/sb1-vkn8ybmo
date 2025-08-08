import React from 'react';

const heroTrustLogos = [
  { name: 'Muon Space', src: '/ballast_logo.svg' },
  { name: 'Gappify', src: '/ballast_logo.svg' },
  { name: 'Airkit', src: '/ballast_logo.svg' },
  { name: 'Productiv', src: '/ballast_logo.svg' },
  { name: 'Voyage Foods', src: '/ballast_logo.svg' },
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