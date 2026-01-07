
import React from 'react';
import { PRICING_DATA } from '../constants';
import { SectionTitle, Button, GlassCard } from './UiElements';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
        {/* Background Gradients Updated */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-r from-[#FF8A00]/5 to-[#00F0FF]/5 transform -skew-y-3 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Tarifs Transparents" 
          subtitle="Des prix clairs, sans frais cachés. Qualité professionnelle garantie."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_DATA.map((item, index) => (
            <GlassCard 
                key={index} 
                className={`flex flex-col relative ${item.popular ? 'border-[#FF8A00] shadow-[0_0_20px_rgba(255,138,0,0.15)]' : ''}`}
            >
              {item.popular && (
                <div className="absolute top-0 right-0 bg-[#FF8A00] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  POPULAIRE
                </div>
              )}
              
              <h3 className="text-lg font-bold text-white mb-1">{item.service}</h3>
              <div className="my-4">
                <span className="text-3xl font-bold text-[#FF8A00]">{item.priceEUR}</span>
                <p className="text-sm text-[#C8D1D8] mt-1">{item.priceFCFA}</p>
              </div>
              
              <ul className="flex-1 space-y-3 mb-6">
                {item.features?.map((feat, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#C8D1D8]">
                    <Check className="w-4 h-4 text-[#FF8A00]" /> {feat}
                  </li>
                ))}
              </ul>

              <Button 
                variant={item.popular ? 'primary' : 'outline'} 
                className="w-full text-sm py-2"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Choisir
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
