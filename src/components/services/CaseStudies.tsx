import React from 'react';

interface CaseStudy {
  company: string;
  summary: string;
  result: string;
}

const caseStudies: CaseStudy[] = [
  { company: 'Muon Space', summary: 'Stood up accounting and monthly close; implemented reporting cadence.', result: 'On-time board packages; cash visibility improved.' },
  { company: 'Gappify', summary: 'Consolidated finance tools and automated AP/AR flows.', result: '70% reduction in manual reconciliations.' },
  { company: 'Voyage Foods', summary: 'Scaled finance ops from Seed to B; built data pipelines.', result: 'Reliable KPI reporting across ops and finance.' },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8">Customer stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {caseStudies.map((cs, idx) => (
            <div key={idx} className="card p-6">
              <div className="text-sm text-primary-600 mb-1">{cs.company}</div>
              <div className="font-semibold text-primary-800 mb-2">{cs.summary}</div>
              <div className="text-primary-700">{cs.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;