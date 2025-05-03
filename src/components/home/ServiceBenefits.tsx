import React from 'react';
import { motion } from 'framer-motion';
import { Clock, PieChart, TrendingUp } from 'lucide-react';

const ServiceBenefits: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12 text-secondary-500" />,
      title: "70% Less Time on Financial Admin",
      description: "Our streamlined processes and automation free up founders to focus on what matters most—growing the business.",
    },
    {
      icon: <PieChart className="w-12 h-12 text-secondary-500" />,
      title: "Board-Ready Financials Every Month",
      description: "Clear, accurate financial statements and KPI dashboards that give your board the insights they need.",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-secondary-500" />,
      title: "Clear Cash Runway Insights",
      description: "Always know exactly where you stand with real-time cash forecasting and runway analysis.",
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-primary-500 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Financial Operations Built for Growth
          </h2>
          <p className="text-lg text-gray-200">
            We help venture-backed startups build solid financial foundations so they can scale with confidence.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-primary-600 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1"
              variants={cardVariants}
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceBenefits;