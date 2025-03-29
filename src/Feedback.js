import React from "react";

const Feedback = () => {
    return(
      <div className="about-page" style={{ position: "relative", padding: "20px" }}>
      <section className="our-growth">
      <h2 style={{ textAlign: "center" }}>Feedback</h2>
      <div className="growth-content">
        <div className="growth-text">
          <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
          Your feedback is valuable in helping us improve and serve better. Share your thoughts, suggestions, or experiences with us. Together, we can create a more impactful and meaningful journey!       
          <br/> <br/>We value your thoughts and experiences! Your feedback helps us enhance our Seva Samastha services, including Hindu Vaidika Saampradaayam, Aapdikaalu, Agnihothraalu, Samvatsaraadhi Pithru Kaaryaalu, Upanayanaalu, Japaalu, Vrathaalu, Maasikaalu, Samvatsarikaalu, etc. Please share your suggestions, experiences, and any improvements you'd like to see. Every response is important in making our seva more meaningful and effective.   </p>
        </div>
        <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://forms.gle/A7RYEbMzNC29dUmq6" target="_blank" rel="noopener noreferrer">Feedback Here</a>
        </div>
      </div>
    </section>
    </div>
    );
};

export default Feedback;