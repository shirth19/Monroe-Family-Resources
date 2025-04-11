import React from 'react';

function HealthServices() {
  return (
    <div className="page-container">
      <h1>Health Services</h1>
      <div className="resource-grid">
        <div className="resource-card">
          <h3>Primary Care</h3>
          <ul>
            <li>
              <strong>Jordan Health:</strong>
              <ul>
                <li>Phone: (585) 423-5800</li>
                <li>Multiple locations throughout Rochester</li>
                <li>Sliding scale fees available</li>
              </ul>
            </li>
            <li>
              <strong>Rochester Regional Health:</strong>
              <ul>
                <li>Phone: (585) 922-4000</li>
                <li>Primary care and specialty services</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Urgent Care Centers</h3>
          <ul>
            <li>
              <strong>URMC Urgent Care:</strong>
              <ul>
                <li>Multiple locations</li>
                <li>Extended hours and weekend care</li>
              </ul>
            </li>
            <li>
              <strong>WellNow Urgent Care:</strong>
              <ul>
                <li>Walk-in care available</li>
                <li>Multiple locations in Monroe County</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Specialty Care</h3>
          <ul>
            <li>
              <strong>Golisano Children's Hospital:</strong>
              <ul>
                <li>Phone: (585) 275-7520</li>
                <li>Pediatric specialty care</li>
              </ul>
            </li>
            <li>
              <strong>Unity Hospital:</strong>
              <ul>
                <li>Phone: (585) 723-7000</li>
                <li>Comprehensive medical services</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HealthServices;
