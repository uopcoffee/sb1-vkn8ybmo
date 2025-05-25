import React from 'react';
import Button from '../common/Button';
import HeroSection from '../common/HeroSection';

const Hero: React.FC = () => {
  return (
    <HeroSection
      title="Finance Infrastructure for Venture‑Backed Startups"
      subtitle="We serve as your startup’s outsourced finance team—handling accounting, payroll and CFO strategy—so you can focus on growth."
      gradientClass="bg-gradient-to-br from-white via-secondary-50 to-accent-50"
    >
      <div className="flex justify-center">
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
    </HeroSection>
  );
};

export default Hero;