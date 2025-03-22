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
        <h2 style={{ textAlign: "center" }}>Maasikalu (Dharma Mariyu Aacharanaalu)</h2>
        <div className="growth-content">
          <div className="growth-text">
          <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
          Maasikaalu refers to the monthly religious observances and rituals performed in accordance with Hindu traditions. These rituals are deeply rooted in Dharma (righteous conduct) and are practiced to maintain spiritual discipline, seek divine blessings, and ensure harmony with cosmic energies. In Hinduism, time is considered sacred, and different months (Maasalu) hold specific significance based on the lunar or solar calendar. Observing Vratas (fasts), Pujas (ritual worship), and Daanam (charity) during specific Maasika occasions enhances spiritual growth and brings prosperity. Important Maasika observances include Pournami (full moon rituals), Amavasya Tarpanam (ancestral offerings), Ekadashi fasting, and Sankranti Pujas.
          <br/><br/>
          Each month in the Hindu calendar has unique religious and astrological importance. For example, Karthika Masam is dedicated to Lord Shiva and Vishnu, during which devotees light lamps and perform deepa aradhana. Margashira Masam is considered auspicious for Sri Maha Lakshmi Puja, bringing prosperity and well-being. Similarly, Shravana Masam is devoted to Lord Venkateswara and Devi Lakshmi, with special prayers and fasting observed, particularly by women. Performing prescribed rituals and following sacred customs during these months is believed to remove past sins, bring good fortune, and enhance spiritual consciousness.
          <br/><br/>
          Apart from fasting and worship, Maasikaalu also include Pitru Tarpanam (ancestral offerings), where rituals are performed on Amavasya (new moon) to honor deceased family members and seek their blessings. Seasonal transitions, known as Ruthu Sandhi, also require special observances to maintain physical and spiritual well-being. Certain festivals like Maha Shivaratri, Guru Purnima, and Chaturmasya Vrata are connected to these cycles, reinforcing discipline and devotion. By following these sacred monthly practices with sincerity, one can achieve mental clarity, spiritual upliftment, and overall harmony in life.
          </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
