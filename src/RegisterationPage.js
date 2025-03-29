import React from "react";

const Registrations = () => {
    return(
      <div className="about-page" style={{ position: "relative", padding: "20px" }}>
      <section className="our-growth">
      <h2 style={{ textAlign: "center" }}>Register Here</h2>
      <div className="growth-content">
        <div className="growth-text">
          <p style={{ textAlign: "justify", lineHeight: "1.6", margin: "20px" }}>
          Seva Samstha is dedicated to preserving and promoting Hindu Vaidika Saampradaayam by offering sacred services such as Aapdikaalu, Agnihothraalu, Samvatsaraadhi Pithru Kaaryaalu, Upanayanaalu, Japaalu, Vrathaalu, Maasikaalu, Samvatsarikaalu, etc.. Our mission is to ensure that every devotee can perform these rituals with authenticity, devotion, and spiritual guidance. By registering with Seva Samstha, you become part of a community that values tradition, spirituality, and divine service.
          <br/>          
          <span style={{ color: "brown" }}>Registration Process</span> <br/>
          ✔ Fill out the registration form with your details.<br/>
          ✔ Select the services or rituals you wish to participate in. <br/>
          ✔ Get notified about upcoming events, pujas, and spiritual gatherings.<br/>
          ✔ Stay connected with our expert priests and spiritual guides.<br/>

          Join Seva Samstha today and be part of a divine journey that keeps our Hindu traditions alive for generations to come! Register now and uphold Sanatana Dharma with devotion!
          </p>
        </div>
        <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://forms.gle/PBRnapGQj3wwSRGT6" target="_blank" rel="noopener noreferrer">Book Here</a>
        </div>
      </div>
    </section>
    </div>
    );
};

export default Registrations;