import React from 'react';

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="section-divider"></div>
        </div>
        <div className="achievements-grid">
          <div className="achievement-card">
            <div className="achievement-icon">📜</div>
            <h3>Responsive Web Design</h3>
            <p className="achievement-desc">
              Certified by <strong>freeCodeCamp</strong> for successfully completing the Responsive Web Design course in 2024.
            </p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">💻</div>
            <h3>JavaScript Course</h3>
            <p className="achievement-desc">
              Completed <strong>Unlocking the Power of JavaScript</strong> from Scaler Academy in 2024, strengthening frontend development skills.
            </p>
          </div>
          <div className="achievement-card">
            <div className="achievement-icon">🎮</div>
            <h3>Prompt Wars Participation</h3>
            <p className="achievement-desc">
              Actively participated in <strong>Prompt Wars</strong> organized by C.O.R.E, CSI & Crypton Club at MITE on 10th May 2025, showcasing prompt engineering creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;