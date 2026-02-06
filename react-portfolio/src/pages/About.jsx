import React from 'react';
import "./About.css";

const About = () => {
  const skills = [
    { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "Flask", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Oracle", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" },
    { name: "Postman", img: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  ];

  return (
    <main className="about-container">
      {/* 1. Name Section */}
      <header className="hero-header">
        <h1 className="hero-name">PRATIBHA SINGH</h1>
        <p className="subtitle">Full Stack Developer</p>
      </header>

      {/* 2. Intro Section */}
      <section className="intro-section">
        <div className="intro-content">
          <p>
            Hi! I am a <strong>Python Full Stack Developer</strong> based in
            Singrauli (M.P.). Specialized in building scalable web applications
            with a focus on clean code and interactive UI/UX. I turn complex
            problems into beautiful digital experiences.
          </p>

          <div className="projects-preview">
            <p className="projects-label">Recently Completed Projects:</p>
            <ul className="project-pills">
              <li>Weather App</li>
              <li>Doctor Appointment</li>
              <li>Re-Direct Link </li>
              <li>E-commerce</li>
              <li>To- Do App</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Technologies Section */}
      <section className="skills-section">
        <h2 className="skills-title">Technologies & Tools</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon-box">
                <img src={skill.img} alt={`${skill.name} icon`} loading="lazy" />
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;