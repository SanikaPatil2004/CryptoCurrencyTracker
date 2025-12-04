import React from 'react'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className='about-page'>
      <div className="about-hero">
        <h1>About CryptoTracker</h1>
        <p>Your trusted companion in the world of cryptocurrency tracking and portfolio management</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>We believe that everyone should have access to powerful, easy-to-use tools for tracking and managing their cryptocurrency investments. Our mission is to democratize crypto portfolio management by providing real-time data, insightful analytics, and user-friendly interfaces.</p>
        </div>

        <div className="about-section">
          <h2>What We Offer</h2>
          <div className="offerings-grid">
            <div className="offering-item">
              <h3>Real-Time Data</h3>
              <p>Live cryptocurrency prices and market data updated every 10 seconds</p>
            </div>
            <div className="offering-item">
              <h3>Portfolio Tracking</h3>
              <p>Comprehensive tools to monitor and analyze your crypto investments</p>
            </div>
            <div className="offering-item">
              <h3>Market Insights</h3>
              <p>Detailed charts and analytics to help you make informed decisions</p>
            </div>
            <div className="offering-item">
              <h3>Multi-Currency</h3>
              <p>Support for USD, EUR, and INR with seamless currency switching</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2>Why Choose Us</h2>
          <ul className="benefits-list">
            <li>✓ Free to use with no hidden fees</li>
            <li>✓ Secure and reliable platform</li>
            <li>✓ User-friendly interface designed for all experience levels</li>
            <li>✓ Comprehensive cryptocurrency coverage</li>
            <li>✓ Regular updates and new features</li>
          </ul>
        </div>

        <div className="contact-section">
          <h2>Get In Touch</h2>
          <p>Have questions or suggestions? We'd love to hear from you!</p>
          <div className="contact-info">
            <p>Email: support@cryptotracker.com</p>
            <p>Follow us on social media for updates and tips</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs