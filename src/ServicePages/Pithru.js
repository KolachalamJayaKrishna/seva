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
        <h2 style={{ textAlign: "center" }}>Samvatsarikaadhi Pithru kaaryaala Seva</h2>
        <div className="growth-content">
          <div className="growth-text">
          <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
          Samvatsarikaadhi Pithru Kaaryaalu refers to the rituals and services performed for ancestors (Pithrus) to express gratitude, seek their blessings, and ensure their peaceful transition in the afterlife. These ceremonies are a vital part of Hindu Dharma, emphasizing the eternal bond between the living and the departed. The Samvatsarika Shraddha (annual death anniversary ritual) is the most significant among them, performed every year on the Tithi (lunar date) of the ancestor’s passing. Through these rituals, the Pind Daan (offering of rice balls), Tarpanam (water oblations), and Homa (sacred fire rituals) are conducted to provide spiritual nourishment and liberation (Moksha) to the departed souls.
          <br/><br/>
          Apart from the Samvatsarika Shraddha, other important ancestral rites include Mahalaya Amavasya (Pitru Paksha offerings), Masika Shraddha (monthly remembrance), and Apara Kriyas (immediate post-death rituals). These practices are performed by the Karta (son or close male descendant) under the guidance of Vedic scholars. Performing these rituals with devotion is believed to remove ancestral curses (Pitru Dosha) and bring prosperity, longevity, and peace to the family. The sacred texts like Garuda Purana and Manusmriti emphasize the importance of these offerings, stating that an individual’s well-being is directly connected to the satisfaction of their forefathers.
          <br/><br/>
          These ceremonies often take place at holy rivers, temples, or pilgrimage sites like Gaya, Varanasi, Rameswaram, and Prayagraj, where divine energies are believed to elevate the departed souls. Even those unable to perform elaborate rituals can offer Tarpanam and donate food (Annadaanam) to Brahmins, cows, and the needy, as an act of virtue. In modern times, many people arrange online Pithru Seva services to fulfill these obligations remotely. By sincerely following Samvatsarikaadhi Pithru Kaaryaalu, one upholds family traditions, ensures harmony within generations, and strengthens their spiritual path toward ancestral blessings and divine grace. 
          </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
