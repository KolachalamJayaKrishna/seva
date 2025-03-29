import React from "react";
import sanathnagar from './photos/Sanathnagar.png'
import dammaiguda from './photos/Dammaiguda.png'
import kukatpally from './photos/Kukatpally.png'
import nagole from './photos/New Nagole.png'
import tarn from './photos/Tarn.png'
import vijaya from './photos/Vijaya.png'

const Branches = () => {
  return (
    <div className="branches-page">
      <h1 className="page-title">Our Branches</h1>
      <p className="page-description">
        We have multiple branches serving customers with excellence and quality.
      </p>
      <div className="branches-container">
        <div className="branch-card">
          <h2>Tarnaka</h2>
          <p>12-13-289, St.9, Lane-2, St.Ann's School Road, Tarnaka, Hyderabad 500017 <br/> Daily 8:30am - 5:30pm <br/> 7207014049,040-42604049</p>
          <img src={tarn} alt="Tarnaka" />
          <br/><br/>
          <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://maps.app.goo.gl/RkQ8vqEuV6fMMvj46" target="_blank" rel="noopener noreferrer">Location</a> </div>
        </div>
        <div className="branch-card">
          <h2>Sanathnagar</h2>
          <p>SRT 415, Opp. Toyota Lane,second left lane Sanathnagar, Hyderabad 500018 <br/> Daily 8:30am - 5:30pm<br/> 7842074049,7416014049</p>
          <img src={sanathnagar} alt="Sanathnagar" />
          <br/><br/>
          <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://maps.app.goo.gl/RJstonisXwK8hiQn8" target="_blank" rel="noopener noreferrer">Location</a> </div>
        </div>
        <div className="branch-card">
          <h2>Kukatpally</h2>
          <p>H.No: 15-21-211, Balaji Nagar, Kukatpally, Hyderabad 500072 <br/>Daily<br/> 8:30am - 5:30pm<br/> 9000654049</p>
          <img src={kukatpally} alt="Kukatpally" />
          <br/><br/>
          <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://maps.app.goo.gl/NTzpE2YnrteHVycZA" target="_blank" rel="noopener noreferrer">Location</a> </div>
        </div>
        <div className="branch-card">
          <h2>Dammaiguda</h2>
          <p>H.No: 9-18/5, Plot No: 13-S.Part, Sy.No: 597, Gayathri Nagar, Dammaiguda, Hyderabad <br/>Daily 8:30am - 5:30pm<br/> 9666309705</p>
          <img src={dammaiguda} alt="Dammaiguda" />
          <br/><br/>
          <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://maps.app.goo.gl/t7yn8pVKhfGq4RRE7" target="_blank" rel="noopener noreferrer">Location</a> </div>
        </div>
        <div className="branch-card">
          <h2>New Nagole</h2>
          <p>Samathapuri Colony, Road No: 7, Plot No: 80, New Nagole, Hyderabad<br/> Daily 8:30am - 5:30pm<br/> 7207094049</p>
          <img src={nagole} alt="Nagole" />
          <br/><br/>
          <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://maps.app.goo.gl/6rSt5wvR97wmrcnu7" target="_blank" rel="noopener noreferrer">Location</a> </div>
        </div>
        <div className="branch-card">
          <h2>Vijayawada</h2>
          <p>Near SBI, No: 130, Addanki vari Street, Current Nagar, Ramavarappadu, Vijayawada, Andhra Pradesh, Daily<br/> 7842250270</p>
          <img src={vijaya} alt="Vijayawada" />
          <br/><br/>
          <div className="links-social"style={{justifyContent:"center"}}>
              <a href="https://www.google.com/maps/place/16%C2%B031'17.6%22N+80%C2%B040'44.8%22E/@16.5215499,80.6765465,778m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d16.5215499!4d80.6791214?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Location</a> </div>
        </div>
      </div>
    </div>
  );
};

export default Branches;
