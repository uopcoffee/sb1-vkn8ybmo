import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div className="mt-12 space-y-8">
      <div className="flex items-start gap-4">
        <Phone className="w-6 h-6 text-secondary-500" />
        <div>
          <h3 className="font-bold mb-1">Phone</h3>
          <a 
            href="tel:415-508-6113" 
            className="text-primary-500/80 hover:text-primary-500"
          >
            (415) 508-6113
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Mail className="w-6 h-6 text-secondary-500" />
        <div>
          <h3 className="font-bold mb-1">Email</h3>
          <a 
            href="mailto:contact@ballastfinancial.com" 
            className="text-primary-500/80 hover:text-primary-500"
          >
            contact@ballastfinancial.com
          </a>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <MapPin className="w-6 h-6 text-secondary-500" />
        <div>
          <h3 className="font-bold mb-1">Office</h3>
          <p className="text-primary-500/80">
            490 Post St STE 500 Unit 2035<br />
            San Francisco, CA 94102
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;