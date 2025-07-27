import React from 'react';

function Achievements() {
  // Achievements data array - Add new achievements here easily!
  const achievementsData = [
    {
      id: 1,
      icon: "📜",
      title: "Responsive Web Design",
      description: "Certified by freeCodeCamp for successfully completing the Responsive Web Design course in 2024.",
      organization: "freeCodeCamp",
      year: "2024",
      type: "Certification"
    },
    {
      id: 2,
      icon: "💻",
      title: "JavaScript Course",
      description: "Completed Unlocking the Power of JavaScript from Scaler Academy in 2024, strengthening frontend development skills.",
      organization: "Scaler Academy",
      year: "2024",
      type: "Course"
    },
    {
      id: 3,
      icon: "🎮",
      title: "Prompt Wars Participation",
      description: "Actively participated in Prompt Wars organized by C.O.R.E, CSI & Crypton Club at MITE on 10th May 2025, showcasing prompt engineering creativity.",
      organization: "MITE",
      year: "2025",
      type: "Competition"
    },
    // Add more achievements:
    // {
    //   id: 4,
    //   icon: "🏆",
    //   title: "Hackathon Winner",
    //   description: "First place in college hackathon for developing innovative web application...",
    //   organization: "MITE",
    //   year: "2025",
    //   type: "Award"
    // },
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="section-divider"></div>
        </div>
        <div className="achievements-grid">
          {achievementsData.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <p className="achievement-desc">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;