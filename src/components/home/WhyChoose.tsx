import React from 'react';
import { Briefcase, BarChart2, Shield } from 'lucide-react';

const features = [
  {
    icon: <Briefcase className="w-12 h-12 text-accent-900" />,
    title: 'Startup Expertise',
    description:
      'Guidance from professionals who have supported high-growth ventures.',
  },
  {
    icon: <Shield className="w-12 h-12 text-accent-900" />,
    title: 'Fractional CFO Service',
    description:
      'Strategic leadership without the full-time expense.',
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-accent-900" />,
    title: 'Venture-Backed Focus',
    description:
      'Trusted by founders to manage millions in funding securely.',
  },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Why Choose Ballast
          </h2>
          <p className="text-lg text-primary-500/80">
            We combine startup savvy with seasoned finance leadership.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center px-6 py-8 bg-primary-50 rounded-lg shadow-section"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-primary-500">
                {feature.title}
              </h3>
              <p className="text-primary-500/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
