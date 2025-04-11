import React from 'react';

function MentalHealth() {
  return (
    <div className="page-container">
      <h1>Mental Health Services</h1>
      <div className="resource-grid">
        <div className="resource-card">
          <h3>URMC Behavioral Health</h3>
          <ul>
            <li><strong>Strong Minds:</strong> (585) 273-5050</li>
            <li><strong>Family Therapy:</strong> (585) 275-0320</li>
            <li><strong>Strong Ties:</strong> (585) 279-4900</li>
            <li><strong>Pediatric Services:</strong> (585) 279-7800</li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Community Services</h3>
          <ul>
            <li>
              <strong>Catholic Family Center:</strong>
              <ul>
                <li>Phone: (585) 546-7220</li>
                <li>Counseling and mental health services</li>
              </ul>
            </li>
            <li>
              <strong>Villa of Hope:</strong>
              <ul>
                <li>Phone: (585) 865-1550</li>
                <li>Youth and family services</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Treatment Centers</h3>
          <ul>
            <li><strong>Rochester Mental Health Center:</strong> (585) 922-2500</li>
            <li><strong>Unity Behavioral Health:</strong> (585) 368-3950</li>
            <li><strong>Rochester Regional Behavioral Health:</strong> (585) 922-9900</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MentalHealth;
