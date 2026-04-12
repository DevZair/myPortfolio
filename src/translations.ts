// Calculate age based on birthdate (December 25, 2008)
const calculateAge = () => {
  const birthDate = new Date(2008, 11, 25); // Month is 0-indexed (11 = December)
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hello, I am',
      role: 'Zair',
      subtitle: 'Junior Flutter Developer',
      description: `I am a beginner developer with two years of practical programming experience. I am ${calculateAge()} years old, from Shymkent, and currently actively developing in the IT field.`,
      projectsBtn: 'My Projects',
      contactBtn: 'Contact Me'
    },
    about: {
      title: 'About Me',
      text1: 'During my studies and practice, I have worked with various technologies, participated in project development, and constantly improve my skills in both backend and mobile development. I can quickly adapt to new tools and strive to write clean, understandable, and scalable code.',
      text2: 'My goal is to become a strong and in-demand programmer, work on real products, and solve complex problems. I am open to new opportunities, teamwork, and continuous learning.',
      text3: 'I specialize in Flutter development and have experience building mobile applications with clean architecture and modern development practices.',
      experience: 'Years in IT',
      projects: 'Completed Projects',
      clients: 'Happy Clients'
    },
    skills: {
      title: 'My Skills'
    },
    projects: {
      title: 'My Projects',
      demo: 'Demo',
      code: 'Code',
      list: [
        {
          title: 'Safa',
          description: 'A mobile app for personal productivity and daily task organization. Includes task management, Pomodoro timer, and habit-building tools. Built with Flutter using clean architecture.'
        },
        {
          title: 'SS Stream',
          description: 'A multifunctional platform combining various services into a unified ecosystem. Full-stack solution with mobile/web frontend and backend (API, authentication, data management).'
        },
        {
          title: 'SSS Chat App',
          description: 'A modern chat application with real-time messaging support. Features text messaging, WebSocket integration, user connection management, and online/offline status display.'
        },
        {
          title: 'DoItly',
          description: 'A collaborative task management application with team functionality. Organize tasks, create teams, assign responsibilities, and track progress together. Built with Flutter for seamless team collaboration.'
        }
      ]
    },
    contact: {
      title: 'Contact',
      email: 'Email',
      phone: 'Phone',
      nameLabel: 'Your Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitBtn: 'Send',
      successMsg: 'Message sent! I will contact you soon.'
    },
    footer: {
      description: 'Junior Flutter Developer. Building modern mobile applications with clean architecture and best practices.',
      quickLinks: 'Quick Links',
      contactInfo: 'Contact',
      location: 'Kazakhstan, Astana',
      copyright: '2026 Zair. All rights reserved.'
    }
  },
  ru: {
    nav: {
      home: 'Главная',
      about: 'Обо мне',
      skills: 'Навыки',
      projects: 'Проекты',
      contact: 'Контакты'
    },
    hero: {
      greeting: 'Привет, я',
      role: 'Заир',
      subtitle: 'Junior Flutter Developer',
      description: `Я начинающий разработчик с двухлетним практическим опытом в программировании. Мне ${calculateAge()} лет, я родом из Шымкента и в настоящее время активно развиваюсь в сфере IT.`,
      projectsBtn: 'Мои проекты',
      contactBtn: 'Связаться'
    },
    about: {
      title: 'Обо мне',
      text1: 'За время обучения и практики я работал с различными технологиями, участвовал в разработке проектов и постоянно совершенствую свои навыки как в backend, так и в мобильной разработке. Я умею быстро адаптироваться к новым инструментам и стремлюсь писать чистый, понятный и масштабируемый код.',
      text2: 'Моя цель — стать сильным и востребованным программистом, работать над реальными продуктами и решать сложные задачи. Я открыт к новым возможностям, командной работе и постоянному обучению.',
      text3: 'Я специализируюсь на Flutter разработке и имею опыт создания мобильных приложений с чистой архитектурой и современными практиками разработки.',
      experience: 'Лет в IT',
      projects: 'Завершенных проектов',
      clients: 'Довольных клиентов'
    },
    skills: {
      title: 'Мои навыки'
    },
    projects: {
      title: 'Мои проекты',
      demo: 'Демо',
      code: 'Код',
      list: [
        {
          title: 'Safa',
          description: 'Мобильное приложение для повышения личной продуктивности и организации повседневных задач. Включает управление задачами, Pomodoro-таймер и инструменты для формирования привычек. Разработано на Flutter с чистой архитектурой.'
        },
        {
          title: 'SS Stream',
          description: 'Многофункциональная платформа, объединяющая различные сервисы в единую экосистему. Full-stack решение: frontend (мобильное/веб-приложение) и backend (API, авторизация, управление данными).'
        },
        {
          title: 'SSS Chat App',
          description: 'Современное чат-приложение с поддержкой обмена сообщениями в реальном времени. Реализованы функции отправки текстовых сообщений, работа с WebSocket, управление соединениями и статусы онлайн/оффлайн.'
        },
        {
          title: 'DoItly',
          description: 'Приложение для совместного управления задачами с функцией команд. Организуйте задачи, создавайте команды, назначайте ответственных и отслеживайте прогресс вместе. Разработано на Flutter для бесшовной командной работы.'
        }
      ]
    },
    contact: {
      title: 'Контакты',
      email: 'Email',
      phone: 'Телефон',
      nameLabel: 'Ваше имя',
      emailLabel: 'Email',
      messageLabel: 'Сообщение',
      submitBtn: 'Отправить',
      successMsg: 'Сообщение отправлено! Я свяжусь с вами в ближайшее время.'
    },
    footer: {
      description: 'Junior Flutter Developer. Создаю современные мобильные приложения с чистой архитектурой и лучшими практиками.',
      quickLinks: 'Быстрые ссылки',
      contactInfo: 'Контакты',
      location: 'Казахстан, Астана',
      copyright: '2026 Заир. Все права защищены.'
    }
  }
};

export type Language = 'en' | 'ru';
