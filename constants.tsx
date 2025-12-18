import { ContentData, Language } from './types';

export const CONTENT: Record<Language, ContentData> = {
  es: {
    nav: {
      about: "Sobre Mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy Martín Matías",
      role: "Frontend Developer & SEO Specialist",
      description: "Fusiono el desarrollo técnico con estrategias de SEO y diseño UX para crear experiencias digitales de alto impacto. Especialista en React, optimización de motores de búsqueda y diseño centrado en el usuario.",
      ctaPrimary: "Contáctame",
      ctaSecondary: "Descargar CV",
    },
    about: {
      title: "Sobre Mí",
      text: "Apasionado por la tecnología y el marketing digital. Con experiencia diversa desde el desarrollo web, optimización de motores de búsqueda y diseño UX/UI, me enfoco en crear soluciones que no solo se vean bien, sino que funcionen y conviertan.",
    },
    skills: {
      title: "Arsenal Tecnológico",
      categories: {
        technical: "Desarrollo Web",
        design: "Diseño UX/UI",
        marketing: "Marketing & SEO",
        languages: "Idiomas",
      },
    },
    projects: {
      title: "Proyectos Freelance",
      items: [
        {
          title: "Plataforma de Alquileres Universitarios",
          role: "Full Stack Developer",
          description: "Desarrollo y adaptación de una plataforma web para conectar estudiantes con alojamientos. Implementación de autenticación segura y búsqueda geolocalizada.",
          tech: ["React", "Firebase", "Google Maps API", "CSS Modules"],
        },
        {
          title: "Estrategia SEO Sector Salud",
          role: "SEO Specialist",
          description: "Diseño e implementación de estrategias de posicionamiento orgánico y campañas SEM para clínicas y profesionales de la salud, logrando un aumento significativo en leads cualificados.",
          tech: ["SEO Técnico", "Google Ads", "Analytics", "Auditoría Web"],
        },
        {
          title: "Sistema de Gestión Documental",
          role: "Frontend Developer",
          description: "Desarrollo de interfaz para sistema de gestión de documentos estatales, integrando servicios de inteligencia artificial para clasificación automática.",
          tech: ["React", "Python", "AI Integration", "Agile"],
        },
        {
          title: "Dashboard de Análisis SEO",
          role: "Data Analyst",
          description: "Creación de herramientas internas para el análisis de tráfico orgánico y optimización de estructura web, mejorando la visibilidad de múltiples sitios clientes.",
          tech: ["Python", "Data Analysis", "SEO Tools", "Reporting"],
        }
      ]
    },
    education: {
      title: "Educación y Certificaciones",
      items: [
        {
          institution: "Google - Coursera",
          degree: "UX/UI & Product Design",
          period: "Certificación",
          location: "Online",
          skills: ["Wireframing", "Prototyping", "Figma", "User Research"]
        },
        {
          institution: "ONE Oracle Next Education",
          degree: "Desarrollo Web Frontend",
          period: "Certificación",
          location: "Online",
          skills: ["HTML5", "CSS3", "JavaScript", "React"]
        },
        {
          institution: "Google Learn",
          degree: "Fundamentos de Marketing Digital",
          period: "Certificación",
          location: "Online",
          skills: ["SEO", "SEM", "Analytics", "E-commerce"]
        },
        {
          institution: "DeepLearning.ai",
          degree: "Prompt Engineering for Developers",
          period: "Certificación",
          location: "Online"
        }
      ]
    },

    reviews: {
      title: "Lo que dicen mis clientes",
      items: [
        {
          id: 1,
          name: "Carlos Rodríguez",
          role: "CEO",
          company: "TechSolutions",
          text: "Martín transformó completamente nuestra presencia online. Su enfoque en SEO técnico y UX resultó en un aumento del 40% en nuestras conversiones.",
          services: ["SEO", "Desarrollo Web", "UX"]
        },
        {
          id: 2,
          name: "Ana García",
          role: "Marketing Manager",
          company: "EcoStore",
          text: "Excelente profesional. Entendió perfectamente nuestra visión y la potenció con una estrategia de marketing digital impecable.",
          services: ["Marketing", "SEM"]
        },
        {
          id: 3,
          name: "Javier López",
          role: "Fundador",
          company: "StartUp Lab",
          text: "La capacidad de Martín para fusionar diseño y código es impresionante. La nueva landing page es rápida, hermosa y eficiente.",
          services: ["Desarrollo Web", "Diseño UI"]
        },
        {
          id: 4,
          name: "Sofía Martínez",
          role: "Directora Operativa",
          company: "Global Services",
          text: "Un socio estratégico clave. Nos ayudó a optimizar nuestros procesos internos con un dashboard a medida.",
          services: ["Desarrollo Web", "Data Analysis"]
        }
      ]
    },
    contact: {
      title: "Hablemos",
      subtitle: "¿Tienes un proyecto en mente? Transformemos tus ideas en realidad digital.",
      namePlaceholder: "Tu Nombre",
      emailPlaceholder: "tu@email.com",
      messagePlaceholder: "Cuéntame sobre tu proyecto...",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado con éxito!",
      errors: {
        nameRequired: "El nombre es obligatorio",
        nameShort: "El nombre debe tener al menos 2 caracteres",
        emailRequired: "El correo es obligatorio",
        emailInvalid: "Ingresa una dirección de correo válida",
        messageRequired: "El mensaje es obligatorio",
        messageShort: "El mensaje debe tener al menos 10 caracteres",
      }
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Martín Matías",
      role: "Frontend Developer & SEO Specialist",
      description: "Merging technical development with SEO strategies and UX design to build high-impact digital experiences. Specialist in React, Search Engine Optimization, and user-centered design.",
      ctaPrimary: "Contact Me",
      ctaSecondary: "Download CV",
    },
    about: {
      title: "About Me",
      text: "Passionate about technology and digital marketing. With diverse experience ranging from web development to data analysis and SEO, I focus on creating solutions that not only look good but perform and convert.",
    },
    skills: {
      title: "Tech Arsenal",
      categories: {
        technical: "Web Development",
        design: "UX/UI Design",
        marketing: "Marketing & SEO",
        languages: "Languages",
      },
    },
    projects: {
      title: "Freelance Projects",
      items: [
        {
          title: "University Rental Platform",
          role: "Full Stack Developer",
          description: "Development and adaptation of a web platform connecting students with accommodation. Implemented secure authentication and geolocation search.",
          tech: ["React", "Firebase", "Google Maps API", "CSS Modules"],
        },
        {
          title: "Healthcare SEO Strategy",
          role: "SEO Specialist",
          description: "Design and implementation of organic positioning strategies and SEM campaigns for clinics and health professionals, achieving a significant increase in qualified leads.",
          tech: ["Technical SEO", "Google Ads", "Analytics", "Web Audit"],
        },
        {
          title: "Document Management System",
          role: "Frontend Developer",
          description: "Interface development for state document management system, integrating artificial intelligence services for automatic classification.",
          tech: ["React", "Python", "AI Integration", "Agile"],
        },
        {
          title: "SEO Analysis Dashboard",
          role: "Data Analyst",
          description: "Creation of internal tools for organic traffic analysis and web structure optimization, improving visibility for multiple client sites.",
          tech: ["Python", "Data Analysis", "SEO Tools", "Reporting"],
        }
      ]
    },
    education: {
      title: "Education & Certificaciones",
      items: [
        {
          institution: "Google - Coursera",
          degree: "UX/UI & Product Design",
          period: "Certification",
          location: "Online",
          skills: ["Wireframing", "Prototyping", "Figma", "User Research"]
        },
        {
          institution: "ONE Oracle Next Education",
          degree: "Frontend Web Development",
          period: "Certification",
          location: "Online",
          skills: ["HTML5", "CSS3", "JavaScript", "React"]
        },
        {
          institution: "Google Learn",
          degree: "Digital Marketing Fundamentals",
          period: "Certification",
          location: "Online",
          skills: ["SEO", "SEM", "Analytics", "E-commerce"]
        },
        {
          institution: "DeepLearning.ai",
          degree: "Prompt Engineering for Developers",
          period: "Certification",
          location: "Online"
        }
      ]
    },
    reviews: {
      title: "What my clients say",
      items: [
        {
          id: 1,
          name: "Carlos Rodríguez",
          role: "CEO",
          company: "TechSolutions",
          text: "Martín completely transformed our online presence. His focus on technical SEO and UX resulted in a 40% increase in conversions.",
          services: ["SEO", "Web Development", "UX"]
        },
        {
          id: 2,
          name: "Ana García",
          role: "Marketing Manager",
          company: "EcoStore",
          text: "Excellent professional. He perfectly understood our vision and enhanced it with a flawless digital marketing strategy.",
          services: ["Marketing", "SEM"]
        },
        {
          id: 3,
          name: "Javier López",
          role: "Founder",
          company: "StartUp Lab",
          text: "Martín's ability to merge design and code is impressive. The new landing page is fast, beautiful, and efficient.",
          services: ["Web Development", "UI Design"]
        },
        {
          id: 4,
          name: "Sofía Martínez",
          role: "COO",
          company: "Global Services",
          text: "A key strategic partner. He helped us optimize our internal processes with a custom dashboard.",
          services: ["Web Development", "Data Analysis"]
        }
      ]
    },
    contact: {
      title: "Let's Talk",
      subtitle: "Have a project in mind? Let's turn your ideas into digital reality.",
      namePlaceholder: "Your Name",
      emailPlaceholder: "you@email.com",
      messagePlaceholder: "Tell me about your project...",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      errors: {
        nameRequired: "Name is required",
        nameShort: "Name must be at least 2 characters",
        emailRequired: "Email is required",
        emailInvalid: "Please enter a valid email address",
        messageRequired: "Message is required",
        messageShort: "Message must be at least 10 characters",
      }
    },
  },
};

export const CONTACT_INFO = {
  email: "martin_matias@hotmail.com.ar",
  phone: "(+54) 11-2327-2884",
  location: "Tucumán, AR",
};