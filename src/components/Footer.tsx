import React from 'react';
import './Footer.css';
import { useLanguage } from '../LanguageContext';
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src="/coder-logo.png" alt="Coder Logo" className="footer-logo" />
          <p>
            {t.footer.description}
          </p>
          <div className="social-links">
            <a href="https://github.com/DevZair" target="_blank" rel="noopener noreferrer" className="social-link">{FaGithub({})}</a>
            <a href="https://www.linkedin.com/in/za1r-me/" target="_blank" rel="noopener noreferrer" className="social-link">{FaLinkedin({})}</a>
            <a href="https://t.me/za1r_me" target="_blank" rel="noopener noreferrer" className="social-link">{FaTelegram({})}</a>
            <a href="https://wa.me/77756270762" target="_blank" rel="noopener noreferrer" className="social-link">{FaWhatsapp({})}</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>{t.footer.quickLinks}</h3>
          <ul className="footer-links">
            <li><a href="#hero">{t.nav.home}</a></li>
            <li><a href="#about">{t.nav.about}</a></li>
            <li><a href="#skills">{t.nav.skills}</a></li>
            <li><a href="#projects">{t.nav.projects}</a></li>
            <li><a href="#contact">{t.nav.contact}</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.contactInfo}</h3>
          <ul className="footer-links">
            <li>{FaEnvelope({})} zoir3201@gmail.com</li>
            <li>{FaPhone({})} +7 775 627 0762</li>
            <li>{FaMapMarkerAlt({})} {t.footer.location}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
