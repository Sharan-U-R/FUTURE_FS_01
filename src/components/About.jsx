import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a Computer Science & Engineering student at MITE, passionate about web development and Java. I'm always excited to take on challenges that expand my technical skill set. Outside of tech, I enjoy drawing and playing table tennis.
            </p>
            <div className="hobbies">
              <h3>Hobbies & Interests</h3>
              <div className="hobby-tags">
                <span className="tag">🎨 Drawing</span>
                <span className="tag">🏓 Table Tennis</span>
              </div>
            </div>
          </div>
          <div className="education-timeline">
            <h3>Education Timeline</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Bachelor of Engineering</h4>
                  <p className="institution">MITE • 2022–Present</p>
                  <p className="grade">CGPA: 8.5</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>12th Grade</h4>
                  <p className="institution">Vidyodaya PU College • 2020–2022</p>
                  <p className="grade">93%</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>SSLC</h4>
                  <p className="institution">Canara High School • 2018–2020</p>
                  <p className="grade">95.68%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;