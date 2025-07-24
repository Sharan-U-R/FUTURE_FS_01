import React from 'react';

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="skill-img" />
            </div>
            <h3>Java</h3>
            <p className="skill-description">Object-oriented programming language for building robust applications</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-img" />
            </div>
            <h3>JavaScript</h3>
            <p className="skill-description">Dynamic programming language for web development and interactive applications</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="skill-img" />
            </div>
            <h3>C</h3>
            <p className="skill-description">High-level programming language for system and application development</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="skill-img" />
            </div>
            <h3>HTML5</h3>
            <p className="skill-description">Markup language for structuring web content and applications</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="skill-img" />
            </div>
            <h3>CSS3</h3>
            <p className="skill-description">Styling language for designing beautiful and responsive web interfaces</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" className="skill-img" />
            </div>
            <h3>VS Code</h3>
            <p className="skill-description">Powerful code editor with extensive extensions and debugging capabilities</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="skill-img" />
            </div>
            <h3>GitHub</h3>
            <p className="skill-description">Version control platform for collaborative software development</p>
          </div>
          <div className="skill-card">
            <div className="skill-icon">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="skill-img" />
            </div>
            <h3>MySQL</h3>
            <p className="skill-description">Relational database management system for data storage and retrieval</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;