import React, { useEffect } from 'react';

const CalendlyEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;

    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      document.body.appendChild(script);
    }

    return () => {
      try {
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript && existingScript.parentNode) {
          existingScript.parentNode.removeChild(existingScript);
        }
      } catch (e) {
        console.error('Error removing Calendly script:', e);
      }
    };
  }, []);

  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="bg-accent-500 text-white p-6">
        <h2 className="text-2xl font-bold mb-2">Schedule a Discovery Call</h2>
        <p className="text-white/90">30-minute consultation to discuss your needs and how we can help</p>
      </div>
      <div>
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/patrick-ballastfinancial/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=ffffff&text_color=1f4653&primary_color=87B6A4"
          style={{ minWidth: '320px', height: '700px' }} 
        />
      </div>
    </div>
  );
};

export default CalendlyEmbed;