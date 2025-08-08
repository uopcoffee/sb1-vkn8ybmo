import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/layout/Breadcrumbs';

const Resources: React.FC = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24">
      <Meta
        title="Resources – Ballast Financial"
        description="Explore our blog, FAQs, and how-to guides to learn about building finance infrastructure."
        canonicalPath="/resources"
        ogType="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Resources',
          url: 'https://ballastfinancial.com/resources'
        }}
      />
      <div className="container-custom mt-4">
        <Breadcrumbs />
      </div>

      <section className="section">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">Resources</h1>
          <p className="text-primary-500/80 mb-10">Learn how to build reliable finance operations. Start with our most popular guides.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/blog" className="card p-6 hover:shadow-strong">
              <h2 className="text-xl font-bold text-primary-700 mb-2">Blog</h2>
              <p className="text-primary-500">Insights on finance ops, systems, and reporting.</p>
            </Link>
            <Link to="/faq" className="card p-6 hover:shadow-strong">
              <h2 className="text-xl font-bold text-primary-700 mb-2">FAQ</h2>
              <p className="text-primary-500">Answers to common questions about working with Ballast.</p>
            </Link>
            <Link to="/contact" className="card p-6 hover:shadow-strong">
              <h2 className="text-xl font-bold text-primary-700 mb-2">Talk to sales</h2>
              <p className="text-primary-500">Tell us about your needs—we’ll propose a plan.</p>
            </Link>
            <a href="/services#case-studies" className="card p-6 hover:shadow-strong">
              <h2 className="text-xl font-bold text-primary-700 mb-2">Customer stories</h2>
              <p className="text-primary-500">See how we’ve helped teams go faster with confidence.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
