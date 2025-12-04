import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './UiElements';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#00A4FF] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#FF00C8] rounded-full mix-blend-screen filter blur-[120px] opacity-15"></div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
            backgroundImage: `linear-gradient(#1a202c 1px, transparent 1px), linear-gradient(90deg, #1a202c 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse"></span>
            <span className="text-xs md:text-sm text-[#00FF9D] font-medium tracking-wide uppercase">Solutions Informatiques Premium</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Votre Expert <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A4FF] via-white to-[#FF00C8]">
            Informatique Moderne
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#C8D1D8] max-w-2xl mx-auto mb-10 leading-relaxed">
          Installation Windows, logiciels professionnels, déblocage de téléphones et création web. 
          Une expertise rapide et fiable pour booster votre productivité.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            glow
          >
            Démarrer un projet <ArrowRight className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Voir nos offres
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;