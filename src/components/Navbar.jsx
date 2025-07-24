import React, { useState, useEffect } from 'react';

function Navbar() {
  // State to manage the theme. Default to 'dark-mode' or load from storage.
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark-mode'; // Default to dark-mode
  });

  // State to manage if the mobile menu is open or not
  const [isMenuOpen, setMenuOpen] = useState(false);

  // This effect runs whenever the `theme` state changes
  useEffect(() => {
    // Clear existing classes and apply the correct one
    document.body.className = '';
    document.body.classList.add(theme);
    // Save the new theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light-mode' ? 'dark-mode' : 'light-mode'));
  };

  // Flips the value of isMenuOpen for the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <div className="signature-text">
            <span className="signature-name">Sharan</span>
            <span className="signature-initials">U R</span>
          </div>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={toggleMenu}>Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={toggleMenu}>Skills</a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
          </li>
          <li className="nav-item">
            <a href="#experience" className="nav-link" onClick={toggleMenu}>Experience</a>
          </li>
          <li className="nav-item">
            <a href="#achievements" className="nav-link" onClick={toggleMenu}>Achievements</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>

        <div className="nav-right">
          {/* Theme Toggle Button */}
          <button id="theme-toggle" className="theme-toggle" aria-label="Toggle light/dark mode" onClick={toggleTheme}>
            <div className="toggle-track">
              <div className="toggle-thumb">
                <svg className="sun-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
                </svg>
                <svg className="moon-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49z" />
                </svg>
              </div>
            </div>
          </button>
          
          {/* Hamburger Menu Icon */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} id="hamburger" onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
