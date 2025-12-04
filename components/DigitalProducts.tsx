import React from 'react';
import { DIGITAL_PRODUCTS } from '../constants';
import { SectionTitle, GlassCard, Button } from './UiElements';
import { ShoppingCart, BookOpen, Star } from 'lucide-react';

const DigitalProducts: React.FC = () => {
  return (
    <section id="digital-products" className="py-24 relative overflow-hidden bg-[#080a0f]">
      {/* Background Lights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#00A4FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#FF00C8] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle 
          title="Formations & E-books" 
          subtitle="Développez vos compétences avec nos ressources digitales exclusives." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIGITAL_PRODUCTS.map((product) => (
            <GlassCard key={product.id} className="p-4 flex flex-col h-full group hover:shadow-[0_0_30px_rgba(0,164,255,0.2)]">
               {/* Badge */}
               {product.badge && (
                 <div className="absolute top-3 left-3 z-30 bg-[#FF00C8] text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg shadow-[#FF00C8]/40">
                   {product.badge}
                 </div>
               )}

              {/* Product Image */}
              <div className="relative aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-black">
                 <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                 
                 {/* Hover Action */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-black/20">
                     <div className="bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20">
                         <BookOpen className="text-white w-6 h-6" />
                     </div>
                 </div>
              </div>

              {/* Info */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{product.title}</h3>
                
                {/* Fake Rating */}
                <div className="flex items-center gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#00FF9D] fill-[#00FF9D]" />)}
                    <span className="text-[10px] text-[#C8D1D8] ml-1">(4.9)</span>
                </div>

                <p className="text-[#C8D1D8] text-xs mb-4 line-clamp-3">{product.description}</p>
                
                <div className="mt-auto flex items-center justify-between">
                    <div>
                        <span className="block text-xl font-bold text-[#00A4FF]">{product.priceEUR}</span>
                        <span className="text-xs text-gray-500">{product.priceFCFA}</span>
                    </div>
                    <Button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        variant="primary" 
                        className="px-3 py-2 text-xs rounded-lg"
                    >
                        <ShoppingCart className="w-4 h-4 mr-1" /> Acheter
                    </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalProducts;