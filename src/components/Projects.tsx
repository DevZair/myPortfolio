import React, { useRef, useEffect } from 'react';
import './Projects.css';
import { useLanguage } from '../LanguageContext';
import { FaMobileAlt, FaServer, FaComments, FaTasks, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;

      if (direction === 'right') {
        const newPosition = container.scrollLeft + scrollAmount;
        container.scrollTo({
          left: Math.min(newPosition, maxScroll),
          behavior: 'smooth'
        });
      } else {
        const newPosition = container.scrollLeft - scrollAmount;
        container.scrollTo({
          left: Math.max(newPosition, 0),
          behavior: 'smooth'
        });
      }
    }
  };

  const projectData = [
    {
      tags: ['Flutter', 'Clean Architecture', 'Pomodoro'],
      icon: FaMobileAlt({}),
      image: '/safa.png'
    },
    {
      tags: ['Full Stack', 'API', 'Flutter', 'Web'],
      icon: FaServer({}),
      image: '/ssstream.png'
    },
    {
      tags: ['Flutter', 'WebSocket', 'Real-time'],
      icon: FaComments({}),
      image: '/ssschat.png'
    },
    {
      tags: ['Flutter', 'Teams', 'Task Management'],
      icon: FaTasks({}),
      image: '/doitly.png'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>{t.projects.title}</h2>
      <div className="projects-container">
        <button className="scroll-btn scroll-left" onClick={() => scroll('left')}>
          {FaChevronLeft({})}
        </button>
        <div className="projects-grid" ref={scrollRef}>
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="iphone-frame">
                  <div className="iphone-screen">
                    {project.image ? (
                      <img src={project.image} alt={t.projects.list[index].title} className="iphone-screen-image" />
                    ) : (
                      <div className="iphone-screen-icon">{project.icon}</div>
                    )}
                    <div className="iphone-home-indicator"></div>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{t.projects.list[index].title}</h3>
                <p>{t.projects.list[index].description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-btn scroll-right" onClick={() => scroll('right')}>
          {FaChevronRight({})}
        </button>
      </div>
    </section>
  );
};

export default Projects;
