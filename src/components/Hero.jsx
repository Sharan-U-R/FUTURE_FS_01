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
          <h2 className="hero-role">Full Stack Developer</h2>
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
              <svg className="profile-avatar" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle */}
                <circle cx="100" cy="100" r="100" fill="url(#avatarGradient)" />

                {/* Face */}
                <circle cx="100" cy="85" r="35" fill="#FDBCB4" />

                {/* Hair */}
                <path d="M65 70 Q100 45 135 70 Q130 55 100 50 Q70 55 65 70" fill="#2C1810" />

                {/* Eyes */}
                <circle cx="88" cy="80" r="3" fill="#2C1810" />
                <circle cx="112" cy="80" r="3" fill="#2C1810" />

                {/* Nose */}
                <ellipse cx="100" cy="88" rx="1.5" ry="2" fill="#E8A598" />

                {/* Mouth */}
                <path d="M95 95 Q100 100 105 95" stroke="#2C1810" strokeWidth="2" fill="none" strokeLinecap="round" />

                {/* Body/Shirt */}
                <ellipse cx="100" cy="160" rx="45" ry="40" fill="#ffa500" />

                {/* Collar */}
                <path d="M80 140 Q100 135 120 140 L115 150 Q100 145 85 150 Z" fill="#e6940a" />

                {/* Gradient Definition */}
                <defs>
                  <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="profile-bg-circle"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;