import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-500 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
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
            <p className="mt-4 text-gray-200 max-w-sm">
              Finance infrastructure for startups: accounting ops, reporting, and guidance built to scale.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-200">
              <li><Link to="/services#recurring" className="hover:text-white">Recurring Operations</Link></li>
              <li><Link to="/services#advisory" className="hover:text-white">Finance Advisory</Link></li>
              <li><Link to="/services#transformation" className="hover:text-white">Digital Transformation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-200">
              <li><Link to="/services#seed" className="hover:text-white">Seed–A</Link></li>
              <li><Link to="/services#growth" className="hover:text-white">Series B–C</Link></li>
              <li><Link to="/services#saas" className="hover:text-white">SaaS</Link></li>
              <li><Link to="/services#commerce" className="hover:text-white">Commerce</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-200">
              <li><Link to="/resources" className="hover:text-white">Overview</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
              <li><a href="/services#case-studies" className="hover:text-white">Customer stories</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-200">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-white">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-200">
              &copy; {currentYear} Ballast Financial. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2"><MapPin className="h-5 w-5 text-secondary-300" /><span>San Francisco, CA</span></div>
              <a href="tel:415-508-6113" className="hover:text-secondary-300 transition-colors flex items-center gap-2"><Phone className="h-5 w-5 text-secondary-300" />(415) 508-6113</a>
              <a href="mailto:contact@ballastfinancial.com" className="hover:text-secondary-300 transition-colors flex items-center gap-2"><Mail className="h-5 w-5 text-secondary-300" />contact@ballastfinancial.com</a>
              <Link to="/eula" className="text-sm text-gray-200 hover:text-white">EULA</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;