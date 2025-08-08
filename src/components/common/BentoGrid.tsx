import React from 'react';
import { BookOpen, Handshake, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BentoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  to: string;
  accentClass: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ icon, title, description, to, accentClass }) => (
  <Link to={to} className="group block">
    <div className={`card-interactive p-6 md:p-8 h-full relative overflow-hidden`}> 
      <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${accentClass} opacity-10 group-hover:opacity-20 transition-opacity`} />
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h3 className="text-xl font-bold text-primary-700 mb-2">{title}</h3>
          <p className="text-primary-400">{description}</p>
          <span className="mt-4 inline-flex items-center text-accent-700 font-medium">Learn more →</span>
        </div>
      </div>
    </div>
  </Link>
);

const BentoGrid: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <BentoCard
            icon={<BookOpen className="w-10 h-10 text-primary-700" />}
            title="Recurring Operations"
            description="Close, AP/AR, compliance, reporting, and management dashboards"
            to="/services#recurring"
            accentClass="bg-accent-500"
          />
          <BentoCard
            icon={<Handshake className="w-10 h-10 text-accent-700" />}
            title="Finance Advisory"
            description="FP&A, board packages, capital planning, and fundraising support"
            to="/services#advisory"
            accentClass="bg-primary-500"
          />
          <BentoCard
            icon={<TrendingUp className="w-10 h-10 text-primary-700" />}
            title="Digital Transformation"
            description="Systems selection, integrations, automation, and data architecture"
            to="/services#transformation"
            accentClass="bg-secondary-500"
          />
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;