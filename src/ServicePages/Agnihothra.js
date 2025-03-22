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
        <h2 style={{ textAlign: "center" }}>Agnihothra Homam (Vaidika Agniyagnam)</h2>
        <div className="growth-content">
          <div className="growth-text">
            <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
            Agnihothra Homam, also known as **Vaidika Agniyagnam**, is an ancient Vedic fire ritual performed to invoke divine blessings and purify the environment. Rooted in the sacred traditions of Sanatana Dharma, this ritual involves offering oblations into a consecrated fire while chanting powerful Vedic mantras. It is believed that the sacred flames act as a medium between humans and deities, carrying prayers and offerings to celestial realms. Agnihothra is considered a key aspect of Yajna, emphasizing self-discipline, devotion, and harmony with nature. It is traditionally performed at sunrise and sunset, symbolizing the cycle of cosmic balance and spiritual awakening.  
            <br/><br/>
            The benefits of Agnihothra Homam extend beyond spiritual well-being, as it is also known to purify the air and create a positive atmosphere. The fire, fueled by specific herbs, ghee, and medicinal ingredients, releases beneficial energies that neutralize pollutants and cleanse the surroundings. Scientific studies suggest that the ritual's smoke has antibacterial properties, promoting health and well-being. Agnihothra is also performed to seek prosperity, remove negative influences, and bring peace to households. Many practitioners believe that regular performance of this homam enhances mental clarity, strengthens inner discipline, and aligns the individual's energy with universal consciousness.  
            <br/><br/>
            In Hindu tradition, Agnihothra is often conducted by householders and Vedic scholars as a sacred duty. It is an essential part of major ceremonies, including **Graha Pravesham (housewarming), marriages, and special religious occasions**. The ritual is meticulously performed following prescribed guidelines in the Vedas, ensuring its sanctity and effectiveness. The presence of a knowledgeable priest, proper recitation of mantras, and adherence to ritual purity are crucial for obtaining the full benefits of Agnihothra. By embracing this time-honored practice, individuals not only uphold ancient traditions but also contribute to environmental harmony and personal spiritual growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
