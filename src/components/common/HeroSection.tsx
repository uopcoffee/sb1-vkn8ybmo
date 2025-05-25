import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  gradientClass?: string;
  textWhite?: boolean;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  gradientClass,
  textWhite = false,
  children,
}) => {
  return (
    <section className="py-20 relative overflow-hidden">
      {gradientClass && (
        <div className={`absolute inset-0 ${gradientClass} opacity-95`} />
      )}
      <div className="absolute inset-0 bg-[url('/ballast-brand-background.svg')] bg-cover bg-center opacity-10" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              textWhite ? 'text-white' : 'text-primary-500'
            }`}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              className={`text-xl mb-8 ${
                textWhite ? 'text-white/90' : 'text-primary-500/80'
              }`}
            >
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
