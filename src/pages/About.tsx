import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="about">
      <header>
        <h1>About Dr. [Your Name]</h1>
      </header>

      <main>
        <section className="bio">
          <h2>Professional Background</h2>
          <p>Dr. [Your Name] is a highly experienced General Practitioner with over [X] years of experience in private practice. Specializing in [specific areas], Dr. [Your Name] is committed to providing personalized, high-quality healthcare to all patients.</p>
        </section>

        <section className="qualifications">
          <h2>Qualifications and Memberships</h2>
          <ul>
            <li>MBBS from [University Name]</li>
            <li>Member of the Royal College of General Practitioners (MRCGP)</li>
            <li>[Any other relevant qualifications or memberships]</li>
          </ul>
        </section>

        <section className="philosophy">
          <h2>Our Approach to Healthcare</h2>
          <p>At our practice, we believe in a patient-centered approach to healthcare. We take the time to listen to our patients, understand their concerns, and develop comprehensive treatment plans tailored to their individual needs.</p>
        </section>

        <section className="cta">
          <h2>Experience Personalized Care</h2>
          <p>Discover the difference of private GP consultations with Dr. [Your Name].</p>
          <Link to="/contact" className="button">Book an Appointment</Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Dr. [Your Name] Private GP Practice. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
