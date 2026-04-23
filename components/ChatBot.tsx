
import React, { useRef, useEffect, useState } from 'react';
import { User, Loader2, Minimize2, Send } from 'lucide-react';
import { useChat } from 'ai/react';

// --- Custom Cyber Character Component ---
const CyberBotAvatar: React.FC<{ size?: string; active?: boolean }> = ({ size = "w-10 h-10", active = false }) => (
  <div className={`${size} relative flex items-center justify-center animate-cyber-float`}>
    <div className={`absolute inset-0 bg-[#FF8A00]/20 rounded-full blur-md transition-all duration-500 ${active ? 'scale-150 opacity-60' : 'scale-100 opacity-20'}`}></div>
    <svg viewBox="0 0 100 100" className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(255,138,0,0.8)]">
      <path d="M20,40 Q20,25 50,25 Q80,25 80,40 L80,65 Q80,80 50,80 Q20,80 20,65 Z" fill="#0A0C10" stroke="#FF8A00" strokeWidth="3" />
      <rect x="30" y="45" width="40" height="15" rx="4" fill="#1A1D23" stroke="#00F0FF" strokeWidth="1" />
      <g className="animate-visor-blink">
        <rect x="35" y="50" width="12" height="4" rx="1" fill="#FF8A00" className="shadow-lg shadow-[#FF8A00]" />
        <rect x="53" y="50" width="12" height="4" rx="1" fill="#FF8A00" className="shadow-lg shadow-[#FF8A00]" />
      </g>
      <line x1="50" y1="25" x2="50" y2="10" stroke="#FF8A00" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="10" r="4" fill="#FF8A00" className="animate-pulse" />
      <circle cx="20" cy="55" r="3" fill="#00F0FF" opacity="0.6" />
      <circle cx="80" cy="55" r="3" fill="#00F0FF" opacity="0.6" />
    </svg>
    <style>{`
      @keyframes cyber-float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
      @keyframes visor-blink { 0%, 90%, 100% { opacity: 1; transform: scaleY(1); } 95% { opacity: 0.2; transform: scaleY(0.1); } }
      .animate-cyber-float { animation: cyber-float 3s ease-in-out infinite; }
      .animate-visor-blink { animation: visor-blink 4s infinite; transform-origin: center; }
    `}</style>
  </div>
);

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Hook Vercel AI SDK
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: '/api/chat', // Pointe vers la serverless function
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: "Salutations ! Je suis Corey, l'entité numérique de WinCore. Comment puis-je assister votre évolution technologique aujourd'hui ?"
      }
    ],
    onError: (err) => {
        console.error("Chat Error:", err);
    }
  });

  // Auto-scroll effect
  useEffect(() => {
    if (scrollContainerRef.current) {
        const { scrollHeight, clientHeight } = scrollContainerRef.current;
        scrollContainerRef.current.scrollTo({
            top: scrollHeight - clientHeight,
            behavior: 'smooth'
        });
    }
  }, [messages, isLoading, isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-50 p-2 rounded-full bg-[#0A0C10] border border-[#FF8A00]/40 shadow-[0_0_20px_rgba(255,138,0,0.3)] transition-all duration-500 hover:scale-110 group ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Discuter avec Corey AI"
      >
        <CyberBotAvatar size="w-12 h-12" active={false} />
        <span className="absolute -top-12 left-0 bg-[#FF8A00] text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          COREY : Assistant IA
        </span>
      </button>

      <div className={`fixed bottom-6 left-6 z-[60] w-[90vw] md:w-[400px] h-[550px] max-h-[80vh] flex flex-col glass-panel border border-white/20 shadow-2xl transition-all duration-500 origin-bottom-left ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="p-4 border-b border-white/10 flex items-center justify-between bg-gradient-to-r from-[#FF8A00]/20 to-[#00F0FF]/20 rounded-t-2xl">
          <div className="flex items-center gap-3">
            <CyberBotAvatar size="w-10 h-10" active={isLoading} />
            <div>
              <h3 className="text-white font-bold text-sm">COREY AI</h3>
              <div className="flex items-center gap-1">
                <span className={`w-1.5 h-1.5 rounded-full ${error ? 'bg-red-500' : 'bg-[#00FF9D]'} animate-pulse`}></span>
                <span className="text-[10px] text-[#C8D1D8]">{error ? 'Erreur Système' : 'Système Actif - WinCore'}</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-[#C8D1D8] hover:text-white transition-colors p-2">
            <Minimize2 className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in-up`}>
              <div className={`max-w-[85%] flex gap-2 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full shrink-0 flex items-center justify-center ${m.role === 'user' ? 'bg-[#FF8A00]/20 text-[#FF8A00]' : 'bg-[#1A1D23] border border-white/10'}`}>
                  {m.role === 'user' ? <User className="w-4 h-4" /> : <CyberBotAvatar size="w-6 h-6" />}
                </div>
                <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#FF8A00] text-white rounded-tr-none' 
                    : 'bg-white/5 border border-white/10 text-[#C8D1D8] rounded-tl-none'
                }`}>
                  {m.content}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start animate-pulse">
              <div className="flex gap-2 items-center bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                <Loader2 className="w-4 h-4 text-[#FF8A00] animate-spin" />
                <span className="text-xs text-[#C8D1D8]">Corey analyse...</span>
              </div>
            </div>
          )}
          {error && (
             <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-xs text-center">
                Une erreur de connexion est survenue. Vérifiez la clé API ou réessayez plus tard.
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-[#06070A]/80 rounded-b-2xl">
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Envoyer un message..."
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-[#FF8A00] transition-colors"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 p-2 bg-[#FF8A00] text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#e67c00] transition-colors shadow-lg"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[9px] text-center text-gray-600 mt-3 uppercase tracking-widest">
            WinCore AI • Gemini Powered
          </p>
        </form>
      </div>
    </>
  );
};

export default ChatBot;
