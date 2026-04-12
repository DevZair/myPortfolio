import React from 'react';
import './Skills.css';
import { useLanguage } from '../LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { name: 'Dart', level: 80 },
    { name: 'React JS', level: 60 },
    { name: 'Node JS', level: 50 },
    { name: 'Python', level: 40 },
    { name: 'Java', level: 70 },
    { name: 'GitHub', level: 85 },
    { name: 'AI Engineer', level: 75 },
    { name: 'Flutter', level: 85 },
  ];

  return (
    <section id="skills" className="skills">
      <h2>{t.skills.title}</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
