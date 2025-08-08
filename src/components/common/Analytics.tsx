import { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    if (import.meta.env.VITE_ENABLE_ANALYTICS === 'true') {
      const loadScript = () => {
        if (document.querySelector('script[data-plausible]')) return;
        const script = document.createElement('script');
        script.src = 'https://plausible.io/js/script.js';
        script.defer = true;
        script.dataset.domain = 'ballastfinancial.com';
        script.setAttribute('data-plausible', 'true');
        document.body.appendChild(script);
      };

      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(loadScript);
      } else {
        window.addEventListener('load', () => setTimeout(loadScript, 1500), { once: true });
      }

      const onFirstInteraction = () => {
        loadScript();
        window.removeEventListener('pointerdown', onFirstInteraction);
        window.removeEventListener('keydown', onFirstInteraction);
      };
      window.addEventListener('pointerdown', onFirstInteraction, { once: true });
      window.addEventListener('keydown', onFirstInteraction, { once: true });
    }
  }, []);

  return null;
};

export default Analytics;
