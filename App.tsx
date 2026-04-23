
import React, { Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ChatBot from './components/ChatBot';
import { Loader2 } from 'lucide-react';

// Lazy load non-critical sections for performance
const SoftwareCatalog = lazy(() => import('./components/SoftwareCatalog'));
const DigitalProducts = lazy(() => import('./components/DigitalProducts'));
const Pricing = lazy(() => import('./components/Pricing'));
const Unlocking = lazy(() => import('./components/Unlocking'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div className="w-full py-20 flex items-center justify-center">
    <Loader2 className="w-8 h-8 text-[#FF8A00] animate-spin" />
  </div>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06070A] text-white selection:bg-[#FF8A00] selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Suspense fallback={<LoadingFallback />}>
          <SoftwareCatalog />
          <DigitalProducts />
          <Pricing />
          <Unlocking />
          <About />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ChatBot />
    </div>
  );
};

export default App;
