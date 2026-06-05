import React from 'react';
import { SCHOOL_INFO } from '../data';
import { Phone, Mail, MapPin, Clock, Compass, ChevronUp, GraduationCap, Award, RotateCcw, ExternalLink } from 'lucide-react';
import { EditableText } from './EditableText';
import { useEdit } from '../context/EditContext';

interface FooterProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Footer({ onScrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { resetAll } = useEdit();

  const handleBackToTop = () => {
    onScrollToSection('inicio');
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 overflow-hidden relative">
      
      {/* Upper Footer: Inbound Form and Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Brand & CCT */}
          <div className="lg:col-span-4 text-left space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-black text-sm tracking-widest uppercase">
                  TEBAEV MAHUIXTLAN
                </h3>
                <p className="text-[11px] font-mono tracking-widest text-red-500 font-bold uppercase">
                  Clave: {SCHOOL_INFO.clave}
                </p>
              </div>
            </div>

            <p className="text-sm font-light leading-relaxed text-slate-400 font-sans">
              <EditableText id="footer_brand_desc" defaultText="Somos un centro educativo público de nivel medio superior perteneciente a la Secretaría de Educación de Veracruz. Comprometidos con el desarrollo integral, tecnológico y socio-cultural de Mahuixtlán y el municipio de Coatepec." as="span" />
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-red-950/30 border border-red-900/80 rounded-full text-xs text-red-400 font-semibold font-mono">
                <Award className="w-4 h-4 text-red-500" />
                <span>Incorporado a la SEV</span>
              </span>
            </div>
          </div>

          {/* Col 2: Hub Contacts */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-slate-900 pb-2">
              Contacto y Localización
            </h4>

            <div className="space-y-4 text-sm font-light">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone}`} className="hover:text-red-500 transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-500 shrink-0" />
                <a href={`mailto:${SCHOOL_INFO.email}`} className="hover:text-red-500 transition-colors">
                  {SCHOOL_INFO.email}
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-300">Horario de Actividades:</p>
                  <p className="text-xs text-slate-400">
                    <EditableText id="school_schedule" defaultText={SCHOOL_INFO.schedule} as="span" />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Beautiful OpenStreetMap / Google Maps Iframe */}
          <div className="lg:col-span-4 text-left space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider border-b border-slate-900 pb-2">
              Ubicación en el Mapa
            </h4>
            
            <div className="w-full h-44 rounded-2xl overflow-hidden border border-slate-900 shadow-lg relative bg-slate-950 group">
              {/* Map embed of Mahuixtlan, Coatepec, Ver. */}
              <iframe
                title="Mapa de ubicación del Telebachillerato de Mahuixtlan"
                src="https://maps.google.com/maps?q=Telebachillerato%20de%20Mahuixtl%C3%A1n,%20Coatepec,%20Veracruz&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors pointer-events-none" />
            </div>

            <a 
              href="https://maps.app.goo.gl/hogUS4rTzjWXC4of9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-red-500 hover:text-red-400 font-medium transition-colors border border-slate-900 hover:border-slate-850 bg-slate-950 px-3 py-2 rounded-xl w-full justify-center"
            >
              <span>Abrir en Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            
            <span className="text-[11px] text-slate-500 block italic leading-tight">
              <EditableText id="footer_map_caption" defaultText="📍 Ubicados junto a las canchas públicas de Mahuixtlán, a pocos minutos de Coatepec Ver." as="span" />
            </span>
          </div>

        </div>
      </div>

      {/* Extreme Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <p>© {currentYear} Telebachillerato de Mahuixtlan. Todos los derechos reservados.</p>
            <p className="mt-1">Secretaría de Educación del Estado de Veracruz (SEV). Sitio Promocional Oficial.</p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetAll}
              className="flex items-center space-x-1 px-4 py-2 bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white rounded-xl text-xs font-semibold transition-all border border-slate-800/80 cursor-pointer"
              title="Restablecer todos los textos a sus valores originales"
            >
              <RotateCcw className="w-3.5 h-3.5 shrink-0" />
              <span>Restablecer Textos</span>
            </button>

            <button
              onClick={handleBackToTop}
              className="flex items-center space-x-1 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-all border border-slate-800 cursor-pointer"
            >
              <span>Subir al Inicio</span>
              <ChevronUp className="w-4 h-4 animate-bounce" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
