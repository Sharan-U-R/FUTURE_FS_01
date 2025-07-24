import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>Sharan U R</h3>
          <p>Computer Science & Engineering Student | Web Development Enthusiast</p>
          <div className="footer-social">
            <a href="https://github.com/Sharan-U-R" target="_blank" rel="noopener noreferrer" className="footer-social-icon github-footer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/sharan-u-r-9b4924296" target="_blank" rel="noopener noreferrer" className="footer-social-icon linkedin-footer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:sharanur174@gmail.com" className="footer-social-icon email-footer" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
          <div className="footer-bottom">
            <p>&copy; {currentYear} Sharan U R. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;