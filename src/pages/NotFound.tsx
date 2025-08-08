import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import Button from '../components/common/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 text-center px-4">
      <Meta
        title="404 – Ballast Financial"
        description="The page you are looking for does not exist."
        noindex
        ogType="website"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ballastfinancial.com/' },
          ]
        }}
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-500">
        Page not found
      </h1>
      <p className="text-lg text-primary-500/80 mb-8 max-w-xl mx-auto">
        Sorry, we couldn’t find that page. You can go back home or explore our services.
      </p>
      <div className="flex gap-4 justify-center">
        <Button variant="primary" size="lg" to="/">
          Back to Home
        </Button>
        <Button variant="secondary" size="lg" to="/services">
          View Services
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
