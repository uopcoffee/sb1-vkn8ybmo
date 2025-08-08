/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import HeroSection from '../components/common/HeroSection';
import Breadcrumbs from '../components/layout/Breadcrumbs';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'What services does Ballast Financial provide?',
      a: 'We offer outsourced CFO and accounting services tailored for venture-backed startups.'
    },
    {
      q: 'How do we get started?',
      a: 'Reach out through our contact page to schedule a consultation.'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <Meta
        title="FAQ – Ballast Financial"
        description="Frequently asked questions about Ballast Financial services."
        ogType="website"
        canonicalPath="/faq"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: {
              '@type': 'Answer',
              text: a
            }
          }))
        }}
      />
      <div className="container-custom mt-4">
        <Breadcrumbs />
      </div>
      <HeroSection title="Frequently Asked Questions" />
      <section className="py-20">
        <div className="container-custom space-y-8">
          <ul className="space-y-6">
            {faqs.map(({ q, a }) => (
              <li key={q}>
                <h2 className="text-xl font-semibold text-primary-500 mb-2">{q}</h2>
                <p className="text-primary-500/80">{a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
