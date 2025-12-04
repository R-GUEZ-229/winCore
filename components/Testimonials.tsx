import React from 'react';
import { TESTIMONIALS } from '../constants';
import { SectionTitle, GlassCard } from './UiElements';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0f16]">
      <div className="container mx-auto px-4">
        <SectionTitle title="Avis Clients" subtitle="Ils nous font confiance." />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <GlassCard key={t.id} className="p-6 relative">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < t.rating ? 'text-[#FF00C8] fill-[#FF00C8]' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              <p className="text-[#C8D1D8] italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00A4FF] to-[#FF00C8] flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                </div>
                <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-[#00A4FF] text-xs">{t.role}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;