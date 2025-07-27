import React from 'react';

function Skills() {
  // Skills data array - Add new skills here easily!
  const skillsData = [
    {
      id: 1,
      name: "Java",
      description: "Object-oriented programming language for building robust applications",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      category: "Programming Languages"
    },
    {
      id: 2,
      name: "JavaScript",
      description: "Dynamic programming language for web development and interactive applications",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Programming Languages"
    },
    {
      id: 3,
      name: "C",
      description: "High-level programming language for system and application development",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      category: "Programming Languages"
    },
    {
      id: 4,
      name: "HTML5",
      description: "Markup language for structuring web content and applications",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Web Technologies"
    },
    {
      id: 5,
      name: "CSS3",
      description: "Styling language for designing beautiful and responsive web interfaces",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Web Technologies"
    },
    {
      id: 6,
      name: "VS Code",
      description: "Powerful code editor with extensive extensions and debugging capabilities",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      category: "Tools"
    },
    {
      id: 7,
      name: "GitHub",
      description: "Version control platform for collaborative software development",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      category: "Tools"
    },
    {
      id: 8,
      name: "MySQL",
      description: "Relational database management system for data storage and retrieval",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Databases"
    },
    // Add more skills here easily:
    // {
    //   id: 9,
    //   name: "React",
    //   description: "JavaScript library for building user interfaces",
    //   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    //   category: "Frameworks"
    // },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
        <div className="skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card">
              <div className="skill-icon">
                <img 
                  src={skill.iconUrl} 
                  alt={skill.name} 
                  className="skill-img" 
                />
              </div>
              <h3>{skill.name}</h3>
              <p className="skill-description">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;