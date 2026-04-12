import React from 'react';
import './Contact.css';
import { useLanguage } from '../LanguageContext';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="contact">
      <h2>{t.contact.title}</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-item-icon">{FaEnvelope({})}</div>
            <h3>{t.contact.email}</h3>
            <p>zoir3201@gmail.com</p>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">{FaPhone({})}</div>
            <h3>{t.contact.phone}</h3>
            <p>+7 775 627 0762</p>
          </div>
          <div className="contact-item">
            <div className="contact-item-icon">{FaWhatsapp({})}</div>
            <h3>WhatsApp</h3>
            <a href="https://wa.me/77756270762" target="_blank" rel="noopener noreferrer">+7 775 627 0762</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
