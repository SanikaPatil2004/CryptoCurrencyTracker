import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <div className='features-page'>
      <div className="features-hero">
        <h1>Powerful Features</h1>
        <p>Discover the comprehensive tools and features that make our crypto tracker the perfect choice for managing your digital assets</p>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Real-Time Tracking</h3>
          <p>Monitor your cryptocurrency portfolio with live price updates every 10 seconds. Stay informed with the latest market movements and make timely decisions.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📈</div>
          <h3>Advanced Analytics</h3>
          <p>Access detailed charts, historical data, and comprehensive market analysis. Understand trends and patterns to optimize your investment strategy.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Detailed Coin Information</h3>
          <p>Get in-depth information about any cryptocurrency including whitepapers, team details, technology, and project roadmaps.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💱</div>
          <h3>Multi-Currency Support</h3>
          <p>View prices and portfolio values in multiple currencies including USD, EUR, and INR. Switch between currencies seamlessly.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🎯</div>
          <h3>Smart Recommendations</h3>
          <p>Receive personalized cryptocurrency recommendations based on market analysis and trending coins to discover new investment opportunities.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>Responsive Design</h3>
          <p>Access your portfolio anywhere with our fully responsive design that works perfectly on desktop, tablet, and mobile devices.</p>
        </div>
      </div>

      <div className="cta-section">
        <h2>Ready to Start Tracking?</h2>
        <p>Join thousands of users who trust our platform to manage their cryptocurrency investments</p>
        <button className="cta-button">Get Started Today</button>
      </div>
    </div>
  )
}

export default Feature
