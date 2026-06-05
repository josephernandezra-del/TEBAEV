import React from 'react';
import { ArrowRight, BookOpen, MapPin, Calendar, Clock, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data';
import { EditableText } from './EditableText';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Hero({ onScrollToSection }: HeroProps) {
  // Use the high-resolution main facade image of the school
  const heroImageSrc = '/src/assets/images/regenerated_image_1780624153105.jpg';

  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-32 md:pb-20 bg-slate-50 text-slate-900 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-200/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* BENTO CARD 1: Large primary Black Main Banner with Red Accents (Spans 8 columns) */}
          <div className="col-span-1 lg:col-span-8 bg-zinc-950 rounded-[2.5rem] p-8 sm:p-12 text-white relative overflow-hidden shadow-xl flex flex-col justify-between min-h-[500px]">
            {/* Background Blob decoration */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-red-600/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-zinc-900 rounded-full blur-2xl opacity-40 pointer-events-none"></div>

            <div className="relative z-10 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-red-650/15 border border-red-500/20 text-xs sm:text-sm font-bold tracking-wider uppercase text-red-200 w-fit">
                <Sparkles className="w-4 h-4 text-red-550 animate-pulse" />
                <EditableText id="hero_tag" defaultText="Oferta Educativa 2026-2027" as="span" />
              </div>

              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-3xl tracking-tight leading-tight select-all">
                <EditableText id="hero_title_1" defaultText="Formamos con" as="span" /> <br />
                <span className="text-red-500 underline decoration-red-650 underline-offset-8 inline-block select-all">
                  <EditableText id="hero_title_2" defaultText="Visión Humana" as="span" />
                </span>
                <br />
                <span className="inline-block select-all">
                  <EditableText id="hero_title_3" defaultText="y Desarrollo Técnico." as="span" />
                </span>
              </h1>

              <div className="text-zinc-300 text-sm sm:text-base md:text-lg max-w-2xl font-medium leading-relaxed">
                <EditableText id="hero_desc" defaultText="El Telebachillerato de Mahuixtlán (Coatepec, Ver.) ofrece una preparación académica de excelencia y talleres técnicos que impulsan el porvenir de cada joven." as="p" multiline={true} />
              </div>

              {/* Mini Features within the bento */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xs text-left">
                  <p className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <span className="text-red-500 shrink-0">📊</span>
                    <EditableText id="hero_feat1_title" defaultText="Bachillerato General" as="span" />
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    <EditableText id="hero_feat1_desc" defaultText="Preparación sólida para el ingreso directo a cualquier universidad." as="span" />
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-xs text-left">
                  <p className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                    <span className="text-red-500 shrink-0">💻</span>
                    <EditableText id="hero_feat2_title" defaultText="Capacitación Aplicada" as="span" />
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    <EditableText id="hero_feat2_desc" defaultText="Habilidades prácticas listas para el mercado laboral de la región." as="span" />
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions Row inside bento */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-8 border-t border-white/10 relative z-10 mt-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onScrollToSection('inscripciones')}
                  className="px-6 py-3.5 bg-red-600 text-white hover:bg-red-700 active:bg-red-800 font-bold rounded-2xl shadow-lg transition-transform hover:scale-103 cursor-pointer text-center text-sm"
                >
                  Preinscribirme Ahora
                </button>
                <button
                  onClick={() => onScrollToSection('oferta-educativa')}
                  className="px-6 py-3.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white font-bold rounded-2xl transition-all cursor-pointer text-center text-sm"
                >
                  Ver Plan de Estudios
                </button>
              </div>
              <p className="text-xs text-zinc-400 font-mono text-left max-w-[200px] leading-tight">
                ☕ Clave de Centro de Trabajo oficial: <span className="font-bold text-red-500">{SCHOOL_INFO.clave}</span>
              </p>
            </div>
          </div>

          {/* BENTO CARD 2: Large Visual Frame containing the photo asset (Spans 4 columns) */}
          <div className="col-span-1 lg:col-span-4 bg-white border-2 border-slate-100 rounded-[2.5rem] p-6 shadow-xs flex flex-col justify-between min-h-[500px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">Ubicación Veracruz</span>
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              </div>
              
              {/* Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner aspect-[4/3] bg-slate-100 group">
                <img
                  src={heroImageSrc}
                  alt="Estudiantes exitosos del Telebachillerato de Mahuixtlan, Coatepec Veracruz"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                
                {/* Embedded badge */}
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[10px] font-bold px-2 py-1 rounded-lg backdrop-blur-xs">
                  <EditableText id="hero_side_badge" defaultText="Estudiantes TEBAEV" as="span" />
                </div>
              </div>
            </div>

            <div className="text-left pt-4 space-y-4">
              <div>
                <h3 className="font-display font-black text-xl text-slate-900">
                  <EditableText id="hero_side_title" defaultText="Orgullo de Coatepec" as="span" />
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  <EditableText id="hero_side_desc" defaultText="Rodeado de verdes montañas cafetaleras, nuestro plantel ofrece un entorno escolar agradable, seguro y moderno para tu crecimiento personal." as="span" />
                </p>
              </div>

              {/* Brief Quick Information Grid */}
              <div className="grid grid-cols-1 gap-2 pt-2 border-t border-slate-100 text-xs font-medium text-slate-700">
                <div className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <MapPin className="w-4 h-4 text-red-650 shrink-0" />
                  <EditableText id="school_location" defaultText={SCHOOL_INFO.location} as="span" className="truncate" />
                </div>
                <div className="flex items-center space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <Clock className="w-4 h-4 text-zinc-950 shrink-0" />
                  <EditableText id="school_schedule" defaultText={SCHOOL_INFO.schedule} as="span" className="truncate" />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BENTO STATS CARDS GRID: 4 Distinct Red-Black-White Bento Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          
          {/* Stat Card 1: Red Acceptance / Success */}
          <div className="bg-red-50 border-2 border-red-100 rounded-[2.2rem] p-8 flex flex-col justify-center items-center text-center shadow-xs hover:shadow-md transition-all">
            <span className="font-display font-black text-5xl text-red-700 leading-none">
              <EditableText id="stat_certification_value" defaultText="80%" as="span" />
            </span>
            <span className="text-xs font-bold text-red-800 uppercase tracking-wider mt-2 block">
              <EditableText id="stat_certification_label" defaultText="Certificación Escolar" as="span" />
            </span>
            <p className="text-[11px] text-red-900/80 mt-1 max-w-[200px]">Alumnos egresados exitosamente de su bachillerato.</p>
          </div>

          {/* Stat Card 2: Vibrant Red Regional Pride */}
          <div className="bg-red-600 text-white rounded-[2.2rem] p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all text-left">
            <div>
              <span className="font-display font-black text-4xl block text-white">
                <EditableText id="stat_years_value" defaultText="25" as="span" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-red-100 mt-1 block">
                <EditableText id="stat_years_label" defaultText="Años de Tradición" as="span" />
              </span>
            </div>
            <p className="text-xs text-red-100 mt-3 leading-relaxed">
              Consolidando a Mahuixtlán con educación rural participativa y excelencia académica.
            </p>
          </div>

          {/* Stat Card 3: Deep Slate Dark */}
          <div className="bg-zinc-900 text-white rounded-[2.2rem] p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all text-left">
            <div>
              <span className="font-display font-black text-4xl block text-red-500">
                <EditableText id="stat_students_value" defaultText="80+" as="span" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 mt-1 block">
                <EditableText id="stat_students_label" defaultText="Estudiantes Activos" as="span" />
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
              Una comunidad escolar unida, entusiasta y participativa en ferias y concursos.
            </p>
          </div>

          {/* Stat Card 4: Light Soft White-Red border */}
          <div className="bg-white border-2 border-slate-100 rounded-[2.2rem] p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all text-left">
            <div>
              <span className="font-display font-black text-4xl block text-red-600">
                <EditableText id="stat_teachers_value" defaultText="8" as="span" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-550 mt-1 block">
                <EditableText id="stat_teachers_label" defaultText="Docentes Especializados" as="span" />
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-3 leading-relaxed font-normal">
              Asesoría personalizada constante, garantizando cercanía en cada módulo educativo.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
