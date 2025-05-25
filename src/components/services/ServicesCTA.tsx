import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const ServicesCTA: React.FC = () => {
  return (
    <section className="py-20 bg-accent-500 text-white">
      <div className="container-custom">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Financial Operations?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help your startup build a strong financial foundation.
          </p>
          <Button
            variant="primary"
            size="lg"
            to="/contact"
            className="bg-white text-accent-500 hover:bg-accent-50 hover:text-accent-500 transition-colors"
            onClick={() => console.log('Services CTA clicked')}
          >
            Schedule a consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
