import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, ArrowRight, Award } from 'lucide-react';
import { SCHOOL_INFO } from '../data';
import { EditableText } from './EditableText';

interface HeaderProps {
  onScrollToSection: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onScrollToSection, activeSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/src/assets/images/regenerated_image_1780624368561.png');
  const [useFallback, setUseFallback] = useState(false);

  const handleLogoError = () => {
    if (logoSrc.includes('1780624368561')) {
      setLogoSrc('/src/assets/images/regenerated_image_1780624370327.png');
    } else {
      setUseFallback(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'oferta-educativa', label: 'Oferta Educativa' },
    { id: 'instalaciones', label: 'Plantel' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'preguntas-frecuentes', label: 'Preguntas' },
  ];

  const handleNavClick = (id: string) => {
    onScrollToSection(id);
    setIsOpen(false);
  };

  return (
    <header
      id="header_nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-800'
          : 'bg-zinc-950/60 backdrop-blur-xs py-5 text-white border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <div 
            onClick={() => handleNavClick('inicio')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-12 h-12 bg-white border border-slate-200/50 rounded-xl overflow-hidden flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 relative shrink-0">
              {!useFallback ? (
                <img
                  src={logoSrc}
                  alt="Logo TEBAEV"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={handleLogoError}
                />
              ) : (
                <div className="w-full h-full bg-red-650 flex items-center justify-center text-white font-display font-black text-xl">
                  M
                </div>
              )}
            </div>
            <div>
              <h1 className="font-display font-black text-base leading-tight tracking-tight uppercase text-left">
                <span className={isScrolled ? 'text-red-650 inline-block' : 'text-red-500 inline-block'}>
                  <EditableText id="header_logo_main" defaultText="Telebachillerato" as="span" />
                </span>
                <br />
                <span className="text-xs sm:text-sm font-semibold tracking-widest text-slate-500 block">
                  <EditableText id="header_logo_sub" defaultText="DE MAHUIXTLAN" as="span" />
                </span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-xl text-sm font-bold tracking-tight transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'bg-red-50 text-red-600 border-b-2 border-red-650 rounded-b-none'
                      : 'bg-white/15 text-white border-b-2 border-red-555 rounded-b-none'
                    : isScrolled
                    ? 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Badges / CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 bg-red-50 border border-red-200 rounded-xl text-xs font-mono text-red-800">
              <Award className="w-3.5 h-3.5 text-red-650" />
              <span>CCT: {SCHOOL_INFO.clave}</span>
            </div>
            
            <button
              onClick={() => handleNavClick('inscripciones')}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold text-sm transition-all shadow-md hover:shadow-lg transform active:scale-95 cursor-pointer"
            >
              <span>Inscripciones</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <span className="text-[10px] font-mono px-2 py-1 bg-zinc-950/30 text-slate-350 rounded border border-white/5 md:hidden">
              CCT: {SCHOOL_INFO.clave}
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-slate-100/10 focus:outline-hidden cursor-pointer"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white text-slate-800 border-t border-slate-100 animate-slide-down">
          <div className="px-2 pt-2 pb-4 space-y-1 shadow-inner">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-red-50 text-red-650 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="pt-4 pb-2 border-t border-slate-100 px-4">
              <button
                onClick={() => handleNavClick('inscripciones')}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium shadow-md transition-all cursor-pointer"
              >
                <span>Preinscripción en Línea</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
