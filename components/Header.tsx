import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' }, // Changed/Added
  { label: 'News', href: '#news' },       // Changed/Added
  { label: 'Contact', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-champagne-50/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
           <div className={`w-8 h-8 border border-current rotate-45 flex items-center justify-center transition-colors duration-300 ${isScrolled ? 'text-champagne-600' : 'text-slate-800'}`}>
              <div className="w-4 h-4 bg-current" />
           </div>
           <span className={`font-serif text-2xl font-medium tracking-wide ${isScrolled ? 'text-slate-800' : 'text-slate-900'}`}>
             LUMINA
           </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 hover:text-champagne-600 ${
                isScrolled ? 'text-slate-600' : 'text-slate-800'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-champagne-50 shadow-xl border-t border-champagne-200 md:hidden flex flex-col items-center py-10 gap-6 animate-fade-in-up">
           {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg uppercase tracking-widest font-serif text-slate-800 hover:text-champagne-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;