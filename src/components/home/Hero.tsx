import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle gradient background with brand shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary-50 to-accent-50" />
      <div className="absolute inset-0 bg-[url('/ballast-brand-background.svg')] bg-cover bg-center opacity-40" />

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col text-center lg:text-left pt-32 lg:pt-0"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-500 leading-tight mb-6">
              Finance Infrastructure for Venture‑Backed Startups
            </h1>
            <p className="text-xl text-primary-500/80 mb-8 max-w-xl mx-auto lg:mx-0">
              We serve as your startup’s outsourced finance team—handling accounting,
              payroll and CFO strategy—so you can focus on growth.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                to="/contact"
                className="w-fit px-8 py-4"
                onClick={() => console.log('Hero CTA clicked')}
              >
                Schedule a consultation
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative h-screen"
          >
            <div className="absolute inset-0 bg-[url('/ballast-brand-background.svg')] bg-cover bg-center" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
