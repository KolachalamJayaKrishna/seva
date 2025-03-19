// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ritual from './Rituals.png';
import cottage from './Cottages.png';
import cattering from './Cattering.png';
import image_1 from './Image_1.webp';
import image_2 from './Image_2.webp';
import image_3 from './Image_3.webp';
import real_logo from './Real_logo.png';
import home from './Home.png'
import about from './About.png'
import services from './Services.png'
import cottages from './ServiceCottage.png'
import call from './Call.png'
import branches from './Branches.png'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample images array - replace with your actual images
  const highlightImages = [
    image_1,image_2,image_3,
  ];

  // Auto-scroll images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === highlightImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [highlightImages.length]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <div className="logo-container">
            <img class="real_logo" src={real_logo} alt="Real_logo" />
            <h1 className="site-name">Gayatri Seva Samastha</h1>
          </div>
          <button className="menu-toggle" onClick={toggleSidebar}>
            <span className="menu-icon">☰</span>
          </button>
        </header>

        <div className="content-wrapper">
          {/* Sidebar Navigation - Now visible by default on desktop */}
          <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <nav>
              <ul>
                <li><Link to="/" onClick={() => setSidebarOpen(false)}>
                <img src={home} alt="Home icon" />
                Home</Link></li>
                <li><Link to="/about" onClick={() => setSidebarOpen(false)}>
                <img src={about} alt="Home icon" />
                About</Link></li>
                <li><Link to="/services" onClick={() => setSidebarOpen(false)}>
                <img src={services} alt="Home icon" />
                Services</Link></li>
                <li><Link to="/cottage" onClick={() => setSidebarOpen(false)}>
                <img src={cottages} alt="Home icon" />
                Cottages</Link></li>
                <li><Link to="/branches" onClick={() => setSidebarOpen(false)}>
                <img src={branches} alt="Home icon" />
                Branches</Link></li>
                <li><Link to="/contact" on onClick={()=> setSidebarOpen(false)}>
                <img src={call} alt="Home icon" />
                Contact Us
                </Link></li>
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage 
                highlightImages={highlightImages} 
                currentImageIndex={currentImageIndex} 
                setCurrentImageIndex={setCurrentImageIndex} 
              />} />
              <Route path="/about" element={<div>About Page</div>} />
              <Route path="/services" element={<div>Services Page</div>} />
              <Route path="/cottage" element={<div>Cottages Page</div>} />
              <Route path="/branches" element={<div>Branches Page</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Smt. Vemavarapu Vijaya Lakshmi</p>
            <p>Email: vijayalswamy@gmail.com</p>
            <p>Phone: <br/>+91 98490 50816<br/>
                      +91 92468 74049<br/>
                      +91 98490 27963</p>
          </div>
          <div className="footer-section">
            <h3>Our Branches</h3>
            <h4>(Telangana)</h4>
            <ul>
              <li>LB Nagar Branch: <br/>+91 7207094049</li>
              <li>Tarnaka Branch: <br/>040-42604049<br/>+91 7207014049</li>
              <li>Sanathnagar Branch:
              <br/>+91 7842074049<br/>+91 7416014049</li>
            </ul>
            <h4>(Andra Pradesh)</h4>
            <ul>
              <li>Vijayawada Branch:
              <br/>+91 9849050816<br/>+91 7842250270</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Gayatri Seva Samastha. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

// HomePage Component
const HomePage = ({ highlightImages, currentImageIndex, setCurrentImageIndex }) => {
  return (
    <div className="home-page">
      {/* Highlight Images Carousel */}
      <div className="image-carousel">
        <div className="carousel-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
          {highlightImages.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image} alt={`Highlight ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {highlightImages.map((_, index) => (
            <span 
              key={index} 
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Website Details Sections */}
      <section className="details-section">
        <h2>Welcome to Gayatri Seva Samastha</h2>
        <p>
        Gayatri Seva Samstha provides matrimonial assistance and religious services, 
        including Purohit support for ceremonies like Gruhapravesham, Pitru Karyalu, 
        and Abdeekas. With experienced priests and multiple branches, it ensures 
        sacred rituals are performed traditionally in a hygienic environment.
        </p>
      </section>

      <section className="features-section">
        <h2>Our Services</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><img class="ritual" src={ritual} alt="Ritual" /></div>
            <h3>Hindu Vaidik Rituals</h3>
            <p>Hindu Vaidika rituals like Upanayanam, Shastipoorthi, Yagnas, and Aabdeeka are performed 
               by qualified Purohits in a sacred and hygienic atmosphere as per tradition.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><img class="cottage" src={cottage} alt="Cottage" /></div>
            <h3>Gayatri Cottages</h3>
            <p>Gayatri Resorts, on the banks of the Godavari in Pattiseema, West Godavari, offers the 
               perfect getaway with comfortable accommodations for a relaxing holiday with family.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><img class="cattering" src={cattering} alt="Cottage" /></div>
            <h3>Matrimonial Services & Catering</h3>
            <p>Gayatri Seva Samstha offers matrimonial services and catering for Hindu gatherings, 
              festivals, and dharmic rituals.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"This is an amazing website! I love the services provided."</p>
          <p className="testimonial-author">- John Doe</p>
        </div>
      </section>
    </div>
  );
};

export default App;