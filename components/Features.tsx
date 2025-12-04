import React from 'react';
import { Zap, ShieldCheck, Award } from 'lucide-react';
import { GlassCard } from './UiElements';

const Features: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: "Rapidité Éclair",
      desc: "Interventions optimisées pour réduire votre temps d'attente. Nous savons que votre temps est précieux.",
      color: "text-[#00FF9D]"
    },
    {
      icon: ShieldCheck,
      title: "Sécurité Maximale",
      desc: "Installation de logiciels officiels et sécurisation de vos données. Fiabilité garantie.",
      color: "text-[#00A4FF]"
    },
    {
      icon: Award,
      title: "Expertise Certifiée",
      desc: "Une équipe qualifiée maîtrisant les derniers outils technologiques et standards du marché.",
      color: "text-[#FF00C8]"
    }
  ];

  return (
    <section className="py-20 bg-[#06070A] relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20">
          {features.map((f, idx) => (
            <GlassCard key={idx} className="flex flex-col items-center text-center p-8 backdrop-blur-xl bg-[#06070A]/60">
              <div className={`p-4 rounded-full bg-white/5 mb-6 ${f.color}`}>
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-[#C8D1D8]">{f.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;