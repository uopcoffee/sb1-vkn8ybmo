import { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    if (import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
      const script = document.createElement('script');
      script.src = 'https://plausible.io/js/script.js';
      script.defer = true;
      script.dataset.domain = 'ballastfinancial.com';
      document.body.appendChild(script);
    }
  }, []);

  return null;
};

export default Analytics;
