import React from 'react';
import founderImg from './Ganesh.png';

const aboutpage = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <div className="about-hero-text">
            <p>
              Founded in 2005, Sri Vijaya Gayathri Seva Samastha has been dedicated to preserving 
              and promoting Hindu Vedic traditions through authentic ritual services and community support.
            </p>
            <p>
              Our organization was established with the vision of ensuring the sanctity and 
              continuity of ancient Hindu rituals while making them accessible to all devotees 
              in a hygienic and sacred environment.
            </p>
          </div>
        </div>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <p>
            At Sri Vijaya Gayathri Seva Samastha, our mission is to uphold the purity of Vedic traditions 
            while serving the community through:
          </p>
          <ul className="mission-list">
            <li>Providing authentic Hindu ritual services performed by qualified purohits</li>
            <li>Offering matrimonial assistance to families seeking traditional arrangements</li>
            <li>Supporting families during important life ceremonies and transitions</li>
            <li>Creating a sacred space for spiritual growth and community connection</li>
            <li>Educating the younger generation about our rich cultural heritage</li>
          </ul>
        </div>
      </section>

      <section className="founder-section">
        <h2>Our Founder</h2>
        <div className="founder-content">
          <div className="founder-image">
            <img src={founderImg} alt="Founder" />
          </div>
          <div className="founder-bio">
            <h3>(Late)Sri. M Rama Rao Gaaru and (Late)Sri. V Venkateshwara Swami Gaaru</h3>
            <p>
            (Late)Sri. M Rama Rao Gaaru and (Late)Sri. V Venkateshwara Swami Gaaru established Sri Vijaya Gayathri Seva Samastha with a 
              profound dedication to preserving Hindu traditions. With over 20 years of experience 
              in conducting and organizing Vedic ceremonies, she has guided countless families 
              through important religious milestones.
            </p>
            <p>
              Her vision of creating a space where spiritual traditions can thrive in the modern 
              world has led to the establishment of multiple branches across Telangana and Andhra Pradesh, 
              serving thousands of devotees annually.
            </p>
          </div>
        </div>
      </section>

      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Authenticity</h3>
            <p>We ensure all rituals are performed according to authentic Vedic traditions, maintaining the sanctity and spiritual significance of each ceremony.</p>
          </div>
          <div className="value-card">
            <h3>Devotion</h3>
            <p>Every service we offer is conducted with utmost devotion and respect, honoring the divine presence in all religious practices.</p>
          </div>
          <div className="value-card">
            <h3>Community</h3>
            <p>We believe in strengthening community bonds through shared spiritual experiences and supporting families during important life events.</p>
          </div>
          <div className="value-card">
            <h3>Knowledge</h3>
            <p>We are committed to preserving and passing down traditional knowledge to ensure these sacred practices continue for generations.</p>
          </div>
        </div>
      </section>

      <section className="our-growth">
        <h2>Our Growth</h2>
        <div className="growth-content">
          <div className="growth-text">
            <p>
              Starting with a single location in Vijayawada, Sri Vijaya Gayathri Seva Samastha has expanded to multiple branches across Telangana and Andhra Pradesh, including:
            </p>
            <ul>
              <li>LB Nagar, Hyderabad</li>
              <li>Tarnaka, Hyderabad</li>
              <li>Sanathnagar, Hyderabad</li>
              <li>Vijayawada, Andhra Pradesh</li>
            </ul>
            <p>
              Each branch maintains the same standards of excellence and dedication to authentic traditions, serving the spiritual needs of devotees in their respective regions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default aboutpage;