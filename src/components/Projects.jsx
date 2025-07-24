import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          {/* TODO: Replace # with actual URLs */}
          <div className="project-card glassy">
            <div className="project-icon-top">🍽️</div>
            <h3 className="project-title">Restaurant Website</h3>
            <p className="project-desc">A static restaurant website with a clean UI, multiple pages (menu, gallery, contact), built using HTML, CSS, and JavaScript.</p>
            <div className="project-tech-row">
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">JavaScript</span>
            </div>
            <div className="project-btn-row">
              <a href="#" className="project-btn-outline" target="_blank" rel="noopener noreferrer">
                <span className="btn-icon" aria-label="GitHub"><i className="fab fa-github"></i></span>GitHub
              </a>
              <a href="#" className="project-btn-outline" target="_blank" rel="noopener noreferrer">
                <span className="btn-icon" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></span>Live Demo
              </a>
            </div>
          </div>

          <div className="project-card glassy">
            <div className="project-icon-top">🌿</div>
            <h3 className="project-title">Medicinal Plant Identification</h3>
            <p className="project-desc">Web-based application using CNN and Flask to identify medicinal plants from leaf images. Built with HTML, CSS, JavaScript, and Python.</p>
            <div className="project-tech-row">
              <span className="project-tag">Python</span>
              <span className="project-tag">Flask</span>
              <span className="project-tag">CNN</span>
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
            </div>
            <div className="project-btn-row">
              <a href="#" className="project-btn-outline" target="_blank" rel="noopener noreferrer">
                <span className="btn-icon" aria-label="GitHub"><i className="fab fa-github"></i></span>GitHub
              </a>
              <a href="#" className="project-btn-outline" target="_blank" rel="noopener noreferrer">
                <span className="btn-icon" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></span>Live Demo
              </a>
            </div>
          </div>

          <div className="project-card glassy">
            <div className="project-icon-top">💼</div>
            <h3 className="project-title">Portfolio Website</h3>
            <p className="project-desc">A personal portfolio website to showcase my projects, skills, and contact information. Designed with a clean, responsive layout and subtle animations.</p>
            <div className="project-tech-row">
              <span className="project-tag">HTML</span>
              <span className="project-tag">CSS</span>
              <span className="project-tag">JavaScript</span>
            </div>
            <div className="project-btn-row">
              <a href="https://github.com/Sharan-U-R" className="project-btn-outline" target="_blank" rel="noopener noreferrer">
                <span className="btn-icon" aria-label="GitHub"><i className="fab fa-github"></i></span>GitHub
              </a>
              <a href="#" className="project-btn-outline" target="_blank" rel="noopener noreferrer">
                <span className="btn-icon" aria-label="Live Demo"><i className="fas fa-external-link-alt"></i></span>Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;