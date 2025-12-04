import React from 'react';
import { Smartphone, Unlock, ShieldAlert } from 'lucide-react';
import { Button, SectionTitle } from './UiElements';

const Unlocking: React.FC = () => {
  return (
    <section id="unlock" className="py-24 bg-black relative overflow-hidden">
      {/* Matrix Style Background Effect */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 157, .1) 25%, rgba(0, 255, 157, .1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 157, .1) 75%, rgba(0, 255, 157, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 157, .1) 25%, rgba(0, 255, 157, .1) 26%, transparent 27%, transparent 74%, rgba(0, 255, 157, .1) 75%, rgba(0, 255, 157, .1) 76%, transparent 77%, transparent)`,
            backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
            title="Déblocage Mobile Expert" 
            subtitle="Redonnez vie à votre smartphone bloqué. Service rapide et sécurisé." 
        />

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Android Card */}
            <div className="flex-1 bg-[#06070A] border border-[#00FF9D]/30 p-8 rounded-2xl relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00FF9D] shadow-[0_0_10px_#00FF9D]"></div>
                <div className="flex items-center gap-4 mb-6">
                    <Smartphone className="w-10 h-10 text-[#00FF9D]" />
                    <h3 className="text-2xl font-bold text-white">Android</h3>
                </div>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-[#C8D1D8]">
                        <Unlock className="w-5 h-5 text-[#00FF9D] shrink-0" />
                        <span>Compte Google (FRP) Samsung, Xiaomi, Huawei...</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#C8D1D8]">
                        <ShieldAlert className="w-5 h-5 text-[#00FF9D] shrink-0" />
                        <span>Mot de passe / Schéma oublié</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#C8D1D8]">
                        <Smartphone className="w-5 h-5 text-[#00FF9D] shrink-0" />
                        <span>Désimlockage réseau tout opérateur</span>
                    </li>
                </ul>
                <Button 
                    variant="outline" 
                    className="w-full border-[#00FF9D] text-[#00FF9D] hover:bg-[#00FF9D] hover:text-black"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Débloquer Android
                </Button>
            </div>

            {/* iPhone Card */}
            <div className="flex-1 bg-[#06070A] border border-[#00A4FF]/30 p-8 rounded-2xl relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#00A4FF] shadow-[0_0_10px_#00A4FF]"></div>
                 <div className="flex items-center gap-4 mb-6">
                    <Smartphone className="w-10 h-10 text-[#00A4FF]" />
                    <h3 className="text-2xl font-bold text-white">iPhone / iOS</h3>
                </div>
                <ul className="space-y-4 mb-8">
                    <li className="flex items-start gap-3 text-[#C8D1D8]">
                        <Unlock className="w-5 h-5 text-[#00A4FF] shrink-0" />
                        <span>Bypass iCloud (selon modèle)</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#C8D1D8]">
                        <ShieldAlert className="w-5 h-5 text-[#00A4FF] shrink-0" />
                        <span>Code d'accès oublié / iPhone désactivé</span>
                    </li>
                    <li className="flex items-start gap-3 text-[#C8D1D8]">
                        <Smartphone className="w-5 h-5 text-[#00A4FF] shrink-0" />
                        <span>Désimlockage Officiel & Semi-officiel</span>
                    </li>
                </ul>
                <Button 
                    variant="outline" 
                    className="w-full border-[#00A4FF] text-[#00A4FF] hover:bg-[#00A4FF] hover:text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Débloquer iPhone
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Unlocking;