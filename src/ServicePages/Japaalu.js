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
        <h2 style={{ textAlign: "center" }}>Japaalu (Mantra Sadhana)</h2>
        <div className="growth-content">
          <div className="growth-text">
            <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
            Japaalu (Mantra Sadhana)** refers to the practice of **chanting or meditating on sacred mantras** as a means of spiritual purification, mental focus, and divine connection. In Hinduism, Japa is considered a powerful method to attain inner peace, enhance concentration, and invoke divine blessings. The repetition of mantras, such as **Om, Gayatri Mantra, Maha Mrityunjaya Mantra, and Vishnu Sahasranama**, is believed to generate spiritual vibrations that cleanse the mind and soul. Scriptures like the **Vedas, Upanishads, and Bhagavad Gita** emphasize that Japa is one of the most effective forms of Bhakti (devotion) and Dhyana (meditation), helping practitioners move toward self-realization and ultimate liberation (Moksha).  
            <br/><br/>
            Japaalu can be practiced in different forms—**Vaikhari Japa (chanting aloud), Upamsu Japa (whispering softly), and Manasika Japa (mental recitation)**. The most revered method is **Manasika Japa**, where the mantra is repeated silently within the mind, leading to deep concentration and spiritual awakening. Many devotees use a **Japa Mala (prayer beads)** to keep count of the repetitions, with the most common being a **108-bead Rudraksha or Tulasi mala**. The continuous repetition of divine names or mantras strengthens the devotee’s faith, removes negative thoughts, and aligns the individual's consciousness with cosmic energy.  
            <br/><br/>
            Beyond personal spiritual growth, **Japaalu play a crucial role in collective well-being**. Many ancient sages prescribed group chanting of powerful mantras, such as the **Vishnu Sahasranama and Lalitha Sahasranama**, to bring peace and harmony to society. Certain mantras are specifically chanted for health, prosperity, or planetary pacification (**Navagraha Japa**). In difficult times, Japa acts as a shield, providing emotional stability and divine protection. By practicing Japa regularly with faith and discipline, one can experience profound inner transformation, leading to a more balanced, peaceful, and spiritually fulfilling life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
