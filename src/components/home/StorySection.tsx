import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const StorySection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container-custom"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-500 text-center">Our Story</h2>
          <div className="space-y-6 text-lg">
            <p className="text-primary-500/80">
              What began as hatchconsulting, an exploration into helping startups find their footing, 
              has evolved into Ballast Financial – the steady weight that keeps ventures stable through rough waters. 
              Our deep understanding of startup challenges, combined with years of financial expertise, 
              has shaped our approach to providing comprehensive financial infrastructure.
            </p>
            <p className="text-primary-500/80">
              Through working with countless startups, we've refined our services to address the unique 
              challenges faced by growing ventures. Today, we're proud to serve as the financial backbone 
              for innovative companies across various sectors, providing the stability they need to thrive.
            </p>
            <div className="mt-12 text-center">
              <p className="text-xl font-medium italic text-primary-500 mb-8">
                "Our mission is to anchor growing startups with solid financial operations, 
                allowing founders to steer with confidence."
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                to="/about"
                className="w-fit"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default StorySection;