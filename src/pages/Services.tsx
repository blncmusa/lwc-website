import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="services">
      <header>
        <h1>Our Services</h1>
      </header>

      <main>
        <section className="services-intro">
          <p>As a private GP consultant, I offer a range of comprehensive healthcare services tailored to meet your individual needs. My goal is to provide personalized, high-quality care in a comfortable and confidential setting.</p>
        </section>

        <section className="service-list">
          <h2>Our Core Services</h2>
          <ul>
            <li>
              <h3>General Consultations</h3>
              <p>Comprehensive health assessments and personalized care plans.</p>
              <Link to="/services/general">Learn More</Link>
            </li>
            <li>
              <h3>Specialist Referrals</h3>
              <p>Access to a network of trusted specialists for specific health concerns.</p>
              <Link to="/services/consultants">Learn More</Link>
            </li>
            <li>
              <h3>Preventive Care</h3>
              <p>Regular check-ups and screenings to maintain optimal health.</p>
            </li>
            <li>
              <h3>Chronic Disease Management</h3>
              <p>Ongoing support and treatment for long-term health conditions.</p>
            </li>
          </ul>
        </section>

        <Outlet />

        <section className="cta">
          <h2>Book Your Consultation</h2>
          <p>Take the first step towards personalized healthcare. Schedule your appointment today.</p>
          <Link to="/contact" className="button">Contact Us</Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Dr. [Your Name] Private GP Practice. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
