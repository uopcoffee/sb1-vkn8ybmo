import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import CalendlyEmbed from '../components/contact/CalendlyEmbed';
import ContactInfo from '../components/contact/ContactInfo';
import Button from '../components/common/Button';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Meta
        title="Contact – Ballast Financial | Startup CFO & Accounting"
        description="Get in touch with Ballast Financial for expert startup finance guidance. Schedule a consultation or message our team today."
      />
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/ballast-brand-background.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Talk About Your Financial Future
            </h1>
            <p className="text-xl text-primary-500/80 mb-8">
              Schedule a discovery call or reach out through any of our channels. We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-12">
            <CalendlyEmbed />
            <div className="lg:row-span-2" id="contact-form">
              <ContactForm />
            </div>
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Final Section with Rotated Background */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/ballast-brand-background.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'rotate(180deg)',
          }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Financial Operations?
            </h2>
            <p className="text-lg text-primary-500/80 mb-8">
              Let's discuss how we can help your startup build a strong financial foundation.
            </p>
            <Button variant="primary" size="lg" href="#contact-form" className="w-fit">
              Let's Talk
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;