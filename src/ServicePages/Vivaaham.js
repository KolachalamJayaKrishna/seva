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
        <h2 style={{ textAlign: "center" }}>Vivaahaadhi Subhakaaryaalu</h2>
        <div className="growth-content">
          <div className="growth-text">
          <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
          Vivaaha (Marriage) and Other Auspicious Ceremonies hold great significance in Hindu tradition, as they mark important milestones in an individual's life. Hindu marriages are not just a union of two individuals but a sacred bond between two families, governed by Vedic principles and rituals. The wedding ceremony involves various sacred rites such as Kanyadaanam (giving away the bride), Mangalasnanam (holy bath), Paanigrahanam (holding hands), and Saptapadi (seven sacred steps around the fire). Each ritual symbolizes the couple’s commitment to leading a life of Dharma (righteousness), Artha (prosperity), Kama (fulfillment of desires), and Moksha (spiritual liberation) together. The presence of Agni (sacred fire) as a witness makes the marriage a divine and lifelong bond.
          <br/><br/>
          Apart from marriage, other auspicious ceremonies (Subhakaaryaalu) such as Seemantham (baby shower), Namakarana (naming ceremony), Annaprasana (first feeding), Aksharabhyasam (initiation into education), and Gruhapravesham (housewarming ceremony) are conducted with great devotion and adherence to traditional customs. Each of these ceremonies is deeply rooted in Vedic wisdom and ensures that the individual progresses in life with divine blessings. For example, Seemantham is performed for the well-being of the mother and unborn child, Aksharabhyasam seeks the blessings of Goddess Saraswati for education, and Gruhapravesham purifies a new home before beginning a new phase of life.
          <br/><br/>
          These sacred rituals reinforce the spiritual and cultural heritage of Hinduism, fostering a sense of duty, devotion, and togetherness in family life. By following the prescribed Vedic traditions, individuals invite prosperity, peace, and harmony into their lives. Even in modern times, while certain practices are simplified, the essence of these ceremonies remains the same—to seek divine grace and begin new phases of life with positivity and righteousness.
              </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
