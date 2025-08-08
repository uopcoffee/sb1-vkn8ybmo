import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/ballast_logo.svg"
                alt="Ballast Financial"
                className="h-10 w-auto brightness-0 invert"
                loading="lazy"
                width="120"
                height="40"
                decoding="async"
              />
              <span className="brand-text text-2xl font-semibold text-white">
                Ballast Financial
              </span>
            </Link>
            <p className="mt-4 text-gray-200">
              Expert consulting for venture-backed startups navigating periods of rapid growth and uncertainty.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors">
                  Accounting Operations
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors">
                  Vendor Management
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors">
                  FP&A
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-200 hover:text-white transition-colors">
                  Special Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-secondary-500 flex-shrink-0 mt-1" />
                <span>490 Post St STE 500 Unit 2035<br />San Francisco, CA 94102</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-secondary-500" />
                <a href="tel:415-508-6113" className="hover:text-secondary-500 transition-colors">
                  (415) 508-6113
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-secondary-500" />
                <a href="mailto:contact@ballastfinancial.com" className="hover:text-secondary-500 transition-colors">
                  contact@ballastfinancial.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-200">
              &copy; {currentYear} Ballast Financial. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/eula" className="text-sm text-gray-200 hover:text-white transition-colors">
                EULA
              </Link>
              <Link to="/privacy-policy" className="text-sm text-gray-200 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;