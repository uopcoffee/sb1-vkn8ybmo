/* eslint-disable react-refresh/only-export-components */
import React, { useEffect } from 'react';
import { setMeta } from '../utils/seo';

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
    setMeta({
      title: 'FAQ – Ballast Financial',
      description: 'Frequently asked questions about Ballast Financial services.'
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 container-custom space-y-8">
      <h1 className="text-4xl font-bold text-primary-500">Frequently Asked Questions</h1>
      <ul className="space-y-6">
        {faqs.map(({ q, a }) => (
          <li key={q}>
            <h2 className="text-xl font-semibold text-primary-500 mb-2">{q}</h2>
            <p className="text-primary-500/80">{a}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
