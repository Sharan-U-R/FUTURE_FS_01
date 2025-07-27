import React from 'react';

function Projects() {
  // Projects data array - Add new projects here easily!
  const projectsData = [
    {
      id: 1,
      icon: "🍽️",
      title: "Restaurant Website",
      description: "A static restaurant website with a clean UI, multiple pages (menu, gallery, contact), built using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "#", // Replace with actual GitHub URL
      liveUrl: "#", // Replace with actual live demo URL
    },
    {
      id: 2,
      icon: "🌿",
      title: "Medicinal Plant Identification",
      description: "Web-based application using CNN and Flask to identify medicinal plants from leaf images. Built with HTML, CSS, JavaScript, and Python.",
      technologies: ["Python", "Flask", "CNN", "HTML", "CSS"],
      githubUrl: "#", // Replace with actual GitHub URL
      liveUrl: "#", // Replace with actual live demo URL
    },
    {
      id: 3,
      icon: "💼",
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects, skills, and contact information. Designed with a clean, responsive layout and subtle animations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Sharan-U-R",
      liveUrl: "#", // Replace with actual live demo URL
    },
    // Add more projects here easily:
    // {
    //   id: 4,
    //   icon: "🚀",
    //   title: "Your New Project",
    //   description: "Description of your new project...",
    //   technologies: ["React", "Node.js", "MongoDB"],
    //   githubUrl: "https://github.com/your-username/project",
    //   liveUrl: "https://your-project-demo.com",
    // },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card glassy">
              <div className="project-icon-top">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech-row">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="project-tag">{tech}</span>
                ))}
              </div>
              <div className="project-btn-row">
                <a
                  href={project.githubUrl}
                  className="project-btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-icon" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                  </span>
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="project-btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="btn-icon" aria-label="Live Demo">
                    <i className="fas fa-external-link-alt"></i>
                  </span>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;