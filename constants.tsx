import { ContentData, Language } from './types';
import { Code, Layout, TrendingUp, Globe, Search, Database, Terminal, PenTool, BarChart } from 'lucide-react';

export const CONTENT: Record<Language, ContentData> = {
  es: {
    nav: {
      about: "Sobre Mí",
      experience: "Experiencia",
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
      text: "Apasionado por la tecnología y el marketing digital. Con experiencia diversa desde el desarrollo web hasta el análisis de datos y SEO, me enfoco en crear soluciones que no solo se vean bien, sino que funcionen y conviertan.",
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
    experience: {
      title: "Trayectoria Profesional",
      items: [
        {
          company: "Freelance / Proyectos Propios",
          role: "Modificación Web React & Especialista SEO/SEM",
          period: "Actualidad",
          location: "Remoto",
          description: [
            "Modificación y finalización de sitios web de alquileres universitarios usando React.",
            "Integración de Google Maps y Firebase para autenticación y geolocalización.",
            "Diseño e implementación de estrategias SEO/SEM para el sector salud.",
            "Desarrollo de funcionalidades con GraphQL y Hasura."
          ]
        },
        {
          company: "Metro Real State",
          role: "Developer",
          period: "Jun 2023 – Sep 2023",
          location: "Remoto",
          description: [
            "Lideré la creación de apps en Python y React integrando IA para documentos estatales.",
            "Dirigí el proceso de selección de talento IT y formé equipos eficientes.",
            "Implementé metodologías ágiles para mejorar tiempos de entrega."
          ]
        },
        {
          company: "Pervasive Mind",
          role: "Data Entry / Analista SEO",
          period: "Ago 2019 – Actualidad",
          location: "Remoto",
          description: [
            "Optimización de estructura y contenido web para visibilidad en buscadores.",
            "Homologación de datos para mejorar gestión de productos.",
            "Análisis SEO para aumentar tráfico orgánico."
          ]
        },
        {
          company: "Market One",
          role: "Auditor / Relevador",
          period: "Ago 2019 – Mar 2023",
          location: "Tucumán",
          description: [
            "Recolección de info mediante encuestas y auditorías.",
            "Mejora de exhibición de productos incrementando ventas."
          ]
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
          location: "Online"
        },
        {
          institution: "ONE Oracle Next Education",
          degree: "Desarrollo Web Frontend",
          period: "Certificación",
          location: "Online"
        },
        {
          institution: "Escuela Normal Superior J.B. Alberdi",
          degree: "Profesorado en Biología",
          period: "2011 - 2013",
          location: "Tucumán, AR"
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
    },
  },
  en: {
    nav: {
      about: "About",
      experience: "Experience",
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
    experience: {
      title: "Professional Path",
      items: [
        {
          company: "Freelance / Personal Projects",
          role: "React Web Dev & SEO/SEM Specialist",
          period: "Present",
          location: "Remote",
          description: [
            "Modification and completion of university rental websites using React.",
            "Integration of Google Maps and Firebase for auth and geolocation.",
            "Design and implementation of SEO/SEM strategies for the health sector.",
            "Feature development using GraphQL and Hasura."
          ]
        },
        {
          company: "Metro Real State",
          role: "Developer",
          period: "Jun 2023 – Sep 2023",
          location: "Remote",
          description: [
            "Led creation of Python and React apps integrating AI for state documents.",
            "Managed IT talent selection process and built efficient teams.",
            "Implemented agile methodologies to improve delivery times."
          ]
        },
        {
          company: "Pervasive Mind",
          role: "Data Entry / SEO Analyst",
          period: "Aug 2019 – Present",
          location: "Remote",
          description: [
            "Optimized web structure and content for search engine visibility.",
            "Data standardization to improve product management.",
            "SEO analysis to increase organic traffic."
          ]
        },
        {
          company: "Market One",
          role: "Auditor / Surveyor",
          period: "Aug 2019 – Mar 2023",
          location: "Tucumán",
          description: [
            "Information gathering via surveys and audits.",
            "Improved product display resulting in increased sales."
          ]
        }
      ]
    },
    education: {
      title: "Education & Certifications",
      items: [
        {
          institution: "Google - Coursera",
          degree: "UX/UI & Product Design",
          period: "Certification",
          location: "Online"
        },
        {
          institution: "ONE Oracle Next Education",
          degree: "Frontend Web Development",
          period: "Certification",
          location: "Online"
        },
        {
          institution: "Escuela Normal Superior J.B. Alberdi",
          degree: "Biology Teaching Degree",
          period: "2011 - 2013",
          location: "Tucumán, AR"
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
    },
  },
};

export const CONTACT_INFO = {
  email: "martin_matias@hotmail.com.ar",
  phone: "(+54) 11-2327-2884",
  location: "Tucumán, AR",
};
