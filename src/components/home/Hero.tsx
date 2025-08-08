import React from 'react';

const Hero: React.FC = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[70vh] bg-gradient-to-br from-blue-50 via-white to-gray-100 text-center px-4">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight drop-shadow-sm">
      Finance infrastructure for startups
    </h1>
    <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
      Outsourced CFO, accounting, and finance operations for venture-backed startups—so you can build and scale with confidence.
    </p>
    <a
      href="/contact"
      className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-all duration-200 text-lg"
    >
      Schedule a consultation
    </a>
    {/* Optional: Add a subtle animated SVG or gradient blob here for extra polish */}
  </section>
);

export default Hero;
