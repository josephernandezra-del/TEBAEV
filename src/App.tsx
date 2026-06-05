import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Offerings from './components/Offerings';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Inscripciones from './components/Inscripciones';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { EditProvider } from './context/EditContext';

export default function App() {
  return (
    <EditProvider>
      <AppContent />
    </EditProvider>
  );
}

function AppContent() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Smooth scroll logic
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer to update active menu item on scroll
  useEffect(() => {
    const sections = [
      'inicio', 
      'oferta-educativa', 
      'instalaciones', 
      'testimonios', 
      'preguntas-frecuentes', 
      'inscripciones'
    ];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger roughly around middle viewport
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-800 flex flex-col justify-between selection:bg-red-650 selection:text-white">
      {/* Sticky Header Nav */}
      <Header onScrollToSection={handleScrollToSection} activeSection={activeSection} />

      {/* Main Structural Body */}
      <main className="flex-1">
        
        {/* Section 1: Hero Cover and Welcome */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Section 2: Educational Programs */}
        <Offerings onScrollToSection={handleScrollToSection} />

        {/* Section 3: Campus Virtual Tour Gallery */}
        <Facilities />

        {/* Section 4: Alumni Testimonials */}
        <Testimonials />

        {/* Section 5: Step-by-Step Forms and Requirements Checklists */}
        <Inscripciones />

        {/* Section 6: Frequently Asked Questions */}
        <FAQ />

      </main>

      {/* Footer and Map Block */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}

