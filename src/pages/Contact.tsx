import React from 'react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <header>
        <h1>Contact Us</h1>
      </header>

      <main>
        <section className="contact-info">
          <h2>Get in Touch</h2>
          <p>We're here to help. Contact us for appointments, inquiries, or any questions you may have.</p>
          
          <div className="contact-details">
            <h3>Dr. [Your Name]'s Private GP Practice</h3>
            <p>123 Harley Street, London, W1G 6AB</p>
            <p>Phone: +44 20 1234 5678</p>
            <p>Email: info@drnameprivategp.com</p>
          </div>
        </section>

        <section className="office-hours">
          <h2>Office Hours</h2>
          <ul>
            <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
            <li>Saturday: 10:00 AM - 2:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </section>

        <section className="appointment-booking">
          <h2>Book an Appointment</h2>
          <p>Ready to schedule your consultation? Get in touch with us today.</p>
          <Link to="#" className="button">Request Appointment</Link>
        </section>

        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="button">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Dr. [Your Name] Private GP Practice. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
