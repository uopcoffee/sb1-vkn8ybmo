import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Handshake, TrendingUp, ChevronDown } from 'lucide-react';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  details: string[];
}

const services: Service[] = [

  {
    icon: <BookOpen className="w-12 h-12 text-primary-700 stroke-[2]" />,
    title: 'Recurring Operations',
    description: 'accounting, month-end close, AP/AR, compliance, and management reporting',
    details: []
  },
  {
    icon: <Handshake className="w-12 h-12 text-accent-700 stroke-[2]" />,
    title: 'Finance Advisory & Oversight',
    description: 'fractional finance leadership, FP&A, board and investor reporting, capital planning',
    details: []
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-primary-700 stroke-[2]" />,
    title: 'Digital Transformation',
    description: 'system selection and integration, process automation, data architecture, and workflow design',
    details: []
  }
];
const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">{service.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-primary-700 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        </div>
        <ChevronDown
          className={`w-6 h-6 text-primary-700 transition-transform duration-300 flex-shrink-0 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-6">
              <ul className="space-y-2 text-gray-600">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-700" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
            What We Do
          </h2>
          <p className="text-lg text-gray-600">
            We deliver end-to-end finance capability across three complementary lanes:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;