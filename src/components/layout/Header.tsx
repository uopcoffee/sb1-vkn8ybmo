import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MegaMenu from '../common/MegaMenu';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-white/90 backdrop-blur-sm shadow-sm' : 'py-5'
      }`}
      role="banner"
    >
      <div className="container-custom flex justify-between items-center" role="navigation" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" aria-label="Ballast Financial home">
          <img 
            src="/ballast_logo.svg" 
            alt="Ballast Financial" 
            className="h-10 w-auto"
            width="120"
            height="40"
            decoding="async"
            fetchpriority="high"
          />
          <span className="brand-text text-2xl font-semibold text-primary-700">
            Ballast Financial
          </span>
        </Link>

        {/* Desktop navigation with mega menu */}
        <MegaMenu />

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-primary-700 w-11 h-11 flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden" role="menu" aria-label="Mobile">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/services" className="text-primary-700 hover:text-accent-900 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/services" className="text-primary-700 hover:text-accent-900 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </Link>
            <Link to="/blog" className="text-primary-700 hover:text-accent-500 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              Resources
            </Link>
            <Link to="/pricing" className="text-primary-700 hover:text-accent-500 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link to="/contact" className="text-primary-700 hover:text-accent-500 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <div className="pt-2 grid grid-cols-2 gap-3">
              <Link
                to="/contact"
                className="btn btn-accent rounded-full w-full text-center px-6 py-3"
                onClick={() => { setIsMenuOpen(false); }}
                role="menuitem"
              >
                Start now
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline rounded-full w-full text-center px-6 py-3"
                onClick={() => { setIsMenuOpen(false); }}
                role="menuitem"
              >
                Contact sales
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;