import React, { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('es');
  const currentContent = CONTENT[lang];

  return (
    <div className="min-h-screen text-white selection:bg-pink-500/30 selection:text-pink-200">
      <Navbar lang={lang} setLang={setLang} content={currentContent.nav} />
      
      <main>
        <Hero content={currentContent.hero} />
        <About content={currentContent.about} />
        <Skills content={currentContent.skills} />
        <Experience contentExp={currentContent.experience} contentEdu={currentContent.education} />
        <Contact content={currentContent.contact} />
      </main>
    </div>
  );
};

export default App;