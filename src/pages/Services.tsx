import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import ServicesGrid from '../components/home/ServicesGrid';
import CaseStudies from '../components/services/CaseStudies';
import ServicesCTA from '../components/services/ServicesCTA';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Meta
        title="Services – Ballast Financial | Startup Finance & Accounting"
        description="Explore our outsourced CFO, accounting, and finance services built for venture-backed startups. Let Ballast streamline your books and reporting."
      />
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-700 opacity-95" />
        <div className="absolute inset-0 bg-[url('/ballast-brand-background.svg')] bg-cover bg-center opacity-10" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Financial Services for Growing Startups
            </h1>
            <p className="text-xl text-white/90 mb-8">
              We handle your daily accounting, payroll and reporting while guiding high-level finance strategy so you can scale confidently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <Section shade>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-lg text-primary-500/80">
              Expert services designed to help startups build strong financial foundations
            </p>
          </motion.div>
          <ServicesGrid />
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section>
        <CaseStudies />
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-secondary-500 to-secondary-400">
        <ServicesCTA />
      </Section>
    </div>
  );
};

export default Services;