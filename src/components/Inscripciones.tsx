import React, { useState } from 'react';
import { SCHOOL_INFO } from '../data';
import { PreRegistrationData } from '../types';
import { 
  ClipboardList, 
  FileText, 
  CheckCircle, 
  User, 
  Calendar, 
  Layers, 
  Phone, 
  Mail, 
  GraduationCap, 
  CheckSquare, 
  Square, 
  ArrowLeft, 
  ArrowRight, 
  Printer, 
  Clock, 
  BookmarkCheck,
  ShieldCheck
} from 'lucide-react';

export default function Inscripciones() {
  // Step for Wizard Form
  const [formStep, setFormStep] = useState<1 | 2 | 3 | 4>(1); // 4 is Success Receipt View
  
  // Interactive Checklist
  const [checklist, setChecklist] = useState([
    { id: 'doc1', term: 'Acta de Nacimiento', description: 'Copia certificada legible', checked: false },
    { id: 'doc2', term: 'CURP', description: 'Clave Única de Registro de Población actualizada', checked: false },
    { id: 'doc3', term: 'Certificado de Secundaria', description: 'O constancia oficial de terminación de estudios', checked: false },
    { id: 'doc4', term: 'Comprobante de domicilio', description: 'Luz, agua o teléfono reciente (menor a 3 meses)', checked: false },
    { id: 'doc5', term: 'Fotografías infantiles', description: '4 fotos en blanco y negro, papel mate de frente', checked: false },
    { id: 'doc6', term: 'Identificación oficial del tutor', description: 'INE o pasaporte vigente en copia', checked: false },
    { id: 'doc7', term: 'Constancia de tipo de sangre o ficha de salud', description: 'Documento original expedido por institución de salud oficial', checked: false },
  ]);

  const toggleChecklist = (id: string) => {
    setChecklist(checklist.map(item => 
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  // Form Fields State
  const [formData, setFormData] = useState<PreRegistrationData>({
    fullName: '',
    curp: '',
    birthDate: '',
    gender: 'M',
    phone: '',
    email: '',
    secondarySchool: '',
    secondaryGpa: '',
    capacitacionChoice: 'Informática',
    parentName: '',
    parentPhone: ''
  });

  // Validation errors
  const [errors, setErrors] = useState<Partial<Record<keyof PreRegistrationData, string>>>({});

  // Generated candidate info
  const [candidateFile, setCandidateFile] = useState<{
    fichaNumber: string;
    dateGenerated: string;
    group: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error
    if (errors[name as keyof PreRegistrationData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Step 1 Validation
  const validateStep1 = (): boolean => {
    const newErrors: Partial<Record<keyof PreRegistrationData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'El nombre completo es requerido';
    if (!formData.curp.trim()) {
      newErrors.curp = 'La CURP es requerida';
    } else if (formData.curp.length !== 18) {
      newErrors.curp = 'La CURP debe tener exactamente 18 caracteres';
    }
    if (!formData.birthDate) newErrors.birthDate = 'La fecha de nacimiento es requerida';
    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono de contacto es requerido';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Introduce un número de 10 dígitos válido';
    }
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Introduce un correo con formato válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 2 Validation
  const validateStep2 = (): boolean => {
    const newErrors: Partial<Record<keyof PreRegistrationData, string>> = {};
    if (!formData.secondarySchool.trim()) newErrors.secondarySchool = 'Introduce el nombre de la escuela secundaria de egreso';
    if (!formData.secondaryGpa.trim()) {
      newErrors.secondaryGpa = 'El promedio secundario es requerido';
    } else {
      const gpa = parseFloat(formData.secondaryGpa);
      if (isNaN(gpa) || gpa < 6.0 || gpa > 10.0) {
        newErrors.secondaryGpa = 'El promedio debe estar entre 6.0 y 10.0';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Step 3 Validation
  const validateStep3 = (): boolean => {
    const newErrors: Partial<Record<keyof PreRegistrationData, string>> = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'El nombre del tutor es requerido';
    if (!formData.parentPhone.trim()) {
      newErrors.parentPhone = 'El teléfono de emergencia del tutor es requerido';
    } else if (!/^\d{10}$/.test(formData.parentPhone.replace(/[-\s]/g, ''))) {
      newErrors.parentPhone = 'Introduce un número de 10 dígitos válido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (formStep === 1 && validateStep1()) {
      setFormStep(2);
    } else if (formStep === 2 && validateStep2()) {
      setFormStep(3);
    }
  };

  const prevStep = () => {
    if (formStep > 1 && formStep < 4) {
      setFormStep((formStep - 1) as any);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formStep === 3 && validateStep3()) {
      // Simulate submission & file generation
      const trackingNumber = `CCT-${SCHOOL_INFO.clave.substring(0,4)}-${Math.floor(1000 + Math.random() * 9000)}`;
      const formattedDate = new Date().toLocaleDateString('es-MX', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
      // Determine study group dynamically based on capacity choice
      const randomGroup = formData.capacitacionChoice === 'Informática' ? 'Semestre I - Grupo A' : 'Semestre I - Grupo B';

      setCandidateFile({
        fichaNumber: trackingNumber,
        dateGenerated: formattedDate,
        group: randomGroup
      });
      
      setFormStep(4); // Trigger registration success sheet
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      curp: '',
      birthDate: '',
      gender: 'M',
      phone: '',
      email: '',
      secondarySchool: '',
      secondaryGpa: '',
      capacitacionChoice: 'Informática',
      parentName: '',
      parentPhone: ''
    });
    setErrors({});
    setFormStep(1);
    setCandidateFile(null);
  };

  const printReceipt = () => {
    window.print();
  };

  return (
    <section id="inscripciones" className="py-20 lg:py-28 bg-slate-50 text-slate-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold tracking-widest text-red-600 uppercase mb-3">
            Inscripciones 2026-2027
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Portal de Solicitud de Ficha e Inscripción Directa
          </p>
          <div className="h-1.5 w-24 bg-red-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-650 font-normal text-sm sm:text-base mt-2 leading-relaxed">
            Inicia tu trámite escolar completamente en línea. Completa el asistente e infórmate de la documentación que deberás entregar físicamente en nuestro plantel para consolidar tu matrícula.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Requeriments and Checklists */}
          <div className="col-span-1 lg:col-span-5 flex flex-col space-y-8 text-left">
            
            {/* Steps card */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border-2 border-slate-100 shadow-xs">
              <h3 className="font-display font-black text-lg text-slate-900 border-b border-slate-100 pb-3 mb-5 flex items-center space-x-2">
                <ClipboardList className="w-5 h-5 text-red-600" />
                <span>Proceso de Registro (4 Pasos)</span>
              </h3>

              <div className="space-y-6">
                {[
                  { step: '1', title: 'Preinscripción en Línea', desc: 'Somete tus datos en este simulador para generar tu Ficha de Registro temporal.' },
                  { step: '2', title: 'Revisión Física de Papeles', desc: 'Visita el plantel con tu documentación reglamentaria (Lunes a Viernes de 8:00 am a 1:00 pm).' },
                  { step: '3', title: 'Entrevista Diagnóstica', desc: 'Una plática breve de orientación académica y perfil técnico para asignar tu grupo.' },
                  { step: '4', title: 'Curso de Inducción', desc: 'Participa en nuestro curso propedéutico para familiarizarte con el modelo didáctico.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-4">
                    <div className="w-8 h-8 rounded-full bg-red-50 text-red-650 text-xs font-extrabold flex items-center justify-center shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-display font-black text-sm sm:text-base text-slate-800 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Checklist of documents */}
            <div className="bg-white p-6 sm:p-8 rounded-[2rem] border-2 border-slate-100 shadow-xs relative">
              <span className="absolute top-4 right-4 text-[10px] bg-red-50 border border-red-200 rounded-lg px-2.5 py-1 text-red-800 uppercase font-bold font-mono">
                Lista de Cotejo
              </span>

              <h3 className="font-display font-black text-lg text-slate-850 border-b border-slate-100 pb-3 mb-5 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-red-600" />
                <span>Requisitos de Admisión</span>
              </h3>
              
              <p className="text-xs text-slate-500 mb-4 leading-relaxed font-normal">
                Marca los documentos con los que ya cuentas para asegurarte de que tu entrega física sea exitosa:
              </p>

              <div className="space-y-3.5">
                {checklist.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => toggleChecklist(item.id)}
                    className="flex justify-start items-start space-x-3 p-2 rounded-xl hover:bg-slate-50/80 cursor-pointer select-none transition-colors"
                  >
                    <button className="text-red-600 mt-0.5 focus:outline-hidden cursor-pointer shrink-0">
                      {item.checked ? (
                        <CheckSquare className="w-5 h-5 fill-red-50 text-red-600" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400 hover:text-slate-600" />
                      )}
                    </button>
                    <div>
                      <span className={`text-xs font-bold sm:text-sm ${item.checked ? 'line-through text-slate-400 font-normal' : 'text-slate-700'}`}>
                        {item.term}
                      </span>
                      <p className="text-[11px] text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress counter */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600">
                <span>Tu avance de requisitos:</span>
                <span className="text-red-800 font-extrabold font-mono bg-red-50 px-2.5 py-1 rounded-lg border border-red-150">
                  {checklist.filter(c => c.checked).length} de {checklist.length} listos
                </span>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: The Interactive Form Wizard */}
          <div className="col-span-1 lg:col-span-7">
            <div className="bg-white rounded-[2rem] border-2 border-slate-100 shadow-md overflow-hidden relative">
              {/* Decorative top red border */}
              <div className="h-2 w-full bg-red-650"></div>

              {formStep < 4 ? (
                /* WIZARD FORM IN PROGRESS */
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 lg:p-10 text-left">
                  
                  {/* Step Indicators Header */}
                  <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-5">
                    <div>
                      <span className="text-xs uppercase font-mono tracking-widest text-slate-400 block font-bold">
                        Asistente Digital
                      </span>
                      <h3 className="font-display font-black text-xl text-slate-900">
                        Ficha de Registro de Aspirante
                      </h3>
                    </div>
                    {/* Visual Progress Bar */}
                    <div className="flex items-center space-x-2">
                       {[1, 2, 3].map((s) => (
                        <div
                          key={s}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                            formStep === s
                              ? 'bg-red-650 text-white ring-4 ring-red-100'
                              : formStep > s
                              ? 'bg-red-100 text-red-800'
                              : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* STEP 1: PERSONAL INFORMATION */}
                  {formStep === 1 && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-red-50/50 p-4 border border-red-100 rounded-2xl flex items-start space-x-3.5 mb-2">
                        <User className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-red-900 leading-relaxed font-normal">
                          Bienvenido al portal de incorporación. Por favor, asegúrate de proporcionar los datos correctos tal como aparecen en tus documentos oficiales o acta de nacimiento nacional.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name (Full Width) */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Nombre del Aspirante *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            placeholder="Nombre(s) Primer Apellido Segundo Apellido"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-hidden focus:ring-2 ${
                              errors.fullName 
                                ? 'border-red-300 focus:ring-red-100' 
                                : 'border-slate-200 focus:ring-red-100 focus:border-red-600'
                            }`}
                          />
                          {errors.fullName && <p className="text-red-500 text-xs mt-1 font-mono">{errors.fullName}</p>}
                        </div>

                        {/* CURP */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            CURP (18 caracteres) *
                          </label>
                          <input
                            type="text"
                            name="curp"
                            placeholder="AAAA000000XXXXXX00"
                            maxLength={18}
                            value={formData.curp}
                            onChange={(e) => {
                              e.target.value = e.target.value.toUpperCase();
                              handleInputChange(e);
                            }}
                            className={`w-full px-4 py-3 rounded-xl border text-sm font-mono focus:outline-hidden focus:ring-2 ${
                              errors.curp 
                                ? 'border-red-300 focus:ring-red-100' 
                                : 'border-slate-200 focus:ring-red-100 focus:border-red-600'
                            }`}
                          />
                          {errors.curp && <p className="text-red-500 text-xs mt-1 font-mono">{errors.curp}</p>}
                        </div>

                        {/* Birthdate */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Fecha de Nacimiento *
                          </label>
                          <input
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                              errors.birthDate 
                                ? 'border-red-300 focus:ring-red-100' 
                                : 'border-slate-200 focus:ring-red-100 focus:border-red-600'
                            }`}
                          />
                          {errors.birthDate && <p className="text-red-500 text-xs mt-1 font-mono">{errors.birthDate}</p>}
                        </div>

                        {/* Gender */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Género
                          </label>
                          <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-100 focus:border-red-650 bg-white"
                          >
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="X">No Binario / Otro</option>
                          </select>
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Teléfono de contacto *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="Ej. 2281234567"
                            maxLength={10}
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                              errors.phone 
                                ? 'border-red-300 focus:ring-red-100' 
                                : 'border-slate-200 focus:ring-red-100 focus:border-red-600'
                            }`}
                          />
                          {errors.phone && <p className="text-red-500 text-xs mt-1 font-mono">{errors.phone}</p>}
                        </div>

                        {/* Email */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Correo Electrónico (Opcional)
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="ejemplo@correo.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                              errors.email 
                                ? 'border-red-300 focus:ring-red-100' 
                                : 'border-slate-200 focus:ring-red-100 focus:border-red-600'
                            }`}
                          />
                          {errors.email && <p className="text-red-500 text-xs mt-1 font-mono">{errors.email}</p>}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: ACADEMIC BACKGROUND */}
                  {formStep === 2 && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-red-50/50 p-4 border border-red-100 rounded-2xl flex items-start space-x-3.5 mb-2">
                        <GraduationCap className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-red-900 leading-relaxed font-normal">
                          Ingresa los datos escolares relativos a tu educación secundaria concluida y selecciona la capacitación de tu mayor preferencia profesional.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Secondary School */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Escuela Secundaria de Origen *
                          </label>
                          <input
                            type="text"
                            name="secondarySchool"
                            placeholder="Ej. Primaria y Secundaria Netzahualcóyotl"
                            value={formData.secondarySchool}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                              errors.secondarySchool 
                                ? 'border-red-300 focus:ring-red-100' 
                                : 'border-slate-200 focus:ring-red-100 focus:border-red-600'
                            }`}
                          />
                          {errors.secondarySchool && <p className="text-red-500 text-xs mt-1 font-mono">{errors.secondarySchool}</p>}
                        </div>

                        {/* GPA */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Promedio General *
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            min="6.0"
                            max="10.0"
                            name="secondaryGpa"
                            placeholder="Promedio secundaria (Ej: 8.5)"
                            value={formData.secondaryGpa}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl border text-sm font-mono focus:outline-hidden focus:ring-2 ${
                              errors.secondaryGpa 
                                ? 'border-red-300 focus:ring-red-100' 
                                : 'border-slate-200 focus:ring-red-100 focus:border-red-600'
                            }`}
                          />
                          {errors.secondaryGpa && <p className="text-red-500 text-xs mt-1 font-mono">{errors.secondaryGpa}</p>}
                        </div>

                        {/* Choice of vocational training */}
                        <div className="sm:col-span-3">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Área de Capacitación de Interés Inicial
                          </label>
                          <select
                            name="capacitacionChoice"
                            value={formData.capacitacionChoice}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-red-100 focus:border-red-650 bg-white"
                          >
                            <option value="Informática">Capacitación en Informática (Técnicas digitales, web y software)</option>
                            <option value="Desarrollo Comunitario y Administración">Desarrollo Comunitario y Administración (Planes agrícolas y pequeñas empresas de Coatepec)</option>
                          </select>
                          <p className="text-[11px] text-slate-400 mt-2 italic">
                            * Nota: Esta selección es preliminar de orientación y podrá ser ratificada durante la entrevista diagnóstica.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: PARENT / GUARDIAN INFORMATION */}
                  {formStep === 3 && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="bg-red-50/50 p-4 border border-red-100 rounded-2xl flex items-start space-x-3.5 mb-2">
                        <Layers className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                        <p className="text-xs text-red-950 leading-relaxed font-normal">
                          Para alumnos menores de edad es un lineamiento indispensable contar con un tutor legal registrado para el seguimiento de calificaciones, avisos y emergencias.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Parent Name */}
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Nombre Completo del Padre o Tutor *
                          </label>
                          <input
                            type="text"
                            name="parentName"
                            placeholder="Nombre(s) Primer Apellido Segundo Apellido"
                            value={formData.parentName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                              errors.parentName 
                                ? 'border-red-300 focus:ring-red-100' 
                                : 'border-slate-200 focus:ring-red-100 focus:border-red-600'
                            }`}
                          />
                          {errors.parentName && <p className="text-red-500 text-xs mt-1 font-mono">{errors.parentName}</p>}
                        </div>

                        {/* Parent Phone */}
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                            Teléfono de Emergencia del Tutor *
                          </label>
                          <input
                            type="tel"
                            name="parentPhone"
                            maxLength={10}
                            placeholder="10 dígitos del tutor"
                            value={formData.parentPhone}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-hidden focus:ring-2 ${
                              errors.parentPhone 
                                ? 'border-red-300 focus:ring-red-100' 
                                : 'border-slate-200 focus:ring-red-100 focus:border-red-600'
                            }`}
                          />
                          {errors.parentPhone && <p className="text-red-500 text-xs mt-1 font-mono">{errors.parentPhone}</p>}
                        </div>

                        <div className="flex items-center space-x-2 sm:mt-8">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                          <span className="text-[11px] text-slate-500 font-mono font-bold">Último paso del trámite</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* BUTTONS NAVIGATION BAR */}
                  <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                    {formStep > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 font-bold text-xs sm:text-sm text-slate-600 transition-colors cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Atrás</span>
                      </button>
                    ) : (
                      <div></div>
                    )}

                    {formStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                      >
                        <span>Siguiente</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="flex items-center space-x-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-transform cursor-pointer transform active:scale-95"
                      >
                        <BookmarkCheck className="w-4 h-4" />
                        <span>Completar Preinscripción</span>
                      </button>
                    )}
                  </div>

                </form>
              ) : (
                /* SUCCESS PRE-REGISTRATION DIGITAL RECEIPT (FICHA DE ASPIRANTE) */
                <div className="p-6 sm:p-10 text-center animate-scale-up">
                  <div className="w-16 h-16 rounded-full bg-red-50 text-red-650 flex items-center justify-center mx-auto mb-6 shadow-md shadow-red-100">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>

                  <h3 className="font-display font-black text-2xl text-slate-900 gap-1 flex items-center justify-center">
                    <span>¡Preinscripción Registrada!</span>
                  </h3>
                  
                  <p className="text-slate-650 text-xs sm:text-sm max-w-md mx-auto mt-2 mb-8 leading-relaxed font-normal">
                    Tu expediente preliminar digital ha sido creado exitosamente en el sistema de control escolar del Telebachillerato de Mahuixtlán. Presenta esta ficha para tu confirmación presencial.
                  </p>

                  {/* PRINTER DRAFT FICHA CONTAINER */}
                  <div id="print-ficha-card" className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2rem] p-6 md:p-8 text-left max-w-xl mx-auto space-y-6 relative overflow-hidden text-slate-800">
                    {/* Security check header */}
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-red-600 block font-mono font-black">Secretaría de Educación de Veracruz</span>
                        <h4 className="font-display font-black text-base text-slate-900">FICHA DE PREINSCRIPCIÓN DIGITAL</h4>
                      </div>
                      <ShieldCheck className="w-9 h-9 text-red-600" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-slate-400 uppercase tracking-widest font-mono text-[9px] block">Folio de Aspirante</span>
                        <span className="font-mono font-bold text-base text-red-600">{candidateFile?.fichaNumber}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 uppercase tracking-widest font-mono text-[9px] block">CCT Escuela</span>
                        <span className="font-mono font-bold text-slate-700">{SCHOOL_INFO.clave} (Mahuixtlán)</span>
                      </div>

                      <div className="col-span-2">
                        <span className="text-slate-400 uppercase tracking-widest font-mono text-[9px] block">Nombre Completo del Alumno</span>
                        <span className="font-display font-black text-slate-850 text-sm block uppercase">{formData.fullName}</span>
                      </div>

                      <div>
                        <span className="text-slate-400 uppercase tracking-widest font-mono text-[9px] block">CURP</span>
                        <span className="font-mono text-slate-700 font-bold">{formData.curp}</span>
                      </div>
                      
                      <div>
                        <span className="text-slate-400 uppercase tracking-widest font-mono text-[9px] block">Capacitación de Interés</span>
                        <span className="font-bold text-red-650">{formData.capacitacionChoice}</span>
                      </div>

                      <div>
                        <span className="text-slate-400 uppercase tracking-widest font-mono text-[9px] block">Secundaria Procedencia</span>
                        <span className="font-bold text-slate-700 truncate block">{formData.secondarySchool}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 uppercase tracking-widest font-mono text-[9px] block">Promedio Escolar</span>
                        <span className="font-mono font-bold text-slate-800">{formData.secondaryGpa} / 10.0</span>
                      </div>

                      <div className="col-span-2 border-t border-slate-200/60 pt-3">
                        <span className="text-slate-400 uppercase tracking-widest font-mono text-[9px] block">Tutor Encargado</span>
                        <span className="font-display font-black text-slate-800 block uppercase text-[11px]">{formData.parentName} ({formData.parentPhone})</span>
                      </div>
                      
                      <div className="col-span-2">
                        <span className="text-slate-400 uppercase tracking-widest font-mono text-[9px] block">Fecha de Registro</span>
                        <span className="font-mono text-[10px] text-slate-600 font-bold">{candidateFile?.dateGenerated}</span>
                      </div>
                    </div>

                    {/* Bottom barcode decoration */}
                    <div className="border-t border-slate-200 pt-4 flex flex-col items-center">
                      <div className="h-8 bg-slate-900 w-full rounded flex items-center justify-around px-4 select-none opacity-80 mb-2">
                        {[...Array(24)].map((_, i) => (
                          <div 
                            key={i} 
                            style={{ width: `${(i % 3 === 0 ? 3 : i % 2 === 0 ? 1 : 2)}px` }} 
                            className="bg-white h-6"
                          ></div>
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 font-bold">CONTROL DE ADMISIÓN TEBAEV</span>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
                    <button
                      onClick={printReceipt}
                      className="w-full sm:w-auto flex items-center justify-center space-x-2 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-colors cursor-pointer"
                    >
                      <Printer className="w-4 h-4" />
                      <span>Imprimir Ficha</span>
                    </button>

                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm transition-colors cursor-pointer"
                    >
                      Registrar Otro Aspirante
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
