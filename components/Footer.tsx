import React, { useState } from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { WinCoreLogo } from './UiElements';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                    <WinCoreLogo className="origin-left transform scale-90" />
                </div>
                <p className="text-sm text-[#C8D1D8] mb-6">
                    Votre partenaire de confiance pour l'installation de logiciels, le déblocage mobile, la création web et les produits digitaux.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#00A4FF] transition-colors"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#FF00C8] transition-colors"><Instagram className="w-5 h-5" /></a>
                    <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#00FF9D] transition-colors"><MessageCircle className="w-5 h-5" /></a>
                </div>
            </div>

            {/* Links */}
            <div>
                <h4 className="text-white font-bold mb-6">Navigation</h4>
                <ul className="space-y-3 text-sm text-[#C8D1D8]">
                    <li><a href="#hero" className="hover:text-[#00A4FF]">Accueil</a></li>
                    <li><a href="#services" className="hover:text-[#00A4FF]">Services</a></li>
                    <li><a href="#digital-products" className="hover:text-[#00A4FF]">E-books</a></li>
                    <li><a href="#pricing" className="hover:text-[#00A4FF]">Tarifs</a></li>
                    <li><a href="#contact" className="hover:text-[#00A4FF]">Contact</a></li>
                </ul>
            </div>

            {/* Services */}
            <div>
                <h4 className="text-white font-bold mb-6">Services</h4>
                <ul className="space-y-3 text-sm text-[#C8D1D8]">
                    <li>Installation Windows</li>
                    <li>Activation Office</li>
                    <li>Déblocage Android/iOS</li>
                    <li>Création Web</li>
                    <li>Vente Formations</li>
                </ul>
            </div>

            {/* Contact Quick View */}
            <div>
                <h4 className="text-white font-bold mb-6">Contact</h4>
                <ul className="space-y-3 text-sm text-[#C8D1D8]">
                    <li className="flex items-center gap-2"><span className="text-[#00A4FF]">Tel:</span> {CONTACT_INFO.phone}</li>
                    <li className="flex items-center gap-2 break-all"><span className="text-[#FF00C8]">Email:</span> {CONTACT_INFO.email}</li>
                    <li>{CONTACT_INFO.location}</li>
                </ul>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
            <p>&copy; {new Date().getFullYear()} WinCore Tech. Tous droits réservés.</p>
            <p className="flex items-center gap-1">
                Designed & Built by <span className="text-[#00FF9D] font-bold">{CONTACT_INFO.creator}</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;