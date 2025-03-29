import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ritual from './photos/Rituals.png';
import upana from './photos/Upana.png';
import samvat from './photos/Samvat.png';
import image_1 from './photos/Image_1.png';
import image_2 from './photos/Image_2.png';
import image_3 from './photos/Image_3.png';
import logo from './photos/Logo.png';
import home from './photos/Icons/Home.png'
import about from './photos/Icons/About.png'
import services from './photos/Icons/Services.png'
import regis from './photos/Icons/Registration.png'
import branches from './photos/Icons/Branches.png'
import feedba from './photos/Icons/Feedback.png'
import AboutPage from './About';
import Branch from './Branch';
import Services from './Services';
import HinduSam from './ServicePages/Hindusam';
import Aapdikam from './ServicePages/Aapdikaalu';
import Agnihothram from './ServicePages/Agnihothra';
import Japam from './ServicePages/Japaalu';
import Maasikam from './ServicePages/Maasikalu';
import Pithru from './ServicePages/Pithru';
import Upanaayam from './ServicePages/Upanayanaalu';
import Vivaaham from './ServicePages/Vivaaham';
import Vratham from './ServicePages/Vrathaalu';
import Registrations from './RegisterationPage';
import Feedbacks from './Feedback';

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
        <header className="main-header">
          <div className="top-header">
            <h1 className="org-title">Sree Vijaya Gayathri Seva Samstha</h1>
          </div>
          <div className="bottom-header">
            <button className="menu-toggle" onClick={toggleSidebar}>
            <span className="menu-icon">{sidebarOpen ? '✖' : '☰'}</span>
            </button>
            <div className="logo-container">
              <img className="real_logo" src={logo} alt="Logo" />
            </div>
            <Link to="/feedback" className="action-button">
              ☎
            </Link>
          </div>
        </header>

        <div className="content-wrapper">
          {/* Sidebar Navigation - Now visible by default on desktop */}
          <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
            <nav>
              <ul>
              <li><Link to="/" onClick={() => { setSidebarOpen(false); window.scrollTo(0, 0); }}>
                <img src={home} alt="Home icon" /> Home</Link></li>
              <li><Link to="/about" onClick={() => { setSidebarOpen(false); window.scrollTo(0, 0); }}>
                <img src={about} alt="About icon" /> About</Link></li>
              <li><Link to="/services" onClick={() => { setSidebarOpen(false); window.scrollTo(0, 0); }}>
                <img src={services} alt="Services icon" /> Services</Link></li>
              <li><Link to="/branches" onClick={() => { setSidebarOpen(false); window.scrollTo(0, 0); }}>
                <img src={branches} alt="Branches icon" /> Branches</Link></li>
              <li><Link to="/registeration" onClick={() => { setSidebarOpen(false); window.scrollTo(0, 0); }}>
                <img src={regis} alt="Registration icon" /> Registration</Link></li>
              <li className="feedback"><Link to="/feedback" onClick={() => { setSidebarOpen(false); window.scrollTo(0, 0); }}>
                <img src={feedba} alt="Feedback icon" /> Feedback</Link></li>
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
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<Services />} />
              <Route path="/registeration" element={<Registrations/>} />
              <Route path="/branches" element={<Branch />} />
              <Route path="/feedback" element={<Feedbacks />}/>
              <Route path="/hindusam" element={<HinduSam />} />
              <Route path="/aapdikaalu" element={<Aapdikam />} />
              <Route path="/agnihothra-homam" element={<Agnihothram />} />
              <Route path="/japaalu" element={<Japam />} />
              <Route path="/vivaaham" element={<Vivaaham />} />
              <Route path="/vrathaalu" element={<Vratham />} />
              <Route path="/maasikalu" element={<Maasikam />} />
              <Route path="/upanayanaalu" element={<Upanaayam />} />
              <Route path="/pithru-kaaryaalu" element={<Pithru />} />
            </Routes>
          </main>
        </div>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p style={{color:"#4A4A4A", fontWeight:"bold"}}>Smt. Vemavarapu Vijaya Lakshmi</p>
            <p>Email:<br/></p>
            <p style={{color:"#4A4A4A", fontWeight:"bold"}}>sirvijayagayathrisevasamstha<br/>@gmail.com</p>
            <p>Phone: <br/>+91 98490 50816<br/>
                      +91 92468 74049<br/>
                      +91 98490 27963</p>
          </div>
          <div className="footer-section">
            <h3>Our Branches</h3>
            <h4>(Telangana)</h4>
            <ul>
              <li>Tarnaka Branch: <br/>040-42604049<br/>+91 7207014049</li>
              <li>New Nagole Branch: <br/>+91 7207094049<br/> +91 94502223850</li>
              <li>Dammaiguda Branch: <br/>+91 9666309705</li>
              <li>Kukatpally Branch: <br/>+91 9000654049</li>
              <li>Sanathnagar Branch:
              <br/>+91 7842074049<br/>+91 7416014049</li>
            </ul>
            <h4>(Andhra Pradesh)</h4>
            <ul>
              <li>Vijayawada Branch:
              <br/>+91 7842250270</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.instagram.com/srivijayagayathrisevasamastha/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61574918965085&sk=map" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
          <div className="footer-section">
          <h3>Ratings</h3>
            <ul>
              <li><h4>Google</h4></li>
              <li>Tarnaka: ⭐⭐⭐⭐ <br/>
              New Nagole: ⭐⭐⭐⭐ <br/>
              Sanathnagar: ⭐⭐⭐⭐ <br/>
              Kukatpally: ⭐⭐⭐⭐ <br/>
              </li>
              <li><h4>Justdial</h4></li>
              <li>Overall Rating: ⭐⭐⭐⭐</li>
            </ul>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Sree Vijaya Gayathri Seva Samstha. All rights reserved.</p>
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
        <h2>Welcome to Sree Vijaya Gayathri Seva Samstha</h2>
        <p>
        Sree Vijaya Gayathri Seva Samstha provides matrimonial assistance and religious services, 
        including Purohit support for ceremonies like Gruhapravesham, Pitru Karyalu, 
        and Abdeekas, Maasikaalu, Samvatsarikaalu, Vrathaalu, Japaalu, Agnihothra Homam. With experienced priests and multiple branches, it ensures 
        sacred rituals are performed traditionally in a hygienic environment.
        </p>
      </section>

      <section className="features-section">
        <h2>Few Services</h2>
        <p style={{textAlign:'center'}}>Discover a wider range of our services on the Services page.</p>
        <br/>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><img className="ritual" src={ritual} alt="Ritual" /></div>
            <h3>Hindu Vaidik Rituals</h3>
            <p>Hindu Vaidika rituals like Upanayanam, Shastipoorthi, Yagnas, and Aabdeeka are performed 
               by qualified Purohits in a sacred and hygienic atmosphere as per tradition.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><img className="upana" src={upana} alt="Upanaayam" /></div>
            <h3>Upanayanam</h3>
            <p>Upanayanam is a sacred Hindu ritual marking a boy's initiation into spiritual learning, symbolizing his entry 
              into the path of knowledge and righteousness. 
              It involves the wearing of the sacred thread (Yajnopavita) and the chanting of Vedic mantras.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><img className="samvat" src={samvat} alt="Samvatsarikaalu" /></div>
            <h3>Samvatsrikaalu</h3>
            <p>Samvatsarikaalu refers to the annual rituals performed in Hindu tradition to honor ancestors and deities, 
              ensuring blessings 
              and spiritual well-being. These ceremonies often include prayers, offerings, and Vedic recitations.</p>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>Why our Samstha ?</h2>
        <div className="testimonial">
          <p>Sree Vijaya Gayathri Seva Samstha stands out because of its commitment to authentic 
            Hindu traditions, experienced purohits, and a holistic range of services
            that cater to both matrimonial and religious needs. Unlike others, it 
            ensures a sacred and hygienic environment for rituals, 
            personalized matchmaking services, and reliable catering for dharmic 
            gatherings—all under one trusted platform.</p>
          <p className="testimonial-author">- Sree Vijaya Gayatri Seva Samstha</p>
        </div>
      </section>
    </div>
  );
};

export default App;