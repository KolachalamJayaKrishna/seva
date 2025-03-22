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
        <h2 style={{ textAlign: "center" }}>Vrathaalu (Dharma, Bhakti, Acharana)</h2>
        <div className="growth-content">
          <div className="growth-text">
          <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
          Vrathaalu (Vows and Observances) are an integral part of Hindu spiritual practice, deeply connected to Dharma (righteousness), Bhakti (devotion), and Acharana (discipline). These observances involve fasting, rituals, and prayers dedicated to different deities, aiming to purify the mind, body, and soul. Vrathas are performed to seek divine blessings, remove obstacles, and attain spiritual progress. Some of the most significant vrathas include Ekadashi Vratham (dedicated to Lord Vishnu), Pradosha Vratham (for Lord Shiva), Sankashti Chaturthi (for Lord Ganesha), and Navaratri Vratham (for Goddess Durga). Observing these vrathas with sincerity enhances self-discipline and strengthens one’s connection with the divine.
          <br/><br/>
          Each vratha follows specific rituals, such as abstaining from certain foods, maintaining celibacy, engaging in prayers, and reading sacred scriptures. Some vrathas require complete fasting, while others allow limited consumption of fruits, milk, or simple vegetarian food. Devotees often visit temples, chant mantras, and perform special pujas during these observances. For example, Vaikunta Ekadashi is believed to grant liberation (Moksha), while Karva Chauth strengthens marital bonds. The significance of vrathas is not only religious but also includes health benefits, as controlled fasting detoxifies the body and enhances mental clarity.
          <br/><br/>
          Beyond religious benefits, vrathaalu instill a sense of discipline, patience, and gratitude in devotees. They serve as a reminder of self-restraint and the importance of spiritual values in daily life. By regularly observing vrathas, individuals cultivate devotion and humility, reinforcing their faith in divine grace. Even in modern times, these practices continue to hold relevance, guiding individuals toward a balanced, righteous, and spiritually fulfilling life.
              </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
