import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-signature">
            <div className="signature-text">
              <span className="signature-name">Sharan</span>
              <span className="signature-initials">U R</span>
            </div>
          </div>
          <p>Computer Science & Engineering Student | Web Development Enthusiast</p>
          <div className="footer-bottom">
            <p>&copy; {currentYear} Sharan U R. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;