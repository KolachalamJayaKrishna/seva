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
                <li><Link to="/" onClick={() => setSidebarOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setSidebarOpen(false)}>About</Link></li>
                <li><Link to="/services" onClick={() => setSidebarOpen(false)}>Services</Link></li>
                <li><Link to="/cattage" onClick={() => setSidebarOpen(false)}>Cattage</Link></li>
                <li><Link to="/contact" onClick={() => setSidebarOpen(false)}>Contact Us</Link></li>
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
              <Route path="/cattage" element={<div>Cattage Page</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@yourwebsite.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>
          <div className="footer-section">
            <h3>Our Branches</h3>
            <ul>
              <li>Branch 1: 456 Oak Avenue, City, Country</li>
              <li>Branch 2: 789 Pine Street, City, Country</li>
              <li>Branch 3: 101 Maple Road, City, Country</li>
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