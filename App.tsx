
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import SoftwareCatalog from './components/SoftwareCatalog';
import DigitalProducts from './components/DigitalProducts';
import Pricing from './components/Pricing';
import Unlocking from './components/Unlocking';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#06070A] text-white selection:bg-[#00A4FF] selection:text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <SoftwareCatalog />
        <DigitalProducts />
        <Pricing />
        <Unlocking />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ChatBot />
    </div>
  );
};

export default App;
