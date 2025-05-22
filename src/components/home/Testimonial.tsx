import React from 'react';
import { motion } from 'framer-motion';

const Testimonial: React.FC = () => {
  return (
    <section className="py-20 bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-500">
            What Our Clients Say
          </h2>
          <blockquote className="text-xl md:text-2xl italic text-primary-500 mb-6">
            “Ballast’s team allowed us to offload our financial operations entirely – we closed our Series A confidently knowing our finances were in order.”
          </blockquote>
          <p className="font-bold text-primary-500">Jane Startup, Founder of GrowthTech</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
