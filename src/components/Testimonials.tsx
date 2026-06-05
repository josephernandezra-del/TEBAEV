import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';
import { Quote, Star, Award, Heart } from 'lucide-react';
import { EditableText } from './EditableText';

export default function Testimonials() {
  const [filterRole, setFilterRole] = useState<'all' | 'egresado' | 'docente' | 'padre'>('all');

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (filterRole === 'all') return true;
    if (filterRole === 'egresado') return t.role.toLowerCase().includes('egresad');
    if (filterRole === 'docente') return t.role.toLowerCase().includes('docent');
    if (filterRole === 'padre') return t.role.toLowerCase().includes('padre');
    return true;
  });

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-slate-50 text-slate-900 overflow-hidden relative">
      {/* Subtle Bento Glows */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-100/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-zinc-200/30 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-red-600 uppercase mb-3">
            <EditableText id="testimonials_tag" defaultText="Nuestra Comunidad Opina" as="span" />
          </h2>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            <EditableText id="testimonials_title" defaultText="Casos de Éxito e Historias de Orgullo Escolar" as="span" />
          </h3>
          <div className="h-1.5 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-650 font-normal text-sm sm:text-base mt-2 leading-relaxed">
            <EditableText id="testimonials_desc" defaultText="Conoce el testimonio directo de quienes han vivido, enseñado o confiado sus hijos al Telebachillerato de Mahuixtlán. Su éxito es nuestro motor." as="span" />
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {['all', 'egresado', 'docente', 'padre'].map((role) => (
            <button
              key={role}
              onClick={() => setFilterRole(role as any)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                filterRole === role
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {role === 'all' && 'Todos'}
              {role === 'egresado' && 'Alumnos Graduados (Egresados)'}
              {role === 'docente' && 'Por Profesores'}
              {role === 'padre' && 'Padres de Familia'}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {filteredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[2.2rem] p-6 md:p-8 border-2 border-slate-100 flex flex-col justify-between shadow-xs hover:shadow-md transition-all relative overflow-hidden"
            >
              {/* Quote Graphic Decoration */}
              <Quote className="absolute right-6 top-6 w-12 h-12 text-red-100/30 shrink-0 pointer-events-none" />

              <div>
                {/* Visual Stars */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>

                <p className="text-slate-700 italic text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  "<EditableText id={`testimonial_text_${testimonial.id}`} defaultText={testimonial.text} as="span" />"
                </p>
              </div>

              {/* Author Row */}
              <div className="flex items-center space-x-4 pt-5 border-t border-slate-100 mt-4">
                <div className="w-12 h-12 rounded-full overflow-hidden select-none bg-slate-200 border-2 border-red-600 shadow-xs shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="text-left">
                  <h4 className="font-display font-black text-sm sm:text-base text-slate-900">
                    <EditableText id={`testimonial_name_${testimonial.id}`} defaultText={testimonial.name} as="span" />
                  </h4>
                  <p className="text-[11px] text-red-600 font-bold uppercase tracking-wider">
                    <EditableText id={`testimonial_role_${testimonial.id}`} defaultText={testimonial.role} as="span" />
                  </p>
                  
                  {testimonial.achievement && (
                    <div className="mt-1 flex items-center space-x-1 text-[10px] text-slate-500 font-mono">
                      <Award className="w-3.5 h-3.5 text-red-550 shrink-0" />
                      <span className="truncate max-w-[200px] sm:max-w-xs">
                        <EditableText id={`testimonial_ach_${testimonial.id}`} defaultText={testimonial.achievement} as="span" />
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Counter Badge */}
        <div className="mt-16 bg-white inline-flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 px-8 py-6 rounded-[2rem] border-2 border-slate-100 text-slate-700 max-w-2xl mx-auto w-full">
          <div className="flex items-center space-x-2 text-red-600 shrink-0">
            <Heart className="w-6 h-6 text-red-600 fill-red-600 animate-pulse shrink-0" />
            <span className="font-display font-black text-2xl">+70%</span>
          </div>
          <div className="text-center sm:text-left text-xs sm:text-sm text-slate-500 font-normal">
            De nuestros egresados con interés de continuar estudios superiores han ingresado o cursado carreras acreditadas en Veracruz.
          </div>
        </div>

      </div>
    </section>
  );
}
