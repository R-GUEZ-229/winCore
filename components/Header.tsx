
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button, WinCoreLogo } from './UiElements';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#06070A]/95 backdrop-blur-xl border-b border-white/10 py-1 shadow-2xl' : 'bg-transparent py-6'
      }`}
    >
      <div className={`container mx-auto px-4 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'min-h-[70px]' : 'min-h-[110px]'}`}>
        {/* Logo clickable area */}
        <div className="flex items-center cursor-pointer overflow-visible h-full py-2" onClick={() => scrollToSection('#hero')}>
            <WinCoreLogo size={isScrolled ? 75 : 100} />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-[10px] font-bold text-[#C8D1D8] hover:text-[#FF8A00] transition-colors uppercase tracking-[0.25em] relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FF8A00] to-[#FF00C8] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <Button onClick={() => scrollToSection('#contact')} variant="primary" className="py-2.5 px-8 text-[10px] uppercase tracking-[0.2em]" glow>
            COMMANDER
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                className="text-left text-[#C8D1D8] hover:text-[#FF8A00] py-4 border-b border-white/5 text-sm font-bold uppercase tracking-widest flex justify-between items-center group"
              >
                {link.label}
                <span className="w-2 h-2 rounded-full bg-[#FF8A00] opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_10px_#FF8A00]"></span>
              </button>
            ))}
            <Button onClick={() => scrollToSection('#contact')} className="mt-4 w-full text-sm uppercase tracking-widest py-4">
              Commander maintenant
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
