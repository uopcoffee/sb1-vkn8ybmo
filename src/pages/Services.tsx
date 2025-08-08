import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import ServicesGrid from '../components/home/ServicesGrid';
import CaseStudies from '../components/services/CaseStudies';
import ServicesCTA from '../components/services/ServicesCTA';
import HeroSection from '../components/common/HeroSection';

const Services: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Meta
        title="Services – Ballast Financial | Startup Finance & Accounting"
        description="Explore our outsourced CFO, accounting, and finance services built for venture-backed startups. Let Ballast streamline your books and reporting."
        canonicalPath="/services"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Services',
          url: 'https://ballastfinancial.com/services',
          about: {
            '@type': 'Service',
            name: 'Startup CFO and Accounting Services',
            description: 'Outsourced CFO, accounting operations, FP&A, and finance transformation for venture-backed startups.'
          }
        }}
      />
      {/* Hero Section */}
      <HeroSection
        title="Financial Services for Growing Startups"
        subtitle="We handle your daily accounting, payroll and reporting while guiding high-level finance strategy so you can scale confidently."
        gradientClass="bg-gradient-to-br from-primary-600 to-primary-700"
        textWhite
      />

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