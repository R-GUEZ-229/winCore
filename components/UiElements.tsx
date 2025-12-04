import React, { useEffect, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  glow?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  glow = false, 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group";
  
  const variants = {
    primary: `bg-[#00A4FF] text-white hover:bg-[#0094e6] ${glow ? 'tech-glow-blue' : ''}`,
    secondary: `bg-[#FF00C8] text-white hover:bg-[#e600b4] ${glow ? 'tech-glow-pink' : ''}`,
    outline: "bg-transparent border border-[#00A4FF] text-[#00A4FF] hover:bg-[#00A4FF] hover:text-white",
    ghost: "bg-transparent text-[#C8D1D8] hover:text-white hover:bg-white/5"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10 flex items-center gap-2 justify-center">{children}</span>
      {variant !== 'ghost' && (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
      )}
    </button>
  );
};

export const SectionTitle: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
        {title.split(' ').map((word, i) => (
           <span key={i} className={i === 0 ? "text-[#00A4FF]" : "text-white"}>{word} </span>
        ))}
      </h2>
      {subtitle && <p className="text-[#C8D1D8] text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`h-1 w-20 bg-gradient-to-r from-[#00A4FF] to-[#FF00C8] rounded-full mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export const GlassCard: React.FC<{ 
    children: React.ReactNode; 
    className?: string; 
    hoverEffect?: boolean;
    onClick?: () => void;
}> = ({ children, className = '', hoverEffect = true, onClick }) => {
  return (
    <div 
        onClick={onClick}
        className={`glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-300 ${hoverEffect ? 'hover:border-[#00A4FF]/30 hover:shadow-[0_0_30px_rgba(0,164,255,0.1)]' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
      {/* Decorative corner accents */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#00A4FF]/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#FF00C8]/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setAnimate(true);
            document.body.style.overflow = 'hidden';
        } else {
            setAnimate(false);
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
                onClick={onClose}
            ></div>
            <div className={`relative w-full max-w-2xl bg-[#0A0C10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 ${animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-white/5 bg-gradient-to-r from-[#00A4FF]/10 to-transparent">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                
                {/* Body */}
                <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {children}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/5 bg-[#06070A] flex justify-end gap-3">
                    <Button variant="ghost" onClick={onClose} className="text-sm">Fermer</Button>
                    <Button 
                        onClick={() => {
                            onClose();
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="text-sm"
                    >
                        Demander ce service
                    </Button>
                </div>
            </div>
        </div>
    );
};

export const WinCoreLogo: React.FC<{ className?: string, showText?: boolean }> = ({ className, showText = true }) => (
  <div className={`flex items-center ${className}`}>
    {/* Container for the logo SVG */}
    <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0">
        <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="WinCore logo neon" className="w-full h-full block">
          <defs>
            <linearGradient id="g-neon" x1="0" x2="1">
              <stop offset="0" stopColor="#FF2DA8"/>
              <stop offset="0.45" stopColor="#19E0FF"/>
              <stop offset="1" stopColor="#FF8A00"/>
            </linearGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="blur1"/>
              <feMerge>
                <feMergeNode in="blur1"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>

            <filter id="innerGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="b"/>
              <feComposite in="SourceGraphic" in2="b" operator="over"/>
            </filter>
            
            <style>{`
              .strokeNeon { stroke: url(#g-neon); stroke-width:14; stroke-linecap:round; stroke-linejoin:round; fill:none; filter:url(#glow); }
              .w-fill { fill: url(#g-neon); stroke: rgba(255,255,255,0.33); stroke-width:0.6; opacity:0.98; filter: drop-shadow(0 0 12px rgba(255,45,168,0.6)); }
              .circuit { stroke: url(#g-neon); stroke-width:12; stroke-linecap:round; filter:url(#glow); fill:none; }
              .dot { fill:#FF8A00; filter: drop-shadow(0 0 10px rgba(255,138,0,0.9)); }
            `}</style>
          </defs>

          {/* Background subtle ring */}
          <circle cx="170" cy="210" r="180" fill="none" stroke="#04162a" strokeWidth="1" opacity="0.18" />

          {/* Shield outline */}
          <path className="strokeNeon"
                d="M170 36 L270 36 L370 110 C400 150 400 240 325 310 L170 458 L15 310 C-60 240 -60 150 -30 110 L70 36 Z"
                transform="translate(90,40) scale(0.7)" />

          {/* Stylized W shape */}
          <path className="w-fill" d="M110 220 L140 320 L170 240 L200 320 L230 220 L260 350 L230 320 L200 260 L170 320 L140 240 L110 320 Z"
                transform="translate(120,20) scale(1.05)"/>

          {/* Circuit lines */}
          <path className="circuit" d="M355 160 L420 160 L480 120" />
          <path className="circuit" d="M355 200 L430 200 L490 160" />
          <path className="circuit" d="M355 240 L440 240 L500 200" />

          {/* Dots */}
          <circle className="dot" cx="480" cy="120" r="12"/>
          <circle className="dot" cx="490" cy="160" r="12"/>
          <circle className="dot" cx="500" cy="200" r="12"/>

          {/* Overglow thin strokes */}
          <path d="M110 220 L140 320 L170 240 L200 320 L230 220" transform="translate(120,20) scale(1.05)"
                fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" opacity="0.9"/>
        </svg>
    </div>

    {/* Text Caption */}
    {showText && (
        <div className="ml-3 flex flex-col justify-center leading-none">
            <div 
                className="font-['Space_Grotesk'] font-bold text-2xl md:text-3xl text-transparent"
                style={{
                    WebkitTextStroke: '1.1px rgba(255,140,0,0.95)',
                    textShadow: '0 0 6px rgba(255,140,0,0.65), 0 0 18px rgba(255,80,0,0.25)',
                    filter: 'drop-shadow(0 0 12px rgba(255,140,0,0.75))'
                }}
            >
                WinCore
            </div>
            <div 
                className="text-[10px] md:text-xs text-[#00E0CC] opacity-90 mt-1 font-['Outfit'] tracking-wide"
                style={{
                    textShadow: '0 0 6px rgba(0,224,204,0.75)'
                }}
            >
                Solutions informatiques
            </div>
        </div>
    )}
  </div>
);