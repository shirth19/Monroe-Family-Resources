import React from 'react';
import { Link } from 'react-router-dom';

// Import family-friendly icons
import { FaHandHoldingHeart, FaHospital, FaBrain, FaHouseUser, FaHandsHelping, FaChild } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="welcome-message">
          <h1>Welcome to Our Family Resource Hub</h1>
          <p className="hero-text">
            We're here to help every family in Monroe County thrive. Whether you're looking for healthcare, 
            youth programs, or support services, you'll find trusted local resources all in one place.
          </p>
          <p className="support-text">
            All services are available to support you and your family. Browse through our categories below 
            to find local resources and support services.
          </p>
        </div>
      </section>

      <section className="family-gallery">
        <div className="image-grid">
          <img 
            src="https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800&h=600&fit=crop" 
            alt="Happy family spending time together"
            className="gallery-image"
          />
          <img 
            src="https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb?w=800&h=600&fit=crop" 
            alt="Family playing together"
            className="gallery-image"
          />
          <img 
            src="https://images.unsplash.com/photo-1506836467174-27f1042aa48c?w=800&h=600&fit=crop" 
            alt="Family enjoying outdoor activities"
            className="gallery-image"
          />
          <img 
            src="https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=800&h=600&fit=crop" 
            alt="Family having dinner together"
            className="gallery-image"
          />
          <img 
            src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e?w=800&h=600&fit=crop" 
            alt="Family at the beach"
            className="gallery-image"
          />
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop" 
            alt="Family at the park"
            className="gallery-image"
          />
        </div>
      </section>
      
      <div className="category-grid">
        <Link to="/crisis" className="category-card">
          <div className="card-icon">
            <FaHandHoldingHeart size={40} />
          </div>
          <h2>Crisis Support</h2>
          <p>24/7 emergency assistance and crisis hotlines</p>
        </Link>
        
        <Link to="/health" className="category-card">
          <div className="card-icon">
            <FaHospital size={40} />
          </div>
          <h2>Health Services</h2>
          <p>Medical care, clinics, and health resources</p>
        </Link>
        
        <Link to="/mental-health" className="category-card">
          <div className="card-icon">
            <FaBrain size={40} />
          </div>
          <h2>Mental Health</h2>
          <p>Counseling and mental health support services</p>
        </Link>
        
        <Link to="/housing" className="category-card">
          <div className="card-icon">
            <FaHouseUser size={40} />
          </div>
          <h2>Housing</h2>
          <p>Emergency shelter and housing assistance</p>
        </Link>
        
        <Link to="/substance" className="category-card">
          <div className="card-icon">
            <FaHandsHelping size={40} />
          </div>
          <h2>Substance Use</h2>
          <p>Support for substance use and recovery</p>
        </Link>
        
        <Link to="/youth" className="category-card">
          <div className="card-icon">
            <FaChild size={40} />
          </div>
          <h2>Youth Services</h2>
          <p>Programs and support for children and teens</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
