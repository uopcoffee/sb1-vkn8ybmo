import React from 'react';
import { Briefcase, BarChart2, Shield } from 'lucide-react';

const features = [
  {
    icon: <Briefcase className="w-12 h-12 text-accent-900" />,
    title: 'Startup specialists',
    description:
      'operators who have scaled finance teams inside venture-backed businesses',
  },
  {
    icon: <Shield className="w-12 h-12 text-accent-900" />,
    title: 'Execution first',
    description:
      'we own the close and the dashboards\u2014not just the slide deck',
  },
  {
    icon: <BarChart2 className="w-12 h-12 text-accent-900" />,
    title: 'Built-in efficiency',
    description:
      'automation and global delivery keep quality high and costs in check',
  },
  {
    icon: <Briefcase className="w-12 h-12 text-accent-900" />,
    title: 'Scales with you',
    description:
      'processes and systems designed to flex from Series A to pre-IPO',
  },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">
            Why Ballast
          </h2>
          <p className="text-lg text-primary-500/80">
            Finance infrastructure that scales—from first close to enterprise-ready.
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
