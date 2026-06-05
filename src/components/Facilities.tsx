import React, { useState } from 'react';
import { FACILITIES } from '../data';
import { Eye, X, ZoomIn, MapPin } from 'lucide-react';
import { EditableText } from './EditableText';

// Custom collage images representing lively moments and areas of the plant
const COLLAGE_IMAGES = [
  {
    id: "c1",
    title: "Fachada de Bienvenida",
    description: "La entrada principal clásica del Telebachillerato de Mahuixtlán, un símbolo de bienvenida a generaciones de estudiantes.",
    image: "/src/assets/images/regenerated_image_1780642941324.jpg",
    gridClass: "md:col-span-2 md:row-span-2 h-72 md:h-full min-h-[300px]"
  },
  {
    id: "c2",
    title: "Sede de Biblioteca y Lectura",
    description: "Estudiantes participando activamente en talleres de lectura y consulta de acervos en nuestras confortables áreas comunes.",
    image: "/src/assets/images/regenerated_image_1780643767621.png",
    gridClass: "md:col-span-1 md:row-span-1 h-44 md:h-[160px]"
  },
  {
    id: "c3",
    title: "Actividades Culturales y Cívicas",
    description: "Celebrando nuestras tradiciones culturales vivas bajo el domo, fomentando el orgullo y la identidad local de Mahuixtlán.",
    image: "/src/assets/images/regenerated_image_1780642933845.png",
    gridClass: "md:col-span-1 md:row-span-1 h-44 md:h-[160px]"
  },
  {
    id: "c4",
    title: "Centro de Cómputo e Internet",
    description: "Área tecnológica equipada con internet y software de vanguardia para la capacitación técnica de informática.",
    image: "/src/assets/images/regenerated_image_1780643771201.png",
    gridClass: "md:col-span-1 md:row-span-1 h-44 md:h-[160px]"
  },
  {
    id: "c5",
    title: "Prácticas de Laboratorio y Ciencias",
    description: "Espacio de experimentación académica donde se fomenta la investigación química, biológica y el pensamiento científico.",
    image: "/src/assets/images/regenerated_image_1780643775168.png",
    gridClass: "md:col-span-1 md:row-span-1 h-44 md:h-[160px]"
  }
];

export default function Facilities() {
  const [selectedFacility, setSelectedFacility] = useState<any | null>(null);

  return (
    <section id="instalaciones" className="py-20 lg:py-28 bg-slate-50 text-slate-900 relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-100/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-red-600 uppercase mb-3">
            <EditableText id="facilities_tag" defaultText="Recorrido Virtual" as="span" />
          </h2>
          <h3 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            <EditableText id="facilities_title" defaultText="Nuestras Instalaciones y Espacios de Aprendizaje" as="span" />
          </h3>
          <div className="h-1.5 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-650 font-normal text-sm sm:text-base mt-2 leading-relaxed">
            <EditableText id="facilities_desc" defaultText="Ubicados en el corazón de Mahuixtlán, contamos con espacios funcionales diseñados para combinar la teoría, la práctica digital y las actividades socioculturales de manera integral." as="span" />
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group bg-white rounded-[2.2rem] overflow-hidden border-2 border-slate-100 hover:border-red-200 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => setSelectedFacility(facility)}
            >
              {/* Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Overlay with Zoom Icon */}
                <div className="absolute inset-0 bg-red-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-2xl text-white">
                    <ZoomIn className="w-6 h-6 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-black text-base text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    <EditableText id={`facility_title_${facility.id}`} defaultText={facility.title} as="span" />
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    <EditableText id={`facility_desc_${facility.id}`} defaultText={facility.description} as="span" />
                  </p>
                </div>
                
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs text-red-600 font-bold">
                  <MapPin className="w-3.5 h-3.5 mr-1" />
                  <span>Área Escolar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collage de Imágenes Card */}
        <div className="mt-16 bg-white rounded-[2.5rem] border-2 border-slate-100 p-6 sm:p-10 shadow-xs hover:shadow-md transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 text-left">
            <div>
              <span className="px-3 py-1 bg-red-50 border border-red-100 text-red-700 rounded-full text-[11px] font-bold tracking-wider uppercase">
                Colección Visual
              </span>
              <h4 className="font-display font-black text-2xl text-slate-900 mt-2 tracking-tight">
                Mosaico y Vida del Plantel
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explora momentos capturados de nuestra vibrante comunidad estudiantil, actividades académicas y áreas comunes.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl w-fit">
              <span>Haga clic para ampliar</span>
              <ZoomIn className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-min">
            {COLLAGE_IMAGES.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedFacility(img)}
                className={`${img.gridClass} group relative rounded-2xl overflow-hidden cursor-pointer border border-slate-100 bg-slate-50`}
              >
                <img
                  src={img.image}
                  alt="Instalación del Plantel"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Clean hover overlay with Zoom feedback, no text information */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/20 backdrop-blur-xs p-3 rounded-2xl text-white">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
            <div className="relative bg-white border border-slate-100 rounded-[2.5rem] max-w-2xl w-full overflow-hidden shadow-2xl animate-scale-up">
              {/* Close Button */}
              <button
                onClick={() => setSelectedFacility(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Image */}
              <div className="aspect-16/10 bg-slate-900">
                <img
                  src={selectedFacility.image}
                  alt={selectedFacility.title || "Imagen del Plantel"}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Modal Footer Description (Only for non-collage items, i.e. standard facilities) */}
              {!selectedFacility.id.startsWith('c') && (
                <div className="p-6 md:p-8 text-left">
                  <h3 className="font-display font-black text-xl sm:text-2xl text-red-700 mb-3">
                    {selectedFacility.title}
                  </h3>
                  <p className="text-slate-650 text-xs sm:text-sm leading-relaxed">
                    {selectedFacility.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 mt-6 justify-self-end">
                    <span className="px-3 py-1 bg-red-5 border border-red-150 text-red-700 rounded-lg text-xs font-mono font-bold">
                      Plantel Vigilado y Seguro
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">
                      Comunidad de Mahuixtlán
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
