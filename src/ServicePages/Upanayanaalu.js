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
        <h2 style={{ textAlign: "center" }}>Upanayanaalu (Samskaram)</h2>
        <div className="growth-content">
          <div className="growth-text">
          <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
          Upanayanam is one of the most sacred Samskaras (rites of passage) in Hindu tradition, marking the beginning of a boy’s journey into spiritual and intellectual discipline. This ritual, also known as the sacred thread ceremony, symbolizes the acceptance of the student into formal Vedic education under the guidance of a Guru. It is primarily performed for boys belonging to Brahmin, Kshatriya, and Vaishya communities at a young age, signifying their transition into the stage of Brahmacharya (celibate student life). The boy receives the Yajnopavita (sacred thread) and is initiated into the Gayatri Mantra, which he must chant daily as part of his spiritual practice.
          <br/><br/>
          The Upanayanam ceremony involves several Vedic rituals, including Ganapati Pooja (invocation of Lord Ganesha), Punyahavachanam (purification), and Homam (sacred fire ritual). The father or Guru performs the sacred act of tying the Yajnopavita (three-threaded sacred thread) across the boy’s shoulder, symbolizing the responsibilities towards God (Deva), ancestors (Pithru), and Guru. The initiate also receives a Deer skin (Krishnaajina) and a Danda (sacred staff), symbolizing renunciation and discipline. The most significant part of Upanayanam is the Gayatri Mantra Upadesam, where the Guru whispers the powerful Vedic mantra into the initiate’s ear, marking the beginning of his spiritual and intellectual journey.
          <br/><br/>
          After Upanayanam, the boy is considered a Dvija (twice-born), signifying his spiritual rebirth. He must follow strict Brahmacharya discipline, including daily Sandhya Vandanam (prayers), Vedic recitations, and Guru Seva (service to the teacher). The sacred thread is worn throughout life, signifying purity, discipline, and spiritual wisdom. In modern times, Upanayanam is often performed with simplified traditions, yet its essence remains unchanged—to awaken spiritual awareness and instill discipline in the initiate’s life. This ritual reinforces the importance of knowledge, devotion, and righteous living in Hindu Dharma.
              </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
