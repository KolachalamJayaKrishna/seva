import React from "react";

const Registrations = () => {
    return(
      <div className="about-page" style={{ position: "relative", padding: "20px" }}>
      <section className="our-growth">
      <h2 style={{ textAlign: "center" }}>Register Here</h2>
      <div className="growth-content">
        <div className="growth-text">
          <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
          Explore our diverse branches, each offering unique opportunities and expert guidance.Register now and become a part of our growing community! Become a part of our growing community dedicated to service and positive change.
          </p>
        </div>
        <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Apply Here</a>
        </div>
      </div>
    </section>
    </div>
    );
};

export default Registrations;