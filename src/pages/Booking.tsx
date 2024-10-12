import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server or API
    console.log('Booking submitted:', { name, email, date, time });
    // Reset form or show confirmation message
  };

  return (
    <div className="booking">
      <header>
        <h1>Book an Appointment</h1>
      </header>

      <main>
        <section className="booking-intro">
          <p>Schedule your private consultation with Dr. [Your Name]. Please fill out the form below and we will confirm your appointment shortly.</p>
        </section>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Preferred Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="time">Preferred Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-button">Book Appointment</button>
        </form>

        <section className="booking-info">
          <h2>Important Information</h2>
          <ul>
            <li>Consultations are typically 30 minutes long.</li>
            <li>Please arrive 10 minutes before your scheduled appointment time.</li>
            <li>If you need to cancel or reschedule, please give at least 24 hours notice.</li>
          </ul>
        </section>

        <section className="cta">
          <h2>Questions?</h2>
          <p>If you have any questions about our services or the booking process, please don't hesitate to contact us.</p>
          <Link to="/contact" className="button">Contact Us</Link>
        </section>
      </main>

      <footer>
        <p>&copy; 2023 Dr. [Your Name] Private GP Practice. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Booking;
