import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
        isScrolled ? 'py-4 bg-white/90 backdrop-blur-sm shadow-sm' : 'py-6'
      }`}
      role="banner"
    >
      <div className="container-custom flex justify-between items-center" role="navigation" aria-label="Primary">
        <Link to="/" className="flex items-center gap-3" aria-label="Ballast Financial home">
          <img 
            src="/ballast_logo.svg" 
            alt="Ballast Financial" 
            className="h-10 w-auto"
          />
          <span className="brand-text text-2xl font-semibold text-primary-700">
            Ballast Financial
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`text-primary-700 hover:text-accent-900 transition-colors ${isActive('/') ? 'font-semibold' : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
            onMouseEnter={() => import('../../pages/Home')}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-primary-700 hover:text-accent-900 transition-colors ${isActive('/about') ? 'font-semibold' : ''}`}
            aria-current={isActive('/about') ? 'page' : undefined}
            onMouseEnter={() => import('../../pages/About')}
          >
            About
          </Link>
          <Link
            to="/services"
            className={`text-primary-700 hover:text-accent-900 transition-colors ${isActive('/services') ? 'font-semibold' : ''}`}
            aria-current={isActive('/services') ? 'page' : undefined}
            onMouseEnter={() => import('../../pages/Services')}
          >
            Services
          </Link>
          <Link
            to="/faq"
            className={`text-primary-700 hover:text-accent-500 transition-colors ${isActive('/faq') ? 'font-semibold' : ''}`}
            aria-current={isActive('/faq') ? 'page' : undefined}
            onMouseEnter={() => import('../../pages/FAQ')}
          >
            FAQ
          </Link>
          <Link
            to="/blog"
            className={`text-primary-700 hover:text-accent-500 transition-colors ${isActive('/blog') ? 'font-semibold' : ''}`}
            aria-current={isActive('/blog') ? 'page' : undefined}
            onMouseEnter={() => import('../../pages/blog/BlogList')}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="btn btn-primary rounded-full bg-secondary-500 hover:bg-accent-500 text-white px-6 py-3"
            onClick={() => console.log('Header CTA clicked')}
            aria-label="Schedule a consultation"
          >
            Schedule a consultation
          </Link>
        </div>

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
            <Link to="/" className="text-primary-700 hover:text-accent-900 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="text-primary-700 hover:text-accent-900 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" className="text-primary-700 hover:text-accent-900 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link to="/faq" className="text-primary-700 hover:text-accent-500 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              FAQ
            </Link>
            <Link to="/blog" className="text-primary-700 hover:text-accent-500 transition-colors" role="menuitem" onClick={() => setIsMenuOpen(false)}>
              Blog
            </Link>
            <Link
              to="/contact"
              className="btn btn-primary rounded-full bg-secondary-500 hover:bg-accent-500 text-white w-full text-center px-6 py-3"
              onClick={() => { console.log('Header CTA clicked'); setIsMenuOpen(false); }}
              role="menuitem"
            >
              Schedule a consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;