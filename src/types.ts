export interface Offering {
  id: string;
  title: string;
  description: string;
  category: 'general' | 'capacitacion' | 'extracurricular';
  icon: string; // Lucide icon name
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string; // Egresado, Estudiante, Docente, Padre
  text: string;
  image: string;
  year?: string;
  achievement?: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'admision' | 'academico' | 'servicios';
}

export interface PreRegistrationData {
  fullName: string;
  curp: string;
  birthDate: string;
  gender: string;
  phone: string;
  email: string;
  secondarySchool: string;
  secondaryGpa: string;
  capacitacionChoice: string;
  parentName: string;
  parentPhone: string;
}
