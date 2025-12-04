import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button, WinCoreLogo } from './UiElements';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#06070A]/90 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Re-integrated */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('#hero')}>
            <WinCoreLogo />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-[#C8D1D8] hover:text-[#00A4FF] transition-colors uppercase tracking-wider relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00A4FF] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <Button onClick={() => scrollToSection('#contact')} variant="primary" className="py-2 px-5 text-sm" glow>
            Commander
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#06070A] border-b border-white/10 shadow-2xl animate-fade-in-up">
          <div className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <button 
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-left text-[#C8D1D8] hover:text-[#00A4FF] py-3 border-b border-white/5 font-medium flex justify-between items-center group"
              >
                {link.label}
                <span className="w-1.5 h-1.5 rounded-full bg-[#00A4FF] opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
            ))}
            <Button onClick={() => scrollToSection('#contact')} className="mt-4 w-full">
              Commander maintenant
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;