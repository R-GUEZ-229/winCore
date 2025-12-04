import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a 
      href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact us on WhatsApp"
    >
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Discuter avec nous
      </span>
      <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-8 h-8 text-white fill-current" />
      </div>
      <div className="absolute inset-0 rounded-full border border-[#25D366] animate-ping opacity-75"></div>
    </a>
  );
};

export default FloatingWhatsApp;