import React from 'react';

export type Language = 'en' | 'es';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level?: string;
  icon?: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  link?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  skills?: string[];
}

export interface Review {
  id: number;
  name: string;
  role: string;
  company?: string;
  image?: string;
  text: string;
  services: string[];
}

export interface ContentData {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    text: string;
  };
  skills: {
    title: string;
    categories: {
      technical: string;
      design: string;
      marketing: string;
      languages: string;
    };
  };
  projects: {
    title: string;
    items: Project[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  reviews: {
    title: string;
    items: Review[];
  };
  contact: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    success: string;
    errors: {
      nameRequired: string;
      nameShort: string;
      emailRequired: string;
      emailInvalid: string;
      messageRequired: string;
      messageShort: string;
    };
  };
}