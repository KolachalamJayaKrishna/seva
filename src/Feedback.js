import React from "react";

const Feedback = () => {
    return(
      <div className="about-page" style={{ position: "relative", padding: "20px" }}>
      <section className="our-growth">
      <h2 style={{ textAlign: "center" }}>Feedback</h2>
      <div className="growth-content">
        <div className="growth-text">
          <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
          Your feedback is valuable in helping us improve and serve better. Share your thoughts, suggestions, or experiences with us. Together, we can create a more impactful and meaningful journey!          </p>
        </div>
        <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Feedback Here</a>
        </div>
      </div>
    </section>
    </div>
    );
};

export default Feedback;