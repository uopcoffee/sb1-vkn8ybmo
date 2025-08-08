import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import PricingTable from '../components/common/PricingTable';
import Breadcrumbs from '../components/layout/Breadcrumbs';

const Pricing: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24">
      <Meta
        title="Pricing – Ballast Financial"
        description="Transparent pricing for startup CFO, accounting, and finance operations."
        canonicalPath="/pricing"
        ogType="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Pricing',
          url: 'https://ballastfinancial.com/pricing'
        }}
      />
      <div className="container-custom mt-4">
        <Breadcrumbs />
      </div>
      <section className="section-sm text-center">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-3">Simple, transparent pricing</h1>
          <p className="text-primary-500/80 max-w-2xl mx-auto">
            Start with a monthly package and add projects as needed. No long-term lock‑in.
          </p>
        </div>
      </section>
      <PricingTable />
    </div>
  );
};

export default Pricing;
