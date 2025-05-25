import React, { useEffect } from 'react';
import Meta from '../components/Meta';
import Button from '../components/common/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 text-center px-4">
      <Meta title="404 – Ballast Financial" description="The page you are looking for does not exist." />
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-500">
        Page Not Found
      </h1>
      <p className="text-lg text-primary-500/80 mb-8">
        Sorry, the page you're looking for does not exist.
      </p>
      <Button variant="primary" size="lg" to="/">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
