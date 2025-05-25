import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import HeroSection from '../common/HeroSection';

const Hero: React.FC = () => {
  return (
    <HeroSection
      title="Finance Infrastructure for Venture‑Backed Startups"
      subtitle="We serve as your startup’s outsourced finance team—handling accounting, payroll and CFO strategy—so you can focus on growth."
      gradientClass="bg-gradient-to-br from-white via-secondary-50 to-accent-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <Button
          variant="primary"
          size="lg"
          to="/contact"
          className="w-fit px-8 py-4"
          onClick={() => console.log('Hero CTA clicked')}
        >
          Schedule a consultation
        </Button>
      </motion.div>
    </HeroSection>
  );
};

export default Hero;
