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
          position: "absolute", 
          top: "10px", 
          left: "10px", 
          padding: "8px 12px", 
          fontSize: "16px", 
          backgroundColor: "#f5f5f5", 
          border: "1px solid #ccc", 
          borderRadius: "5px", 
          cursor: "pointer"
        }}
      >
        ← Back
      </button>

      {/* Page Content */}
      <section className="our-growth">
        <h2 style={{ textAlign: "center" }}>Hindu Saampradaaya Sidhantham</h2>
        <div className="growth-content">
          <div className="growth-text">
            <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
              Hindu Saampradaaya Sidhantham is the core philosophy that governs the beliefs, practices, and traditions of Hinduism. Rooted in Sanatana Dharma, it emphasizes the eternal truths that guide individuals toward righteousness (Dharma), selfless action (Karma), devotion (Bhakti), and ultimate liberation (Moksha). The principles are derived from sacred scriptures like the Vedas, Upanishads, Bhagavad Gita, and Puranas, which provide a structured way of life based on moral and spiritual values. These teachings stress the importance of ethical conduct, duty, and spiritual discipline in every stage of life.
              <br /><br />
              A significant aspect of this tradition is the practice of rituals, sacraments (Samskaras), and religious observances. Various ceremonies such as Namakarana (naming ceremony), Upanayanam (sacred thread ceremony), Vivaham (marriage), and Antyeshti (funeral rites) play a crucial role in shaping an individual’s spiritual journey. Daily observances like Sandhya Vandanam (prayers), Japa (chanting of mantras), Yagnas (fire sacrifices), and Vratas (vows and fasts) are performed to seek divine blessings and maintain cosmic balance. Festivals such as Diwali, Navaratri, and Maha Shivaratri celebrate different aspects of divinity and reinforce devotion among followers.
              <br /><br />
              Another vital component of Hindu Saampradaaya Sidhantham is the Guru-Shishya Parampara, where spiritual wisdom is passed down from teachers (Gurus) to disciples. The four paths of yoga—Bhakti (devotion), Jnana (knowledge), Karma (selfless action), and Raja Yoga (meditation)—offer different approaches to attain self-realization based on individual inclination. The Hindu Panchanga (calendar) determines auspicious timings for spiritual practices, ensuring harmony with cosmic energies. By following these timeless principles, individuals can lead a morally upright, spiritually fulfilling, and socially responsible life, ultimately progressing toward liberation (Moksha).
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
