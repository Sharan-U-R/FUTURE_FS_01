import React from 'react';

function Experience() {
  // Experience data array - Add new experiences here easily!
  const experienceData = [
    {
      id: 1,
      icon: "💼",
      title: "Web Development Internship",
      role: "Intern – InnoByte Services",
      period: "March 2025 – April 2025",
      description: "Redesigned an existing guest house website using HTML, CSS, and JavaScript. Improved frontend design, UI responsiveness, and gained valuable experience in real-world web development.",
      type: "Internship"
    },
    {
      id: 2,
      icon: "🎓",
      title: "Learning & Development",
      role: "Self-Directed Learning",
      period: "2022 – Present",
      description: "Continuously expanding my knowledge in web development, Java programming, and emerging technologies through online courses, coding challenges, and personal projects.",
      type: "Education"
    },
    {
      id: 3,
      icon: "💻",
      title: "Project Development",
      role: "Frontend Projects",
      period: "2023 – Present",
      description: "Built and deployed several frontend-focused applications like a Restaurant Website and AI-powered Medicinal Plant Identifier using HTML, CSS, JavaScript, and Flask.",
      type: "Projects"
    },
    // Add more experiences here easily:
    // {
    //   id: 4,
    //   icon: "🚀",
    //   title: "Full Stack Developer",
    //   role: "Software Engineer – Tech Company",
    //   period: "June 2025 – Present",
    //   description: "Developing scalable web applications using React, Node.js, and MongoDB...",
    //   type: "Full-time"
    // },
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience & Involvement</h2>
          <div className="section-divider"></div>
        </div>
        <div className="experience-grid">
          {experienceData.map((experience) => (
            <div key={experience.id} className="experience-card">
              <div className="experience-icon">{experience.icon}</div>
              <h3>{experience.title}</h3>
              <p className="experience-role">{experience.role}</p>
              <p className="experience-period">{experience.period}</p>
              <p className="experience-desc">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;