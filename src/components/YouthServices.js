import React from 'react';

function YouthServices() {
  return (
    <div className="page-container">
      <h1>Youth Services</h1>
      <div className="resource-grid">
        <div className="resource-card">
          <h3>Support Programs</h3>
          <ul>
            <li>
              <strong>Monroe County Youth Services</strong>
              <ul>
                <li>SPOA Referrals: (585) 753-2881</li>
                <li>Youth and family support services</li>
              </ul>
            </li>
            <li>
              <strong>Center for Youth</strong>
              <ul>
                <li>24/7 Helpline: (585) 271-7670</li>
                <li>Crisis services and support</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Youth Programs</h3>
          <ul>
            <li>
              <strong>Boys & Girls Club:</strong>
              <ul>
                <li>Phone: (585) 328-3077</li>
                <li>After-school and summer programs</li>
              </ul>
            </li>
            <li>
              <strong>YMCA Youth Programs:</strong>
              <ul>
                <li>Phone: (585) 546-5500</li>
                <li>Various youth development programs</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Additional Services</h3>
          <ul>
            <li>
              <strong>Urban League:</strong>
              <ul>
                <li>Phone: (585) 325-6530</li>
                <li>Youth development and education</li>
              </ul>
            </li>
            <li>
              <strong>Teen Health & Success:</strong>
              <ul>
                <li>Phone: (585) 274-8490</li>
                <li>Health services and support</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default YouthServices;
