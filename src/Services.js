import React from "react";
import { useNavigate } from "react-router-dom";
import hindu from './photos/Hindu Saampradaaya Sidhantham.webp';
import homam from './photos/Agnihothra Homam.webp';
import maasikaalu from './photos/Maasikaalu.webp';
import japaalu from './photos/Japaalu.webp';
import vrathaalu from './photos/Vrathaalu.webp';
import upanayanaalu from './photos/Upanayanaalu.webp';
import vivaaham from './photos/Vivaahaadhi Subhakaaryaalu.webp';

const Branches = () => {
  const navigate = useNavigate();

  const branches = [
    { title: "Hindu Saampradaaya Sidhantham", img: hindu, path: "/hindusam" },
    { title: <>Agnihothra<br/> Homaala<br/> Prakriya</>, img: homam, path: "/agnihothra-homam" },
    { title: <>Maasikaalu (Aapdikaalu <br/> Samvatsarikaalu )</>, img: maasikaalu, path: "/maasikalu" },
    { title: "Vrathaalu (Dharma, Bhakti, Acharana)", img: vrathaalu, path: "/vrathaalu" },
    { title: "Japaalu (Mantra Sadhana)", img: japaalu, path: "/japaalu" },
    { title: "Upanayanaalu (Samskaram)", img: upanayanaalu, path: "/upanayanaalu" },
    { title: "Vivaahaadhi Subhakaaryaalu", img: vivaaham, path: "/vivaaham" }
  ];

  return (
    <div className="branches-page">
      <h1 className="page-title">Our Services</h1>
      <p className="page-description">
        We have multiple branches serving customers with excellence and quality.
      </p>
      <div className="branches-container">
        {branches.map((branch, index) => (
          <button key={index} className="branch-card" onClick={() => navigate(branch.path)}>
            <h2>{branch.title}</h2>
            <img src={branch.img} alt={branch.title} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Branches;
