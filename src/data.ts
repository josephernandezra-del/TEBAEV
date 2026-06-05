import { Offering, Testimonial, Facility, FAQItem } from './types';

export const SCHOOL_INFO = {
  name: "Telebachillerato de Mahuixtlan",
  shortName: "TEBAEV Mahuixtlan",
  clave: "30ETH0627X", // Clave de centro de trabajo típica de Veracruz
  location: "Mahuxtlán, Coatepec, Veracruz, México",
  address: "Calle Cristóbal Colón S/N, Col. Centro, CP 91615, Mahuixtlán, Coatepec, Ver.",
  phone: "228-123-4567",
  email: "contacto@tebaevmahuixtlan.edu.mx",
  schedule: "Lunes a Viernes de 8:00 am a 1:00 pm (Turno Matutino)",
  foundedYear: "1994",
  stats: [
    { value: "25", label: "Años de Tradición Educativa" },
    { value: "80+", label: "Estudiantes Activos" },
    { value: "80%", label: "Tasa de Certificación" },
    { value: "8", label: "Docentes Especializados" }
  ]
};

export const OFFERINGS: Offering[] = [
  {
    id: "bachillerato-general",
    title: "Bachillerato General",
    description: "Plan de estudios nacional de 3 años estructurado por semestres, diseñado para proporcionar una sólida preparación en todas las áreas del conocimiento, permitiendo el ingreso directo a cualquier universidad del país.",
    category: "general",
    icon: "GraduationCap",
    details: [
      "Químico-Biológicas (Salud, Agronomía, Química)",
      "Físico-Matemáticas (Ingenierías, Arquitectura, Tecnología)",
      "Ciencias Sociales (Derecho, Psicología, Comunicación)",
      "Humanidades (Literatura, Filosofía, Pedagogía)",
      "Fomento a la lectura de comprensión y pensamiento analítico",
      "Talleres experimentales de Física, Química y Biologogía"
    ]
  },
  {
    id: "capacitacion-informatica",
    title: "Capacitación en Informática",
    description: "Especialidad técnica orientada al desarrollo de habilidades digitales aplicadas. Los estudiantes aprenden soporte técnico, bases de datos, diseño web, desarrollo de software básico y diseño digital.",
    category: "capacitacion",
    icon: "Laptop",
    details: [
      "Mantenimiento correctivo y preventivo de computadoras",
      "Programación básica y desarrollo web (HTML, CSS)",
      "Sistemas de bases de datos y hojas de cálculo avanzadas",
      "Diseño digital y herramientas de ofimática profesional",
      "Prácticas y proyectos reales orientados al emprendimiento"
    ]
  },
  {
    id: "capacitacion-contaduria",
    title: "Administración de Empresas y Contaduría",
    description: "Preparación especializada orientada al control, organización y gestión de micro, pequeñas y medianas empresas. Aprende principios contables, administración estratégica, finanzas y desarrollo de planes de negocio.",
    category: "capacitacion",
    icon: "Briefcase",
    details: [
      "Fundamentos de contabilidad, costos e impuestos",
      "Administración y organización de microempresas regionales",
      "Control y auditoría interna de presupuestos e inventarios",
      "Estrategias básicas de mercadotecnia y ventas locales",
      "Desarrollo de proyectos y planes de negocio prácticos"
    ]
  },
  {
    id: "taller-soldadura",
    title: "Taller de Soldadura",
    description: "Taller práctico orientado al aprendizaje de técnicas de unión de metales, diseño de estructuras metálicas y mantenimiento. Los alumnos desarrollan habilidades técnicas para la fabricación y reparación con enfoque en la seguridad.",
    category: "extracurricular",
    icon: "Wrench",
    details: [
      "Técnicas de soldadura por arco eléctrico (SMAW) y microalambre",
      "Uso seguro de herramientas de corte, desbaste y perforación de metales",
      "Aplicación rigurosa de normas de seguridad industrial y equipo de protección",
      "Diseño y fabricación de estructuras metálicas, puertas, ventanas y mobiliario",
      "Desarrollo de proyectos de herrería básica y mantenimiento del plantel escolar"
    ]
  },
  {
    id: "actividades-deportivas",
    title: "Deportes y Recreación",
    description: "Impulsamos la salud física, el juego limpio, la disciplina y el trabajo en equipo mediante competencias deportivas internas y regionales.",
    category: "extracurricular",
    icon: "Trophy",
    details: [
      "Selección escolar de Fútbol (Femenil y Varonil)",
      "Torneos semestrales de Voleibol en multicancha",
      "Basquetbol y atletismo",
      "Encuentros deportivos inter-Telebachilleratos estatales",
      "Programas comunitarios de activación física vespertina"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Gabriela Mendoza Morales",
    role: "Egresada - Generación 2022",
    achievement: "Estudiante de Ingeniería en Cómputo (Universidad Veracruzana)",
    text: "El Telebachillerato en Mahuixtlán me abrió los ojos a la tecnología. Gracias al taller de informática y el apoyo constante de los docentes, aprobé el examen de ingreso de la Universidad Veracruzana en mi primer intento escolar.",
    image: "/src/assets/images/regenerated_image_1780643920700.png"
  },
  {
    id: "t2",
    name: "Dr. Roberto Casas Domínguez",
    role: "Egresado - Generación 2017",
    achievement: "Médico de Salud Familiar",
    text: "Mahuxtlán tiene un nivel escolar excelente. Con frecuencia se piensa que una escuela en un pueblo no tiene el nivel para competir, pero los profesores del TEBAEV Mahuixtlán dedican su vida a que destaquemos. Hoy soy médico y les estaré eternamente agradecido.",
    image: "/src/assets/images/regenerated_image_1780643921729.png"
  },
  {
    id: "t3",
    name: "Profra. Alicia Soler Velázquez",
    role: "Docente de Matemáticas y Física",
    text: "En el Telebachillerato no solo enseñamos contenidos de los libros; formamos seres humanos con valores sólidos. Ver crecer a los chicos de Mahuixtlán y verlos graduarse como ciudadanos de bien es la mayor recompensa de mis 12 años de docencia.",
    image: "/src/assets/images/regenerated_image_1780620650093.jpg"
  },
  {
    id: "t4",
    name: "Don Fernando Ruiz García",
    role: "Padre de Familia",
    text: "Tengo dos hijos, uno graduado y otra cursando el 4to semestre. Como padres, apreciamos mucho la cercanía del plantel, la seguridad que se siente y lo accesible de las cuotas. Se siente como una familia muy unida.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "f1",
    title: "Aulas Amplias y Climatizadas",
    description: "Contamos con salones de clases amplios, completamente climatizados y sumamente limpios, diseñados para garantizar la mayor comodidad y frescura en el aprendizaje diario.",
    image: "/src/assets/images/regenerated_image_1780643778835.png"
  },
  {
    id: "f2",
    title: "Taller de Soldadura Práctico",
    description: "Espacio totalmente equipado con máquinas soldadoras, equipo de protección integral y herramientas de corte y unión para la práctica directa y segura de herrería y mantenimiento.",
    image: "/src/assets/images/regenerated_image_1780616977600.jpg"
  },
  {
    id: "f3",
    title: "Cancha Deportiva Techada",
    description: "Un gran domo y arco techado que protege a nuestros alumnos de las inclemencias del clima mientras practican básquetbol, voleibol, fútbol de salón y ensayan danzas folklóricas.",
    image: "/src/assets/images/regenerated_image_1780617688323.jpg"
  },
  {
    id: "f4",
    title: "Amplio Plantel y Áreas Verdes",
    description: "Contamos con un terreno amplio y arbolado que ofrece un entorno natural ideal para el esparcimiento, la recreación y el desarrollo de actividades cívicas al aire libre.",
    image: "/src/assets/images/regenerated_image_1780617690705.jpg"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq1",
    question: "¿Cuáles son las cuotas o costos de inscripción?",
    answer: "Al ser una preparatoria pública de la Secretaría de Educación de Veracruz (SEV), no cobramos colegiaturas mensuales. Se aporta una cuota voluntaria semestral coordinada por el Patronato de Padres de Familia, destinada enteramente al mantenimiento de la infraestructura física, electricidad y material didáctico.",
    category: "admision"
  },
  {
    id: "faq2",
    question: "¿Qué documentos oficiales necesito para realizar mi preinscripción?",
    answer: "Los requisitos indispensables son: 1) CURP actualizada en formato digital, 2) Acta de Nacimiento (copia legible), 3) Certificado de Secundaria de egreso, 4) Comprobante de domicilio reciente en Mahuixtlán o zonas aledañas de Coatepec, 5) Identificación oficial del tutor (copia INE), 6) Constancia escolar de tipo de sangre o ficha de salud oficial, y 7) 4 fotografías tamaño infantil (blanco y negro, papel mate).",
    category: "admision"
  },
  {
    id: "faq3",
    question: "¿Cómo funciona el programa de Becas Bienestar Benito Juárez?",
    answer: "Todos los estudiantes con inscripción activa tienen derecho a la Beca Universal para el Bienestar Benito Juárez de Educación Media Superior. Nuestra administración asiste y da de alta a los nuevos estudiantes en la plataforma nacional del gobierno de México durante el primer mes de ingreso escolar.",
    category: "servicios"
  },
  {
    id: "faq4",
    question: "¿Qué turnos y horarios tienen las clases?",
    answer: "Operamos únicamente en el turno matutino, de Lunes a Viernes de 8:00 am a 1:00 pm, ideal para las necesidades académicas y formativas de nuestros estudiantes.",
    category: "academico"
  },
  {
    id: "faq5",
    question: "¿El certificado escolar de Telebachillerato es válido para postularse a la Universidad Veracruzana?",
    answer: "Absolutamente. El certificado que se otorga es de Bachillerato General con validez oficial plena otorgada por la SEV y reconocido por la SEP. Nuestros estudiantes ingresan rutinariamente a la Universidad Veracruzana (UV), el Instituto Tecnológico de Xalapa (ITSX), y universidades privadas prestigiosas.",
    category: "academico"
  }
];
