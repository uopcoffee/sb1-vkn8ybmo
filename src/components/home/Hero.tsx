import React from 'react';
import StatBar from '../common/StatBar';

const Hero: React.FC = () => (
  <section className="relative text-center">
    {/* Background gradient + decorative blob */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary-50 via-white to-white" aria-hidden="true" />
    <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent-200 blur-3xl opacity-50 animate-blob" aria-hidden="true" />
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary-200 blur-3xl opacity-50 animate-blob" aria-hidden="true" />

    <div className="relative container-custom flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-primary-900 tracking-tight">
        Finance infrastructure for startups
      </h1>
      <p className="text-lg md:text-2xl text-primary-700/80 mb-10 max-w-2xl mx-auto">
        Outsourced CFO, accounting, and finance operations—build on accurate books, clear runway, and audit-ready systems.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <a
          href="/contact"
          className="px-8 py-3 rounded-full bg-accent-600 hover:bg-accent-700 text-white font-semibold shadow-strong transition"
        >
          Talk to finance
        </a>
        <a
          href="/services"
          className="px-8 py-3 rounded-full bg-white border border-primary-200 text-primary-700 hover:bg-primary-50 font-semibold shadow-soft transition"
        >
          Explore services
        </a>
      </div>

      <div className="mt-10 w-full">
        <StatBar />
      </div>
    </div>
  </section>
);

export default Hero;
