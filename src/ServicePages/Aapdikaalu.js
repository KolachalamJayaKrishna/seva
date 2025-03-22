import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page" style={{ position: "relative", padding: "20px" }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        style={{
          position: "static", 
          marginBottom: "3%",
          top: "0px", 
          left: "10px", 
          fontSize: "16px", 
          backgroundColor: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      {/* Page Content */}
      <section className="our-growth">
        <h2 style={{ textAlign: "center" }}>Aapdikaalu (Aapatkaalika Vidhaanalu)</h2>
        <div className="growth-content">
          <div className="growth-text">
            <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
            Aapdikaalu (Aapatkaalika Vidhaanalu)** refers to the special rituals, customs, and guidelines followed during times of crisis, emergencies, or unexpected situations in Hindu tradition. These practices are designed to ensure that religious and spiritual duties are upheld even in difficult circumstances, such as natural disasters, pandemics, wars, or personal hardships. The scriptures emphasize that while the ideal way of performing rituals should be followed in normal conditions, during **Aapatkaalam (emergency periods), certain relaxations and modifications** are permitted to maintain the essence of Dharma. This principle ensures that individuals remain spiritually connected and continue their religious observances despite external challenges.  
            <br/><br/>
            One key aspect of Aapdikaalu is the **simplification of daily rituals** when traditional methods are not feasible. For instance, if a person cannot perform elaborate **Sandhya Vandanam (daily prayers)** due to illness or travel, they can recite essential mantras mentally or offer a simple **pranam (salutation)** to the divine. Similarly, if a proper **Agnihotra (fire ritual)** or puja cannot be conducted, symbolic offerings such as lighting a lamp or chanting holy names are considered acceptable. The scriptures, including the **Dharma Shastras and Smritis**, provide specific guidelines on how to modify rituals while ensuring their spiritual integrity. These adaptations help individuals maintain devotion and righteousness without feeling burdened by rigid procedures.  
            <br/><br/>
            Apart from individual practices, Aapatkaalika Vidhaanalu also includes **community-based responses** to crises. During large-scale calamities, temples and religious institutions often organize collective **prayers, homams (fire sacrifices), and charity (daanam)** to invoke divine blessings and provide relief to affected individuals. It is also considered meritorious to help those in distress by offering food, shelter, and support. The concept of **Dharma Sookshma (subtle righteousness)** plays a crucial role, reminding individuals to balance traditional customs with practical wisdom in difficult times. By adhering to Aapdikaalu, one can uphold spiritual discipline while adapting to life's unpredictable circumstances with faith, resilience, and devotion.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
