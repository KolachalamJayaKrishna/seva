import React from "react";
import sanathnagar from './photos/Sanathnagar.png'
import dammaiguda from './photos/Dammaiguda.png'
import kukatpally from './photos/Kukatpally.png'
import nagole from './photos/New Nagole.png'

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
          
        </div>
        <div className="branch-card">
          <h2>Sanathnagar</h2>
          <p>SRT 415, Opp. Toyota Lane,second left lane Sanathnagar, Hyderabad 500018 <br/> Daily 8:30am - 5:30pm<br/> 7842074049,7416014049</p>
          <img src={sanathnagar} alt="Sanathnagar" />
        </div>
        <div className="branch-card">
          <h2>Kukatpally</h2>
          <p>H.No: 15-21-211, Balaji Nagar, Kukatpally, Hyderabad 500072 <br/>Daily<br/> 8:30am - 5:30pm<br/> 9000654049</p>
          <img src={kukatpally} alt="Kukatpally" />
        </div>
        <div className="branch-card">
          <h2>Dammaiguda</h2>
          <p>H.No: 9-18/5, Plot No: 13-S.Part, Sy.No: 597, Gayathri Nagar, Dammaiguda, Hyderabad <br/>Daily 8:30am - 5:30pm<br/> 9666309705</p>
          <img src={dammaiguda} alt="Dammaiguda" />
        </div>
        <div className="branch-card">
          <h2>New Nagole</h2>
          <p>Samathapuri Colony, Road No: 7, Plot No: 80, New Nagole, Hyderabad<br/> Daily 8:30am - 5:30pm<br/> 7207094049</p>
          <img src={nagole} alt="Nagole" />
        </div>
        <div className="branch-card">
          <h2>Vijayawada</h2>
          <p>Near SBI, No: 130, Addankivari Street, Current Nagar, Ramavarappadu, Vijayawada, Andhra Pradesh, Daily<br/> 7842250270</p>
        </div>
      </div>
    </div>
  );
};

export default Branches;
