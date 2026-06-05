import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, ChevronUp, HelpCircle, HelpCircle as HelpIcon, ArrowUpRight } from 'lucide-react';
import { EditableText } from './EditableText';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="preguntas-frecuentes" className="py-20 lg:py-28 bg-slate-50 text-slate-900 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold tracking-widest text-red-600 uppercase mb-3">
            <EditableText id="faq_tag" defaultText="Preguntas Frecuentes" as="span" />
          </h2>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            <EditableText id="faq_title" defaultText="Todo lo que necesitas saber antes de ingresar" as="span" />
          </h3>
          <div className="h-1.5 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-650 font-normal text-sm sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
            <EditableText id="faq_desc" defaultText="Hemos reunido las dudas más recurrentes de los padres de familia y futuros alumnos de la zona de Coatepec para ayudarte en tu proceso de decisión escolar." as="span" />
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            
            return (
              <div
                key={faq.id}
                className={`border-2 rounded-[1.5rem] transition-all duration-250 overflow-hidden text-left ${
                  isOpen
                    ? 'border-red-200 bg-red-50/20 shadow-xs'
                    : 'border-slate-100 bg-white hover:bg-slate-50/50'
                }`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-start justify-between p-5 text-left focus:outline-hidden cursor-pointer"
                >
                  <div className="flex items-start space-x-3.5 pr-4">
                    <HelpCircle className={`w-5.5 h-5.5 mt-0.5 shrink-0 ${isOpen ? 'text-red-600 font-bold' : 'text-slate-400'}`} />
                    <span className="font-display font-black text-slate-900 text-sm sm:text-base">
                      <EditableText id={`faq_q_${faq.id}`} defaultText={faq.question} as="span" />
                    </span>
                  </div>
                  
                  <span className="p-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-500 shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-red-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </span>
                </button>

                {/* Collapsible Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-72 border-t border-slate-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal text-left">
                    <EditableText id={`faq_a_${faq.id}`} defaultText={faq.answer} as="span" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sticky Help Card */}
        <div className="mt-14 p-6 sm:p-8 bg-white rounded-[2rem] border-2 border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-left shadow-xs">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-700 shrink-0 text-lg">
              ☕
            </div>
            <div>
              <p className="font-display font-black text-sm sm:text-base text-slate-900">
                ¿Tienes otra duda o comentario particular?
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Puedes visitarnos directamente de Lunes a Viernes de 8:00 am a 1:00 pm o enviarnos un WhatsApp.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/522281234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 py-2.5 px-5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shrink-0"
          >
            <span>Dudas por WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
