import React, { useState } from 'react';
import { OFFERINGS } from '../data';
import { Offering } from '../types';
import { GraduationCap, Laptop, Briefcase, Palette, Trophy, CheckCircle2, ArrowRight, Wrench } from 'lucide-react';
import { EditableText } from './EditableText';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap,
  Laptop,
  Briefcase,
  Palette,
  Trophy,
  Wrench,
};

interface OfferingsProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Offerings({ onScrollToSection }: OfferingsProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'capacitacion' | 'extracurricular'>('all');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const filterOptions = [
    { value: 'all', label: 'Todo el Programa' },
    { value: 'general', label: 'Formación General' },
    { value: 'capacitacion', label: 'Capacitación para el Trabajo' },
    { value: 'extracurricular', label: 'Actividades Extracurriculares' },
  ];

  const filteredOfferings = activeCategory === 'all'
    ? OFFERINGS
    : OFFERINGS.filter(offering => offering.category === activeCategory);

  return (
    <section id="oferta-educativa" className="py-20 lg:py-28 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title with Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-red-600 uppercase mb-3">
            <EditableText id="offerings_tag" defaultText="Oferta Educativa Superior" as="span" />
          </h2>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            <EditableText id="offerings_title" defaultText="Preparación Académica Integral y Práctica Regional" as="span" />
          </h3>
          <div className="h-1.5 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-650 font-normal text-sm sm:text-base mt-2 leading-relaxed">
            <EditableText id="offerings_desc" defaultText="Nuestro plan de estudios te garantiza una sólida formación humanística y científica, complementada con talleres clave que fomentan el crecimiento tecnológico y el desarrollo de tu propio entorno." as="span" />
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setActiveCategory(option.value as any)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 shadow-xs cursor-pointer ${
                activeCategory === option.value
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOfferings.map((offering) => {
            const IconComponent = iconMap[offering.icon] || GraduationCap;

            // Set dynamic styles for category tags - adapted for red, black, and white
            const tagStyles = offering.category === 'general'
              ? 'bg-zinc-100 text-zinc-800 border-zinc-200'
              : offering.category === 'capacitacion'
              ? 'bg-red-50 text-red-800 border-red-100'
              : 'bg-zinc-900 text-white border-zinc-950';
            
            return (
              <div
                key={offering.id}
                className="bg-white border-2 border-slate-100 rounded-[2.2rem] p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                onMouseEnter={() => setHoveredCard(offering.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-650 flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-black text-xl text-slate-900 mb-3 group-hover:text-red-950 transition-colors">
                    <EditableText id={`offering_title_${offering.id}`} defaultText={offering.title} as="span" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    <EditableText id={`offering_desc_${offering.id}`} defaultText={offering.description} as="span" />
                  </p>

                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3 block">
                    Puntos destacables del programa:
                  </h4>

                  <ul className="space-y-2.5 mb-8 text-left">
                    {offering.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mr-2 shrink-0 mt-0.5" />
                        <EditableText id={`offering_detail_${offering.id}_${index}`} defaultText={detail} as="span" />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg border uppercase tracking-wider ${tagStyles}`}>
                    {offering.category === 'general' ? 'Académico' : offering.category === 'capacitacion' ? 'Técnico' : 'Extracurricular'}
                  </span>
                  
                  <button
                    onClick={() => onScrollToSection('inscripciones')}
                    className="flex items-center space-x-1.5 text-xs font-bold text-red-650 hover:text-red-800 transition-colors cursor-pointer group/btn"
                  >
                    <span>Me interesa</span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Information banner */}
        <div className="mt-16 bg-zinc-950 border border-zinc-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.15),transparent)] pointer-events-none"></div>
          <div className="max-w-2xl text-left">
            <span className="px-3 py-1 bg-red-600/15 text-red-400 border border-red-500/20 text-xs font-semibold rounded-full uppercase tracking-wider">
              ¡Doble Beneficio de Egresado!
            </span>
            <h3 className="font-display font-black text-2xl sm:text-3xl mt-3 text-white tracking-tight leading-tight">
              Obtén tu Certificado Oficial + Constancia de Competencia Laboral
            </h3>
            <p className="text-slate-350 font-normal text-xs sm:text-sm mt-3 leading-relaxed">
              El Telebachillerato te prepara académicamente para continuar a cualquier Licenciatura o Ingeniería en cualquier parte de México, y simultáneamente te brinda herramientas prácticas para emprender e integrarte al sector productivo si así lo prefieres.
            </p>
          </div>
          <button
            onClick={() => onScrollToSection('inscripciones')}
            className="shrink-0 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-2xl transition-all shadow-md transform hover:scale-103 cursor-pointer self-stretch lg:self-auto text-center text-sm"
          >
            Preguntar por Capacitaciones
          </button>
        </div>

      </div>
    </section>
  );
}
