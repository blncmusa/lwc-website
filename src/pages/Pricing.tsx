import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="pricing">
      <header>
        <h1>Our Pricing</h1>
      </header>

      <main>
        <section className="pricing-intro">
          <p>At Dr. [Your Name]'s Private GP Practice, we offer transparent and competitive pricing for our services. Our goal is to provide high-quality, personalized healthcare that is accessible to our patients.</p>
        </section>

        <section className="pricing-list">
          <h2>Consultation Fees</h2>
          <ul>
            <li>
              <h3>Standard Consultation (30 minutes)</h3>
              <p>£150</p>
            </li>
            <li>
              <h3>Extended Consultation (45 minutes)</h3>
              <p>£200</p>
            </li>
            <li>
              <h3>Comprehensive Health Assessment (60 minutes)</h3>
              <p>£250</p>
            </li>
            <li>
              <h3>Follow-up Consultation (15 minutes)</h3>
              <p>£75</p>
            </li>
          </ul>
        </section>

        <section className="additional-services">
          <h2>Additional Services</h2>
          <p>Prices for additional services such as vaccinations, blood tests, and specialist referrals vary. Please contact us for specific pricing information.</p>
        </section>

        <section className="payment-info">
          <h2>Payment Information</h2>
          <p>We accept all major credit cards, debit cards, and cash payments. Payment is required at the time of service.</p>
        </section>

        <section className="insurance">
          <h2>Private Health Insurance</h2>
          <p>We are recognized by most major private health insurance providers. Please check with your insurance company for coverage details.</p>
        </section>

        <section className="cta">
          <h2>Book Your Consultation</h2>
          <p>Ready to experience personalized healthcare? Schedule your appointment today.</p>
          <Link to="/contact" className="button">Contact Us</Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Dr. [Your Name] Private GP Practice. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Pricing;
