import React from 'react';
import './About.css';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <h2>{t.about.title}</h2>
      <div className="about-content">
        <div className="about-text">
          <p>{t.about.text1}</p>
          <p>{t.about.text2}</p>
          <p>{t.about.text3}</p>
        </div>
        <div className="about-stats">
          <div className="stat-item">
            <h3>4</h3>
            <p>{t.about.experience}</p>
          </div>
          <div className="stat-item">
            <h3>16</h3>
            <p>{t.about.projects}</p>
          </div>
          <div className="stat-item">
            <h3>5</h3>
            <p>{t.about.clients}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
