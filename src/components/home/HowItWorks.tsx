import React from 'react';
import { motion } from 'framer-motion';
import React, { lazy, Suspense } from 'react';
import { ArrowRightCircle } from 'lucide-react';
const ClipboardCheck = lazy(() => import('lucide-react').then(m => ({ default: m.ClipboardCheck })));
const BarChart3 = lazy(() => import('lucide-react').then(m => ({ default: m.BarChart3 })));
import Button from '../common/Button';
const TeamImg = {
  src: '/team-dynamics.svg',
  width: 1200,
  height: 400,
};
const FinancialImg = {
  src: '/financial-visual.svg',
  width: 1200,
  height: 400,
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: (
        <Suspense fallback={<div className="w-12 h-12 bg-white/10 rounded-full" />}> 
          <ClipboardCheck className="w-12 h-12 text-accent-900" />
        </Suspense>
      ),
      title: 'Flexible scope',
      description: 'hourly or project based—no long-term lock-in',
    },
    {
      icon: <ArrowRightCircle className="w-12 h-12 text-accent-900" />,
      title: 'Senior-led, global execution',
      description: 'U.S. leadership plus a vetted offshore team for 24-hour momentum and predictable cost',
    },
    {
      icon: (
        <Suspense fallback={<div className="w-12 h-12 bg-white/10 rounded-full" />}> 
          <BarChart3 className="w-12 h-12 text-accent-900" />
        </Suspense>
      ),
      title: 'Integrated stack',
      description: 'best-in-class tools stitched together for efficiency, insight, and audit-ready data',
    },
    {
      icon: (
        <Suspense fallback={<div className="w-12 h-12 bg-white/10 rounded-full" />}> 
          <ClipboardCheck className="w-12 h-12 text-accent-900" />
        </Suspense>
      ),
      title: 'Partner mindset',
      description: 'tight coordination with auditors, tax, and legal so nothing falls through the cracks',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-white/80">
            We pair senior leadership with global execution and automation.
          </p>
          </div>

        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:bg-white/20 transition-colors duration-300"
                variants={stepVariants}
              >
                <div className="relative">
                  <div className="bg-white/5 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
                    {step.icon}
                  </div>
                  <div className="absolute top-0 right-0 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg transform translate-x-1/4 -translate-y-1/4">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-white/80 text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Path 1: Discover Our Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <img
              src={TeamImg.src}
              alt="Team collaboration graphic"
              className="w-full h-48 object-cover rounded-lg mb-6"
              loading="lazy"
              width={TeamImg.width}
              height={TeamImg.height}
              decoding="async"
            />
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Discover Our Story
            </h3>
            <p className="text-white/80 text-center mb-8">
              Learn about our journey from startup consultancy to becoming a trusted financial partner for innovative companies.
            </p>
            <div className="text-center">
              <Button
                variant="secondary"
                size="lg"
                to="/about"
                className="w-fit"
              >
                About Our Journey
              </Button>
            </div>
          </motion.div>

          {/* Path 2: Explore What We Offer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <img
              src={FinancialImg.src}
              alt="Financial services graphic"
              className="w-full h-48 object-cover rounded-lg mb-6"
              loading="lazy"
              width={FinancialImg.width}
              height={FinancialImg.height}
              decoding="async"
            />
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Explore What We Offer
            </h3>
            <p className="text-white/80 text-center mb-8">
              Discover our comprehensive suite of financial services designed to help your startup scale with confidence.
            </p>
            <div className="text-center">
              <Button
                variant="secondary"
                size="lg"
                to="/services"
                className="w-fit"
              >
                View Our Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;