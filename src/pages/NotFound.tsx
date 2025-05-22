import React, { useEffect } from 'react';
import Button from '../components/common/Button';

const NotFound: React.FC = () => {
  useEffect(() => {
    document.title = '404 | Ballast Financial';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 text-center px-4">
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
