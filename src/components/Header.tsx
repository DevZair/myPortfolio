import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLanguage } from '../LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">PORTFOLIO</div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a onClick={() => scrollToSection('hero')}>{t.nav.home}</a>
          <a onClick={() => scrollToSection('about')}>{t.nav.about}</a>
          <a onClick={() => scrollToSection('skills')}>{t.nav.skills}</a>
          <a onClick={() => scrollToSection('projects')}>{t.nav.projects}</a>
          <a onClick={() => scrollToSection('contact')}>{t.nav.contact}</a>
        </nav>
        <div className="language-switcher">
          <button
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            className={language === 'ru' ? 'active' : ''}
            onClick={() => setLanguage('ru')}
          >
            RU
          </button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
