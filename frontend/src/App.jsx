import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Testimonials from './components/Testimonials';
import ImpactSection from './components/ImpactSection';
import AboutUsSection from './components/AboutUsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Testimonials />
      <ImpactSection />
      <AboutUsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;