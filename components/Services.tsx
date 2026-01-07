
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { SectionTitle, GlassCard, Modal } from './UiElements';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section id="services" className="py-24 bg-[#06070A] relative">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Nos Services Premium" 
          subtitle="Des solutions complètes pour tous vos besoins numériques. Cliquez sur un service pour voir les détails."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <GlassCard 
                key={service.id} 
                className="group cursor-pointer p-0 flex flex-col h-full !overflow-hidden border-0 bg-[#0A0C10] hover:scale-[1.02] transition-transform"
                onClick={() => setSelectedService(service)}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#06070A] to-transparent z-10"></div>
                <div className="absolute inset-0 bg-orange-900/10 mix-blend-overlay z-10"></div>
                <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                     <div className={`p-2 rounded-lg backdrop-blur-md bg-black/40 border border-white/10 ${service.category === 'blue' ? 'text-[#00F0FF]' : 'text-[#FF00C8]'}`}>
                        <service.icon className="w-5 h-5" />
                     </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col relative z-20 -mt-2">
                 <div className="flex justify-between items-center mb-3">
                     <h3 className="text-xl font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                        {service.title}
                    </h3>
                    <ArrowUpRight className="text-[#C8D1D8] w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                 </div>
                
                <p className="text-[#C8D1D8] text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                   <span className="text-xs font-medium text-white/50 group-hover:text-[#FF8A00] transition-colors">
                      Cliquez pour voir les détails
                   </span>
                   <button className="text-xs font-bold uppercase tracking-wider text-white hover:text-[#FF8A00]">
                       Détails +
                   </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Modal Details */}
      <Modal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        title={selectedService?.title || ''}
      >
        <div className="space-y-6">
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-white/5 ${selectedService?.category === 'purple' ? 'text-[#FF00C8]' : 'text-[#00F0FF]'}`}>
                    {selectedService && <selectedService.icon className="w-8 h-8" />}
                </div>
                <div>
                    <h4 className="text-lg font-bold text-white mb-2">Description Complète</h4>
                    <p className="text-[#C8D1D8] leading-relaxed">{selectedService?.description}</p>
                </div>
            </div>

            <div>
                <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Ce qui est inclus :</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedService?.details?.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#FF8A00]/30 transition-colors">
                            <CheckCircle className="w-5 h-5 text-[#FF8A00] shrink-0 mt-0.5" />
                            <span className="text-sm text-[#C8D1D8]">{detail}</span>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="bg-[#FF8A00]/10 p-4 rounded-lg border border-[#FF8A00]/20">
                <p className="text-sm text-[#FF8A00] text-center font-medium">
                    Nos techniciens interviennent à distance ou sur place selon vos besoins.
                </p>
            </div>
        </div>
      </Modal>
    </section>
  );
};

export default Services;
