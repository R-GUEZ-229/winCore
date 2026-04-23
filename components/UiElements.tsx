
import React, { useEffect, useState, useRef } from 'react';
import { X, CheckCircle } from 'lucide-react';

// --- Reveal Component for smooth scroll animations ---
export const Reveal: React.FC<{ children: React.ReactNode; width?: "fit-content" | "100%" }> = ({ children, width = "100%" }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ width, position: "relative", overflow: "hidden" }}>
      <div
        className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

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
  const baseStyle = "px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group active:scale-95";
  
  const variants = {
    primary: `bg-[#FF8A00] text-white hover:bg-[#e67c00] ${glow ? 'tech-glow-orange' : ''}`,
    secondary: `bg-[#FF00C8] text-white hover:bg-[#e600b4] ${glow ? 'tech-glow-pink' : ''}`,
    outline: "bg-transparent border border-[#FF8A00] text-[#FF8A00] hover:bg-[#FF8A00] hover:text-white",
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
           <span key={i} className={i === 0 ? "text-[#FF8A00]" : "text-white"}>{word} </span>
        ))}
      </h2>
      {subtitle && <p className="text-[#C8D1D8] text-lg max-w-2xl mx-auto">{subtitle}</p>}
      <div className={`h-1 w-20 bg-gradient-to-r from-[#FF8A00] via-[#FF00C8] to-[#00F0FF] rounded-full mt-4 ${align === 'center' ? 'mx-auto' : ''}`}></div>
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
        className={`glass-panel p-6 rounded-2xl relative overflow-hidden transition-all duration-500 ${hoverEffect ? 'hover:border-[#FF8A00]/40 hover:shadow-[0_0_40px_rgba(255,138,0,0.15)] hover:-translate-y-2' : ''} ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#FF8A00]/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#00F0FF]/10 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
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
                className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-500"
                onClick={onClose}
            ></div>
            <div className={`relative w-full max-w-2xl bg-[#0A0C10] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 ${animate ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <div className="flex justify-between items-center p-6 border-b border-white/5 bg-gradient-to-r from-[#FF8A00]/10 to-transparent">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 text-white transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                    {children}
                </div>
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

export const WinCoreLogo: React.FC<{ className?: string; size?: number }> = ({ className, size = 95 }) => (
  <div className={`flex items-center overflow-visible select-none pointer-events-none relative group ${className}`}>
    <div className="absolute inset-0 bg-[#FF8A00]/5 blur-2xl rounded-full scale-150 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
    
    <img 
      src="https://i.imgur.com/5RcABTE.png" 
      alt="WinCore Logo" 
      loading="lazy"
      style={{
        height: `${size}px`,
        width: 'auto',
        background: 'transparent',
        objectFit: 'contain',
        mixBlendMode: 'screen',
        filter: `
          drop-shadow(0 0 12px rgba(255, 138, 0, 0.6))
          drop-shadow(0 0 24px rgba(255, 0, 200, 0.3))
          brightness(1.15)
          contrast(1.1)
        `
      }}
      className="block relative z-10 animate-logo-pulse transform transition-transform duration-700 group-hover:scale-105"
      onError={(e) => {
        (e.target as HTMLImageElement).src = "https://i.imgur.com/5RcABTE.png";
      }}
    />
    
    <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden mix-blend-overlay opacity-30">
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-45 animate-logo-sweep"></div>
    </div>

    <style>{`
      @keyframes logo-pulse {
        0%, 100% { filter: drop-shadow(0 0 12px rgba(255, 138, 0, 0.6)) drop-shadow(0 0 24px rgba(255, 0, 200, 0.3)) brightness(1.15); }
        50% { filter: drop-shadow(0 0 20px rgba(255, 138, 0, 0.8)) drop-shadow(0 0 35px rgba(255, 0, 200, 0.5)) brightness(1.3); }
      }
      @keyframes logo-sweep {
        0% { transform: translateX(-200%) skewX(-45deg); }
        20%, 100% { transform: translateX(300%) skewX(-45deg); }
      }
      .animate-logo-pulse {
        animation: logo-pulse 4s ease-in-out infinite;
      }
      .animate-logo-sweep {
        animation: logo-sweep 6s ease-in-out infinite;
      }
    `}</style>
  </div>
);
