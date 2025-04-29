import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import MethodSection from './components/MethodSection';
import ForWhoSection from './components/ForWhoSection';
import BonusSection from './components/BonusSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import ExpertsSection from './components/ExpertsSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <MethodSection />
      <ForWhoSection />
      <BonusSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <ExpertsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;