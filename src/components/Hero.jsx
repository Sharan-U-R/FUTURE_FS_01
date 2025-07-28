import React from 'react';

function Hero() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    try {
      // Open the CV in a new tab for download
      const link = document.createElement('a');
      link.href = '/Resume_2025.pdf';
      link.download = 'Resume_2025.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: open in new tab
      window.open('/Resume_2025.pdf', '_blank');
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-main-title">
            Hi, I'm <span className="hero-name">Sharan U R</span>
          </h1>
          <h2 className="hero-role">Web Developer</h2>
          <p className="hero-description">
            Building digital products with a focus on clean code, accessibility,
            and outstanding user experiences.
          </p>
          <div className="hero-buttons">
            <button className="btn-get-in-touch" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
            <button className="btn-download-cv" onClick={downloadCV}>
              <i className="fas fa-download"></i>
              Download CV
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-container">
            <div className="avatar-container">
              <img 
                src="/profile.jpg" 
                alt="Sharan U R - Profile Picture" 
                className="profile-img"
              />
            </div>
            <div className="profile-bg-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;