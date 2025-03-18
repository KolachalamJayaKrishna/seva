// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Sample images array - replace with your actual images
  const highlightImages = [
    'https://via.placeholder.com/1200x400/FF5733/FFFFFF?text=Amazing+Feature+1',
    'https://via.placeholder.com/1200x400/33A1FF/FFFFFF?text=Exciting+Feature+2',
    'https://via.placeholder.com/1200x400/33FF57/000000?text=Awesome+Feature+3',
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
            
            <h1 className="site-name">Your Website Name</h1>
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
            <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
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
        <h2>Welcome to Your Website</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, 
          nunc id aliquam tincidunt, nisl nunc tincidunt nunc, id tincidunt nisl
          nunc id aliquam tincidunt.
        </p>
      </section>

      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Feature 1</h3>
            <p>Description of feature 1 goes here.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3>Feature 2</h3>
            <p>Description of feature 2 goes here.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3>Feature 3</h3>
            <p>Description of feature 3 goes here.</p>
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