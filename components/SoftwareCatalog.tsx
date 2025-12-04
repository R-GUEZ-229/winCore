import React, { useState } from 'react';
import { SOFTWARE_CATALOG } from '../constants';
import { SectionTitle, GlassCard, Button, Modal } from './UiElements';
import { Check } from 'lucide-react';

const SoftwareCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof SOFTWARE_CATALOG[0] | null>(null);

  return (
    <section id="software-catalog" className="py-24 bg-[#080a0f] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00A4FF]/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00FF9D]/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Catalogue Logiciels 2025" 
          subtitle="Une bibliothèque complète de solutions logicielles professionnelles. Cliquez pour explorer chaque catégorie." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOFTWARE_CATALOG.map((category, idx) => {
             const Icon = category.icon;
             // Determine colors based on category.color prop
             const accentColor = 
                category.color === 'blue' ? 'text-[#00A4FF]' : 
                category.color === 'purple' ? 'text-[#FF00C8]' : 'text-[#00FF9D]';
             const borderClass = 
                category.color === 'blue' ? 'group-hover:border-[#00A4FF]/50' : 
                category.color === 'purple' ? 'group-hover:border-[#FF00C8]/50' : 'group-hover:border-[#00FF9D]/50';
             
             return (
              <GlassCard 
                key={idx} 
                className={`p-6 group transition-all duration-300 ${borderClass} cursor-pointer`}
                onClick={() => setSelectedCategory(category)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-white/5 ${accentColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.category}</h3>
                </div>

                <ul className="space-y-3 mb-6">
                  {category.items.slice(0, 4).map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#C8D1D8] group-hover:text-white transition-colors">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${accentColor}`} />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                  {category.items.length > 4 && (
                      <li className="text-xs text-gray-500 pl-6 italic">
                          + {category.items.length - 4} autres logiciels...
                      </li>
                  )}
                </ul>

                <div className="pt-4 border-t border-white/5">
                   <Button 
                     variant="ghost" 
                     className="w-full text-xs py-2 border border-white/10 hover:border-white/30"
                   >
                     Voir la liste complète
                   </Button>
                </div>
              </GlassCard>
             );
          })}
        </div>
      </div>

      {/* Modal Logiciels */}
      <Modal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        title={selectedCategory?.category || ''}
      >
          <div className="space-y-6">
             <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className={`p-3 rounded-full bg-black/50 ${selectedCategory?.color === 'blue' ? 'text-[#00A4FF]' : selectedCategory?.color === 'purple' ? 'text-[#FF00C8]' : 'text-[#00FF9D]'}`}>
                    {selectedCategory && <selectedCategory.icon className="w-6 h-6" />}
                </div>
                <p className="text-[#C8D1D8] text-sm">
                    Nous installons les versions complètes et activées de ces logiciels. Mises à jour incluses.
                </p>
             </div>

             <div>
                <h4 className="text-lg font-bold text-white mb-4">Logiciels Disponibles :</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedCategory?.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-[#06070A] border border-white/5 rounded-lg">
                            <Check className="w-4 h-4 text-[#00FF9D]" />
                            <span className="text-white text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>
             </div>

             {selectedCategory?.details && (
                 <div className="bg-white/5 p-4 rounded-xl">
                    <h5 className="text-white font-bold mb-2">Services inclus :</h5>
                    <ul className="space-y-2">
                        {selectedCategory.details.map((d, i) => (
                            <li key={i} className="text-sm text-[#C8D1D8] flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#00A4FF]"></span>
                                {d}
                            </li>
                        ))}
                    </ul>
                 </div>
             )}
          </div>
      </Modal>
    </section>
  );
};

export default SoftwareCatalog;