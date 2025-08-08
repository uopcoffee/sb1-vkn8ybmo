import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import Hero from '../components/home/Hero';
import ReactLazy = React.lazy;
const HowItWorks = React.lazy(() => import('../components/home/HowItWorks'));
const WhyChoose = React.lazy(() => import('../components/home/WhyChoose'));
const Testimonial = React.lazy(() => import('../components/home/Testimonial'));
const BottomCTA = React.lazy(() => import('../components/home/BottomCTA'));

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Meta
        title="Ballast Financial – Startup CFO & Accounting Services"
        description="Outsourced CFO, accounting, and finance operations for venture-backed startups. Ballast Financial streamlines your financial processes and provides steady guidance so you can scale with confidence."
        canonicalPath="/"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Ballast Financial',
            url: 'https://ballastfinancial.com',
            logo: 'https://ballastfinancial.com/ballast_logo.svg',
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-415-508-6113',
              contactType: 'customer service',
              email: 'contact@ballastfinancial.com',
              areaServed: 'US',
              availableLanguage: ['English']
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: '490 Post St STE 500 Unit 2035',
              addressLocality: 'San Francisco',
              addressRegion: 'CA',
              postalCode: '94102',
              addressCountry: 'US'
            }
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Ballast Financial',
            url: 'https://ballastfinancial.com',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://ballastfinancial.com/?q={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          }
        ]}
      />
      <Hero />
      <React.Suspense fallback={<div className="text-center py-12">Loading…</div>}>
        <HowItWorks />
        <WhyChoose />
        <Testimonial />
        <BottomCTA />
      </React.Suspense>
    </>
  );
};

export default Home;