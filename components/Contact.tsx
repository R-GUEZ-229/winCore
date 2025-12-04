import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SectionTitle, Button, GlassCard } from './UiElements';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'windows',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    const subject = encodeURIComponent(`Demande WinCore: ${formState.service}`);
    const body = encodeURIComponent(`Nom: ${formState.name}\nEmail: ${formState.email}\nService: ${formState.service}\n\nMessage:\n${formState.message}`);
    window.open(`mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`);
    
    setFormState({ name: '', email: '', service: 'windows', message: '' });
  };

  return (
    <section id="contact" className="py-24 relative">
       {/* Background */}
       <div className="absolute inset-0 bg-gradient-to-b from-[#06070A] to-[#0a0f16]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle title="Contactez-nous" subtitle="Une question ? Un projet ? Nous sommes là pour vous répondre rapidement." />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Nos Coordonnées</h3>
                
                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#00A4FF]/20 flex items-center justify-center text-[#00A4FF] group-hover:scale-110 transition-transform">
                        <Phone />
                    </div>
                    <div>
                        <p className="text-sm text-[#C8D1D8]">Téléphone & WhatsApp</p>
                        <p className="text-xl text-white font-bold tracking-wide">{CONTACT_INFO.phone}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#FF00C8]/20 flex items-center justify-center text-[#FF00C8] group-hover:scale-110 transition-transform">
                        <Mail />
                    </div>
                    <div>
                        <p className="text-sm text-[#C8D1D8]">Email</p>
                        <p className="text-xl text-white font-bold break-all">{CONTACT_INFO.email}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-[#00FF9D]/20 flex items-center justify-center text-[#00FF9D] group-hover:scale-110 transition-transform">
                        <MapPin />
                    </div>
                    <div>
                        <p className="text-sm text-[#C8D1D8]">Localisation</p>
                        <p className="text-xl text-white font-bold">{CONTACT_INFO.location}</p>
                    </div>
                </div>

                <div className="pt-8">
                     <div className="p-6 bg-gradient-to-r from-[#00A4FF]/10 to-transparent border-l-4 border-[#00A4FF] rounded-r-lg">
                        <p className="text-[#C8D1D8] italic">"Notre support client est disponible 7j/7 pour répondre à vos urgences informatiques."</p>
                     </div>
                </div>
            </div>

            {/* Form */}
            <GlassCard className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-[#C8D1D8] mb-2">Nom Complet</label>
                        <input 
                            type="text" 
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({...formState, name: e.target.value})}
                            className="w-full bg-[#06070A]/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#00A4FF] focus:outline-none transition-colors"
                            placeholder="Votre nom"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#C8D1D8] mb-2">Email</label>
                        <input 
                            type="email" 
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            className="w-full bg-[#06070A]/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#00A4FF] focus:outline-none transition-colors"
                            placeholder="votre@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#C8D1D8] mb-2">Service concerné</label>
                        <select 
                            value={formState.service}
                            onChange={(e) => setFormState({...formState, service: e.target.value})}
                            className="w-full bg-[#06070A]/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#00A4FF] focus:outline-none transition-colors"
                        >
                            <option value="windows">Installation Windows</option>
                            <option value="software">Logiciels / Office</option>
                            <option value="unlock">Déblocage Téléphone</option>
                            <option value="web">Création Site Web</option>
                            <option value="ebooks">E-books / Formations</option>
                            <option value="other">Autre</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#C8D1D8] mb-2">Message</label>
                        <textarea 
                            rows={4}
                            required
                            value={formState.message}
                            onChange={(e) => setFormState({...formState, message: e.target.value})}
                            className="w-full bg-[#06070A]/50 border border-white/10 rounded-lg p-3 text-white focus:border-[#00A4FF] focus:outline-none transition-colors"
                            placeholder="Détails de votre demande..."
                        />
                    </div>
                    <Button type="submit" variant="primary" glow className="w-full">
                        Envoyer <Send className="w-4 h-4" />
                    </Button>
                </form>
            </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Contact;