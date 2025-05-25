import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const BottomCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary-500 to-secondary-400 text-white">
      <div className="container-custom">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-500">
              Let's discuss your financial strategy
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-500/90">
              Get your financial report and see how we can strengthen your operations.
            </p>
            <Button
              variant="primary"
              size="lg"
              to="/contact"
              className="w-fit"
              onClick={() => console.log('Bottom CTA clicked')}
            >
              Get Your Financial Report
            </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;