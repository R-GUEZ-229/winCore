
import { 
  Monitor, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Layout, 
  Key,
  Briefcase,
  PenTool,
  Code,
  Wrench,
  Layers
} from "lucide-react";
import { ServiceItem, PricingItem, Testimonial, NavLink, DigitalProduct, SoftwareCategory } from "./types";

export const CONTACT_INFO = {
  phone: "+229 01 93 42 84 16",
  whatsapp: "2290193428416",
  email: "zadeckhex25@gmail.com",
  location: "Cotonou, Bénin / En ligne",
  creator: "Zadeck Hexmoor"
};

export const COLORS = {
  primary: "#FF8A00", // Neon Orange (from logo text)
  secondary: "#FF00C8", // Neon Magenta
  accent: "#00F0FF", // Neon Cyan
  silver: "#C8D1D8", 
  bg: "#06070A", 
};

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Logiciels", href: "#software-catalog" },
  { label: "E-books", href: "#digital-products" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Déblocage", href: "#unlock" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Installation Windows",
    description: "Installation propre et optimisation de Windows 10/11 avec drivers à jour.",
    icon: Monitor,
    image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=800&q=80", 
    category: "blue",
    details: [
      "Sauvegarde préventive de vos données importantes",
      "Formatage et partitionnement du disque dur",
      "Installation de Windows 10 ou 11 (Dernière version)",
      "Mise à jour de tous les pilotes (Graphique, Son, Wifi...)",
      "Installation des logiciels de base (VLC, Chrome, WinRAR)",
      "Optimisation des performances (Démarrage rapide)"
    ]
  },
  {
    id: "s2",
    title: "Pack Microsoft Office",
    description: "Word, Excel, PowerPoint. Installation complète et activation à vie.",
    icon: Layout,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
    category: "purple",
    details: [
      "Installation de Microsoft Office 2019, 2021 ou 365",
      "Inclus : Word, Excel, PowerPoint, Outlook, Publisher, Access",
      "Activation officielle et permanente",
      "Configuration de la messagerie Outlook si besoin",
      "Formation rapide à l'interface"
    ]
  },
  {
    id: "s3",
    title: "Logiciels Pro",
    description: "Adobe Suite, AutoCAD, ArchiCAD, Antivirus. Tous vos outils prêts à l'emploi.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    category: "blue",
    details: [
      "Architecture : AutoCAD, ArchiCAD, Revit, SketchUp",
      "Graphisme : Photoshop, Illustrator, InDesign",
      "Vidéo : Premiere Pro, After Effects, DaVinci Resolve",
      "Ingénierie : MATLAB, SolidWorks, Proteus",
      "Garantie de stabilité et de performance"
    ]
  },
  {
    id: "s4",
    title: "Déblocage Mobile",
    description: "Solutions sûres pour débloquer Android et iPhone. iCloud, Google FRP, Réseau.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=800&q=80",
    category: "purple",
    details: [
      "Suppression compte Google (FRP) Samsung, Xiaomi, Tecno...",
      "Contournement iCloud (Bypass) sur iPhone/iPad",
      "Désimlockage réseau (Tout opérateur)",
      "Réinitialisation mot de passe oublié ou schéma",
      "Flash et mise à jour du système Android/iOS"
    ]
  },
  {
    id: "s5",
    title: "Création Web",
    description: "Sites vitrines et e-commerce modernes, responsive et optimisés SEO.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    category: "blue",
    details: [
      "Conception de site Vitrine ou E-commerce",
      "Design Responsive (Mobile, Tablette, PC)",
      "Optimisation SEO pour Google",
      "Intégration WhatsApp et Réseaux Sociaux",
      "Hébergement et Nom de domaine inclus (1 an)",
      "Formation à la gestion du site"
    ]
  },
  {
    id: "s6",
    title: "Licences Digitales",
    description: "Clés officielles Windows, Office et Antivirus à prix imbattables.",
    icon: Key,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    category: "purple",
    details: [
      "Clés Windows 10/11 Pro & Famille",
      "Clés Office 2019/2021 Pro Plus",
      "Abonnements Antivirus (Kaspersky, Bitdefender...)",
      "Livraison instantanée par email ou WhatsApp",
      "Support d'activation inclus"
    ]
  }
];

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: "dp1",
    title: "Maîtriser Windows 11",
    description: "Le guide complet pour optimiser, sécuriser et maîtriser votre système d'exploitation comme un pro.",
    priceEUR: "10€",
    priceFCFA: "6 500 FCFA",
    image: "https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?auto=format&fit=crop&w=600&q=80",
    badge: "Best Seller",
    details: [
      "Installation et configuration initiale",
      "Gestion des bureaux virtuels et du multitâche",
      "Personnalisation avancée de l'interface",
      "Optimisation de la batterie et des performances",
      "Sécurité et confidentialité des données"
    ]
  },
  {
    id: "dp2",
    title: "Devenir Expert Excel",
    description: "De débutant à expert : Formules, tableaux croisés dynamiques et macros expliqués simplement.",
    priceEUR: "15€",
    priceFCFA: "10 000 FCFA",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&w=600&q=80",
    badge: "Formation Vidéo",
    details: [
      "Les bases de l'interface Excel",
      "Formules essentielles (SI, RECHERCHEV...)",
      "Création de graphiques professionnels",
      "Tableaux croisés dynamiques",
      "Introduction aux Macros VBA"
    ]
  },
  {
    id: "dp3",
    title: "Sécurité & Antivirus",
    description: "Comment protéger efficacement vos données personnelles et professionnelles contre les cybermenaces.",
    priceEUR: "8€",
    priceFCFA: "5 200 FCFA",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
    details: [
      "Comprendre les types de virus et malwares",
      "Choisir et configurer son antivirus",
      "Sécuriser ses mots de passe",
      "Naviguer en toute sécurité sur le web",
      "Sauvegarder ses données efficacement"
    ]
  },
  {
    id: "dp4",
    title: "Dépannage Smartphone",
    description: "Guide technique pour diagnostiquer et résoudre les problèmes logiciels courants sur Android et iOS.",
    priceEUR: "20€",
    priceFCFA: "13 000 FCFA",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=600&q=80",
    badge: "Nouveau",
    details: [
      "Diagnostic des pannes courantes",
      "Techniques de Hard Reset",
      "Flashage de ROM (Samsung, MTK...)",
      "Solutions aux problèmes de batterie",
      "Outils logiciels indispensables"
    ]
  }
];

export const PRICING_DATA: PricingItem[] = [
  {
    service: "Windows 10/11",
    priceEUR: "25€",
    priceFCFA: "16 500 FCFA",
    features: ["Installation complète", "Activation", "Drivers inclus"]
  },
  {
    service: "Microsoft Office",
    priceEUR: "15€",
    priceFCFA: "10 000 FCFA",
    features: ["Word, Excel, PPT", "Licence à vie", "Mise à jour"],
    popular: true
  },
  {
    service: "Antivirus",
    priceEUR: "10€",
    priceFCFA: "6 500 FCFA",
    features: ["Protection 1 an", "Installation", "Config"]
  },
  {
    service: "Déblocage Tél",
    priceEUR: "20-40€",
    priceFCFA: "13K-26K FCFA",
    features: ["Android & iPhone", "Desimlockage", "Compte Google"]
  },
  {
    service: "Site Vitrine",
    priceEUR: "120€",
    priceFCFA: "78 500 FCFA",
    features: ["5 Pages", "Design Pro", "Hébergement 1 an"]
  },
  {
    service: "Site Pro / E-com",
    priceEUR: "250€",
    priceFCFA: "163 000 FCFA",
    features: ["Boutique", "Paiement", "Admin Panel"]
  },
  {
    service: "Licences Digitales",
    priceEUR: "5-20€",
    priceFCFA: "3K-13K FCFA",
    features: ["Clé originale", "Envoi mail", "Support"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marc Atangana",
    role: "Architecte",
    text: "Service ultra rapide pour l'installation d'ArchiCAD et AutoCAD sur mon nouveau PC. Tout fonctionne parfaitement.",
    rating: 5
  },
  {
    id: 2,
    name: "Sophie Dubois",
    role: "Entrepreneuse",
    text: "WinCore a réalisé le site web de ma boutique. Le design est exactement ce que je voulais : moderne et épuré.",
    rating: 5
  },
  {
    id: 3,
    name: "Jean-Michel N.",
    role: "Particulier",
    text: "Mon iPhone était bloqué iCloud, ils ont réussi à le débloquer en 48h. Très pro !",
    rating: 4
  }
];

export const SOFTWARE_CATALOG: SoftwareCategory[] = [
  {
    category: "Bureautique & Productivité",
    icon: Layers,
    color: "blue",
    items: [
      "Microsoft Office 2025 (Word, Excel, PPT)",
      "Google Workspace (Docs, Sheets, Slides)",
      "LibreOffice 24.2",
      "Notion AI 2025 & Evernote AI",
      "OneNote 2025",
      "Gestion: Todoist AI, Motion, Trello",
      "Notion Calendar 2025"
    ],
    details: [
        "Installation propre sans bloatware",
        "Activation des licences",
        "Configuration des comptes utilisateurs",
        "Synchronisation cloud (OneDrive/Drive)"
    ]
  },
  {
    category: "Ingénierie & Architecture",
    icon: Cpu,
    color: "purple",
    items: [
      "AutoCAD 2025 & ArchiCAD 27",
      "Revit 2025 & SolidWorks 2025",
      "MATLAB 2025 & Maple 2025",
      "LabVIEW 2024",
      "Arduino IDE 2.2",
      "Anaconda + Jupyter Notebook"
    ],
    details: [
        "Installation des bibliothèques de matériaux",
        "Configuration des rendus GPU",
        "Test de stabilité",
        "Installation des plugins essentiels"
    ]
  },
  {
    category: "Maintenance & Réparation",
    icon: Wrench,
    color: "green",
    items: [
      "Driver Booster 12 Pro",
      "CCleaner Pro 2025",
      "EaseUS Data Recovery Wizard",
      "MiniTool & AOMEI Partition",
      "Rufus 4.5 & Ventoy",
      "Acronis True Image"
    ],
    details: [
        "Outils de diagnostic système",
        "Logiciels de récupération de données",
        "Utilitaires de partitionnement de disque",
        "Création de clés USB bootables"
    ]
  },
  {
    category: "Sécurité & Antivirus",
    icon: ShieldCheck,
    color: "blue",
    items: [
      "Kaspersky Plus / Premium 2025",
      "Bitdefender Total Security 2025",
      "Eset Nod32 / Smart Security",
      "Avast One",
      "Malwarebytes Premium",
      "NordVPN / Surfshark"
    ],
    details: [
        "Protection en temps réel",
        "Pare-feu avancé",
        "VPN pour la confidentialité",
        "Protection bancaire"
    ]
  },
  {
    category: "Création (Design/Vidéo)",
    icon: PenTool,
    color: "purple",
    items: [
      "Adobe Photoshop & Illustrator 2025",
      "Adobe Premiere Pro & After Effects",
      "DaVinci Resolve 19 & CapCut Pro",
      "CorelDRAW 2024 & Canva Pro",
      "Blender 4.2 & Cinema 4D",
      "FL Studio 22 & Audacity"
    ],
    details: [
        "Suite Adobe complète",
        "Plugins et filtres additionnels",
        "Configuration des espaces de travail",
        "Optimisation des performances graphiques"
    ]
  },
  {
    category: "Développement & IA",
    icon: Code,
    color: "green",
    items: [
      "VS Code & Python 3.13",
      "Android Studio 2025 & Xcode",
      "Unity & Unreal Engine 5.4",
      "Outils IA: ChatGPT 5.1, Claude 3.5",
      "Midjourney V7, ElevenLabs",
      "GitHub Desktop & Postman"
    ],
    details: [
        "Environnements de développement intégrés (IDE)",
        "Compilateurs et interpréteurs",
        "Outils de versionning",
        "Intégration d'outils IA"
    ]
  },
  {
    category: "Gestion Entreprise",
    icon: Briefcase,
    color: "blue",
    items: [
      "QuickBooks 2025 (Compta)",
      "Sage Cloud 2025",
      "Zoho One",
      "Odoo ERP",
      "Wave Accounting",
      "Salesforce"
    ],
    details: [
        "Logiciels de comptabilité et facturation",
        "CRM et gestion client",
        "Outils de gestion de stock",
        "Planification des ressources (ERP)"
    ]
  }
];
