import React from 'react';

interface Plan {
  name: string;
  price: string;
  features: string[];
}

const plans: Plan[] = [
  { name: 'Essential', price: 'from $3,500/mo', features: ['Monthly close', 'Payroll coordination', 'AP/AR workflows', 'Board reporting basics'] },
  { name: 'Growth', price: 'from $6,500/mo', features: ['Everything in Essential', 'FP&A and budgeting', 'KPI dashboards', 'Vendor & systems management'] },
  { name: 'Scale', price: 'custom + hourly', features: ['Everything in Growth', 'Systems & automation', 'Audit readiness', 'M&A and special projects'] },
];

const PricingTable: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8">Transparent pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <div key={idx} className="card p-6 flex flex-col">
              <div className="text-sm text-primary-400 mb-1">{p.name}</div>
              <div className="text-2xl font-bold text-primary-700 mb-4">{p.price}</div>
              <ul className="space-y-2 text-primary-500 mb-6">
                {p.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="btn btn-accent rounded-full mt-auto">Talk to sales</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
