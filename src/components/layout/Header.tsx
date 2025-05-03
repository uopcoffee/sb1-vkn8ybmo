import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-white/90 backdrop-blur-sm shadow-sm' : 'py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/ballast_logo.svg" 
            alt="Ballast Financial" 
            className="h-10 w-auto"
          />
          <span className="brand-text text-2xl font-semibold text-[#0D2C3E]">
            Ballast Financial
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-[#0D2C3E] hover:text-[#87B6A4] transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-[#0D2C3E] hover:text-[#87B6A4] transition-colors">
            About
          </Link>
          <Link to="/services" className="text-[#0D2C3E] hover:text-[#87B6A4] transition-colors">
            Services
          </Link>
          <Link 
            to="/contact"
            className="btn btn-primary rounded-full bg-[#F1BDA3] hover:bg-[#87B6A4] text-white px-6 py-3"
          >
            Get in touch
          </Link>
        </div>

        <button
          className="md:hidden text-[#0D2C3E]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-[#0D2C3E] hover:text-[#87B6A4] transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-[#0D2C3E] hover:text-[#87B6A4] transition-colors">
              About
            </Link>
            <Link to="/services" className="text-[#0D2C3E] hover:text-[#87B6A4] transition-colors">
              Services
            </Link>
            <Link 
              to="/contact"
              className="btn btn-primary rounded-full bg-[#F1BDA3] hover:bg-[#87B6A4] text-white w-full text-center px-6 py-3"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;