import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  category: 'blue' | 'purple' | 'green';
  details?: string[]; // Liste des points clés pour la vue détaillée
}

export interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  priceEUR: string;
  priceFCFA: string;
  image: string;
  badge?: string;
  details?: string[];
}

export interface SoftwareCategory {
  category: string;
  icon: LucideIcon;
  color: 'blue' | 'purple' | 'green';
  items: string[];
  details?: string[]; // Description détaillée de la catégorie
}

export interface PricingItem {
  service: string;
  priceEUR: string;
  priceFCFA: string;
  features?: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface NavLink {
  label: string;
  href: string;
}