import React from 'react';
import StatBar from '../common/StatBar';
import HeroTrustBar from '../common/HeroTrustBar';

const Hero: React.FC = () => (
  <section className="relative text-center">
    <div className="relative flex flex-col items-center justify-center min-h-[68vh] gradient-hero px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight text-balance">
        Reliable finance infrastructure to scale your startup
      </h1>
      <p className="text-lg md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Close your books monthly, sharpen visibility, and automate the busywork—so your team can move faster with confidence.
      </p>
      <div className="flex items-center gap-3">
        <a
          href="/contact"
          className="btn btn-accent btn-xl rounded-full"
        >
          Start now
        </a>
        <a
          href="/contact"
          className="btn btn-outline btn-xl rounded-full"
        >
          Contact sales
        </a>
      </div>
    </div>
    <StatBar />
    <HeroTrustBar />
  </section>
);

export default Hero;
