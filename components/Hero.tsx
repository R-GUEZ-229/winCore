
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from './UiElements';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Background Video Layer - High Performance & Cinematic */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#06070A]/10 via-transparent to-[#06070A] z-20"></div>
        
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="w-full h-full object-cover scale-110 opacity-70 fixed top-0 left-0"
          style={{ 
            filter: 'brightness(0.7) contrast(1.3) saturate(1.1)',
            pointerEvents: 'none'
          }}
        >
          <source src="https://assets.awwwards.com/awards/element/2025/09/68d8018b98070018972221.mp4" type="video/mp4" />
          <div className="w-full h-full bg-[#06070A]"></div>
        </video>

        {/* Cyber-Grid & Scanlines Overlay */}
        <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.08]"
             style={{
               backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}>
        </div>
        <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.1]"
             style={{
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.3) 3px)',
               backgroundSize: '100% 4px'
             }}>
        </div>
      </div>

      {/* Atmospheric Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#FF8A00] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#FF00C8] rounded-full mix-blend-screen filter blur-[150px] opacity-10 z-10"></div>

      <div className="container mx-auto px-4 relative z-40 text-center">
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-10 animate-fade-in-up shadow-[0_0_20px_rgba(255,138,0,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8A00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8A00]"></span>
            </span>
            <span className="text-[10px] md:text-xs text-white/80 font-bold tracking-[0.3em] uppercase">Architecture Digitale Next-Gen</span>
        </div>

        <h1 className="text-5xl md:text-[7rem] font-extrabold text-white mb-8 leading-[0.9] tracking-tighter">
          Propulsez votre <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A00] via-[#FF00C8] to-[#00F0FF] animate-gradient-x drop-shadow-[0_0_30px_rgba(255,138,0,0.3)]">
            Performance
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-[#C8D1D8]/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          L'alliance ultime entre puissance informatique et design futuriste. 
          Solutions logicielles pro, sécurité avancée et création digitale d'élite.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            glow
            className="px-12 py-5 text-lg min-w-[260px] shadow-2xl"
          >
            COMMANDER <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="ghost"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 text-lg text-white border border-white/10 hover:bg-white/5"
          >
            DÉCOUVRIR NOS SERVICES
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce text-white/20 z-40">
        <ChevronDown className="w-10 h-10" />
      </div>
    </section>
  );
};

export default Hero;
