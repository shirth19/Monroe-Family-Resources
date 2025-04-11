import React from 'react';

function CrisisSupport() {
  return (
    <div className="page-container">
      <h1>24/7 Support Services</h1>
      <div className="resource-grid">
        <div className="resource-card">
          <h3>Immediate Support</h3>
          <ul>
            <li><strong>211/LIFE LINE:</strong> Dial 211 - Available 24/7 to connect you with community resources and services</li>
            <li><strong>988 Support Line:</strong> Dial 988 - 24/7 support available</li>
            <li><strong>Emergency Services:</strong> Dial 911</li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Crisis Centers</h3>
          <ul>
            <li>
              <strong>Mobile Crisis Team:</strong>
              <ul>
                <li>Phone: (585) 275-5151</li>
                <li>Available 24/7 for mental health emergencies</li>
              </ul>
            </li>
            <li>
              <strong>Willow Domestic Violence Center:</strong>
              <ul>
                <li>24/7 Hotline: (585) 222-SAFE</li>
                <li>Safe shelter and support services</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Additional Crisis Resources</h3>
          <ul>
            <li>
              <strong>National Crisis Text Line:</strong>
              <ul>
                <li>Text HOME to 741741</li>
                <li>24/7 crisis counseling</li>
              </ul>
            </li>
            <li>
              <strong>ROCovery Fitness:</strong>
              <ul>
                <li>Phone: (585) 484-0234</li>
                <li>Peer support for substance use crisis</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CrisisSupport;
