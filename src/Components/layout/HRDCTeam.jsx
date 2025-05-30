import React from 'react';
import './HRDCTeam.css';

const HRDCTeam = () => {
  const teamMembers = [
    {
      "id": 1,
      "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Fcartoon-boy&psig=AOvVaw1jA1rLH2nl7iNn_FhifXPl&ust=1744115218852000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDPk9P1xYwDFQAAAAAdAAAAABAE",
      "name": "Homraj KC",
      "role": "Supervisor, HRDC Karnali Province",
      "message": "Dedicated to ensuring smooth operations and high-quality service at HRDC Karnali Province.",
      "title": "Message from Supervisor"
  },
  {
      "id": 2,
      "image": "https://th.bing.com/th/id/OIP.AoYHZqseObi6OsNzWKXEZAHaG1?w=1920&h=1773&rs=1&pid=ImgDetMain",
      "name": "Salina Basnet",
      "role": "Receptionist/Accountant, HRDC Karnali Province",
      "message": "Ensuring efficient communication and financial management at HRDC Karnali Province.",
      "title": "Message from Receptionist/Accountant"
  },
  {
      "id": 3,
      "image": "https://th.bing.com/th/id/OIP.AoYHZqseObi6OsNzWKXEZAHaG1?w=1920&h=1773&rs=1&pid=ImgDetMain",
      "name": "Durga Khadka",
      "role": "Physiotherapist, HRDC Karnali Province",
      "message": "Providing expert physiotherapy care to improve children's mobility and quality of life.",
      "title": "Message from Physiotherapist"
  }
  ];

  return (
    <section className="hrdc-team-section">
      <div className="section-header">
        <h2>The HRDC Team</h2>
        <p>About HRDC Karnali team</p>
      </div>
      
      <div className="team-container">
        {teamMembers.map(member => (
          <div key={member.id} className="team-card">
            <div className="team-image-container">
              <img 
                src={member.image} 
                alt={member.name} 
                className="team-image"
              />
            </div>
            <div className="team-content">
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <div className="team-message">
                <h4>{member.title}</h4>
                <p>{member.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HRDCTeam;