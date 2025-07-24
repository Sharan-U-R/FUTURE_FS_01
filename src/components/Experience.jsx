import React from 'react';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Involvement</h2>
          <div className="section-divider"></div>
        </div>
        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-icon">💼</div>
            <h3>Web Development Internship</h3>
            <p className="experience-role">Intern – InnoByte Services</p>
            <p className="experience-period">March 2025 – April 2025</p>
            <p className="experience-desc">Redesigned an existing guest house website using HTML, CSS, and JavaScript. Improved frontend design, UI responsiveness, and gained valuable experience in real-world web development.</p>
          </div>
          <div className="experience-card">
            <div className="experience-icon">🎓</div>
            <h3>Learning & Development</h3>
            <p className="experience-role">Self-Directed Learning</p>
            <p className="experience-period">2022 – Present</p>
            <p className="experience-desc">Continuously expanding my knowledge in web development, Java programming, and emerging technologies through online courses, coding challenges, and personal projects.</p>
          </div>
          <div className="experience-card">
            <div className="experience-icon">💻</div>
            <h3>Project Development</h3>
            <p className="experience-role">Frontend Projects</p>
            <p className="experience-period">2023 – Present</p>
            <p className="experience-desc">Built and deployed several frontend-focused applications like a Restaurant Website and AI-powered Medicinal Plant Identifier using HTML, CSS, JavaScript, and Flask.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;