import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Pentagon, Diamond, Triangle, Circle } from 'lucide-react';

const TrustSection: React.FC = () => {
  const clients = [
    { 
      name: 'Muon Space', 
      logo: <Hexagon className="w-10 h-10 text-primary-500" strokeWidth={1.5} /> 
    },
    { 
      name: 'Gappify', 
      logo: <Pentagon className="w-10 h-10 text-primary-500" strokeWidth={1.5} /> 
    },
    { 
      name: 'Airkit', 
      logo: <Diamond className="w-10 h-10 text-primary-500" strokeWidth={1.5} /> 
    },
    { 
      name: 'Productiv', 
      logo: <Triangle className="w-10 h-10 text-primary-500" strokeWidth={1.5} /> 
    },
    { 
      name: 'Voyage Foods', 
      logo: <Circle className="w-10 h-10 text-primary-500" strokeWidth={1.5} /> 
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-500 mb-2">
            Trusted by Innovative Startups
          </h2>
          <p className="text-primary-400 max-w-2xl mx-auto">
            We've helped companies from seed to Series C build financial infrastructure that scales.
          </p>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-8 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {clients.map((client, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center justify-center w-32 h-24 bg-white rounded-lg p-4 hover:bg-primary-50 transition-colors duration-300"
              variants={childVariants}
            >
              {client.logo}
              <span className="mt-2 text-sm text-primary-400">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;