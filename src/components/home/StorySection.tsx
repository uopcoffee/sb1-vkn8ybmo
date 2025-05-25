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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary-500 text-center">Who We Are</h2>
          <div className="space-y-6 text-lg">
            <p className="text-primary-500/80">
              At Ballast, we’re not your typical finance people—and that’s intentional. Seasoned CFOs, controllers,
              and operators pair sharp financial insight with real-world startup empathy. Our model pairs senior
              finance leadership with a seasoned global team and AI-driven workflows, helping us ramp quickly,
              control costs, and pave the way for full digital automation. We don’t just run GAAP checklists;
              we right-size G&amp;A for where your company is now and architect processes for where you’re headed,
              turning back-office pain into strategic clarity.
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