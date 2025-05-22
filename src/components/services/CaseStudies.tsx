import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Rocket, Cpu, Leaf, Briefcase, Code, Factory, Coffee } from 'lucide-react';

interface CaseStudy {
  id: string;
  type: string;
  industry: string;
  serviceAreas: string[];
  companySize: string;
  challenge: string;
  solution: string;
  result: string;
  icon: JSX.Element;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    type: 'Series A',
    industry: 'SaaS',
    serviceAreas: ['ERP Implementation', 'Fundraising Readiness'],
    companySize: '100–200 employees',
    challenge: 'Execute dual-track ERP implementation while maintaining audit-ready financials during capital raise.',
    solution: 'Implemented parallel workstreams for ERP deployment and fundraising preparation.',
    result: 'On-time ERP launch, uninterrupted investor reporting, improved month-end close.',
    icon: <Building2 className="w-8 h-8" />
  },
  {
    id: '2',
    type: 'Pre-Seed',
    industry: 'Agri-Food',
    serviceAreas: ['Government Compliance', 'Capital Project Management'],
    companySize: '50–100 employees',
    challenge: 'Manage USDA-funded R&D facility build while ensuring compliance and tax credit capture.',
    solution: 'Developed comprehensive project management and compliance tracking system.',
    result: 'Timely loan drawdowns, full credit capture, real-time spend visibility.',
    icon: <Leaf className="w-8 h-8" />
  },
  {
    id: '3',
    type: 'Growth',
    industry: 'Aerospace',
    serviceAreas: ['P2P Systems', 'Budget Controls'],
    companySize: '100–200 employees',
    challenge: 'Scale procurement processes while maintaining tight budget control.',
    solution: 'Implemented 3-way match and BvA-enabled procure-to-pay system.',
    result: 'Streamlined purchasing, tighter budget control, audit-friendly systems.',
    icon: <Rocket className="w-8 h-8" />
  },
  {
    id: '4',
    type: 'Series B',
    industry: 'AI/ML',
    serviceAreas: ['M&A Advisory', 'Global Entity Management'],
    companySize: '150–300 employees',
    challenge: 'Navigate complex acquisition preparation and foreign entity restructuring.',
    solution: 'Led comprehensive M&A readiness and global entity optimization.',
    result: 'Seamless financial transition, no reporting disruptions, leadership acclaim.',
    icon: <Cpu className="w-8 h-8" />
  },
  {
    id: '5',
    type: 'Series B',
    industry: 'Robotics',
    serviceAreas: ['ASC 805', 'Carve-Out Support'],
    companySize: '100–200 employees',
    challenge: 'Complex acquisition accounting and regulatory compliance needs.',
    solution: 'Executed purchase price allocation and ASC 805 compliance protocols.',
    result: 'Clean execution with zero audit flags and continuity of operations.',
    icon: <Factory className="w-8 h-8" />
  },
  {
    id: '6',
    type: 'Pre-Seed',
    industry: 'Fintech',
    serviceAreas: ['Global Startup Setup', 'Tax Coordination'],
    companySize: '11–50 employees',
    challenge: 'Launch global operations with complex international tax requirements.',
    solution: 'Established comprehensive financial infrastructure and tax framework.',
    result: 'Infrastructure in place pre-funding; led to $60M raise from top investors.',
    icon: <Briefcase className="w-8 h-8" />
  },
  {
    id: '7',
    type: 'Series A',
    industry: 'Dev Tools',
    serviceAreas: ['ASC 606 Compliance', 'Interim Finance Leadership'],
    companySize: '11–50 employees',
    challenge: 'Upgrade technical accounting while maintaining operational stability.',
    solution: 'Implemented ASC 606 compliance framework while managing daily operations.',
    result: 'Financial stability, clean audit path, and readiness for capital raise.',
    icon: <Code className="w-8 h-8" />
  },
  {
    id: '8',
    type: 'Seed',
    industry: 'Sustainability',
    serviceAreas: ['Billing Infrastructure', 'Supply Chain Readiness'],
    companySize: '10–50 employees',
    challenge: 'Scale billing and supply chain systems for major OEM contract.',
    solution: 'Developed enterprise-grade billing and P2P infrastructure.',
    result: 'Operational readiness and billing reliability meeting multinational standards.',
    icon: <Leaf className="w-8 h-8" />
  },
  {
    id: '9',
    type: 'Growth',
    industry: 'Food Services',
    serviceAreas: ['Litigation Support', 'Crisis Advisory'],
    companySize: '~350 employees',
    challenge: 'Navigate contract litigation while maintaining business operations.',
    solution: 'Implemented robust documentation protocols and advisory support.',
    result: 'Stabilized operations, retained market presence, managed reputational risk.',
    icon: <Coffee className="w-8 h-8" />
  }
];

const CaseStudies: React.FC = () => {
  const [activeFilters, setActiveFilters] = useState({
    stage: '',
    industry: '',
    service: ''
  });

  const stages = ['Pre-Seed', 'Seed', 'Series A', 'Series B', 'Growth'];
  const industries = [...new Set(caseStudies.map(study => study.industry))];
  const services = [...new Set(caseStudies.flatMap(study => study.serviceAreas))];

  const filteredStudies = useMemo(() => {
    return caseStudies.filter(study => {
      const stageMatch = !activeFilters.stage || study.type === activeFilters.stage;
      const industryMatch = !activeFilters.industry || study.industry === activeFilters.industry;
      const serviceMatch = !activeFilters.service || study.serviceAreas.includes(activeFilters.service);
      return stageMatch && industryMatch && serviceMatch;
    });
  }, [activeFilters]);

  const clearFilters = () => {
    setActiveFilters({
      stage: '',
      industry: '',
      service: ''
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
          Client Success Stories
        </h2>
        <p className="text-lg text-primary-500/80">
          Discover how we've helped startups across industries build strong financial foundations
        </p>
      </motion.div>

      {/* Filters */}
      <div className="mb-12 sticky top-20 z-30 bg-white py-4 shadow-sm rounded-lg">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <select
            value={activeFilters.stage}
            onChange={(e) => setActiveFilters({ ...activeFilters, stage: e.target.value })}
            className="px-4 py-2 rounded-lg border border-primary-100 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
          >
            <option value="">All Stages</option>
            {stages.map(stage => (
              <option key={stage} value={stage}>{stage}</option>
            ))}
          </select>

          <select
            value={activeFilters.industry}
            onChange={(e) => setActiveFilters({ ...activeFilters, industry: e.target.value })}
            className="px-4 py-2 rounded-lg border border-primary-100 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
          >
            <option value="">All Industries</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>{industry}</option>
            ))}
          </select>

          <select
            value={activeFilters.service}
            onChange={(e) => setActiveFilters({ ...activeFilters, service: e.target.value })}
            className="px-4 py-2 rounded-lg border border-primary-100 bg-white focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
          >
            <option value="">All Services</option>
            {services.map(service => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>

          {(activeFilters.stage || activeFilters.industry || activeFilters.service) && (
            <button
              onClick={clearFilters}
              className="px-4 py-2 text-sm text-accent-500 hover:text-accent-600 transition-colors"
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Case Studies Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredStudies.map((study) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-primary-100"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-accent-50 rounded-lg">
                    {study.icon}
                  </div>
                  <span className="px-3 py-1 bg-secondary-50 text-secondary-700 rounded-full text-sm font-medium">
                    {study.type}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-primary-500">{study.industry} Company</h3>
                    <p className="text-sm text-primary-500/60">{study.companySize}</p>
                  </div>

                  <div>
                    <p className="text-primary-500/80">{study.challenge}</p>
                  </div>

                  <div className="pt-4 border-t border-primary-100">
                    <p className="text-sm font-medium text-primary-500 mb-2">Result:</p>
                    <p className="text-primary-500/80">{study.result}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {study.serviceAreas.map((area, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-accent-50 text-accent-700 rounded-full text-xs"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CaseStudies;