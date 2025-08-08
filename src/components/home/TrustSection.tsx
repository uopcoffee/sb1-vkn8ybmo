import React from 'react';
import { motion } from 'framer-motion';

const clientLogos = [
  { name: 'Muon Space', src: '/logos/muon-space.svg' },
  { name: 'Gappify', src: '/logos/gappify.svg' },
  { name: 'Airkit', src: '/logos/airkit.svg' },
  { name: 'Productiv', src: '/logos/productiv.svg' },
  { name: 'Voyage Foods', src: '/logos/voyage-foods.svg' },
];

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-2">
            Trusted by Innovative Startups
          </h2>
          <p className="text-primary-500 max-w-2xl mx-auto">
            We've helped companies from seed to Series C build financial infrastructure that scales.
          </p>
        </div>

        {/* Accessible compact carousel */}
        <div className="relative overflow-hidden" aria-roledescription="carousel">
          <div
            className="flex gap-12 items-center animate-[scroll_30s_linear_infinite] motion-reduce:animate-none"
            aria-live="off"
          >
            {[...clientLogos, ...clientLogos].map((logo, idx) => (
              <div key={idx} className="shrink-0 w-40 h-16 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity" role="group" aria-label={logo.name}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-10 w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>

        <style>
          {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          `}
        </style>
      </div>
    </section>
  );
};

export default TrustSection;