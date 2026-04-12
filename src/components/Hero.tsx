import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { useLanguage } from '../LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const codes = document.querySelectorAll('.floating-code');
      codes.forEach((code) => {
        const rect = code.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance < 150) {
          const angle = Math.atan2(deltaY, deltaX);
          const force = (150 - distance) / 3;
          const moveX = -Math.cos(angle) * force;
          const moveY = -Math.sin(angle) * force;

          (code as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
          (code as HTMLElement).style.color = '#030bff';
        } else {
          (code as HTMLElement).style.transform = 'translate(0, 0)';
          (code as HTMLElement).style.color = 'rgba(243, 243, 236, 0.4)';
        }
      });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="floating-code">#Flutter</div>
      <div className="floating-code">const developer = 'Zair';</div>
      <div className="floating-code">{'<Mobile/>'}</div>
      <div className="floating-code">#ReactJS</div>
      <div className="floating-code">#Dart</div>
      <div className="floating-code">async function build()</div>
      <div className="floating-code">#NodeJS</div>
      <div className="floating-code">{'=> { code }'}</div>
      <div className="floating-code">#AI</div>
      <div className="floating-code">#GitHub</div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{t.hero.greeting} <span className="highlight">{t.hero.role}</span></h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => {
              const element = document.getElementById('projects');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t.hero.projectsBtn}
            </button>
            <button className="btn btn-secondary" onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}>
              {t.hero.contactBtn}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
