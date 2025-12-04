import React from 'react';
import { SectionTitle } from './UiElements';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#06070A] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1">
                <SectionTitle title="À Propos de WinCore" align="left" />
                <p className="text-lg text-[#C8D1D8] leading-relaxed mb-6">
                    <span className="text-[#00A4FF] font-bold">WinCore</span> est une équipe jeune et dynamique spécialisée dans les solutions informatiques rapides, modernes et fiables. 
                </p>
                <p className="text-[#C8D1D8] leading-relaxed mb-8">
                    Nous aidons les entreprises et les particuliers à optimiser leur matériel, installer les systèmes Windows les plus performants, configurer leurs logiciels professionnels et développer une présence digitale impactante.
                </p>
                
                <div className="flex gap-4">
                    <div className="p-4 bg-white/5 rounded-lg border-l-4 border-[#FF00C8]">
                        <h4 className="text-white font-bold text-2xl">5+</h4>
                        <span className="text-sm text-[#C8D1D8]">Années d'expérience</span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg border-l-4 border-[#00A4FF]">
                        <h4 className="text-white font-bold text-2xl">500+</h4>
                        <span className="text-sm text-[#C8D1D8]">Clients Satisfaits</span>
                    </div>
                </div>
            </div>

            {/* Visual */}
            <div className="flex-1 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00A4FF] to-[#FF00C8] rounded-2xl blur-2xl opacity-20 transform rotate-6"></div>
                <div className="relative bg-[#0A0C10] border border-white/10 rounded-2xl p-2">
                     <img 
                        src="https://picsum.photos/600/400" 
                        alt="Team WinCore" 
                        className="rounded-xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                     />
                     {/* Overlay lines */}
                     <div className="absolute top-10 right-0 w-20 h-1 bg-[#00A4FF]"></div>
                     <div className="absolute bottom-10 left-0 w-20 h-1 bg-[#FF00C8]"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;